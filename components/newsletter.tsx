"use client";

import Image from "next/image";
import type React from "react";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <main className="relative flex flex-col items-center justify-center px-4 py-6 sm:py-8 md:py-10 lg:py-12 bg-white">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
        {/* Phone Mockup Section */}
        <div className="flex justify-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20">
          <div className="relative w-full max-w-[200px] sm:max-w-xs md:max-w-sm lg:max-w-md">
            {/* Gradient Overlay - Top Center */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 phone-gradient-overlay rounded-full z-50" />
            {/* iPhone Frame */}
            <Image
              src="/iPhone-13-Pro.png"
              alt="Newsletter Phone"
              width={293}
              height={559}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="text-center max-w-2xl mx-auto w-full absolute z-20 bg-white bottom-10 sm:bottom-12 md:bottom-16 lg:-bottom-15 px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-purple-800 font-dm-sans leading-tight sm:leading-snug md:leading-16 pt-4 sm:pt-6 md:pt-8 mb-3 sm:mb-4 md:mb-6 text-balance">
            Join Our Newsletter
          </h1>

          <p className="text-neutral-600 font-dm-sans text-center font-medium max-w-xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-6 sm:leading-7 mb-6 sm:mb-8 md:mb-10 lg:mb-12 text-pretty">
            Get inspired and book your next beauty session with trusted stylists
            in seconds.
          </p>

          {/* Subscription Form */}
          <form onSubmit={handleSubmit} className="w-full">
            <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your email"
                className="text-xs sm:text-sm md:text-base border-neutral-200 px-4 py-4 w-full sm:w-4/5 md:w-3/5 mx-auto"
                required
              />
              <Button
                type="submit"
                className="px-6 py-3 cursor-pointer gap-3 sm:gap-5 md:gap-8 w-full sm:w-4/5 md:w-3/5 mx-auto font-semibold text-white text-sm sm:text-base md:text-lg leading-5 sm:leading-6 font-rethink-sans"
                style={{
                  borderRadius: "16px",
                  background:
                    "linear-gradient(286deg, #8B5CF6 -5.43%, #5B21B6 111.96%)",
                }}
              >
                Subscribe Newsletter
                <Image
                  src="/downArrow.svg"
                  alt="Subscribe Newsletter"
                  width={24}
                  height={24}
                  className="sm:w-7 sm:h-7 md:w-8 md:h-8"
                />
              </Button>
            </div>
          </form>

          {/* Success Message */}
          {isSubmitted && (
            <div className="mt-3 sm:mt-4 md:mt-6 p-2 sm:p-3 md:p-4 bg-green-100 text-green-700 rounded-lg text-xs sm:text-sm md:text-base animate-fade-in">
              ✓ Thanks for subscribing! Check your email soon.
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
