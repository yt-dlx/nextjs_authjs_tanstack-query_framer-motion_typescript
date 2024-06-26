// app/error.tsx
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
    const redirectTimer = setTimeout(() => {
      router.back();
    }, 3000);
    return () => clearTimeout(redirectTimer);
  }, [error, router]);

  return (
    <div className="max-w-md mx-auto bg-neutral-50 dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold text-neutral-800 dark:text-neutral-50 mb-4">
          Oops! Something went wrong
        </h1>
        <p className="text-neutral-600 dark:text-neutral-300 mb-4">
          We&apos;re sorry, but an error occurred while processing your request.
        </p>
        <p className="text-neutral-600 dark:text-neutral-300 mb-4">
          Error: {error.message || "Unknown error"}
        </p>
        <p className="text-neutral-600 dark:text-neutral-300">
          Redirecting you to the previous page in 3 seconds...
        </p>
        <button
          onClick={reset}
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-neutral-50 font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
