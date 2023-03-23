import React from "react";

const Top = () => {
  return (
    <section className="min-h-screen flex items-center bg-cover bg-top bg-[url('/assets/home.jpg')] bg-no-repeat text-white">
      <div className="max-w-4xl px-8">
        <h3 className="lg:text-3xl md:text-2xl text-base text-center tracking-widest font-blod object-fill">
          Animals in the wild must be protected from cruel exploitation. They
          must feel safe and secure, and have the freedom to thrive in abundant,
          lush natural habitats that are protected for the benefit of all.
        </h3>
      </div>
    </section>
  );
};

export default Top;
