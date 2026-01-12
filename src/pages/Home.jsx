import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <header className="grid md:grid-cols-3 gap-8 items-center mb-10">
        <div className="md:col-span-2">
          <h1 className="text-4xl font-extrabold mb-3">Hi, I&apos;m Pim</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
            I build modern, accessible web applications with delightful
            interactions. Below are a few sample projects — hover any card to
            see the transition effect.
          </p>
          <div className="flex gap-3">
            <Link
              to="/projects"
              className="inline-block px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500 transition-colors"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="inline-block px-5 py-2 border rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>

        <aside className="flex justify-center md:justify-end">
          <div className="w-48 p-4 rounded-xl bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 hover:-translate-y-2">
            <img
              src="/src/assets/react.svg"
              alt="avatar"
              className="w-20 h-20 mx-auto mb-3"
            />
            <h3 className="text-center font-semibold">Frontend Developer</h3>
            <p className="text-sm text-center text-gray-500 dark:text-gray-400">
              React • Vite • Tailwind
            </p>
          </div>
        </aside>
      </header>
    </div>
  );
};

export default Home;
