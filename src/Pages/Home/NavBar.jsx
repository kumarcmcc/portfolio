export default function NavBar() {
  return (
    <nav className="bg-white border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="scroll-smooth">
          <h1 className="container mx-auto flex items-center justify-between gap-x-6">
            Chandan
          </h1>
        </a>
        <div className="w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
            <li>
              <a
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:text-white md:dark:hover:bg-transparent scroll-smooth"
                href="#mySkills"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:text-white md:dark:hover:bg-transparent scroll-smooth"
                href="#AboutMe"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:text-white md:dark:hover:bg-transparent scroll-smooth"
                href="#MyPortfolio"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:text-white md:dark:hover:bg-transparent scroll-smooth"
                href="#testimonial"
              >
                Clients
              </a>
            </li>
            <li>
              <a
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:text-white md:dark:hover:bg-transparent scroll-smooth"
                href="#Contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
