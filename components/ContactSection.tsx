"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import React from "react";

export function ContactSection() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased overflow-hidden">
      {/* Background Beams */}
      <div className="absolute inset-0 z-0">
        <BackgroundBeams />
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto p-4 relative z-10">
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
      </div>
    </div>
  );
}