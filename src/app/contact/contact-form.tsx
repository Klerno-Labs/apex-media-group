"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  budget: string;
  message: string;
  _gotcha?: string;
}

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>();
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    setError(null);
    if (data._gotcha) return; // Honeypot for bots

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to send message");
      
      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    }
  };

  if (isSuccess) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center py-12">
        <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-4">
          <CheckCircle className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
        <p className="text-zinc-400">We&apos;ll be in touch within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium text-zinc-300">Name *</label>
        <input
          id="name"
          {...register("name", { required: "Name is required" })}
          className="w-full bg-background border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
          placeholder="John Doe"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-zinc-300">Email *</label>
          <input
            id="email"
            type="email"
            {...register("email", { 
              required: "Email is required",
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" }
            })}
            className="w-full bg-background border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
            placeholder="john@company.com"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium text-zinc-300">Phone</label>
          <input
            id="phone"
            type="tel"
            {...register("phone")}
            className="w-full bg-background border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
            placeholder="(555) 123-4567"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="budget" className="text-sm font-medium text-zinc-300">Project Budget</label>
        <select
          id="budget"
          {...register("budget")}
          className="w-full bg-background border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none"
        >
          <option value="" disabled>Select a range</option>
          <option value="<5k">&lt; $5,000</option>
          <option value="5k-10k">$5,000 - $10,000</option>
          <option value="10k-25k">$10,000 - $25,000</option>
          <option value="25k-50k">$25,000 - $50,000</option>
          <option value="50k+">$50,000+</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-zinc-300">Project Details *</label>
        <textarea
          id="message"
          rows={4}
          {...register("message", { required: "Please tell us about your project", minLength: { value: 10, message: "Too short" } })}
          className="w-full bg-background border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
          placeholder="Tell us about your goals..."
        />
        {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
      </div>

      {error && (
        <div className="bg-red-500/10 border border-red-500/50 text-red-200 p-3 rounded-lg text-sm">
          {error}
        </div>
      )}

      <Button 
        type="submit" 
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>

      {/* Honeypot */}
      <input type="text" {...register("_gotcha")} className="hidden" tabIndex={-1} autoComplete="off" />
    </form>
  );
}