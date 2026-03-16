"use client";

import { images } from "@/config/images";

export default function HomePage() {
  return (
    <section className="py-20">
      <h1 className="text-4xl font-bold text-center mb-8">Digital Evolution</h1>
      <p className="text-lg text-center mb-4">Transforming brands through innovative digital strategies.</p>
      <img src={images["hero"].src} alt={images["hero"].alt} className="w-full h-auto" />
    </section>
  );
}