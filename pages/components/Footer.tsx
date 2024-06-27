// components/Footer.tsx
const Footer = () => {
  return (
    <footer className="sticky bottom-0 z-10 p-4 mt-auto shadow-md bg-neutral-50/70 dark:bg-neutral-800/70 backdrop-blur-md">
      <div className="flex items-center justify-between mx-auto max-w-7xl">
        <p className="text-sm text-neutral-600 dark:text-neutral-300">© {new Date().getFullYear()} Krut.js Example. All rights reserved.</p>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="https://github.com/yt-dlx/nextjs_authjs_tanstack-query_framer-motion_typescript" className="text-sm text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-50">
                GitHub
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};
export default Footer;
