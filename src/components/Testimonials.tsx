interface Testimonial {
  name: string;
  position: string;
  company: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    position: "Product Manager",
    company: "TechCorp Inc.",
    text: "Working with this developer was exceptional. They delivered the project on time and exceeded our technical expectations. Their attention to detail and problem-solving skills are outstanding.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    position: "CEO",
    company: "StartUp Labs",
    text: "A true professional who understands both frontend and backend development. They mentored our team and improved our code quality significantly. Highly recommended!",
    rating: 5,
  },
  {
    name: "Emma Wilson",
    position: "Design Lead",
    company: "Digital Solutions",
    text: "Great collaboration between design and development. They were able to translate our designs into pixel-perfect implementations and even suggested improvements to the UX.",
    rating: 5,
  },
  {
    name: "David Martinez",
    position: "CTO",
    company: "Enterprise Solutions Ltd.",
    text: "Brought our legacy system into the modern era. The architecture they proposed is scalable and maintainable. Great technical communication throughout the project.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 bg-white dark:bg-black px-4"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-gray-900 dark:text-white text-center">
          What Clients Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700 hover:shadow-lg dark:hover:shadow-xl transition"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">
                    ★
                  </span>
                ))}
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                <p className="font-semibold text-gray-900 dark:text-white">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {testimonial.position} at {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
