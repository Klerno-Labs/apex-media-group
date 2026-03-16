"use client";

export default function ServicesPage() {
  return (
    <section className="py-20">
      <h1 className="text-4xl font-bold text-center mb-8">What We Do</h1>
      <p className="text-lg text-center mb-4">Explore our range of services designed to elevate your brand.</p>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div className="bg-zinc-900 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-2">Digital Strategy</h2>
          <p>We create tailored strategies to help your business thrive in the digital landscape.</p>
        </div>
        <div className="bg-zinc-900 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-2">Design</h2>
          <p>Our design team crafts visually stunning and user-friendly interfaces.</p>
        </div>
        <div className="bg-zinc-900 p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-2">Performance Marketing</h2>
          <p>We drive results through targeted marketing campaigns that convert.</p>
        </div>
      </div>
    </section>
  );
}