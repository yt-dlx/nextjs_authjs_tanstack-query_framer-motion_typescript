// app/server/page.tsx
"use server";
import Link from "next/link";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Server() {
  const session = await auth();
  if (!session) redirect("/");

  return (
    <div className="max-w-md mx-auto bg-neutral-50 dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="p-8">
        <h1 className="text-2xl font-bold text-neutral-800 dark:text-neutral-50 mb-4">
          Server-side Protected Page
        </h1>
        {session.user?.image && (
          <div className="mb-4">
            <img
              src={session.user.image}
              alt={`${session.user.name}'s profile picture`}
              className="rounded-full w-24 h-24"
            />
          </div>
        )}
        <p className="text-md text-neutral-600 dark:text-neutral-300 mb-4">
          Welcome, <span className="font-semibold">{session.user?.name}</span>!
        </p>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">
          This page is protected on the server side.
        </p>
        <Link
          href="/"
          className="block bg-blue-500 hover:bg-blue-600 text-neutral-50 font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out text-center"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
