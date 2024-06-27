// app/error.tsx
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
    const redirectTimer = setTimeout(() => {
      router.back();
    }, 3000);
    return () => clearTimeout(redirectTimer);
  }, [error, router]);

  return (
    <div className="max-w-md mx-auto overflow-hidden bg-neutral-50 dark:bg-neutral-800 rounded-xl md:max-w-2xl shadow-[0_10px_200px_#111111] dark:shadow-[0_10px_200px_#8E4B10] border-double border-4 border-neutral-800 dark:border-neutral-50">
      <div className="p-8 text-center">
        <section className="error-header">
          <h1 className="mb-4 text-2xl font-bold text-neutral-800 dark:text-neutral-50">Oops! Something went wrong</h1>
        </section>

        <section className="error-description">
          <p className="mb-4 text-neutral-600 dark:text-neutral-300">We&apos;re sorry, but an error occurred while processing your request.</p>
          <p className="mb-4 text-neutral-600 dark:text-neutral-300">Error: {error.message || "Unknown error"}</p>
        </section>

        <section className="redirect-info">
          <p className="text-neutral-600 dark:text-neutral-300">Redirecting you to the previous page in 3 seconds...</p>
        </section>

        <section className="error-action">
          <button onClick={reset} className="px-4 py-2 mt-4 font-bold transition duration-300 ease-in-out bg-blue-500 rounded-full hover:bg-blue-600 text-neutral-50">
            Try again
          </button>
        </section>
      </div>
    </div>
  );
}
