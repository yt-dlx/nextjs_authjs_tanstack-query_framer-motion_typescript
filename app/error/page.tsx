// app/error/page.tsx
"use client";
import { useState } from "react";

export default function ErrorTestPage() {
  const [shouldError, setShouldError] = useState(false);

  if (shouldError) {
    throw new Error("This is a deliberate error for testing purposes");
  }

  return (
    <div className="max-w-md mx-auto overflow-hidden bg-neutral-50 dark:bg-neutral-800 rounded-xl md:max-w-2xl shadow-[0_10px_200px_#111111] dark:shadow-[0_10px_200px_#8E4B10] border-double border-4 border-neutral-800 dark:border-neutral-50">
      <div className="p-8 text-center">
        <section className="header">
          <h1 className="mb-4 text-2xl font-bold text-neutral-800 dark:text-neutral-50">Error Test Page</h1>
        </section>

        <section className="description">
          <p className="mb-6 text-neutral-600 dark:text-neutral-300">Click the button below to simulate an error.</p>
        </section>

        <section className="error-trigger">
          <button onClick={() => setShouldError(true)} className="px-4 py-2 font-bold transition duration-300 ease-in-out bg-red-500 rounded-full hover:bg-red-600 text-neutral-50">
            Trigger Error
          </button>
        </section>
      </div>
    </div>
  );
}
