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
    <div className="max-w-md mx-auto overflow-hidden bg-neutral-50 dark:bg-neutral-800 rounded-xl md:max-w-2xl shadow-[0_10px_200px_#111111] dark:shadow-[0_10px_200px_#8E4B10] border-double border-4 border-neutral-800 dark:border-neutral-50">
      <div className="p-8 text-center">
        <section className="not-found-header">
          <h1 className="mb-4 text-2xl font-bold text-neutral-800 dark:text-neutral-50">Page Not Found</h1>
        </section>

        <section className="not-found-description">
          <p className="mb-4 text-neutral-600 dark:text-neutral-300">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
        </section>

        <section className="redirect-info">
          <p className="text-neutral-600 dark:text-neutral-300">Redirecting you to the previous page in 3 seconds...</p>
        </section>
      </div>
    </div>
  );
}
