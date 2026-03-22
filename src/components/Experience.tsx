interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  responsibilities: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Full Stack Developer",
    company: "E-Karigar",
    period: "September 2020 – Present",
    description:
      "Production-level web and mobile applications development for clients, cross-platform solutions, and team delivery.",
    responsibilities: [
      "Developed and maintained production-level web and mobile applications",
      "Built cross-platform mobile applications (Android & iOS) using Ionic",
      "Designed and developed RESTful APIs using CodeIgniter (PHP)",
      "Implemented secure authentication and persistent login systems",
      "Integrated Firebase Cloud Messaging (FCM) for real-time notifications",
      "Developed WooCommerce-based mobile applications and admin dashboards",
      "Optimized MySQL queries to improve system performance",
      "Managed Android production builds using Capacitor",
      "Collaborated with clients to gather requirements and deliver scalable solutions",
    ],
  }
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-32 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-950 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-20 text-gray-900 dark:text-white text-center">
          Work Experience
        </h2>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-xl p-10 border border-gray-200 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-indigo-600 dark:text-indigo-400 font-semibold mt-1">
                    {exp.company}
                  </p>
                </div>
                <span className="text-gray-600 dark:text-gray-400 text-sm mt-3 md:mt-0 font-medium">
                  {exp.period}
                </span>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {exp.description}
              </p>

              <ul className="space-y-3">
                {exp.responsibilities.map((responsibility, i) => (
                  <li
                    key={i}
                    className="text-gray-700 dark:text-gray-300 flex items-start gap-3"
                  >
                    <span className="text-indigo-600 dark:text-indigo-400 font-bold mt-1 flex-shrink-0">
                      ✓
                    </span>
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-32 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900 dark:text-white text-center">
            Education
          </h2>

          <div className="grid gap-8">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-gray-200 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">Diploma in Computer Science Engineering</h3>
              <p className="text-indigo-600 dark:text-indigo-400 font-semibold mb-2">Government Polytechnic, Ambala City</p>
              <p className="text-gray-600 dark:text-gray-400">2017 - 2020</p>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-gray-200 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">Bachelor of Technology (B.Tech) – Computer Science</h3>
              <p className="text-indigo-600 dark:text-indigo-400 font-semibold mb-2">IK Gujral Punjab Technical University</p>
              <p className="text-gray-600 dark:text-gray-400">2021 - 2025</p>
            </div>
          </div>
        </div>

        <div className="mt-32 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900 dark:text-white text-center">
            Core Strengths
          </h2>

          <ul className="grid gap-5 text-left">
            <li className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 flex items-center gap-4">
              <span className="text-2xl">✓</span>
              <span className="font-semibold text-gray-900 dark:text-white">Strong debugging and analytical skills</span>
            </li>
            <li className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 flex items-center gap-4">
              <span className="text-2xl">✓</span>
              <span className="font-semibold text-gray-900 dark:text-white">End-to-end project development experience</span>
            </li>
            <li className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 flex items-center gap-4">
              <span className="text-2xl">✓</span>
              <span className="font-semibold text-gray-900 dark:text-white">Experience working with international clients</span>
            </li>
            <li className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-gray-200 dark:border-slate-700 hover:shadow-lg transition-all duration-300 flex items-center gap-4">
              <span className="text-2xl">✓</span>
              <span className="font-semibold text-gray-900 dark:text-white">Continuous learner with growth mindset</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
