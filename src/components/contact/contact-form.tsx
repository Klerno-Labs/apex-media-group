"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, CheckCircle, AlertCircle } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    message: "",
    _gotcha: "" // Honeypot
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Honeypot check
    if (formData._gotcha) {
      console.log("Bot detected")
      return
    }

    setStatus("loading")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setStatus("success")
        setFormData({ name: "", email: "", phone: "", budget: "", message: "", _gotcha: "" })
      } else {
        setStatus("error")
      }
    } catch (error) {
      setStatus("error")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot */}
      <input 
        type="text" 
        name="_gotcha" 
        value={formData._gotcha}
        onChange={(e) => setFormData({...formData, _gotcha: e.target.value})}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-zinc-400">Full Name</label>
          <Input 
            id="name" 
            required
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            placeholder="John Doe"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-zinc-400">Email Address</label>
          <Input 
            id="email" 
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="phone" className="text-sm font-medium text-zinc-400">Phone Number</label>
        <Input 
          id="phone" 
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
          placeholder="(713) 555-0198"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="budget" className="text-sm font-medium text-zinc-400">Project Budget</label>
        <select 
          id="budget"
          value={formData.budget}
          onChange={(e) => setFormData({...formData, budget: e.target.value})}
          className="flex h-14 w-full rounded-lg border border-zinc-800 bg-transparent px-4 py-3 text-sm ring-offset-background focus-visible:outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary transition-colors appearance-none"
        >
          <option value="" className="bg-zinc-900">Select a range</option>
          <option value="5k-10k" className="bg-zinc-900">$5,000 - $10,000</option>
          <option value="10k-25k" className="bg-zinc-900">$10,000 - $25,000</option>
          <option value="25k-50k" className="bg-zinc-900">$25,000 - $50,000</option>
          <option value="50k+" className="bg-zinc-900">$50,000+</option>
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-zinc-400">Project Details</label>
        <Textarea 
          id="message" 
          required
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          placeholder="Tell us about your project goals..."
          className="h-32"
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-500 text-sm p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
          <AlertCircle className="w-4 h-4" />
          <span>Something went wrong. Please try again.</span>
        </div>
      )}

      {status === "success" ? (
        <div className="flex items-center gap-2 text-accent text-sm p-4 bg-accent/10 border border-accent/20 rounded-lg">
          <CheckCircle className="w-4 h-4" />
          <span>Message sent successfully! We'll be in touch soon.</span>
        </div>
      ) : (
        <Button 
          type="submit" 
          className="w-full" 
          size="lg"
          disabled={status === "loading"}
        >
          {status === "loading" ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </Button>
      )}
    </form>
  )
}