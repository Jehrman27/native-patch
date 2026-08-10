"use server";

import { ZippopotamResponse } from "~/lib/schema/schema";
import type { SearchFormValues } from "~/lib/validations/search-form";

export async function findPlants(values: SearchFormValues) {
  // Week 3: geocode the ZIP via Zippopotam, then query iNaturalist for
  // plants observed within `searchRadius` miles of that point.
  console.log("searching for plants", values);
  const zippopotamResponse = await fetch(
    `http://api.zippopotam.us/us/${values.zipCode}`,
  );
  const zippopotamJson: ZippopotamResponse = await zippopotamResponse.json();
  console.log(
    `zipcode at coords: ${zippopotamJson.places[0].latitude} : ${zippopotamJson.places[0].longitude}`,
  );

  const lat = `?lat=${zippopotamJson.places[0].latitude}`;
  const long = `&lng=${zippopotamJson.places[0].longitude}`;
  const rad = `&radius=${values.searchRadius}`;
  const taxon_id = "&taxon_id=47126";
  const per_page = "&per_page=20";

  const iNaturalistReponse = await fetch(
    `https://api.inaturalist.org/v1/observations/species_counts${lat + long + rad + taxon_id + per_page}`,
  );
  const iNaturalistJson = await iNaturalistReponse.json();
  console.log("inat response:", iNaturalistJson);
}
