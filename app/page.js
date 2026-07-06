import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">

      <div className="text-center">

        <h1 className="mb-4 text-6xl font-bold">
          🌍 Travel Generator
        </h1>

        <p className="mb-8 text-gray-500">
          Discover your next dream destination.
        </p>

        <Link href="/explore">

          <button
            className="
            rounded-xl
            bg-rose-500
            px-8
            py-4
            text-white
            hover:bg-rose-600
            "
          >
            Start Exploring
          </button>

        </Link>

      </div>

    </main>
  );
}