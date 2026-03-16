import { Metadata } from "next";
import ContactForm from "@/components/contact/contact-form";
import { Phone, Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Apex Media Group to start your next project.",
};

export default function ContactPage() {
  return (
    <main className="pt-32 pb-24 bg-zinc-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info */}
          <div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Let's talk.</h1>
            <p className="text-xl text-zinc-400 mb-12">
              Ready to transform your digital presence? Fill out the form or reach out directly. We typically respond within 24 hours.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Phone</h3>
                  <a href="tel:+17135550198" className="text-zinc-400 hover:text-white transition-colors text-lg">(713) 555-0198</a>
                  <p className="text-zinc-600 text-sm mt-1">Mon-Fri, 9am - 6pm CST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Email</h3>
                  <a href="mailto:hello@apexmediagroup.com" className="text-zinc-400 hover:text-white transition-colors text-lg">hello@apexmediagroup.com</a>
                  <p className="text-zinc-600 text-sm mt-1">For new business inquiries</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Office</h3>
                  <p className="text-zinc-400 text-lg">
                    2800 Post Oak Blvd, Suite 1500<br />
                    Houston, TX 77056
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 md:p-12">
            <ContactForm />
          </div>

        </div>
      </div>
    </main>
  )
}