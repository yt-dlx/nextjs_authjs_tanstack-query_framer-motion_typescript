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
        <div className="text-2xl font-semibold text-neutral-800 dark:text-neutral-50">
          Loading...
        </div>
      </div>
    );
  }
  if (!session) return null;

  return (
    <div className="max-w-md mx-auto bg-neutral-50 dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="p-8">
        <h1 className="text-2xl font-bold text-neutral-800 dark:text-neutral-50 mb-4">
          Client-side Protected Page
        </h1>
        <p className="text-md text-neutral-600 dark:text-neutral-300 mb-4">
          Welcome, <span className="font-semibold">{session.user?.name}</span>!
        </p>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">
          This page is protected on the client side.
        </p>
        {queryData && (
          <div className="mb-6 text-black dark:text-neutral-50">
            <h2 className="text-xl font-semibold mb-2">React Query Repository Data:</h2>
            <p>Stars: {queryData.stargazers_count}</p>
            <p>Forks: {queryData.forks_count}</p>
          </div>
        )}
        <Link
          href="/"
          className="block bg-green-500 hover:bg-green-600 text-neutral-50 font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out text-center"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
