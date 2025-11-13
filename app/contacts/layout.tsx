import ReadyForBooking from "@/components/ready-for-booking";


export default function ContactsLayout({
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