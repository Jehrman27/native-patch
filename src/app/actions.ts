"use server";

import { INaturalistResponse, ZippopotamResponse } from "~/lib/schema/schema";
import type { SearchFormValues } from "~/lib/validations/search-form";

export async function findPlants(values: SearchFormValues) {
  const zippopotamResponse = await fetch(
    `http://api.zippopotam.us/us/${values.zipCode}`,
  );
  const zippopotamJson: ZippopotamResponse = await zippopotamResponse.json();

  const lat = `?lat=${zippopotamJson.places[0].latitude}`;
  const long = `&lng=${zippopotamJson.places[0].longitude}`;
  const rad = `&radius=${values.searchRadius}`;
  const taxon_id = "&taxon_id=47126";
  const per_page = "&per_page=20";

  const iNaturalistReponse = await fetch(
    `https://api.inaturalist.org/v1/observations/species_counts${lat + long + rad + taxon_id + per_page}`,
  );
  const iNaturalistData: INaturalistResponse = await iNaturalistReponse.json();
  return iNaturalistData;
}
