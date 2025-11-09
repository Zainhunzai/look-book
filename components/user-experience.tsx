import { Star } from "lucide-react";
import Image from "next/image";

export default function UserExperience() {
  return (
    <section className="relative w-full pb-20 sm:pb-28 md:pb-36 lg:pb-40 overflow-hidden bg-[linear-gradient(0deg,rgba(0,0,0,0.10)_0%,rgba(0,0,0,0.10)_100%),linear-gradient(217deg,#6D28D9_28.45%,#2E1065_71.62%)] py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 sm:-top-40 right-0 h-60 w-60 sm:h-80 sm:w-80 rounded-full bg-purple-500 opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-24 sm:-bottom-32 left-1/4 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-purple-400 opacity-10 blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 sm:mb-12 md:mb-16 text-center lg:pb-20 xl:pb-32">
          <p className="text-xs sm:text-sm leading-5 sm:leading-6 font-semibold font-poppins text-white">
            3540+ Happy Users
          </p>
          <h2 className="mt-3 sm:mt-4 text-balance text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] leading-tight sm:leading-snug md:leading-16 font-semibold text-white px-4">
            Trusted by users,
            <br className="hidden sm:inline" />
            Proven by experience
          </h2>
        </div>

        {/* curvelines - hidden on mobile */}
        <div className="hidden lg:block absolute top-20 left-90 w-full h-full">
          <Image
            src="/curveline.svg"
            alt="Curvelines"
            width={650}
            height={165}
            className="w-auto h-auto"
          />
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 sm:gap-8 md:gap-10 lg:gap-12 grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto">
          {/* Testimonial 1 */}
          <div className="flex flex-col items-center md:items-start lg:items-center">
            <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-10 lg:gap-11 md:flex-row lg:flex-row w-full">
              <div className="shrink-0">
                <Image
                  src="/ceo.png"
                  alt="User"
                  width={160}
                  height={166}
                  className="sm:w-44 sm:h-46 md:w-48 md:h-50 lg:w-50 lg:h-52"
                />
              </div>
              {/* Content */}
              <div className="flex flex-col gap-2 sm:gap-3 w-full px-4 sm:px-0">
                {/* Stars */}
                <div className="flex gap-1 justify-center md:justify-start">
                  {[...Array(5)].map((_, i) => (
                    <Image
                      key={i}
                      src="/rating.svg"
                      alt="Star"
                      width={16}
                      height={16}
                      className="sm:w-5 sm:h-5"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-base md:text-lg text-white font-poppins font-medium leading-6 sm:leading-7 max-w-full md:max-w-72 text-center md:text-start md:pl-5">
                  "I love Look&Book! Our designers were using it for their
                  projects, so we already knew what kind of design they want."
                </p>

                {/* Author */}
                <div className="flex items-center gap-2 justify-center md:justify-start md:pl-5">
                  <div>
                    <div className="flex items-center gap-1.5 sm:gap-2 pb-1 sm:pb-2">
                      <p className="text-base sm:text-lg font-medium font-dm-sans leading-5 sm:leading-6 text-white">
                        Amiya Ingram
                      </p>
                      <Image
                        src="/whiteverify.svg"
                        alt="Check"
                        width={16}
                        height={16}
                        className="sm:w-5 sm:h-5"
                      />
                    </div>
                    <p className="text-xs sm:text-sm text-white font-normal leading-3.5">
                      Founder & CEO
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="flex flex-col items-center md:items-start lg:items-center">
            <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-10 lg:gap-11 md:flex-row lg:flex-row w-full">
              <div className="shrink-0">
                <Image
                  src="/designer.png"
                  alt="User"
                  width={160}
                  height={166}
                  className="sm:w-44 sm:h-46 md:w-48 md:h-50 lg:w-50 lg:h-52"
                />
              </div>
              {/* Content */}
              <div className="flex flex-col gap-2 sm:gap-3 w-full px-4 sm:px-0">
                {/* Stars */}
                <div className="flex gap-1 justify-center md:justify-start">
                  {[...Array(5)].map((_, i) => (
                    <Image
                      key={i}
                      src="/rating.svg"
                      alt="Star"
                      width={16}
                      height={16}
                      className="sm:w-5 sm:h-5"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-base md:text-lg text-white font-poppins font-medium leading-6 sm:leading-7 max-w-full md:max-w-72 text-center md:text-start md:pl-5">
                  "I love Look&Book! Our designers were using it for their
                  projects, so we already knew what kind of design they want."
                </p>

                {/* Author */}
                <div className="flex items-center gap-2 justify-center md:justify-start md:pl-5">
                  <div>
                    <div className="flex items-center gap-1.5 sm:gap-2 pb-1 sm:pb-2">
                      <p className="text-base sm:text-lg font-medium font-dm-sans leading-5 sm:leading-6 text-white">
                        Nisar Ali Shah
                      </p>
                      <Image
                        src="/whiteverify.svg"
                        alt="Check"
                        width={16}
                        height={16}
                        className="sm:w-5 sm:h-5"
                      />
                    </div>
                    <p className="text-xs sm:text-sm text-white font-normal leading-3.5">
                      Product Designer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
