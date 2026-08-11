import { z } from "zod";

const zippopotamResponseSchema = z.object({
  "post code": z.string(),
  country: z.string(),
  "country abbreviation": z.string(),
  places: z
    .array(
      z.object({
        "place name": z.string(),
        longitude: z.string(),
        state: z.string(),
        "state abbreviation": z.string(),
        latitude: z.string(),
      }),
    )
    .min(1),
});

export type ZippopotamResponse = z.infer<typeof zippopotamResponseSchema>;

const iNaturalistResponseSchema = z.object({
  total_results: z.number(),
  page: z.number(),
  per_page: z.number(),
  results: z.array(
    z.object({
      count: z.number(),
      taxon: z.object({
        id: z.number(),
        iconic_taxon_id: z.number(),
        iconic_taxon_name: z.string(),
        is_active: z.boolean(),
        name: z.string(),
        preferred_common_name: z.string().optional(),
        rank: z.string(),
        rank_level: z.number().optional(),
        ancestor_ids: z.array(z.number()).optional(),
        colors: z
          .array(
            z.object({
              id: z.number(),
              value: z.string(),
            }),
          )
          .optional(),
        conservation_status: z
          .object({
            place_id: z.number(),
            place: z.object({
              id: z.number(),
              name: z.string(),
              display_name: z.string(),
            }),
            status: z.string(),
          })
          .optional(),
        conservation_statuses: z
          .array(
            z.object({
              source_id: z.number().optional(),
              authority: z.string(),
              status: z.string(),
              status_name: z.string().optional(),
              iucn: z.number().optional(),
              geoprivacy: z.string().optional(),
              place: z
                .object({
                  id: z.number(),
                  name: z.string(),
                  display_name: z.string(),
                })
                .optional(),
            }),
          )
          .optional(),
        default_photo: z
          .object({
            id: z.number(),
            attribution: z.string(),
            license_code: z.string(),
            url: z.string(),
            medium_url: z.string(),
            square_url: z.string(),
          })
          .optional(),
        establishment_means: z
          .object({
            establishment_means: z.string(),
            place: z.object({
              id: z.number(),
              name: z.string(),
              display_name: z.string(),
            }),
          })
          .optional(),
        observations_count: z.number().optional(),
        preferred_establishment_means: z.string().optional(),
      }),
    }),
  ),
});

export type INaturalistResponse = z.infer<typeof iNaturalistResponseSchema>;
