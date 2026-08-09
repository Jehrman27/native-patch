import { z } from "zod";

export const searchRadiusOptions = ["10", "25", "50", "100", "200"] as const;

export const searchFormSchema = z.object({
  zipCode: z
    .string()
    .trim()
    .regex(/^\d{5}$/, "Enter a valid 5-digit ZIP code"),
  searchRadius: z.enum(searchRadiusOptions),
});

export type SearchFormValues = z.infer<typeof searchFormSchema>;
