interface SkillCategory {
  name: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    skills: [
      "Angular",
      "React.js",
      "Next.js",
      "Ionic Framework",
      "HTML5",
      "CSS3",
      "JavaScript",
      "jquery",
      "Ajax",
      "TypeScript",
      "bootstrap",
      "Tailwind CSS",
    ],
  },
  {
    name: "Backend",
    skills: [
      "PHP (CodeIgniter)",
      "REST API Development",
      "Node.js",
      "Next.js",
      "Express.js",
      "Role-Based Authentication",
      "Debugging & Performance Optimization",
    ],
  },
  {
    name: "Database",
    skills: ["MySQL", "Firebase Realtime Database", "Firebase Cloud Messaging (FCM)"],
  },
  {
    name: "CMS & Platforms",
    skills: [
      "WordPress",
      "WooCommerce",
      "Custom Plugin & Theme Integration",
      "Learning Management System (LMS) Implementation",
      "cPanel",
      "Postman",
      "Git",
    ],
  },
  {
    name: "Leadership & Project Management",
    skills: [
      "Team Leadership",
      "Project Management",
      "Client Requirements Analysis",
      "Stakeholder Communication",
      "Cross-Functional Team Coordination",
      "Technical Team Mentoring",
    ],
  },
  {
    name: "Mobile",
    skills: [
      "Cross-Platform App Development (Ionic + Capacitor)",
      "Android & iOS",
      "Google Play Deployment",
      "Admin Panel Development",
      "SaaS Architecture",
      "API Integration",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-32 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-950 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-20 text-gray-900 dark:text-white text-center">
          Skills & Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-xl p-10 border border-gray-200 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                <span className="w-3 h-3 bg-indigo-600 rounded-full"></span>
                {category.name}
              </h3>

              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-5 py-2.5 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900 dark:to-blue-900 text-gray-900 dark:text-white rounded-full font-medium border border-indigo-200 dark:border-indigo-700 hover:shadow-md transition-shadow duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { label: "Projects Completed", value: "50+" },
            { label: "Years Experience", value: "5+" },
            { label: "Happy Clients", value: "20+" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {stat.value}
              </div>
              <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
