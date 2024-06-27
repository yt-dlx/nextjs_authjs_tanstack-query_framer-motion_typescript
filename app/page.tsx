// app/page.tsx
"use server";
import Link from "next/link";
import { auth } from "@/auth";
import { signOut } from "@/auth";

export default async function Home() {
  const session = await auth();

  return (
    <div className="max-w-md mx-auto overflow-hidden bg-neutral-50 dark:bg-neutral-800 rounded-xl md:max-w-2xl shadow-[0_10px_200px_#111111] dark:shadow-[0_10px_200px_#8E4B10] border-double border-4 border-neutral-800 dark:border-neutral-50">
      <div className="p-8">
        <section className="header">
          <h1 className="flex items-center justify-center mb-6 text-2xl font-bold text-neutral-800 dark:text-neutral-50">Welcome to Krut.js</h1>
        </section>

        {session ? (
          <>
            <section className="user-info">
              {session.user?.image && (
                <div className="flex justify-center mb-4">
                  <img src={session.user.image} alt={`${session.user.name}'s profile picture`} className="w-24 h-24 rounded-full" />
                </div>
              )}
              <p className="mb-4 text-md text-neutral-600 dark:text-neutral-300">
                Signed in as <span className="font-semibold">{session.user?.name}</span>
              </p>
            </section>

            <section className="sign-out">
              <form
                action={async () => {
                  "use server";
                  await signOut();
                }}
              >
                <button type="submit" className="w-full px-4 py-2 mb-4 font-bold transition duration-300 ease-in-out bg-red-500 rounded-full hover:bg-red-600 text-neutral-50">
                  Sign out
                </button>
              </form>
            </section>

            <section className="navigation">
              <nav className="mt-6">
                <ul className="space-y-2">
                  <li>
                    <Link href="/client" className="block px-4 py-2 font-bold text-center transition duration-300 ease-in-out bg-blue-500 rounded-full hover:bg-blue-600 text-neutral-50">
                      Go to Client-side Protected Page
                    </Link>
                  </li>
                  <li>
                    <Link href="/server" className="block px-4 py-2 font-bold text-center transition duration-300 ease-in-out bg-green-500 rounded-full hover:bg-green-600 text-neutral-50">
                      Go to Server-side Protected Page
                    </Link>
                  </li>
                </ul>
              </nav>
            </section>
          </>
        ) : (
          <section className="sign-in">
            <Link href="/auth" className="block w-full px-4 py-2 font-bold text-center transition duration-300 ease-in-out rounded-full bg-neutral-800 dark:bg-neutral-200 hover:bg-neutral-900 dark:hover:bg-neutral-300 text-neutral-50 dark:text-neutral-800">
              Sign in
            </Link>
          </section>
        )}
      </div>
    </div>
  );
}
