"use client";

import Image from "next/image";

export function QRScannerSection() {
  return (
    <section className="relative w-full bg-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32">
      {/* Background gradient accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full opacity-40 blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section - Horizontal Layout */}
        <div className="mb-10 sm:mb-12 md:mb-16 lg:mb-20 max-w-2xl mx-auto">
          {/* Badge and Heading Row */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-5 sm:mb-6">
            {/* Badge with speech bubble pointer */}
            <div className="relative shrink-0 pt-11">
              {/* Speech bubble pointer pointing upward */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
              <Image src="/top-arrow.svg" alt="Arrow Up" width={48} height={36} />
              </div>

              {/* Badge */}
              <div className="inline-flex text-3xl text-center items-center justify-center bg-[linear-gradient(286deg,#8B5CF6_-5.43%,#5B21B6_111.96%)] text-white px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 md:py-2.5 rounded-lg font-bold tracking-tight font-dm-sans w-[300px] h-[71px]">
                QUICK SCANNER
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold font-onest text-neutral-700 leading-tight sm:leading-snug text-center sm:text-left">
              <span className="text-balance">
                Scan QR code
                <br /> to get started
              </span>
            </h1>
          </div>

          {/* Description - Center aligned */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-normal text-neutral-600 leading-6 sm:leading-7 font-dm-sans text-center tracking-wide">
            Choose from List, Calendar, Chart, Board, or Box views to book your
            stylist the way you like. Every view is crafted for a smooth and
            simple booking experience.
          </p>
        </div>

        {/* QR Code Card */}
        <div className="flex justify-center">
          <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
            {/* Card Content */}
            <div className="p-6 sm:p-8 md:p-10 flex flex-col items-center gap-5 sm:gap-6 md:gap-8">
              {/* "Scan to Download" Text */}
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-6 sm:leading-7 md:leading-8 font-inter font-semibold text-gray-900 text-center">
                Scan to Download
              </h2>

              {/* QR Code */}
              <div className="rounded-lg p-1 sm:p-2">
                <Image
                  src="/qr-code.png"
                  alt="QR Code"
                  width={371}
                  height={371}
                  className=""
                />
              </div>

              {/* CTA Text */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-normal text-gray-900 leading-6 sm:leading-7 font-dm-sans text-center tracking-wide">
                Get the app in your phone
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QRScannerSection;
