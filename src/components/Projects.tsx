interface Project {
  title: string;
  description: string;
  role: string;
  responsibilities: string[];
  technologies: string[];
  outcome: string;
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    title: "Travel Agency Internal Operations & Flight Control Platform",
    description:
      "Currently leading the design and development of a travel agency internal management system that supports operations tracking, sales and budget management, SLA monitoring, and flight operations control.",
    role: "Project Lead & Frontend Lead",
    responsibilities: [
      "Led project planning and execution from concept to implementation",
      "Captured and translated client requirements into technical product workflows",
      "Defined system fields, data structure, and process flows for sales, budgets, SLAs, and flight control",
      "Managed a cross-functional team through sprint planning and delivery",
      "Delivered frontend development using React.js and Tailwind CSS",
      "Collaborated with backend engineers on API design, security, and integrations",
      "Guided team adoption of JWT-based authentication and secure session handling",
      "Reviewed UI and data entry forms to ensure operational accuracy and client usability"
    ],
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "JWT Authentication",
      "REST API",
      "Team Leadership",
      "Requirements Analysis"
    ],
    outcome:
      "Building an internal travel agency platform that streamlines tracking, sales management, budget control, SLA monitoring, and flight operations for improved operational efficiency.",
  },
  {
    title: "Spa Center Staff Management & Attendance Mobile App",
    description:
      "Designed and developed a staff management and attendance mobile application for a spa center to manage staff attendance, shifts, services, and daily operations. The application was published on Google Play Store and is actively used by the spa center staff.",
    role: "Mobile App Developer & Backend Developer",
    responsibilities: [
      "Designed complete mobile app UI/UX using Bootstrap, HTML, and CSS in Ionic framework",
      "Developed Android mobile application using Ionic and Capacitor",
      "Built backend APIs using PHP and CodeIgniter",
      "Implemented staff attendance and shift management system",
      "Developed service and order tracking system for spa operations",
      "Integrated Firebase for notifications and real-time updates",
      "Connected mobile app with MySQL database through REST APIs",
      "Published the mobile application on Google Play Store",
      "Maintained and updated the application based on client requirements"
    ],
    technologies: ["Ionic", "Capacitor", "Bootstrap", "HTML", "CSS", "PHP", "CodeIgniter", "MySQL", "Firebase", "REST API"],
    outcome:
      "The application is actively used by 50+ staff members for attendance tracking, shift management, and service operations, reducing manual attendance and improving operational efficiency.",
  },
  {
    title: "Laundry Business Management System & Admin Panel",
    description:
      "Designed and developed a Laundry Business Management System including admin panel, order management, invoicing system, and customer management dashboard. The system automated laundry business operations including orders, services, billing, and reporting.",
    role: "Admin Panel Developer & Backend Developer",
    responsibilities: [
      "Designed admin panel UI using Bootstrap 4 based on Adobe XD design",
      "Developed admin panel in CodeIgniter framework",
      "Built login and authentication system for admin users",
      "Developed APIs for order management, customer management, and billing",
      "Designed and implemented invoice generation system",
      "Integrated MySQL database and built backend controllers",
      "Implemented order lifecycle management and service tracking",
      "Built analytics and reporting dashboard for business insights"
    ],
    technologies: ["PHP", "CodeIgniter", "MySQL", "Bootstrap 4", "REST API"],
    outcome:
      "Automated laundry business operations including orders, billing, and reporting, reducing manual work and improving business workflow management.",
  },
  {
    title: "Freelancing Marketplace Platform (Upwork/Fiverr Type System)",
    description:
      "Developed a freelancing marketplace platform where freelancers and clients can register, create profiles, post projects, manage services, and communicate through the platform. The system included user dashboards, project workflows, and admin management panel.",
    role: "Frontend & Backend Developer (CodeIgniter)",
    responsibilities: [
      "Converted Adobe XD design into responsive website using HTML, CSS, and Bootstrap",
      "Developed the platform using PHP CodeIgniter framework",
      "Implemented form validations and workflows using jQuery",
      "Built user registration and login system for freelancers and clients",
      "Developed project listing and service workflow system",
      "Created user dashboards for freelancers and clients",
      "Integrated MySQL database and backend controllers",
      "Developed admin panel for managing users, projects, and platform data"
    ],
    technologies: ["PHP", "CodeIgniter", "MySQL", "HTML", "CSS", "Bootstrap", "jQuery"],
    outcome:
      "Successfully developed a freelancing marketplace platform enabling freelancers and clients to manage projects, services, and communication through a centralized system.",
  },
  {
    title: "WooCommerce E-commerce & Service Booking Platforms",
    description:
      "Designed and developed multiple WooCommerce-based e-commerce and service booking platforms for businesses including taxi service providers and service-based companies. Built complete websites with custom templates, payment integrations, and booking workflows.",
    role: "WordPress Developer & WooCommerce Customization Specialist",
    responsibilities: [
      "Designed and developed complete WordPress websites from scratch",
      "Created custom WooCommerce templates and layouts",
      "Built service booking and order management workflows",
      "Customized cart and checkout pages for service-based platforms",
      "Integrated payment gateways and order management systems",
      "Designed responsive layouts using WPBakery (Visual Composer)",
      "Developed custom WordPress templates and functionality",
      "Configured WooCommerce for service providers such as taxi booking platforms",
      "Integrated APIs and automated order and booking workflows"
    ],
    technologies: ["WordPress", "WooCommerce", "PHP", "MySQL", "WPBakery (Visual Composer)", "JavaScript", "Payment Gateway Integration"],
    outcome:
      "Successfully delivered multiple e-commerce and service booking platforms that automated online booking, payments, and order management for service-based businesses.",
  },
  {
    title: "Seeds Selling E-commerce Website (Agriculture E-commerce Platform)",
    description:
      "Designed and developed an online seeds selling e-commerce website where customers can browse, search, and purchase agricultural seeds online. The platform includes product management, order management, payment integration, and responsive design for all devices.",
    role: "WordPress & WooCommerce Developer",
    responsibilities: [
      "Designed and developed complete e-commerce website using WordPress and WooCommerce",
      "Created custom website layouts using WPBakery (Visual Composer)",
      "Developed custom product pages and category pages",
      "Configured WooCommerce for product management and order management",
      "Integrated payment gateway for online payments",
      "Customized cart and checkout pages",
      "Designed responsive website for mobile, tablet, and desktop devices",
      "Managed product listing, inventory, and order workflows",
      "Optimized website performance and SEO structure"
    ],
    technologies: ["WordPress", "WooCommerce", "PHP", "MySQL", "WPBakery (Visual Composer)", "JavaScript", "Payment Gateway Integration"],
    outcome:
      "Successfully developed an agriculture e-commerce platform for selling seeds online, enabling customers to purchase seeds digitally and helping the business expand online sales.",
  },
  {
    title: "IT Services Company Website with Custom WordPress Plugins",
    description:
      "Designed and developed a corporate IT services website offering services such as SEO, Web Development, Mobile App Development, and Digital Solutions. The website was built using WordPress with custom templates, custom plugins, and responsive design for all devices.",
    role: "WordPress Developer & Plugin Developer",
    responsibilities: [
      "Developed website using WordPress and custom themes",
      "Created custom page templates for services, portfolio, and contact pages",
      "Designed pages using WPBakery (Visual Composer)",
      "Developed custom WordPress plugins for service management and website functionality",
      "Optimized website performance and SEO structure",
      "Implemented responsive design for mobile, tablet, and desktop",
      "Integrated contact forms, service inquiry forms, and lead management features"
    ],
    technologies: [
      "WordPress",
      "PHP",
      "MySQL",
      "WPBakery (Visual Composer)",
      "JavaScript",
      "Custom WordPress Plugins",
      "HTML",
      "CSS"
    ],
    outcome:
      "Developed a professional IT services website that showcases services such as SEO, Web Development, and App Development and helps generate business leads through the website.",
  },
  {
    title: "Grocery Delivery, Pickup & Logistics Mobile App Platform (Zomato/Swiggy Type)",
    description:
      "Led development of a multi-app delivery platform for a Canada-based company including customer app, delivery partner app, vendor app, and admin panel. The platform supports grocery delivery, pickup services, and logistics management similar to Zomato and Swiggy.",
    role: "Project Lead, Ionic Developer & Frontend Developer",
    responsibilities: [
      "Led the mobile app development project and coordinated development workflow",
      "Converted Figma designs into mobile app UI using HTML, CSS, and Ionic framework",
      "Developed customer app, delivery partner app, and vendor app using Ionic",
      "Integrated backend APIs built in Express.js",
      "Designed application workflows for ordering, delivery, and pickup services",
      "Implemented authentication, order tracking, and delivery status features",
      "Worked on admin panel workflow and system architecture",
      "Researched and designed system flow for delivery, pickup, and logistics management",
      "Tested and deployed apps for production environment"
    ],
    technologies: [
      "Ionic",
      "Capacitor",
      "HTML",
      "CSS",
      "JavaScript",
      "Express.js",
      "Node.js",
      "MySQL",
      "REST API",
      "Figma"
    ],
    outcome:
      "Successfully delivered a multi-app delivery platform for a Canada-based company supporting grocery delivery, pickup services, and logistics operations with customer, delivery, vendor apps and centralized admin panel.",
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
              className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-gray-200 dark:border-slate-700 hover:border-indigo-500 transition-all duration-300 hover:shadow-xl"
            >
              <div className="h-56 bg-gradient-to-r from-indigo-600 to-blue-600 flex items-center justify-center">
                <span className="text-7xl">💻</span>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <p className="text-indigo-600 dark:text-indigo-400 font-semibold mb-3">
                  Role: {project.role}
                </p>

                <ul className="list-disc ml-5 mb-4 text-gray-700 dark:text-gray-300">
                  {project.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                  Impact: {project.outcome}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}