import Image from "next/image";
import Link from "next/link";

export function ReadyForBooking() {

  const socialLinks = [
    {
      name: "Facebook",
      icon: "/facebook.svg",
      url: "#",
    },
    {
      name: "Twitter",
      icon: "/x.svg",
      url: "#",
    },
    {
      name: "Instagram",
      icon: "/insta.svg",
      url: "#",
    },
    {
      name: "LinkedIn",
      icon: "/linkedin.svg",
      url: "#",
    },
  ];


  return (
    <section className="flex flex-col items-center justify-center px-4 py-12 sm:py-16 md:py-20 bg-white">
      {/* Main Heading Section */}
      <div className="w-full max-w-4xl mx-auto mb-6 sm:mb-8 md:mb-10 lg:mb-12">
        <h1 className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-2 sm:gap-2.5 md:gap-3 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-dm-sans text-center text-neutral-800 px-2">
          <span className="flex gap-3">
            <Image
              src="/flower.svg"
              alt="Ready for Booking"
              width={32}
              height={32}
              className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
            />
            <span>Ready for</span>
          </span>
          <span>customers,more fast</span>
          <div className="flex flex-col  md:flex-row items-center gap-1.5 sm:gap-2 md:gap-3 w-full md:w-auto justify-center">
            <Image
              src="/line.svg"
              alt="Arrow"
              width={120}
              height={21}
              className="w-16 sm:w-20 md:w-28 lg:w-36 xl:w-44 h-auto hidden md:block"
            />
            <span className="px-3 py-1 text-white text-3xl lg:text-4xl xl:text-5xl font-bold relative overflow-hidden whitespace-nowrap rounded-[16px]">
              <span className="absolute inset-0 bg-ready-booking-gradient z-0" />
              <span className="relative z-10 ">booking?</span>
            </span>
            <Image
              src="/line.svg"
              alt="Arrow"
              width={145}
              height={34}
              className="flex md:hidden"
            />
          </div>
        </h1>
      </div>

      {/* Subtitle */}
      <p className="text-lg lg:text-2xl text-neutral-600 font-dm-sans font-medium leading-6 text-center px-4">
        Try Look&Book for an appointment today. it is free to get started.
      </p>

      <div className="mt-8 md:mt-10 lg:mt-14 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center w-full sm:w-auto px-4">
        {/* App Store Button */}
        {/* Google Play Button */}
        <Link
          href="https://play.google.com/store"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center gap-3 w-[191px] h-[67px] rounded-2xl border bg-neutral-900 text-white px-4 hover:bg-neutral-600 hover:scale-105 hover:shadow-lg hover:shadow-neutral-600/50 active:scale-95 transition-all duration-300 ease-in-out cursor-pointer relative z-30"
        >
          <Image
            src="/playstore.png"
            alt="Google Play"
            width={28}
            height={28}
            className="sm:w-8 sm:h-8"
          />
          <div className="text-left">
            <p className="text-xs md:text-sm font-semibold">GET IT ON</p>
            <p className="text-sm sm:text-base md:text-lg font-bold">
              Google Play
            </p>
          </div>
        </Link>
        <Link
          href="https://apps.apple.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-center gap-3 w-[191px] h-[67px] rounded-2xl border bg-neutral-900 text-white px-4 hover:bg-neutral-600 hover:scale-105 hover:shadow-lg hover:shadow-neutral-600/50 active:scale-95 transition-all duration-300 ease-in-out cursor-pointer relative z-30"
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
        </Link>
      </div>

      {/* Footer Text */}
      <div className="hidden md:block text-center px-4 pt-22 ">
        <p className="text-lg text-neutral-600 font-normal font-onest leading-7">
          From inspiration to appointment, your next
          <br className="hidden sm:block" />
          beauty look is just a tap away.
        </p>
      </div>
    </section>
  );
}

export default ReadyForBooking;
