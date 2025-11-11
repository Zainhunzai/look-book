"use client"

import Image from "next/image";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export default function UserExperience() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [mobileSwiperInstance, setMobileSwiperInstance] = useState<SwiperType | null>(null);

  const testimonials = [
    {
      id: "amiya-1",
      name: "Amiya Ingram",
      role: "Founder & CEO",
      image: "/ceo.png",
      quote:
        'I love Look&Book! Our designers were using it for their projects, so we already knew what kind of design they want.',
    },
    {
      id: "nisar-1",
      name: "Nisar Ali Shah",
      role: "Product Designer",
      image: "/designer.png",
      quote:
        'I love Look&Book! Our designers were using it for their projects, so we already knew what kind of design they want.',
    },
    {
      id: "amiya-2",
      name: "Amiya Ingram",
      role: "Founder & CEO",
      image: "/ceo.png",
      quote:
        'I love Look&Book! Our designers were using it for their projects, so we already knew what kind of design they want.',
    },
    {
      id: "nisar-2",
      name: "Nisar Ali Shah",
      role: "Product Designer",
      image: "/designer.png",
      quote:
        'I love Look&Book! Our designers were using it for their projects, so we already knew what kind of design they want.',
    },
  ];

  const slides = Array.from({ length: Math.ceil(testimonials.length / 2) }, (_, idx) =>
    testimonials.slice(idx * 2, idx * 2 + 2)
  );

  const goPrev = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
    if (mobileSwiperInstance) {
      mobileSwiperInstance.slidePrev();
    }
  };

  const goNext = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
    if (mobileSwiperInstance) {
      mobileSwiperInstance.slideNext();
    }
  };

  return (
    <section className="relative w-full pb-10 sm:pb-28 md:pb-36 lg:pb-40 overflow-hidden bg-[linear-gradient(0deg,rgba(0,0,0,0.10)_0%,rgba(0,0,0,0.10)_100%),linear-gradient(217deg,#6D28D9_28.45%,#2E1065_71.62%)] py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 sm:-top-40 right-0 h-60 w-60 sm:h-80 sm:w-80 rounded-full bg-purple-500 opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-24 sm:-bottom-32 left-1/4 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-purple-400 opacity-10 blur-3xl"></div>
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 sm:mb-12 md:mb-16 text-center lg:pb-10">
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
        <div className="absolute top-0 left-2 md:top-20 md:left-160 w-full h-full">
          <Image
            src="/curveline.svg"
            alt="Curvelines"
            width={650}
            height={165}
            className="w-auto h-auto"
          />
        </div>

        {/* Desktop/Tablet Slider */}
        <div className="hidden md:block relative mx-auto container">
          <Swiper
            onSwiper={setSwiperInstance}
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1.1}
            loop={true}
            className="desktop-swiper"
          >
            {slides.map((slide, slideIdx) => (
              <SwiperSlide key={slideIdx}>
                <div className="px-2 sm:px-3 md:px-4">
                  <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:gap-10">
                    {slide.map((t) => (
                      <div
                        key={t.id}
                        className="flex flex-col lg:flex-row items-center lg:items-center gap-6 sm:gap-8 lg:gap-16 rounded-3xl px-6 py-8 lg:px-8 lg:py-10"
                      >
                        <div className="shrink-0">
                          <Image
                            src={t.image}
                            alt="User"
                            width={160}
                            height={166}
                            className="w-16 h-16 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-2xl object-cover"
                          />
                        </div>
                        <div className="flex flex-col gap-4 max-w-2xl">
                          <div className="flex gap-1 justify-center lg:justify-start">
                            {[...Array(5)].map((_, i) => (
                              <Image key={i} src="/rating.svg" alt="Star" width={18} height={18} className="sm:w-5 sm:h-5" />
                            ))}
                          </div>
                          <p className="text-base pl-5 sm:text-lg md:text-xl text-white font-poppins font-medium leading-8 lg:text-start">
                            &quot;{t.quote}&quot;
                          </p>
                          <div className="flex flex-col gap-2 justify-start">
                            <div className="flex items-center gap-2">
                              <p className="text-lg sm:text-xl font-medium font-dm-sans leading-6 sm:leading-7 text-white">
                                {t.name}
                              </p>
                              <Image src="/whiteverify.svg" alt="Check" width={18} height={18} className="sm:w-5 sm:h-5" />
                            </div>
                            <p className="text-sm sm:text-base text-white/80 font-normal leading-5 text-center lg:text-start">
                              {t.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Desktop Controls */}
          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              aria-label="Previous testimonials"
              onClick={goPrev}
              className="h-11 w-11 rounded-full border border-white/30 text-white flex items-center justify-center active:scale-95 transition"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              aria-label="Next testimonials"
              onClick={goNext}
              className="h-11 w-11 rounded-full bg-gradient-primary text-white flex items-center justify-center active:scale-95 transition"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Mobile Slider: two cards per slide */}
        <div className="md:hidden relative max-w-7xl mx-auto">
          <Swiper
            onSwiper={setMobileSwiperInstance}
            modules={[Navigation]}
            spaceBetween={12}
            slidesPerView={1}
            loop={true}
            className="mobile-swiper"
          >
            {slides.map((slide, idx) => (
              <SwiperSlide key={idx}>
                <div className="pr-3 first:pl-0 last:pr-0">
                  {idx === 0 ? (
                    <div className="flex flex-col gap-8">
                      {slide.map((t) => (
                        <div key={t.id} className="flex flex-col items-center">
                          <Image src={t.image} alt="User" width={160} height={166} className="h-8 w-8" />
                          <div className="mt-4 flex items-center gap-2">
                            <p className="text-base font-medium font-dm-sans leading-6 text-white">{t.name}</p>
                            <Image src="/whiteverify.svg" alt="Check" width={16} height={16} />
                          </div>
                          <p className="text-sm text-white">{t.role}</p>
                          <div className="mt-3 flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Image key={i} src="/rating.svg" alt="Star" width={16} height={16} />
                            ))}
                          </div>
                          <p className="mt-2 text-sm text-white font-poppins font-medium leading-6 text-center px-4">
                            &quot;{t.quote}&quot;
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col items-stretch gap-4 pl-3">
                      {slide.map((t) => (
                        <div key={t.id} className="flex-1 flex flex-col items-center">
                          <Image src={t.image} alt="User" width={160} height={166} className="h-8 w-8" />
                          <div className="mt-4 flex items-center gap-2">
                            <p className="text-base font-medium font-dm-sans leading-6 text-white">{t.name}</p>
                            <Image src="/whiteverify.svg" alt="Check" width={16} height={16} />
                          </div>
                          <p className="text-sm text-white">{t.role}</p>
                          <div className="mt-3 flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Image key={i} src="/rating.svg" alt="Star" width={16} height={16} />
                            ))}
                          </div>
                          <p className="mt-2 text-sm text-white font-poppins font-medium leading-6 text-center px-2">
                            &quot;{t.quote}&quot;
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Mobile Controls */}
          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              aria-label="Previous testimonials"
              onClick={goPrev}
              className="h-10 w-10 rounded-full border border-white/30 text-white flex items-center justify-center active:scale-95 transition"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              aria-label="Next testimonials"
              onClick={goNext}
              className="h-10 w-10 rounded-full bg-purple-secondary text-white flex items-center justify-center active:scale-95 transition"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
