"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { Separator } from "./ui/separator"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false)

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
  ]

  const pagesDropdownItems = [
    {
      title: "Contact Us",
      subtitle: "Get Support",
      icon: "/contact-us.svg",
      href: "/contacts",
    },
    {
      title: "Pricing",
      subtitle: "Packages",
      icon: "/price-logo.svg",
      href: "/#pricing",
    },
    {
      title: "Lookbook for iPhone",
      subtitle: "Get in App store",
      icon: "/iphone-logo.svg",
      href: "/lookbook",
    },
  ]

  return (
    <div className="bg-[#FAFAFA]">
      <nav className="container max-w-7xl mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
        {/* Logo - Hidden on mobile, shown on desktop */}
        <div className="shrink-0 hidden lg:block">
          <Link href="/">
            <Image src="/logo.svg" alt="Look&book" width={190} height={40} className="w-32 sm:w-40 md:w-48 h-auto" />
          </Link>
        </div>

        {/* Mobile: Menu button on left */}
        <button className="lg:hidden z-50 p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-8">
            <li>
              <a href="/" className="hover:text-purple-600 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="/#how-app-works" className="hover:text-purple-600 transition-colors">
                How apps works?
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-purple-600 transition-colors">
                Blog
              </a>
            </li>
            <li className="relative flex items-center gap-2">
              <button
                onClick={() => setIsPagesDropdownOpen(!isPagesDropdownOpen)}
                className="hover:text-purple-600 transition-colors flex items-center gap-2 cursor-pointer"
              >
                Pages
                <Image src="/dropdown.svg" alt="Dropdown" width={24} height={24} />
              </button>

              {/* Dropdown Menu */}
              {isPagesDropdownOpen && (
                <>
                  {/* Backdrop */}
                  <div className="fixed inset-0 z-30" onClick={() => setIsPagesDropdownOpen(false)} />
                  {/* Dropdown Content */}
                  <Image src="/Polygon.svg" alt="Polygon" width={35} height={20} className="absolute top-7 left-0 z-30 opacity-100" />
                  <div className="absolute top-full -left-75 mt-5 w-[622px] bg-white rounded-3xl border z-40 p-8">
                    <div className="flex gap-2">
                      {/* Left Section - Navigation Items */}
                      <div className="space-y-2 flex-1 w-2/5">
                        {pagesDropdownItems.map((item, index) => (
                          <Link
                            key={index}
                            href={item.href}
                            onClick={() => setIsPagesDropdownOpen(false)}
                            className="flex items-center gap-4 p-2 rounded-2xl hover:bg-gray-50 transition-colors"
                          >
                            <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gray-100 flex items-center justify-center">
                              <Image src={item.icon || "/placeholder.svg"} alt={item.title} width={24} height={24} />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xs font-medium text-neutral-700 font-dm-sans leading-3">{item.title}</h3>
                              <p className="text-xs text-neutral-500 font-dm-sans leading-3 font-light pt-1.5">{item.subtitle}</p>
                            </div>
                          </Link>
                        ))}
                      </div>

                      {/* Right Section - Placeholder Box with Icon and Text */}
                      <div className="flex flex-col justify-center gap-4 w-3/5">

                        <div className="w-full h-32 rounded-2xl border border-gray-200 shadow-sm bg-[#FAFAFA] flex items-center justify-center gap-2">
                          <div className="w-22 h-px bg-gray-300" />  {/* replaces <Separator className="w-20" /> */}
                          <Image
                            src="/cost.svg"
                            alt="Wallet"
                            width={56}
                            height={56}
                            className="bg-white h-14 w-14 rounded-2xl"
                          />
                          <div className="w-22 h-px bg-gray-300" />  {/* replaces second <Separator className="w-20" /> */}

                        </div>
                        {/* Text Content */}
                        <div>
                          <h3 className="text-sm font-dm-sans font-medium leading-3 text-neutral-700">How App Works?</h3>
                          <p className="text-xs font-inter font-light leading-3 text-neutral-500 pt-2">Introducing modern instantly booking method!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </li>
            <Button
              variant="outline"
              className="px-6 py-3 cursor-pointer text-white text-lg font-rethink-sans font-semibold leading-6 hover:text-white/90 bg-transparent overflow-hidden"
              style={{
                borderRadius: "16px",
                border: "1px solid var(--Temp-UntitledStyle, #000)",
                background:
                  "var(--Gradient, linear-gradient(286deg, var(--purple-500, #8B5CF6) -5.43%, var(--purple-800, #5B21B6) 111.96%))",
                boxShadow: "0 0 0 1px #FFF inset, 0 0 0 1.5px var(--purple-50, #F5F3FF) inset, 0 0 0 1px var(--purple-300, #C4B5FD), 0 8px 16px 0 var(--purple-100, #EDE9FE), 0 16px 32px 0 var(--purple-100, #EDE9FE)",
              }}
            >
              Download App
              <Image src="/downArrow.svg" alt="Download App" width={32} height={32} />
            </Button>
          </ul>
        </div>

        {/* Mobile: Download button on right */}
        <div className="lg:hidden">
          <Button
            variant="outline"
            className="px-4 py-2 cursor-pointer text-white hover:text-white/90 font-semibold font-rethink-sans text-sm leading-5 bg-transparent"
            style={{
              borderRadius: "16px",
              border: "1px solid var(--Temp-UntitledStyle, #000)",
              background:
                "var(--Gradient, linear-gradient(286deg, var(--purple-500, #8B5CF6) -5.43%, var(--purple-800, #5B21B6) 111.96%))",
              boxShadow:
                "0 0 0 1px #FFF inset, 0 0 0 1.5px var(--purple-50, #F5F3FF) inset, 0 0 0 1px var(--purple-300, #C4B5FD), 0 8px 16px 0 var(--purple-100, #EDE9FE), 0 16px 32px 0 var(--purple-100, #EDE9FE)",
            }}
          >
            Download App
            <Image src="/downArrow.svg" alt="Download App" width={24} height={24} />
          </Button>
        </div>
      </nav>

      {/* Mobile Menu Side Drawer */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setIsMenuOpen(false)} />
          {/* Side Drawer */}
          <div className="fixed left-0 top-0 h-full w-full bg-white z-50 lg:hidden shadow-2xl transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full p-6 w-full">
              {/* Header with Logo and Close Button */}
              <div className="flex justify-between items-start mb-8 pt-4">
                <Image src="/logo.svg" alt="Look&book" width={190} height={40} className="w-40 h-auto" />
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col space-y-6">
                <a
                  href="/"
                  className="text-xl font-medium hover:text-purple-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </a>
                <a
                  href="/#how-app-works"
                  className="text-xl font-medium hover:text-purple-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  How apps works?
                </a>
                <a
                  href="/blog"
                  className="text-xl font-medium hover:text-purple-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </a>
                <a
                  href="/pages"
                  className="text-xl font-medium hover:text-purple-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pages
                </a>
              </nav>
              {/* App Store Buttons */}
              <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 flex flex-row lg:flex-row gap-2.5 items-center justify-between w-full pb-20">
                {/* Google Play Button */}
                <Link
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-[191px] h-[67px] rounded-2xl border bg-neutral-800  text-white px-4 hover:bg-neutral-600 transition-colors duration-200"
                >
                  <Image src="/playstore.png" alt="Google Play" width={22} height={22} className="sm:w-8 sm:h-8" />
                  <div className="text-left">
                    <p className="text-xs md:text-sm font-semibold">GET IT ON</p>
                    <p className="text-sm sm:text-base md:text-lg font-bold">Google Play</p>
                  </div>
                </Link>

                {/* App Store Button */}
                <Link
                  href="https://apps.apple.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-[191px] h-[67px] rounded-2xl border bg-neutral-800  text-white px-4 hover:bg-neutral-600 transition-colors duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 36 36" fill="none">
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
                    <p className="text-xs md:text-sm font-semibold w-full">Download on the</p>
                    <p className="text-sm sm:text-base md:text-lg font-bold">App Store</p>
                  </div>
                </Link>
              </div>

              {/* footer */}

              <div className="flex flex-col text-left space-y-8 lg:space-y-5 border-t pt-10">
                <a
                  href="#"
                  className="text-sm md:text-base text-gray-600 hover:text-gray-900 transition-colors font-poppins"
                >
                  Customer Support
                </a>
                <a
                  href="/contacts"
                  className="text-sm md:text-base text-gray-600 hover:text-gray-900 transition-colors font-poppins"
                >
                  Contact US
                </a>
                <a
                  href="#"
                  className="text-sm md:text-base text-gray-600 hover:text-gray-900 transition-colors font-poppins"
                >
                  Terms & Conditions
                </a>
                <a
                  href="#"
                  className="text-sm md:text-base text-gray-600 hover:text-gray-900 transition-colors font-poppins"
                >
                  Privacy Policy
                </a>
              </div>

              {/* Social Media Icons - Right Aligned */}
              <div className="flex gap-6 lg:gap-8 justify-start pt-10">
                {socialLinks.map((link) => (
                  <a href={link.url} key={link.name}>
                    <Image src={link.icon || "/placeholder.svg"} alt={link.name} width={18} height={18} />
                    <span className="sr-only">{link.name}</span>
                  </a>
                ))}
              </div>
              <p className="block md:hidden text-lg py-10 text-neutral-600 font-dm-sans leading-normal sm:leading-relaxed">
                © 2025 Look and Book. All rights reserved.
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
