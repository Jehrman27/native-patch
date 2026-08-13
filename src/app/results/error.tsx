"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function ResultsError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex flex-col gap-4 px-6 py-7">
      <p className="text-lg font-medium">Something went wrong</p>
      <p className="text-sm text-muted">{error.message}</p>
      <Link
        href="/"
        className="text-sm hover:text-foreground transition-colors"
      >
        ← Try a different search
      </Link>
    </main>
  );
}
