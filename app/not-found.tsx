// app/not-found.tsx
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      router.back();
    }, 3000);
    return () => clearTimeout(redirectTimer);
  }, [router]);

  return (
    <div className="max-w-md mx-auto bg-neutral-50 dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold text-neutral-800 dark:text-neutral-50 mb-4">
          Page Not Found
        </h1>
        <p className="text-neutral-600 dark:text-neutral-300 mb-4">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <p className="text-neutral-600 dark:text-neutral-300">
          Redirecting you to the previous page in 3 seconds...
        </p>
      </div>
    </div>
  );
}
