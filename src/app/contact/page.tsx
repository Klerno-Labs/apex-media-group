"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        setIsSuccess(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={cn("py-20")}>
      <h1 className="text-4xl font-bold text-center mb-8">Let's Talk</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required className="w-full mb-4 p-2 border-b border-zinc-700" />
        <input type="email" name="email" placeholder="Your Email" onChange={handleChange} required className="w-full mb-4 p-2 border-b border-zinc-700" />
        <textarea name="message" placeholder="Your Message" onChange={handleChange} required className="w-full mb-4 p-2 border-b border-zinc-700" />
        <button type="submit" disabled={isSubmitting} className="bg-blue-600 text-white px-4 py-2 rounded-full">
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
        {isSuccess && <p className="text-green-500 mt-4">Thank you! We'll be in touch within 24 hours.</p>}
        {error && <p className="text-red-500 mt-4">{error}</p>}
        <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
      </form>
    </section>
  );
}