import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function BookingSale() {
  return (
    <main className=" w-full bg-white mx-auto px-4 lg:px-0">
      {/* Hero Section */}
      <section className="relative container max-w-5xl bg-purple-tertiary mx-auto px-4 sm:px-6 py-10 sm:py-12 md:py-16 lg:py-12 overflow-hidden rounded-4xl backdrop-blur-[41.5px]">

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto pb-20 lg:pb-0">
          {/* Thumbs up icon */}
          <div className="flex justify-center mb-4 sm:mb-5 md:mb-6">
            <span className="text-7xl md:text-6xl">👍</span>
          </div>

          {/* Main heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-dm-sans leading-tight sm:leading-snug md:leading-16 font-extrabold text-white mb-3 sm:mb-4 text-pretty px-2">
            50% OFF on First Booking
          </h1>

          {/* Subheading */}
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-medium font-dm-sans leading-5 sm:leading-6 md:leading-7 text-purple-100 mb-6 sm:mb-7 md:mb-8 px-2">
            Our AI-powered app makes finding and booking salon services effortless
          </p>

          {/* App Store Buttons */}
          <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            {/* Google Play Button */}
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center sm:justify-start gap-3 bg-white text-black px-5 sm:px-6 md:px-8 py-3 md:py-4 rounded-xl sm:rounded-2xl hover:bg-white/90 transition-colors duration-200 font-medium w-full sm:w-auto"
            >
              <Image src="/playstore.png" alt="Google Play" width={28} height={28} className="sm:w-8 sm:h-8" />
              <div className="text-left">
                <p className="text-xs md:text-sm font-semibold">GET IT ON</p>
                <p className="text-sm sm:text-base md:text-lg font-bold">Google Play</p>
              </div>
            </a>

            {/* App Store Button */}
            <a
              href="https://apps.apple.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center sm:justify-start gap-3 bg-white text-black px-5 sm:px-6 md:px-8 py-3 md:py-4 rounded-xl sm:rounded-2xl hover:bg-white/90 transition-colors duration-200 font-medium w-full sm:w-auto"
            >
              <Image src="/blackapple.svg" alt="App Store" width={32} height={32} className="sm:w-9 sm:h-9" />
              <div className="text-left">
                <p className="text-xs md:text-sm font-semibold">Download on the</p>
                <p className="text-sm sm:text-base md:text-lg font-bold">App Store</p>
              </div>
            </a>
          </div>

        </div>

        {/* Bottom Gradient SVG */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full pointer-events-none">
          <div className="relative w-full h-full flex justify-center">
            <Image
              src="/bottom-gradient.svg"
              alt=""
              width={1202}
              height={999}
              className="w-full h- max-w-full object-cover"
              style={{ objectPosition: 'bottom center' }}
            />
          </div>
        </div>

        <div className="block">
          <Image src="/halfcircle.svg" alt="Booking Sale" width={278} height={109} className="absolute -bottom-20 -right-40 rotate-12 z-40 hidden lg:block" />
          <Image src="/left-circle.svg" alt="Booking Sale" width={278} height={20} className="absolute top-0 left-0 z-30 hidden lg:block w-40 h-40" />
          {/* <Image src="/Star.svg" alt="Booking Sale" width={16} height={16} className="absolute top-6 left-6 sm:top-8 sm:left-8 md:top-10 md:left-10 w-4 h-4 sm:w-5 sm:h-5" /> */}
          <Image src="/graphics-elements.svg" alt="Booking Sale" width={203} height={183} className="absolute -bottom-20 right-0 md:bottom-10 md:-right-10" />
          <Image src="/triangle.svg" alt="Booking Sale" width={12} height={12} className="absolute bottom-16 left-20 sm:bottom-20 sm:left-32 md:bottom-5 md:left-5 w-3 h-3 sm:w-3.5 sm:h-3.5" />
        </div>
      </section>

      {/* Main Content Section */}
      <section className="relative w-full px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-24 mt-10 overflow-hidden">
        {/* Background Gradient SVG */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1440"
            height="830"
            viewBox="0 0 1440 830"
            fill="none"
            className="w-full h-full"
          >
            <g opacity="0.21" filter="url(#filter0_f_572_7551)">
              <path d="M110 250H1342V580H110V250Z" fill="url(#paint0_linear_572_7551)" />
            </g>
            <defs>
              <filter
                id="filter0_f_572_7551"
                x="-140"
                y="0"
                width="1732"
                height="830"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="125" result="effect1_foregroundBlur_572_7551" />
              </filter>
              <linearGradient
                id="paint0_linear_572_7551"
                x1="636.891"
                y1="418.711"
                x2="815.982"
                y2="334.016"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#8B5CF6" />
                <stop offset="0.93951" stopColor="#F43F5E" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Sun icon */}
          <div className="flex justify-center mb-3 sm:mb-4">
            <Image src="/sun.svg" alt="Booking Sale" width={60} height={34} className="sm:w-20 sm:h-11 md:w-21 md:h-12" />
          </div>

          {/* Badge */}
          <div className="inline-block bg-red-400 text-white px-2 py-1.5 sm:py-2 rounded-lg text-lg sm:text-xl md:text-2xl font-medium leading-4 font-inter mb-6 sm:mb-7 md:mb-8">
            LOOK&BOOK
          </div>

          {/* Main content heading */}
          <h2 className="text-xl sm:text-2xl font-onest max-w-2xl mx-auto leading-7 font-medium text-netural-primary mb-6 sm:mb-7 md:mb-8 text-pretty px-2">
            Book your perfect salon appointment in seconds. From haircuts to spa treatments, discover trusted salons
            near you with real reviews and instant booking.
          </h2>

          {/* Testimonial */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-14 md:mb-16 pt-10">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-linear-to-br from-pink-400 to-purple-500 shrink-0">
              <img src="/amiya.png" alt="Amitya Ingram" height={48} width={48} className="sm:w-16 sm:h-16" />
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-base sm:text-lg leading-5 sm:leading-6 font-medium text-netural-primary">Amiya Ingram</span>
                <Image src="/bluetick.svg" alt="Check" width={16} height={16} className="sm:w-5 sm:h-5" />
              </div>
              <p className="text-xs sm:text-sm leading-5 sm:leading-6 font-normal text-netural-primary">Founder & CEO</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-lg mx-auto px-2">
            <p className="text-base sm:text-lg font-normal leading-6 text-netural-secondary font-dm-sans pb-5 sm:pb-6 md:pb-7">Ready to transform your salon business? Contact us today and let's discuss how Nearz can help you grow.</p>
            <Button
              asChild
              className="w-full sm:w-11/12 md:w-4/5 lg:w-3/5 bg-purple-primary hover:bg-purple-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-colors"
            >
              <Link href="/contacts">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
