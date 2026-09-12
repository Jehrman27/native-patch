"use server";

import {
  iNaturalistResponseSchema,
  type INaturalistResponse,
  type ZippopotamResponse,
} from "~/lib/schema/schema";
import type { SearchFormValues } from "~/lib/validations/search-form";
import { PER_PAGE } from "~/lib/constants";
import { cacheLife } from "next/cache";

export type FindPlantsResult =
  | { ok: true; data: INaturalistResponse }
  | { ok: false; reason: "zip_not_found" };

export async function findPlants(
  values: SearchFormValues,
  page = 1,
): Promise<FindPlantsResult> {
  "use cache";
  cacheLife("hours");

  const zippopotamResponse = await fetch(
    `https://api.zippopotam.us/us/${values.zipCode}`,
  );

  if (!zippopotamResponse.ok) {
    return { ok: false, reason: "zip_not_found" };
  }

  const zippopotamJson: ZippopotamResponse = await zippopotamResponse.json();

  const lat = `?lat=${zippopotamJson.places[0].latitude}`;
  const long = `&lng=${zippopotamJson.places[0].longitude}`;
  const rad = `&radius=${Math.round(Number(values.searchRadius) * 1.60934)}`;
  const taxon_id = "&taxon_id=47126&native=true";
  const per_page = `&per_page=${PER_PAGE}`;
  const pageParam = `&page=${page}`;

  const iNaturalistResponse = await fetch(
    `https://api.inaturalist.org/v1/observations/species_counts${lat + long + rad + taxon_id + per_page + pageParam}`,
  );

  if (!iNaturalistResponse.ok) {
    throw new Error(
      `iNaturalist request failed with status ${iNaturalistResponse.status}`,
    );
  }

  const iNaturalistJson = await iNaturalistResponse.json();
  const data = iNaturalistResponseSchema.parse(iNaturalistJson);

  return { ok: true, data };
}
