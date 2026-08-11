import { searchFormSchema } from "~/lib/validations/search-form";
import { findPlants } from "../actions";
import Link from "next/link";

export default async function Results({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;

  const validation = searchFormSchema.safeParse({
    zipCode: params.zipCode,
    searchRadius: params.radius,
  });

  if (!validation.success) {
    console.log(params);
    return (
      <div>
        <span>Invalid search parameters</span>
        <Link href={"/"}>Back</Link>
      </div>
    );
  }

  const plants = await findPlants(validation.data);

  return (
    <main className="flex flex-col gap-4 px-6 py-7">
      <p>23 species near 12345</p>
      <p>filter chips</p>
      {plants.results.map((p) => (
        <div>{p.taxon.name}</div>
      ))}
    </main>
  );
}
