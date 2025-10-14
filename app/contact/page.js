"use client"

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // Assuming Shadcn UI Input component
import { Textarea } from "@/components/ui/textarea"; // Assuming Shadcn UI Textarea component
import { Mail, Phone, MapPin } from "lucide-react"; // Icons for contact info
import Link from "next/link";
export default function Contact() {
  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Simulate form submission (replace with your API endpoint)
      console.log("Form submitted:", formData);
      setStatus("Thank you! Your message has been sent.");
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } catch (error) {
      setStatus("Error sending message. Please try again.");
    }
  };

  return (
    <main className="container px-4 py-12 mx-auto bg-gray-100 dark:bg-gray-900 min-h-screen">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
          Contact Me
        </h1>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
          Get in touch for web development inquiries or project collaborations.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
            Send a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="mt-1 w-full dark:bg-gray-700 dark:text-gray-200"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="mt-1 w-full dark:bg-gray-700 dark:text-gray-200"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                className="mt-1 w-full dark:bg-gray-700 dark:text-gray-200"
                rows={5}
              />
            </div>
            <Button type="submit" variant="outline" className="w-full">
              Send Message
            </Button>
          </form>
          {status && (
            <p
              className={`mt-4 text-center ${
                status.includes("Error") ? "text-red-500" : "text-gray-500"
              }`}
            >
              {status}
            </p>
          )}
        </div>

        {/* Contact Information */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
            Contact Information
          </h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-primary mr-2" />
              <p className="text-gray-600 dark:text-gray-400">
                Email:{" "}
                <a
                  href="mailto:saim@example.com"
                  className="text-primary hover:underline"
                >
                  saim@example.com
                </a>
              </p>
            </div>
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-primary mr-2" />
              <p className="text-gray-600 dark:text-gray-400">
                Phone:{" "}
                <a
                  href="tel:+923001234567"
                  className="text-primary hover:underline"
                >
                  +92 300 123 4567
                </a>
              </p>
            </div>
            <div className="flex items-center">
              <MapPin className="w-6 h-6 text-primary mr-2" />
              <p className="text-gray-600 dark:text-gray-400">
                Address: 123 Web Street, Lahore, Pakistan
              </p>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              Follow Me
            </h3>
            <div className="flex space-x-4">
              <Link
                href="https://twitter.com/saimali"
                className="text-primary hover:underline"
              >
                Twitter
              </Link>
              <Link
                href="https://linkedin.com/in/saimali"
                className="text-primary hover:underline"
              >
                LinkedIn
              </Link>
              <Link
                href="https://github.com/saimali"
                className="text-primary hover:underline"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}