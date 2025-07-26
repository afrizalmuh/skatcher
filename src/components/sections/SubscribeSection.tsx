// src/components/sections/SubscribeSection.tsx
import React from 'react';

const SubscribeSection: React.FC = () => (
  <section className="bg-white pt-24">
    <div className="main-layout grid grid-cols-1 items-center gap-10 bg-[#FAFAFA] py-16 md:grid-cols-2 md:gap-20">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-gray-800">
        Subscribe to Our Newsletter
      </h2>

      <form
        className="grid grid-cols-1 gap-4 md:grid-cols-3"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="email"
          placeholder="E‑mail Address"
          className="md:text-md col-span-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary md:col-span-2 lg:text-xl"
        />
        <button
          type="submit"
          className="hover:bg-secondary-dark col-span-1 w-full rounded-lg bg-secondary py-3 font-semibold text-white transition"
        >
          Subscribe
        </button>
      </form>
    </div>
  </section>
);

export default SubscribeSection;
