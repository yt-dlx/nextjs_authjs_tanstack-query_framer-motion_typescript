// app/error/page.tsx
"use client";
import { useState } from "react";

export default function ErrorTestPage() {
  const [shouldError, setShouldError] = useState(false);

  if (shouldError) {
    throw new Error("This is a deliberate error for testing purposes");
  }

  return (
    <div className="max-w-md mx-auto bg-neutral-50 dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold text-neutral-800 dark:text-neutral-50 mb-4">
          Error Test Page
        </h1>
        <p className="text-neutral-600 dark:text-neutral-300 mb-6">
          Click the button below to simulate an error.
        </p>
        <button
          onClick={() => setShouldError(true)}
          className="bg-red-500 hover:bg-red-600 text-neutral-50 font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
        >
          Trigger Error
        </button>
      </div>
    </div>
  );
}
