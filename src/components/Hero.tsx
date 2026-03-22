export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 py-32 px-4"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <div className="w-36 h-36 mx-auto mb-8 rounded-full bg-gradient-to-br from-indigo-600 to-blue-600 p-1.5 cursor-pointer hover:shadow-2xl transition-shadow duration-300">
            <a href="/images/Profile.jpeg" target="_blank" rel="noopener noreferrer">
              <img 
                src="/images/Profile.jpeg" 
                alt="Sahil Bhardwaj" 
                className="w-full h-full rounded-full object-cover bg-white dark:bg-black"
              />
            </a>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight">
          Sahil Bhardwaj
        </h1>

        <p className="text-xl md:text-2xl text-indigo-600 dark:text-indigo-400 mb-6 font-semibold">
          IT Professional since September 2020
        </p>

        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-16 leading-relaxed">
          Experienced web developer with deep expertise in HTML/CSS, JavaScript,
          WordPress, CodeIgniter, Ionic, React, PHP and full-stack delivery.
          I build real-world solutions that help businesses grow and win clients.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a
            href="#projects"
            className="px-10 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-10 py-4 border-2 border-indigo-200 dark:border-indigo-800 text-gray-900 dark:text-white font-semibold rounded-xl hover:border-indigo-600 dark:hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-950 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
