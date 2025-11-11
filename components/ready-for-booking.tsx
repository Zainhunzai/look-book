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
    <section className="flex flex-col items-center justify-center px-4 py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-white">
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
            <span
              className="p-2 text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold relative overflow-hidden whitespace-nowrap"
              style={{
                borderRadius: "12px",
              }}
            >
              <span
                className="absolute inset-0"
                style={{
                  borderRadius: "12px",
                  background:
                    "var(--Gradient, linear-gradient(286deg, var(--purple-500, #8B5CF6) -5.43%, var(--purple-800, #5B21B6) 111.96%))",
                  filter: "blur(10px)",
                  zIndex: 0,
                }}
              />
              <span className="relative z-10">booking?</span>
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
      <p className="text-lg lg:text-2xl text-neutral-600 font-dm-sans font-medium leading-6 text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14 px-4">
        Try Look&Book for an appointment today. it is free to get started.
      </p>

      <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center w-full sm:w-auto px-4 pb-10">
        {/* App Store Button */}
        {/* Google Play Button */}
        <Link
          href="https://play.google.com/store"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 w-[191px] h-[67px] rounded-2xl border bg-neutral-800  text-white px-4 hover:bg-neutral-600 transition-colors duration-200"
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

      {/* Footer Text */}
      <div className="hidden md:block text-center mb-6 sm:mb-8 md:mb-10 px-4">
        <p className="text-lg text-neutral-600 font-normal font-onest leading-7">
          From inspiration to appointment, your next
          <br className="hidden sm:block" />
          beauty look is just a tap away.
        </p>
      </div>
      {/* Social Media Icons - Right Aligned */}
      <div className="hidden md:flex gap-6 lg:gap-8 justify-center sm:justify-start pt-5 sm:pt-6 md:pt-7">
        {socialLinks.map((link) => (
          <a href={link.url} key={link.name}>
            <Image src={link.icon} alt={link.name} width={18} height={18} />
            <span className="sr-only">{link.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default ReadyForBooking;
