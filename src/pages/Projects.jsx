const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    desc: "A responsive portfolio built with React + Vite.",
  },
  {
    id: 2,
    title: "Todo App",
    desc: "A small app demonstrating state and localStorage.",
  },
  {
    id: 3,
    title: "Design System",
    desc: "Reusable components and a token-based theme.",
  },
  {
    id: 4,
    title: "Blog Platform",
    desc: "A simple CMS for writing and publishing posts.",
  },
  {
    id: 5,
    title: "E-commerce UI",
    desc: "Product listing, cart, and checkout flows.",
  },
  {
    id: 6,
    title: "Analytics Dashboard",
    desc: "Charts and tables with real-time updates.",
  },
];

const Projects = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>

      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <li key={p.id} className="group">
            <article className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transform transition duration-300 group-hover:-translate-y-3">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {p.desc}
              </p>
              <div className="mt-4">
                <button className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition-colors">
                  View
                </button>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
