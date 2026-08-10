export default async function Results({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const zipcode = (await searchParams).zipcode;
  return (
    <main className="flex flex-col gap-4 px-6 py-7">
      <h1 className="font-bold text-lg text-primary">zip code</h1>
      <p className="text-sm text-muted">{zipcode}</p>
    </main>
  );
}
