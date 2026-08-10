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
