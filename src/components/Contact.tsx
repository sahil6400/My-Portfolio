"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        const errorMessage = errorData?.error || "Request failed";
        throw new Error(errorMessage);
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error("Contact form error:", error);
      alert(
        `Unable to send message right now: ${
          error instanceof Error ? error.message : "Unknown error"
        }. Please email sahilbhardwajdcs@gmail.com directly.`
      );
    }
  };

  return (
    <section
      id="contact"
      className="py-32 bg-gradient-to-b from-white to-gray-50 dark:from-slate-950 dark:to-slate-900 px-4"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white text-center">
          Let&apos;s Work Together
        </h2>

        <p className="text-center text-gray-700 dark:text-gray-300 mb-16 text-lg leading-relaxed">
          Email me directly at
          <a
            href="mailto:sahilbhardwajdcs@gmail.com"
            className="font-bold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 px-1"
          >
            sahilbhardwajdcs@gmail.com
          </a>
          and I will respond promptly.
        </p>

        <div className="bg-white dark:bg-slate-800 rounded-xl p-10 border border-gray-200 dark:border-slate-700 text-center shadow-sm">
          <p className="text-gray-700 dark:text-gray-300 font-medium mb-8 text-lg leading-relaxed">
            Get in touch through any of these channels and I&apos;ll respond promptly.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <a
              href="mailto:sahilbhardwajdcs@gmail.com"
              className="group rounded-xl border border-gray-300 dark:border-slate-700 p-8 hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-900 transition-all duration-300 hover:shadow-lg"
            >
              <div className="text-5xl mb-4">📧</div>
              <div className="font-semibold text-gray-900 dark:text-white text-lg mb-2">Email</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 break-words break-all">
                <span className="inline-block max-w-full">sahilbhardwajdcs@gmail.com</span>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/sahil-bhardwaj-95919b199/"
              target="_blank"
              rel="noreferrer"
              className="group rounded-xl border border-gray-300 dark:border-slate-700 p-8 hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-900 transition-all duration-300 hover:shadow-lg"
            >
              <div className="text-5xl mb-4">💼</div>
              <div className="font-semibold text-gray-900 dark:text-white text-lg mb-2">LinkedIn</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">sahil-bhardwaj-95919b199</div>
            </a>
            <a
              href="https://github.com/sahil6400"
              target="_blank"
              rel="noreferrer"
              className="group rounded-xl border border-gray-300 dark:border-slate-700 p-8 hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-900 transition-all duration-300 hover:shadow-lg"
            >
              <div className="text-5xl mb-4">🐙</div>
              <div className="font-semibold text-gray-900 dark:text-white text-lg mb-2">GitHub</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">sahil6400</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
