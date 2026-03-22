interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    title: "SaaS Student Management & Online Examination System",
    description:
      "Designed and developed SaaS platform for managing students, exams, and performance tracking. Delivered admin reporting, role-based authentication, and dynamic test generation with validation.",
    technologies: ["WordPress", "REST API", "PHP (CodeIgniter)", "MySQL", "Custom Plugins", "Bootstrap"],
    link: "#",
    github: "#",
  },
  {
    title: "Spa Center Staff Management & Attendance App",
    description:
      "Built cross-platform mobile app (Android) for spa center staff management. Implemented attendance and shift tracking, service/order tracking, and real-time API synchronization.",
    technologies: ["Ionic", "Capacitor", "MySQL", "Firebase", "REST API"],
    link: "#",
    github: "#",
  },
  {
    title: "Laundry Business Management System",
    description:
      "Developed admin panel for laundry operations (orders, services, invoices). Implemented order lifecycle APIs, customer record history, and performance/analytics modules.",
    technologies: ["Bootstrap", "PHP", "MySQL", "CodeIgniter", "WooCommerce"],
    link: "#",
    github: "#",
  },
  {
    title: "Freelancing Marketplace Platform",
    description:
      "Designed and developed freelancing marketplace enabling freelancers and clients to register, manage projects, and interact. Includes profile management, project listings, and service workflows.",
    technologies: ["React.js", "Next.js", "PHP", "MySQL", "Firebase"],
    link: "#",
    github: "#",
  },
  {
    title: "WooCommerce E-commerce & Service Platforms",
    description:
      "Developed multiple WordPress/WooCommerce stores with payment gateway integration, cart customization, and API connectivity for service-based business models.",
    technologies: ["WordPress", "WooCommerce", "PHP", "MySQL", "Stripe", "API Integration"],
    link: "#",
    github: "#",
  }
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-32 bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-20 text-gray-900 dark:text-white text-center">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-gray-200 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-300 hover:shadow-xl"
            >
              <div className="h-56 bg-gradient-to-r from-indigo-600 to-blue-600 flex items-center justify-center">
                <span className="text-7xl">💻</span>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-700 dark:text-gray-300 mb-6 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
