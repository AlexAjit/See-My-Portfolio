"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import React from "react";

export function ContactSection() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased overflow-hidden">
      <div className="absolute inset-0 z-0">
        <BackgroundBeams />
      </div>
      {/* <div className="max-w-2xl mx-auto p-4 relative z-10">
        <h1 className="text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Contact Me
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
          Lets connect.
        </p>
        <input
          type="text"
          placeholder="Enter your email here"
          className="rounded-lg border p-2.5 border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full mt-4 bg-neutral-950 placeholder:text-neutral-700"
        />
      </div> */}

<div className="max-w-2xl mx-auto p-6 relative z-10">
  <h1 className="text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
    Contact Me
  </h1>
  <p className="text-neutral-500 max-w-lg mx-auto my-4 text-sm md:text-base text-center">
    Lets connect and create something amazing together.
  </p>
  <div className="flex flex-col md:flex-row gap-4 mt-6">
  <input
      type="text"
      placeholder="Say me! Hi Ajit, Let's connect"
      className="rounded-lg border p-3 border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full bg-neutral-950 placeholder:text-neutral-700"
    />
    <input
      type="text"
      placeholder="Enter your email here"
      className="rounded-lg border p-3 border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full bg-neutral-950 placeholder:text-neutral-700"
    />
    <button className="bg-gradient-to-r from-teal-500 to-teal-700 text-white rounded-lg py-3 px-6 font-medium hover:opacity-90 transition-opacity">
      Send
    </button>
  </div>
  <p className="text-neutral-700 text-xs mt-3 text-center">
    I respect your privacy. No spam, ever.
  </p>
</div>
    </div>
  );
}