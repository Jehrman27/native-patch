"use server";

import type { SearchFormValues } from "~/lib/validations/search-form";

export async function findPlants(values: SearchFormValues) {
  // Week 3: geocode the ZIP via Zippopotam, then query iNaturalist for
  // plants observed within `searchRadius` miles of that point.
  console.log("searching for plants", values);
}
