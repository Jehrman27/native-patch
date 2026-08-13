import { searchFormSchema } from "~/lib/validations/search-form";
import { findPlants } from "../actions";
import { PER_PAGE } from "~/lib/constants";
import Link from "next/link";
import { PlantCard } from "~/components/PlantCard/PlantCard";

export default async function Results({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const currentPage = Math.max(1, Number(params.page ?? 1));

  const validation = searchFormSchema.safeParse({
    zipCode: params.zipCode,
    searchRadius: params.radius,
  });

  if (!validation.success) {
    return (
      <main className="flex flex-col gap-4 px-6 py-7">
        <span>Invalid search parameters</span>
        <Link href={"/"}>Back</Link>
      </main>
    );
  }

  const plants = await findPlants(validation.data, currentPage);
  const totalPages = Math.max(1, Math.ceil(plants.total_results / PER_PAGE));

  const buildPageUrl = (page: number) => {
    const p = new URLSearchParams({
      zipCode: validation.data.zipCode,
      radius: validation.data.searchRadius,
      page: String(page),
    });
    return `/results?${p.toString()}`;
  };

  return (
    <main
      className={`flex flex-col gap-4 px-6 pt-7 ${totalPages > 1 ? "pb-20" : "pb-7"}`}
    >
      <div className="flex items-center justify-between">
        <p className="text-lg font-medium">
          {plants.total_results} species near {validation.data.zipCode}
        </p>
        <Link
          href="/"
          className="text-sm text-muted hover:text-foreground transition-colors"
        >
          ← New search
        </Link>
      </div>
      <div className="flex flex-col gap-3">
        {plants.results.map((plant) => (
          <PlantCard
            key={plant.taxon.id}
            commonName={plant.taxon.preferred_common_name ?? plant.taxon.name}
            scientificName={plant.taxon.name}
            isNative={plant.taxon.preferred_establishment_means === "native"}
            imageUrl={plant.taxon.default_photo?.square_url}
          />
        ))}
      </div>
      {totalPages > 1 && (
        <div className="fixed bottom-0 left-0 right-0 flex items-center justify-center gap-3 px-6 py-4 text-sm text-muted bg-background border-t border-foreground/10">
          {currentPage > 1 ? (
            <Link
              href={buildPageUrl(currentPage - 1)}
              prefetch={true}
              className="hover:text-foreground transition-colors"
            >
              ←
            </Link>
          ) : (
            <span className="opacity-30">←</span>
          )}
          <span>
            page {currentPage} of {totalPages}
          </span>
          {currentPage < totalPages ? (
            <Link
              href={buildPageUrl(currentPage + 1)}
              prefetch={true}
              className="hover:text-foreground transition-colors"
            >
              →
            </Link>
          ) : (
            <span className="opacity-30">→</span>
          )}
        </div>
      )}
    </main>
  );
}
