"use client";

export default function AboutPage() {
  return (
    <section className="py-20">
      <h1 className="text-4xl font-bold text-center mb-8">We are Apex</h1>
      <p className="text-lg text-center mb-4">Apex Media Group is dedicated to helping brands grow through innovative digital strategies.</p>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Process</h2>
          <p>We believe in transparency and collaboration. Our process involves Discovery, Strategy, Build, and Launch.</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Team</h2>
          <p>Our diverse team brings a wealth of experience and creativity to every project.</p>
        </div>
      </div>
    </section>
  );
}