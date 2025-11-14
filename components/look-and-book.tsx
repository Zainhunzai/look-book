import { Check } from "lucide-react";
import Image from "next/image";

function LookAndBook() {
  return (
    <div id="pricing" className="overflow-hidden">

      {/* Desktop Layout - Hidden below lg */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 lg:px-14 sm:gap-8 md:gap-10 lg:gap-32 items-center py-22 container mx-auto">
        {/* Left Section */}
        <div className="space-y-5 sm:space-y-6 md:space-y-8">
          <div className="pb-3 sm:pb-4 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-inter text-neutral-700 leading-9 lg:leading-14 pb-3 sm:pb-4">
              Try Look & Book for Free
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-xl text-neutral-500 font-dm-sans font-normal leading-6 sm:leading-7 text-pretty">
              App offers a variety of Stylist Bookings: List, Calendar, Chart,
              Board and Box. These views make booking simple.
            </p>
          </div>

          {/* Features List */}
          <div className="relative min-h-[10px] sm:min-h-[137px]">
            <div className="absolute left-0 top-0 hidden sm:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="137"
                viewBox="0 0 28 137"
                fill="none"
                className="w-auto h-auto"
              >
                <path
                  d="M1 20.5V68.5C1 74.0228 5.47715 78.5 11 78.5H26"
                  stroke="url(#paint0_linear_598_2096)"
                  strokeWidth="2"
                />
                <path
                  d="M23.5 75L26 78.5L23 81"
                  stroke="url(#paint1_linear_598_2096)"
                  strokeWidth="2"
                />
                <path
                  d="M1 65.5V120.739C1 126.262 5.47715 130.739 11 130.739H26"
                  stroke="url(#paint2_linear_598_2096)"
                  strokeWidth="2"
                />
                <path
                  d="M23.5 123.373L26 130.739L23 136"
                  stroke="url(#paint3_linear_598_2096)"
                  strokeWidth="2"
                />
                <path
                  d="M1 0V21C1 26.5228 5.47715 31 11 31H26"
                  stroke="url(#paint4_linear_598_2096)"
                  strokeWidth="2"
                />
                <path
                  d="M23.5 27.5L26 31L23 33.5"
                  stroke="url(#paint5_linear_598_2096)"
                  strokeWidth="2"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_598_2096"
                    x1="9.31283"
                    y1="225.76"
                    x2="-27.9752"
                    y2="221.091"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#8B5CF6" />
                    <stop offset="1" stopColor="#5B21B6" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_598_2096"
                    x1="23.9975"
                    y1="96.2338"
                    x2="19.5467"
                    y2="95.5873"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#8B5CF6" />
                    <stop offset="1" stopColor="#5B21B6" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_598_2096"
                    x1="9.31283"
                    y1="296.378"
                    x2="-28.0962"
                    y2="292.213"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#8B5CF6" />
                    <stop offset="1" stopColor="#5B21B6" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_598_2096"
                    x1="23.9975"
                    y1="168.059"
                    x2="19.4744"
                    y2="167.747"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#8B5CF6" />
                    <stop offset="1" stopColor="#5B21B6" />
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear_598_2096"
                    x1="9.31283"
                    y1="109.708"
                    x2="-26.5894"
                    y2="101.297"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#8B5CF6" />
                    <stop offset="1" stopColor="#5B21B6" />
                  </linearGradient>
                  <linearGradient
                    id="paint5_linear_598_2096"
                    x1="23.9975"
                    y1="48.7338"
                    x2="19.5467"
                    y2="48.0873"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#8B5CF6" />
                    <stop offset="1" stopColor="#5B21B6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="pl-0 sm:pl-10 md:pl-12 pt-2 sm:pt-4 space-y-4 sm:space-y-5 md:space-y-6 flex flex-row md:flex-col justify-between md:justify-start h-full">
              <div className="flex flex-col md:flex-row items-center gap-2">
                <Image
                  src="/CheckCircle.svg"
                  alt="Check"
                  width={20}
                  height={20}
                  className="w-6 h-6"
                />
                <span className="text-sm sm:text-base font-medium text-neutral-600 leading-5 sm:leading-6 font-dm-sans">
                  Unlimited <span className="hidden md:inline">Services</span>
                </span>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-2">
                <Image
                  src="/CheckCircle.svg"
                  alt="Check"
                  width={20}
                  height={20}
                  className="w-6 h-6"
                />
                <span className="text-sm sm:text-base font-medium text-neutral-600 leading-5 sm:leading-6 font-dm-sans">
                  Cancel Anytime
                </span>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-2">
                <Image
                  src="/CheckCircle.svg"
                  alt="Check"
                  width={20}
                  height={20}
                  className="w-6 h-6"
                />
                <span className="text-sm sm:text-base font-medium text-neutral-600 leading-5 sm:leading-6 flex">
                  <span className="hidden md:flex"> 14 Days </span> Free Trial
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Pricing Cards */}
        <div className="space-y-3 sm:space-y-4 md:space-y-5 relative">
          {/* Gradient Background */}
          <div className="absolute inset-x-0 bottom-80 top-8 left-0 right-0 -z-10 bg-pricing-gradient" />
          {/* Desktop Cards - Only visible on lg and above */}
          <div className="space-y-3 relative pt-4 max-w-md mx-auto">
            {/* Gradient Background */}
            <div className="absolute inset-0 bottom-0 left-0 right-0 -z-10 rounded-2xl bg-pricing-gradient" />

            {/* Mobile Cards op*/}
            <div className="flex flex-col gap-4">
              {/* Card 1 - Annual Plan (Highlighted) */}
              <div className="relative bg-white border-2 border-purple-600 rounded-3xl p-5 shadow-lg">
                <div className="flex items-start justify-between mb-3 gap-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-primary flex items-center justify-center shrink-0">
                    <div className="w-3 h-3 rounded-full border-2 border-white bg-white" />
                  </div>
                  <span className="text-white px-2 py-1 rounded-full text-xs font-semibold whitespace-nowrap bg-yellow-500">
                    1 month free
                  </span>
                </div>
                <div className="flex flex-row gap-2 justify-between pb-3">
                  <h3 className="text-lg font-semibold text-neutral-700 font-dm-sans leading-5">Annual Plan</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-base text-neutral-500 font-semibold font-dm-sans leading-4">$99/year</span>
                  </div>
                </div>
                <div className="flex flex-row gap-2 justify-between pb-5">
                  <p className="text-base text-neutral-500 font-normal font-inter leading-4">Save 20% annually</p>
                  <p className="text-base text-neutral-500 font-normal font-dm-sans leading-4">/month</p>
                </div>
                <button className="w-full bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded-full text-sm font-inter mtransition-colors duration-200">
                  Start Free Trial
                </button>
              </div>
            </div>

            {/* Card 2 - Monthly */}
            <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-md">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-6 h-6 rounded-full border-2 border-gray-300 shrink-0 flex items-center justify-center">
                </div>
              </div>
              <div className="flex flex-row gap-2 justify-between pb-3">
                <h3 className="text-lg font-semibold text-neutral-700 font-dm-sans leading-5">Monthly - 14 free trial</h3>
                <span className="text-base text-neutral-500 font-semibold font-dm-sans leading-4">$9.99</span>
              </div>
              <div className="flex items-baseline gap-1 justify-between pb-3">
                <span className="text-[#10B981] text-xs font-semibold">14-day free trial</span>
                <span className="text-sm text-gray-500">/month</span>
              </div>
            </div>

            {/* Card 3 - Pay as you go */}
            <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-md">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-6 h-6 rounded-full border-2 border-gray-300 shrink-0 flex items-center justify-center">
                </div>
              </div>
              <div className="flex flex-row gap-2 justify-between pb-3">
                <h3 className="text-lg font-semibold text-neutral-700 font-dm-sans leading-5">Pay as you go</h3>
                <span className="text-base text-neutral-500 font-semibold font-dm-sans leading-4">$2.99</span>
              </div>
              <div className="flex flex-row gap-2 justify-between pb-5">
                <p className="text-base text-neutral-500 font-normal font-inter leading-4">Pay only per booking</p>
                <p className="text-base text-neutral-500 font-normal font-dm-sans leading-4">/booking</p>
              </div>
            </div>

            {/* Trial Info */}
            <div className="block lg:hidden text-center text-base text-neutral-500 font-normal font-dm-sans leading-5 pt-3">
              You'll be notified 3 days before your trial ends — Change plan or cancel anytime.
            </div>
            {/* CTA Button */}
            <button className="w-full bg-purple-700 hover:bg-purple-800 active:bg-purple-800 text-white font-bold py-3 sm:py-4 px-5 sm:px-6 rounded-xl text-sm sm:text-base md:text-lg transition-colors duration-200 mt-3">
              Get the app now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LookAndBook;
