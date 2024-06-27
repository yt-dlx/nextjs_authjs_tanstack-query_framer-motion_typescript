// app/server/page.tsx
"use server";
import Link from "next/link";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Server() {
  const session = await auth();
  if (!session) redirect("/");

  return (
    <div className="max-w-md mx-auto overflow-hidden bg-neutral-50 dark:bg-neutral-800 rounded-xl md:max-w-2xl shadow-[0_10px_200px_#111111] dark:shadow-[0_10px_200px_#8E4B10] border-double border-4 border-neutral-800 dark:border-neutral-50">
      <div className="p-8">
        <h1 className="mb-4 text-2xl font-bold text-neutral-800 dark:text-neutral-50">Server-side Protected Page</h1>

        <section className="mb-6 user-info">
          {session.user?.image && (
            <div className="mb-4">
              <img src={session.user.image} alt={`${session.user.name}'s profile picture`} className="w-24 h-24 rounded-full" />
            </div>
          )}
          <p className="mb-4 text-md text-neutral-600 dark:text-neutral-300">
            Welcome, <span className="font-semibold">{session.user?.name}</span>!
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">This page is protected on the server side.</p>
        </section>

        <section className="navigation">
          <Link href="/" className="block px-4 py-2 font-bold text-center transition duration-300 ease-in-out bg-blue-500 rounded-full hover:bg-blue-600 text-neutral-50">
            Back to Home
          </Link>
        </section>
      </div>
    </div>
  );
}
