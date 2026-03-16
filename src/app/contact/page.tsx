import { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero-section";
import ContactForm from "./contact-form";
import { Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Apex Media Group. Let's discuss your next project.",
};

export default function ContactPage() {
  return (
    <>
      <HeroSection
        variant="minimal"
        title="Let's Talk"
        subtitle="Have a project in mind? We'd love to hear about it."
      />

      <section className="py-24 bg-background">
        <div className="container mx-auto px-[5%]">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            
            {/* Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-display font-bold mb-6">Contact Information</h2>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface border border-zinc-800 flex items-center justify-center text-primary shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Email</h3>
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-zinc-400 hover:text-white transition-colors">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface border border-zinc-800 flex items-center justify-center text-primary shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Phone</h3>
                    <a href={`tel:${siteConfig.contact.phone}`} className="text-zinc-400 hover:text-white transition-colors">
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface border border-zinc-800 flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium mb-1">Office</h3>
                    <p className="text-zinc-400 whitespace-pre-line">
                      {siteConfig.contact.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-surface p-8 rounded-3xl border border-zinc-800">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}