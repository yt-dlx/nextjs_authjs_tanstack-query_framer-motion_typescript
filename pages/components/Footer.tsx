// components/Footer.tsx
export const Footer = () => {
  return (
    <footer className="sticky bottom-0 bg-neutral-50/70 dark:bg-neutral-800/70 backdrop-blur-md shadow-md p-4 mt-auto z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <p className="text-sm text-neutral-600 dark:text-neutral-300">
          © {new Date().getFullYear()} Auth.js Example. All rights reserved.
        </p>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a
                href="https://authjs.dev"
                className="text-sm text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-50"
              >
                Auth.js Docs
              </a>
            </li>
            <li>
              <a
                href="https://github.com/nextauthjs/next-auth"
                className="text-sm text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-50"
              >
                GitHub
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};
