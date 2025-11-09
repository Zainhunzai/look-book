import BeautyBookingSection from "@/components/beauty-booking-section";
import BookingSale from "@/components/booking-sale";
import HeroSection from "@/components/hero-section";
import { HowAppWorks } from "@/components/how-app-works";
import UserExperience from "@/components/user-experience";
import LookAndBook from "@/components/look-and-book";
import Image from "next/image";
import QRScannerSection from "@/components/qr-scanner-section";
import Newsletter from "@/components/newsletter";
import ReadyForBooking from "@/components/ready-for-booking";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowAppWorks />
      <BeautyBookingSection />
      <BookingSale />
      <UserExperience />
      <LookAndBook />
      <QRScannerSection />
      <Newsletter />
      <ReadyForBooking />
    </>
  );
}
