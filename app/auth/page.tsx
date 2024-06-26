// app/auth/page.tsx
import { auth, signIn } from "@/auth";
import { redirect } from "next/navigation";

export default async function SignIn() {
  const session = await auth();
  if (session) redirect("/");

  return (
    <div className="max-w-md mx-auto bg-neutral-50 dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="p-8">
        <h1 className="text-2xl font-bold text-neutral-800 dark:text-neutral-50 mb-6">Sign In</h1>
        <form
          action={async (formData: FormData) => {
            "use server";
            const provider = formData.get("provider") as string;
            await signIn(provider);
          }}
        >
          <button
            type="submit"
            name="provider"
            value="github"
            className="w-full bg-neutral-800 dark:bg-neutral-200 hover:bg-neutral-900 dark:hover:bg-neutral-300 text-neutral-50 dark:text-neutral-800 font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out mb-4"
          >
            Sign in with GitHub
          </button>
          <button
            type="submit"
            name="provider"
            value="google"
            className="w-full bg-blue-500 hover:bg-blue-600 text-neutral-50 font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
          >
            Sign in with Google
          </button>
        </form>
      </div>
    </div>
  );
}
