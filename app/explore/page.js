"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import ProgressBar from "@/components/ProgressBar";
import StepCard from "@/components/StepCard";
import PrimaryButton from "@/components/PrimaryButton";

import { CONTINENTS } from "@/lib/continents";
import { COUNTRIES } from "@/lib/countries";
import { CATEGORIES } from "@/lib/categories";

export default function Explore() {
  const router = useRouter();

  const [step, setStep] = useState(1);

  const [continent, setContinent] = useState("");
  const [country, setCountry] = useState("");
  const [category, setCategory] = useState("");

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <h1 className="text-4xl font-bold">Plan Your Trip</h1>

        <ProgressBar step={step} />

        {/* STEP 1 */}
        {step === 1 && (
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {CONTINENTS.map((item) => (
              <StepCard
                key={item}
                onClick={() => {
                  setContinent(item);
                  setStep(2);
                }}
              >
                <h2 className="text-xl font-semibold">{item}</h2>
              </StepCard>
            ))}
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <>
            <button
              className="mb-8 text-sm text-gray-500"
              onClick={() => setStep(1)}
            >
              ← Back
            </button>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {(COUNTRIES[continent] ?? []).map((item) => (
                <StepCard
                  key={item}
                  onClick={() => {
                    setCountry(item);
                    setStep(3);
                  }}
                >
                  <h2 className="text-lg font-semibold">{item}</h2>
                </StepCard>
              ))}
            </div>
          </>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <>
            <button
              className="mb-8 text-sm text-gray-500"
              onClick={() => setStep(2)}
            >
              ← Back
            </button>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {CATEGORIES.map((item) => (
                <StepCard
                  key={item}
                  onClick={() => setCategory(item)}
                >
                  <h2 className="text-lg font-semibold">{item}</h2>
                </StepCard>
              ))}
            </div>

            {/* FIX: only show button when category is selected */}
            {category && (
              <div className="mt-10">
                <PrimaryButton
                  onClick={() =>
                    router.push(
                      `/result?country=${country}&category=${category}`
                    )
                  }
                >
                  Generate Destination
                </PrimaryButton>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}