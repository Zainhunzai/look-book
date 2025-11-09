import ReadyForBooking from "@/components/ready-for-booking";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <ReadyForBooking />
    </>
  );
}

