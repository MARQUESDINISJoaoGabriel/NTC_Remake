"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // In a real site you'd POST this to an API route or 3rd-party form backend
    console.log("Contact form submitted:", formData);
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-ntcBlue mb-4 text-center">Get in Touch</h1>
      <p className="text-center mb-10 text-gray-600">
        Whether you’re a parent, cadet, or just curious — we’d love to hear from you!
      </p>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* HQ Contact Info */}
        <div className="space-y-4 text-gray-700">
          <h2 className="text-2xl font-semibold text-ntcBlue">Headquarters</h2>
          <p>
            Nautical Training Corps<br />
            38A Bath Street<br />
            Brighton BN1 3TB<br />
            United Kingdom
          </p>
          <p>
            <strong>Email:</strong> <a href="mailto:hq@ntc.org.uk" className="text-ntcBlue underline">hq@ntc.org.uk</a>
          </p>
          <p>
            <strong>Charity Number:</strong> 306084
          </p>
        </div>

        {/* Contact Form */}
        <div>
          {submitted ? (
            <div className="bg-green-100 text-green-800 p-6 rounded-xl shadow text-center">
              <h3 className="text-xl font-semibold">Thank you!</h3>
              <p>We’ve received your message and will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full mt-1 rounded-lg border-gray-300 shadow-sm p-3 focus:ring-ntcBlue focus:border-ntcBlue"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Your Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mt-1 rounded-lg border-gray-300 shadow-sm p-3 focus:ring-ntcBlue focus:border-ntcBlue"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full mt-1 rounded-lg border-gray-300 shadow-sm p-3 focus:ring-ntcBlue focus:border-ntcBlue"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-ntcBlue text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
