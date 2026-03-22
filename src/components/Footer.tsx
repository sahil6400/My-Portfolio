export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 dark:bg-black border-t border-slate-800 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Portfolio</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Full Stack Developer creating modern, professional web solutions. Passionate about building scalable applications.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="#about" className="hover:text-indigo-400 transition-colors duration-200 font-medium">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-indigo-400 transition-colors duration-200 font-medium">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-indigo-400 transition-colors duration-200 font-medium">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Connect</h4>
            <div className="flex gap-5">
              <a
                href="mailto:sahilbhardwajdcs@gmail.com"
                className="w-11 h-11 rounded-full bg-slate-800 hover:bg-indigo-600 flex items-center justify-center text-white transition-all duration-300 hover:shadow-lg"
                title="Email"
              >
                📧
              </a>
              <a
                href="https://www.linkedin.com/in/sahil-bhardwaj-95919b199/"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-slate-800 hover:bg-indigo-600 flex items-center justify-center text-white transition-all duration-300 hover:shadow-lg"
                title="LinkedIn"
              >
                🔗
              </a>
              <a
                href="https://github.com/sahil6400"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-slate-800 hover:bg-indigo-600 flex items-center justify-center text-white transition-all duration-300 hover:shadow-lg"
                title="GitHub"
              >
                🐙
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-12 text-center text-gray-500 text-sm">
          <p>
            © {currentYear} Sahil Bhardwaj - Full Stack Developer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
