"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function Result() {
  const params = useSearchParams();

  const country = params.get("country");
  const category = params.get("category");

  const [loading, setLoading] = useState(true);
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    async function load() {
      const res = await fetch(
        `/api/places?country=${country}&category=${category}`
      );

      const json = await res.json();

      setPlaces(json.places || []);
      setLoading(false);
    }

    load();
  }, [country, category]);

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p className="text-gray-600">loading destinations...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="mx-auto max-w-6xl px-6 py-10">

        <h1 className="mb-10 text-5xl font-bold">
          {country}
        </h1>

        {places.length === 0 ? (
          <p className="text-gray-500">
            No places found. Try another category.
          </p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {places.map((place, i) => (
              <div
                key={i}
                className="
                  overflow-hidden
                  rounded-3xl
                  bg-white
                  shadow-md
                  transition
                  hover:-translate-y-1
                "
              >

                {/* IMAGE HANDLING FIX */}
                {place.image ? (
                  <img
                    src={place.image}
                    alt={place.name}
                    className="h-48 w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="h-48 w-full bg-gray-200 flex items-center justify-center">
                    <p className="text-gray-500 text-sm">
                      No image available
                    </p>
                  </div>
                )}

                {/* CONTENT */}
                <div className="p-5">
                  <h2 className="text-xl font-bold">
                    {place.name}
                  </h2>

                  <p className="mt-2 text-gray-500">
                    Best season: {place.season}
                  </p>
                </div>

              </div>
            ))}

          </div>
        )}
      </div>
    </main>
  );
}