import { SearchForm } from "~/components/SearchForm/SearchForm";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 px-6 py-7">
      <h1 className="font-bold text-lg text-primary">
        Find native plants near you
      </h1>
      <p className="text-sm text-muted">
        Pollinator-friendly species observed in your area, via iNaturalist.
      </p>
      <SearchForm />
    </main>
  );
}
