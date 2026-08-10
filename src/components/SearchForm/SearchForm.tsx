"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import {
  searchFormSchema,
  searchRadiusOptions,
  type SearchFormValues,
} from "~/lib/validations/search-form";

export function SearchForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SearchFormValues>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: { zipCode: "", searchRadius: "25" },
  });

  const onSubmit = (values: SearchFormValues) => {
    const params = new URLSearchParams({
      zipcode: values.zipCode,
      radius: values.searchRadius,
    });

    router.push(`/results?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="flex flex-col gap-4">
        <div>
          <div className="flex flex-col border border-solid rounded-md p-3 border-muted justify-between h-18 focus-within:border-primary">
            <label className="text-xs text-muted" htmlFor="zip-code">
              ZIP CODE
            </label>
            <input
              id="zip-code"
              className="bg-transparent text-foreground outline-none"
              aria-invalid={errors.zipCode ? "true" : "false"}
              aria-describedby={errors.zipCode ? "zip-code-error" : undefined}
              {...register("zipCode")}
            />
          </div>
          {errors.zipCode && (
            <p
              id="zip-code-error"
              role="alert"
              className="text-xs text-accent mt-1"
            >
              {errors.zipCode.message}
            </p>
          )}
        </div>

        <div className="flex flex-col border border-solid rounded-md p-3 border-muted justify-between h-18 focus-within:border-primary">
          <label className="text-xs text-muted" htmlFor="search-radius">
            SEARCH RADIUS
          </label>
          <select
            id="search-radius"
            className="bg-transparent text-foreground outline-none"
            {...register("searchRadius")}
          >
            {searchRadiusOptions.map((radius) => (
              <option key={radius} value={radius}>
                {radius} miles
              </option>
            ))}
          </select>
        </div>

        <button
          className="bg-primary rounded-lg py-3 text-primary-foreground font-medium disabled:opacity-60"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Searching…" : "Find Plants"}
        </button>
      </div>
    </form>
  );
}
