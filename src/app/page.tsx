export default function Home() {
  const onZipSubmit = async (formData: FormData) => {
    "use server";
    console.log("form submitted", formData);
  };
  return (
    <main className="flex flex-col gap-4 px-6 py-7">
      <h1 className="font-bold text-lg text-primary">
        Find native plants near you
      </h1>
      <p className="text-sm text-muted">
        Pollinator-friendly species observed in your area, via iNaturalist.
      </p>
      <form action={onZipSubmit}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col border border-solid rounded-md p-3 border-muted justify-between h-18 focus-within:border-primary">
            <label className="text-xs text-muted" htmlFor="zip-code">
              ZIP CODE
            </label>
            <input
              id="zip-code"
              name="zip-code"
              className="bg-transparent text-foreground outline-none"
            />
          </div>
          <div className="flex flex-col border border-solid rounded-md p-3 border-muted justify-between h-18 focus-within:border-primary">
            <label className="text-xs text-muted" htmlFor="search-radius">
              SEARCH RADIUS
            </label>
            <select
              id="search-radius"
              name="search-radius"
              className="bg-transparent text-foreground outline-none"
            >
              <option value="10">10 miles</option>
              <option value="25">25 miles</option>
              <option value="50">50 miles</option>
              <option value="100">100 miles</option>
              <option value="200">200 miles</option>
            </select>
          </div>

          <button
            className="bg-primary rounded-lg py-3 text-primary-foreground font-medium"
            type="submit"
          >
            Find Plants
          </button>
        </div>
      </form>
    </main>
  );
}
