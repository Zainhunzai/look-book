import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden flex flex-col items-center justify-center px-4 sm:px-6 pt-12 sm:py-40">
      <div className="absolute inset-0 z-10 bg-hero-section-gradient" />
      {/* Main Headline */}
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-9 sm:leading-10 md:leading-12 lg:leading-tight text-neutral-700 font-dm-sans">
          <div className="text-center">
            Get
            <span className="ml-2 mr-2 py-0 text-white relative overflow-hidden rounded-[10px]">
              <span className="absolute inset-0 md:inset-2 py-0 bg-lookbook-text-gradient -z-10" />
              <span className="relative z-10 py-0">Look&Book</span>
            </span>
            on
          </div>
          <div className="pl-32">
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
      <p className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl lg:text-2xl text-gray-primary text-center leading-6 sm:leading-7 md:leading-8 px-4">
        Discover trusted beauty professionals near you. Book appointments in
        seconds and explore your perfect style with our handpicked network of
        expert stylists.
      </p>

      {/* App Store Buttons */}
      <div className="mt-8 sm:mt-10 md:mt-12 flex flex-col lg:flex-row gap-4 items-center justify-center w-full px-4">
        {/* Google Play Button */}
        <Link
          href="https://play.google.com/store"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 w-[191px] h-[67px] rounded-[16px] border bg-neutral-800  text-white px-4 hover:bg-neutral-600 transition-colors duration-200"
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

        {/* App Store Button */}
        <Link
          href="https://apps.apple.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 w-[191px] h-[67px] rounded-2xl border bg-neutral-800  text-white px-4 hover:bg-neutral-600 transition-colors duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
          >
            <g clipPath="url(#clip0_572_6750)">
              <path
                d="M24.3005 17.271C24.3126 16.3243 24.5641 15.396 25.0315 14.5725C25.4989 13.7491 26.1669 13.0572 26.9735 12.5614C26.4611 11.8295 25.7851 11.2272 24.9993 10.8024C24.2134 10.3775 23.3393 10.1418 22.4463 10.1139C20.5415 9.9139 18.6949 11.2536 17.7242 11.2536C16.7348 11.2536 15.2403 10.1337 13.631 10.1668C12.5902 10.2004 11.5756 10.5031 10.6865 11.0454C9.79733 11.5876 9.06381 12.351 8.55737 13.261C6.36361 17.0592 7.99996 22.6413 10.1014 25.7114C11.1528 27.2147 12.3816 28.8941 13.9894 28.8345C15.5628 28.7692 16.1504 27.8312 18.0496 27.8312C19.9311 27.8312 20.4824 28.8345 22.123 28.7967C23.8112 28.7692 24.8749 27.2866 25.8894 25.769C26.6448 24.6977 27.2261 23.5138 27.6118 22.2611C26.6309 21.8463 25.7939 21.1518 25.205 20.2645C24.6162 19.3771 24.3016 18.3361 24.3005 17.271Z"
                fill="white"
              />
              <path
                d="M21.2021 8.0946C22.1227 6.98953 22.5763 5.56917 22.4664 4.13513C21.0601 4.28284 19.761 4.95499 18.828 6.01765C18.3719 6.53679 18.0225 7.14074 17.7998 7.79498C17.5772 8.44922 17.4858 9.14091 17.5306 9.83053C18.2341 9.83773 18.9301 9.68531 19.566 9.38461C20.2019 9.08393 20.7614 8.64284 21.2021 8.0946Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_572_6750">
                <rect width="36" height="36" fill="white" />
              </clipPath>
            </defs>
          </svg>

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

      {/* Blurred gradient background - starts after buttons, covers full screen */}
      <div className="absolute inset-0 top-[60%] sm:top-[55%] md:top-[30%] bottom-0 z-10 bg-hero-secondary-gradient" />
      <div className="absolute inset-x-0 bottom-0 h-48 z-10 pointer-events-none bg-hero-white-fade" />

      <div className="container mx-auto relative flex justify-center pt-16 sm:pt-0 md:pt-32 px-4">
        {/* Background gradient */}
        <div className="absolute bottom-90 -z-20 lg:bottom-0 w-full max-w-[350px] md:max-w-[350px] lg:max-w-[402px] h-[400px] sm:h-[600px] md:h-[750px] lg:h-[874px] bg-hero-phone-gradient pointer-events-none" />
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
