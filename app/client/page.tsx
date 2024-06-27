// app/client/page.tsx
"use client";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";

export default function Client() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const { data: queryData, isLoading: queryLoading } = useQuery({
    queryKey: ["repoData"],
    queryFn: async () => {
      const res = await fetch("https://api.github.com/repos/tannerlinsley/react-query");
      return res.json();
    },
    enabled: !!session,
  });

  useEffect(() => {
    if (status === "unauthenticated") router.push("/");
  }, [status, router]);

  if (status === "loading" || queryLoading) {
    return (
      <div className="flex items-center justify-center">
        <div className="text-2xl font-semibold text-neutral-800 dark:text-neutral-50">Loading...</div>
      </div>
    );
  }
  if (!session) return null;

  return (
    <div className="max-w-md mx-auto overflow-hidden bg-neutral-50 dark:bg-neutral-800 rounded-xl md:max-w-2xl shadow-[0_10px_200px_#111111] dark:shadow-[0_10px_200px_#8E4B10] border-double border-4 border-neutral-800 dark:border-neutral-50">
      <div className="p-8">
        <section className="header">
          <h1 className="mb-4 text-2xl font-bold text-neutral-800 dark:text-neutral-50">Client-side Protected Page</h1>
        </section>

        <section className="user-info">
          {session.user?.image && (
            <div className="mb-4">
              <img src={session.user.image} alt={`${session.user.name}'s profile picture`} className="w-24 h-24 rounded-full" />
            </div>
          )}
          <p className="mb-4 text-md text-neutral-600 dark:text-neutral-300">
            Welcome, <span className="font-semibold">{session.user?.name}</span>!
          </p>
          <p className="mb-6 text-sm text-neutral-500 dark:text-neutral-400">This page is protected on the client side.</p>
        </section>

        {queryData && (
          <section className="mb-6 text-black repo-data dark:text-neutral-50">
            <h2 className="mb-2 text-xl font-semibold">React Query Repository Data:</h2>
            <p>Stars: {queryData.stargazers_count}</p>
            <p>Forks: {queryData.forks_count}</p>
          </section>
        )}

        <section className="navigation">
          <Link href="/" className="block px-4 py-2 font-bold text-center transition duration-300 ease-in-out bg-green-500 rounded-full hover:bg-green-600 text-neutral-50">
            Back to Home
          </Link>
        </section>
      </div>
    </div>
  );
}
