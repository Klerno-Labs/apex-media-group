import ContactForm from "@/components/sections/ContactForm";
import { MapPin, Mail, Phone } from "lucide-react";
import siteConfig from "@/config/site";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with Apex Media Group to start your next project.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-16">
      <section className="py-24 bg-background px-[5%]">
        <div className="max-w-[1400px] mx-auto mb-16 text-center">
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">Let's Talk.</h1>
          <p className="text-xl text-muted">Ready to elevate your digital presence? Fill out the form below or reach out directly.</p>
        </div>
      </section>

      <section className="pb-24 bg-surface/30 px-[5%]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="font-heading text-3xl font-bold text-white mb-6">Contact Information</h2>
              <p className="text-muted text-lg mb-8">
                We are currently accepting new projects for Q1 2025. Reach out to secure your spot in our schedule.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-muted font-mono uppercase mb-1">Email</div>
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-xl text-white hover:text-primary transition-colors">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full text-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-muted font-mono uppercase mb-1">Phone</div>
                    <a href={`tel:${siteConfig.contact.phone}`} className="text-xl text-white hover:text-primary transition-colors">
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-muted font-mono uppercase mb-1">Office</div>
                    <address className="text-xl text-white not-italic leading-relaxed">
                      {siteConfig.contact.address}
                    </address>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-background border border-border p-8 rounded-2xl">
              <h3 className="font-heading text-xl font-bold text-white mb-4">Business Hours</h3>
              <ul className="space-y-2 text-muted">
                <li className="flex justify-between">
                  <span>Mon - Fri</span>
                  <span className="text-white">8:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-white">9:00 AM - 2:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-white">Closed</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="bg-background border border-border p-8 md:p-12 rounded-3xl shadow-xl">
            <ContactForm />
          </div>

        </div>
      </section>
    </main>
  );
}