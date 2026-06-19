import { FaProjectDiagram, FaArrowRight, FaGithub, FaLaptopCode } from "react-icons/fa";

const projects = [
  {
    title: "Todo App",
    description:
      "Manage daily tasks with create, update, delete, and completion tracking features.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/sharda808/Projects/tree/main/1-Todo-App",
  },
  {
    title: "Complete Bazaar",
    description:
      "Full-featured e-commerce application with cart, authentication, and product management.",
    tech: ["React", "React Router", "Node.js", "MongoDB"],
    github: "https://github.com/sharda808/Projects/tree/main/Complete_Bazaar",
  },
  {
    title: "Currency Converter",
    description:
      "Convert currencies instantly using real-time exchange rate APIs.",
    tech: ["React", "Node.js", "API"],
    github: "https://github.com/sharda808/Projects/tree/main/Currency-Converter",
  },
  {
    title: "Full Stack Blog",
    description:
      "Blogging platform with authentication, article management, and CRUD functionality.",
    tech: ["React", "Express.js", "MongoDB"],
    github: "https://github.com/sharda808/Projects/tree/main/fullstackBlog",
  },
];

const Projects = () => {
  return (
    <section id="Projects" className="bg-[#050816] px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#0B1120] border border-[#1E293B] rounded-xl p-8">
          
          {/* Header */}
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <FaProjectDiagram className="text-purple-500 text-2xl" />
              <h2 className="text-3xl font-bold text-purple-400">
                Projects
              </h2>
            </div>

            <a
            href="#Projects"
            className="flex items-center gap-2 cursor-pointer group">
              <h3 className="text-purple-500 font-medium">
                View All
              </h3>
              <FaArrowRight className="text-purple-500 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-[#1E293B] rounded-3xl p-6 border border-transparent hover:border-purple-500 hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
              >
                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                    <FaLaptopCode className="text-xl text-purple-400" />
                  </div>

                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-400 leading-7 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tech.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-[#111827] border border-[#312E81] text-sm text-gray-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-auto pt-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-white transition-colors duration-300"
                  >
                    <FaGithub className="text-lg" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;