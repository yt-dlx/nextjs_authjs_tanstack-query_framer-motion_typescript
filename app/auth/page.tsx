// app/auth/page.tsx
import { auth, signIn } from "@/auth";
import { redirect } from "next/navigation";

export default async function SignIn() {
  const session = await auth();
  if (session) redirect("/");

  return (
    <div className="max-w-md mx-auto overflow-hidden bg-neutral-50 dark:bg-neutral-800 rounded-xl md:max-w-2xl shadow-[0_10px_200px_#111111] dark:shadow-[0_10px_200px_#8E4B10] border-double border-4 border-neutral-800 dark:border-neutral-50">
      <div className="p-8">
        <section className="header">
          <h1 className="mb-6 text-2xl font-bold text-neutral-800 dark:text-neutral-50">Sign In</h1>
        </section>

        <section className="signin-form">
          <form
            action={async (formData: FormData) => {
              "use server";
              const provider = formData.get("provider") as string;
              await signIn(provider);
            }}
          >
            <div className="mb-4 github-signin">
              <button type="submit" name="provider" value="github" className="w-full px-4 py-2 font-bold transition duration-300 ease-in-out rounded-full bg-neutral-800 dark:bg-neutral-200 hover:bg-neutral-900 dark:hover:bg-neutral-300 text-neutral-50 dark:text-neutral-800">
                Sign in with GitHub
              </button>
            </div>

            <div className="google-signin">
              <button type="submit" name="provider" value="google" className="w-full px-4 py-2 font-bold transition duration-300 ease-in-out bg-blue-500 rounded-full hover:bg-blue-600 text-neutral-50">
                Sign in with Google
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
