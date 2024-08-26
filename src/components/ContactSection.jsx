// src/components/ContactSection.jsx

import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
        <form className="max-w-lg mx-auto space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full p-2 border border-gray-300 rounded"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
