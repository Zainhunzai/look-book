"use client";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export interface Feature {
  id: string;
  title: string;
  description: string;
  image: string;
}

const features: Feature[] = [
  {
    id: "1",
    title: "Install the App",
    description:
      "Get started in seconds — download the app and book your next beauty session with ease.",
    image: "/mobile.svg",
  },
  {
    id: "2",
    title: "Setup your profile",
    description:
      "Add your details and preferences to personalize your beauty experience.",
    image: "/profile.svg",
  },
  {
    id: "3",
    title: "Instant Booking",
    description:
      "Enjoy real-time availability and instant appointment confirmations.",
    image: "/cost.svg",
  },
  {
    id: "4",
    title: "Verified Stylist",
    description:
      "Every stylist on our platform is verified for quality and trust.",
    image: "/dimond.svg",
  },
  {
    id: "5",
    title: "Smart Checkout",
    description: "Enjoy quick, secure, and seamless payments — all in one tap.",
    image: "/cost.svg",
  },
  {
    id: "6",
    title: "Talk to Your Stylist",
    description:
      "Connect directly with your stylist to discuss styles, timings, or special requests.",
    image: "/fast.svg",
  },
];

export function HowAppWorks() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const totalColumns = Math.ceil(features.length / 3);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const updateScrollProgress = () => {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
      const maxScroll = scrollWidth - clientWidth;
      if (maxScroll <= 0) {
        setScrollProgress(0);
        return;
      }
      // Calculate progress with better handling for snap scrolling
      const progress = Math.min(Math.max(scrollLeft / maxScroll, 0), 1);
      setScrollProgress(progress);
    };

    scrollContainer.addEventListener("scroll", updateScrollProgress, { passive: true });
    updateScrollProgress(); // Initial update

    return () => {
      scrollContainer.removeEventListener("scroll", updateScrollProgress);
    };
  }, [totalColumns]);

  return (
    <section id="how-app-works" className="px-4 py-12 sm:py-16 md:py-20 lg:py-24 sm:px-6 lg:px-8 bg-[#FFF]">
      <div className="container max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-10 md:mb-12 text-center">
          <h2 className="mb-3 sm:mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight sm:leading-snug font-dm-sans">
            How App Works?
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground font-dm-sans leading-6 sm:leading-7 md:leading-8 px-4">
            A Simple {features.length} steps process to get you started!
          </p>
        </div>

        {/* Features Grid - Desktop, Scrollable on Mobile */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          {/* Mobile Horizontal Scroll - Shows 3 cards vertically per column */}
          <div
            ref={scrollContainerRef}
            className="block sm:hidden overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory hide-scrollbar"
          >
            <div className="flex gap-4 w-max">
              {Array.from({ length: totalColumns }).map((_, columnIndex) => {
                const columnFeatures = features.slice(columnIndex * 3, (columnIndex + 1) * 3);
                return (
                  <div key={columnIndex} className="shrink-0 w-[calc(100vw-2rem)] snap-start flex flex-col gap-4">
                    {columnFeatures.map((feature) => (
                      <Card
                        key={feature.id}
                        className={cn(
                          "group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-purple-primary border-0 p-5 sm:p-6 md:p-7 lg:p-8 text-white shadow-lg transition-transform duration-300 hover:scale-105"
                        )}
                      >
                        {/* Background accent */}
                        <div className="absolute -right-6 -top-6 sm:-right-8 sm:-top-8 h-24 w-24 sm:h-32 sm:w-32 rounded-full bg-white/10 blur-2xl"></div>
                        <CardContent className="relative z-10 p-0 text-center">
                          {/* Icon Container */}
                          <div className="mb-4 sm:mb-5 md:mb-6 bg-white w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shrink-0 rounded-2xl mx-auto">
                            <Image
                              src={feature.image || "/placeholder.svg"}
                              alt={feature.title}
                              width={32}
                              height={32}
                              className="mx-auto h-8 w-8"
                            />
                          </div>
                          {/* Title */}
                          <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl md:text-2xl font-rethink-sans font-medium leading-tight text-white">
                            {feature.title}
                          </h3>

                          {/* Description */}
                          <p className="text-white text-sm sm:text-base font-medium font-dm-sans leading-normal sm:leading-relaxed">
                            {feature.description}
                          </p>
                        </CardContent>

                        {/* Bottom accent */}
                        <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-white/5 blur-xl"></div>
                      </Card>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Scroll Progress Indicator - Mobile Only */}
          {totalColumns > 1 && (
            <div className="block sm:hidden w-full">
              <div className="w-full h-4 bg-purple-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-purple-700 rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${scrollProgress * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* Desktop Grid */}
          <div className="hidden sm:grid gap-4 sm:gap-5 md:gap-6 grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              return (
                <Card
                  key={feature.id}
                  className={cn(
                    "group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-purple-primary border-0 p-5 sm:p-6 md:p-7 lg:p-8 text-white shadow-lg transition-transform duration-300 hover:scale-105"
                  )}
                >
                  {/* Background accent */}
                  <div className="absolute -right-6 -top-6 sm:-right-8 sm:-top-8 h-24 w-24 sm:h-32 sm:w-32 rounded-full bg-white/10 blur-2xl"></div>
                  <CardContent className="relative z-10 p-0 text-center">
                    {/* Icon Container */}
                    <div className="mb-4 sm:mb-5 md:mb-6 bg-white w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shrink-0 mx-auto rounded-2xl">
                      <Image
                        src={feature.image || "/placeholder.svg"}
                        alt={feature.title}
                        width={48}
                        height={48}
                        className="mx-auto sm:w-14 sm:h-14"
                      />
                    </div>
                    {/* Title */}
                    <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl md:text-2xl font-rethink-sans font-medium leading-tight text-white">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white text-sm sm:text-base font-medium font-dm-sans leading-normal sm:leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>

                  {/* Bottom accent */}
                  <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-white/5 blur-xl"></div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
