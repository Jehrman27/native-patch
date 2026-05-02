# Native Plants Finder

Find pollinator-friendly native plants growing in your area, powered by iNaturalist data.

Live: TODO

Stack: Next.js 16 (App Router) | TypeScript | Tailwind CSS | iNaturalist API | Vercel

## Why I built this

I wanted hands-on experience with Next.js App Router and Server Components on a real-world data source rather than a toy app. Native plants support pollinators and local ecosystems, and location-based discovery is a practical way to make this data useful.

## What it does

- Enter a US zip code and find plants observed nearby.
- Filter results with URL-driven parameters.
- Open plant detail pages with richer taxonomy and media data.
- Prioritize fast server rendering and resilient API handling.

## Architecture decisions

- Server Components for primary data fetching to reduce client bundle size.
- Next.js fetch caching and revalidation to respect API limits.
- URL-driven filter state for shareable, back-button-friendly UX.
- Type-safe boundaries for API parsing and transformation.

## Trade-offs and future improvements

- Current plan is US-first for zip-based location lookup.
- Native status may be inferred from available data and should be documented clearly.
- Future versions can expand to international postal code support and stronger native-status validation.

## Running locally

1. Install dependencies.
2. Start the development server.
3. Open http://localhost:3000.

## Testing

Vitest is configured in this repo. Tests will be added as features are implemented.

## Roadmap

- Week 1: foundation, deployment pipeline, and project identity.
- Week 2: core zip search and species list flow.
- Week 3: detail route, filtering, and pagination.
- Week 4: accessibility and responsive polish.
- Week 5: tests, README hardening, and release assets.

## Status

In active development.
