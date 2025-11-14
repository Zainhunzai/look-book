"use client"

import Image from "next/image";
import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden flex flex-col items-center justify-center px-4 sm:px-6 pt-12 sm:pt-16 pb-28">
      <div className="absolute inset-0 z-10 bg-hero-section-gradient pointer-events-none" />
      {/* Main Headline */}
      <div className="max-w-4xl w-full relative z-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-9 sm:leading-10 md:leading-12 lg:leading-tight text-neutral-700 font-dm-sans">
          <div className="text-center">
            Get
            <span className="ml-2 mr-2 py-0 text-white relative overflow-hidden rounded-[10px]">
              <span className="absolute inset-0 md:inset-2 py-0 bg-lookbook-text-gradient -z-10" />
              <span className="relative z-10 py-0">Look&Book</span>
            </span>
            on
          </div>
          <div className="pr-10 md:pr-0 pl-0 md:pl-32 text-center md:text-left">
            <span className="inline-flex items-center gap-2 sm:gap-3 flex-wrap justify-center">
              <Image src="/line.svg" alt="Your" width={200} height={34} className="w-52 hidden md:flex" />
            </span>
            <span className="pl-14">
              your
            </span>
            <span className="ml-2 text-clip text-purple-primary">Phone</span>
          </div>
          <Image
            src="/line.svg"
            alt="Line"
            width={145}
            height={34}
            className="flex md:hidden mx-auto items-center justify-center mt-2 mb-2"
          />
        </h1>
      </div>

      {/* Description */}
      <p className="mt-6 max-w-4xl text-base sm:text-lg md:text-xl lg:text-2xl text-gray-primary text-center leading-6 sm:leading-7 md:leading-8 px-4 relative z-20">
        Discover trusted beauty professionals near you. Book appointments in
        seconds and explore your perfect style with our handpicked network of
        expert stylists.
      </p>

      {/* App Store Buttons */}
      <div className="mt-8 sm:mt-10 md:mt-12 flex flex-col lg:flex-row gap-4 items-center justify-center w-full px-4 relative z-20">
        {/* Google Play Button */}
        <Button
          onClick={() => window.open('https://play.google.com/store/apps', '_blank', 'noopener,noreferrer')}
          className="group flex items-center justify-center gap-3 w-[191px] h-[67px] rounded-2xl border bg-neutral-900 text-white px-4 hover:bg-neutral-600 hover:scale-105 hover:shadow-lg hover:shadow-neutral-600/50 active:scale-95 transition-all duration-300 ease-in-out cursor-pointer relative z-30"
        >
          <Image
            src="/playstore.png"
            alt="Google Play"
            width={28}
            height={28}
            className="sm:w-8 sm:h-8 transition-transform duration-300 group-hover:scale-110"
          />
          <div className="text-left">
            <p className="text-xs md:text-sm font-semibold">GET IT ON</p>
            <p className="text-sm sm:text-base md:text-lg font-bold">
              Google Play
            </p>
          </div>
        </Button>

        {/* App Store Button */}
        <Button
          onClick={() => window.open('https://apps.apple.com/', '_blank', 'noopener,noreferrer')}
          className="group flex items-center justify-center gap-3 w-[191px] h-[67px] rounded-2xl border bg-neutral-900 text-white px-7 md:px-4 hover:bg-neutral-600 hover:scale-105 hover:shadow-lg hover:shadow-neutral-600/50 active:scale-95 transition-all duration-300 ease-in-out cursor-pointer relative z-30"
        >
         <Image src="/appleicon.svg" alt="App Store" width={36} height={36} className="transition-transform duration-300 group-hover:scale-110" />

          <div className="text-left w-full">
            <p className="text-xs md:text-sm font-semibold w-full">
              Download on the
            </p>
            <p className="text-sm sm:text-base md:text-lg font-bold">
              App Store
            </p>
          </div>
        </Button>
      </div>

      {/* Blurred gradient background - starts after buttons, covers full screen */}
      <div className="absolute inset-0 top-[60%] sm:top-[55%] md:top-[40%] bottom-0 z-10 bg-hero-secondary-gradient pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-48 z-10 pointer-events-none bg-hero-white-fade" />

      <div className="container mx-auto relative flex justify-center pt-16 sm:pt-0 md:pt-32 px-4">
        {/* Background gradient */}
        <div className="absolute bottom-80 -z-20 lg:bottom-0 w-full max-w-[400px] md:max-w-[350px] lg:max-w-[502px] h-[350px] sm:h-[600px] md:h-[750px] lg:h-[874px] bg-hero-phone-gradient pointer-events-none" />
        {/* Phone image */}
        <Image
          src="/phone-desktop.png"
          alt="How apps works?"
          className="relative z-10 mx-auto hidden md:block"
          width={600}
          height={974}
        />
        <Image
          src="/phone-mob.png"
          alt="How apps works?"
          className="relative z-10 mx-auto block md:hidden pt-10"
          width={402}
          height={874}
        />
        {/* Floating elements - hidden on mobile, shown on larger screens */}
        {/* <div
          className="gradient-element flex w-21 h-21 lg:w-36 lg:h-36 absolute top-150 lg:top-105 left-40 md:left-8 lg:left-112 items-center justify-center z-30"
          style={{
            borderRadius: "149px",
          }}
        >
          <Image
            src="/message.svg"
            alt="Message icon"
            width={48}
            height={48}
            className="w-9 h-9 lg:w-12 lg:h-12"
          />
        </div> */}
        {/* <div
          className="gradient-element flex w-16 h-16 lg:w-28 lg:h-28 absolute -bottom-5 lg:bottom-48 right-3 lg:right-122 items-center justify-center z-30"
          style={{
            borderRadius: "149px",
          }}
        >
          <Image
            src="/heart.svg"
            alt="Message icon"
            width={40}
            height={40}
            className="w-8 h-8 lg:w-12 lg:h-12"
          />
        </div> */}
        {/* <div
          className="gradient-element flex w-24 h-12 lg:w-40 lg:h-16 absolute top-146 lg:top-90 right-74 lg:right-112 z-30 items-center justify-center gap-4 lg:gap-7 mx-auto"
          style={{
            borderRadius: "34px",
          }}
        >
          <Image
            src="/star.svg"
            alt="STAR"
            width={28}
            height={28}
            className="w-5 h-5 lg:w-9 lg:h-9"
          />
          <span className="text-white text-xl lg:text-3xl font-medium">
            4.9
          </span>
        </div> */}
      </div>
    </section>
  );
}
