import Image from "next/image";
import { Separator } from "./ui/separator";
import Link from "next/link";

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

export function Footer() {
  return (
    <footer className="w-full bg-white">
      {/* Main Footer Content */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16 border-t">
        <div className="flex flex-col lg:flex-row lg:items-start gap-6 sm:gap-8 lg:gap-12 xl:gap-16 justify-between">
          {/* Left Section: Logo and Copyright */}
          <p className="text-lg text-gray-600 hover:text-gray-900 transition-colors font-onest text-center block md:hidden pt-20">
            Look&Book lacus amet facilis amet neque nonsemper sed est tellus dolo ullamcorper vitae.
          </p>
          <div className="flex flex-col gap-3 sm:gap-4 lg:gap-5 lg:max-w-xs justify-center items-center lg:justify-start lg:items-start">
            {/* Logo */}
            <div className="pb-28 lg:pb-0">
              <Link href="/">
                <Image
                  src="/logo.svg"
                  alt="Look&Book"
                  width={190}
                  height={36}
                  className="pt-0 lg:pt-5"
                />
              </Link>
            </div>

            <Separator className="block md:hidden" />

            {/* Copyright */}
            <p className="hidden md:block max-w-[296px] text-xs sm:text-sm md:text-base pt-8  sm:pt-12 md:pt-14 lg:pt-16 text-gray-600 font-dm-sans leading-normal sm:leading-relaxed">
              © 2025 Look and Book. Patent Pending. All rights reserved.
            </p>
          </div>

          {/* Right Section: Links and Social Icons */}
          <div className="flex flex-col :gap-8 flex-1 lg:max-w-2xl pt-6 sm:pt-8 md:pt-10">
            {/* Three Columns of Links */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
              {/* Column 1 */}
              <div className="hidden lg:flex flex-col space-y-2.5 sm:space-y-3 md:space-y-4 lg:space-y-5">
                <a
                  href="#"
                  className="text-sm md:text-base text-gray-600 hover:text-gray-900 transition-colors font-poppins"
                >
                  App
                </a>
                <a
                  href="/#pricing"
                  className="text-sm md:text-base text-gray-600 hover:text-gray-900 transition-colors font-poppins"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="text-sm md:text-base text-gray-600 hover:text-gray-900 transition-colors font-poppins"
                >
                  CarBlogeer
                </a>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col text-center md:text-left space-y-8 lg:space-y-5">
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

              {/* Column 3 */}
              <div className="flex flex-col space-y-2.5 sm:space-y-3 md:space-y-4 lg:space-y-5">
                <div className="hidden lg:flex space-y-2.5 sm:space-y-3 md:space-y-4 lg:space-y-5 flex-col">
                  <a
                    href="/blog"
                    className="text-sm md:text-base text-gray-600 hover:text-gray-900 transition-colors font-poppins"
                  >
                    Blog
                  </a>
                  <a
                    href="#"
                    className="text-sm md:text-base text-gray-600 hover:text-gray-900 transition-colors font-poppins"
                  >
                    Helpline
                  </a>
                </div>
                {/* Social Media Icons - Right Aligned */}
                <div className="flex gap-6 lg:gap-8 justify-center sm:justify-start pt-5 sm:pt-6 md:pt-7">
                  {socialLinks.map((link) => (
                    <a href={link.url} key={link.name}>
                      <Image src={link.icon} alt={link.name} width={18} height={18} />
                      <span className="sr-only">{link.name}</span>
                    </a>
                  ))}
                </div>
                <p className="block md:hidden text-lg text-center py-20 text-neutral-600 font-dm-sans leading-normal sm:leading-relaxed">
                  © 2025 Look and Book. Patent Pending. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
