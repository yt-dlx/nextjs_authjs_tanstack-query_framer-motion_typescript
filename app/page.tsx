// app/page.tsx
import Link from "next/link";
import { auth } from "@/auth";
import { signOut } from "@/auth";

export default async function Home() {
  const session = await auth();

  return (
    <div className="max-w-md mx-auto bg-neutral-50 dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="p-8">
        <h1 className="text-2xl font-bold text-neutral-800 dark:text-neutral-50 mb-6">
          Welcome to Krut.js Example
        </h1>
        {session ? (
          <>
            <p className="text-md text-neutral-600 dark:text-neutral-300 mb-4">
              Signed in as <span className="font-semibold">{session.user?.name}</span>
            </p>
            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-neutral-50 font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out mb-4"
              >
                Sign out
              </button>
            </form>
            <nav className="mt-6">
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/client"
                    className="block bg-blue-500 hover:bg-blue-600 text-neutral-50 font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out text-center"
                  >
                    Go to Client-side Protected Page
                  </Link>
                </li>
                <li>
                  <Link
                    href="/server"
                    className="block bg-green-500 hover:bg-green-600 text-neutral-50 font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out text-center"
                  >
                    Go to Server-side Protected Page
                  </Link>
                </li>
              </ul>
            </nav>
          </>
        ) : (
          <Link
            href="/auth"
            className="block w-full bg-neutral-800 dark:bg-neutral-200 hover:bg-neutral-900 dark:hover:bg-neutral-300 text-neutral-50 dark:text-neutral-800 font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out text-center"
          >
            Sign in
          </Link>
        )}
      </div>
    </div>
  );
}
