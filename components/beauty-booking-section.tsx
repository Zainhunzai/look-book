import Image from "next/image"

export default function BeautyBookingSection() {
    interface Feature {
        image: string
        title: string
        description: string
    }

    const features: Feature[] = [
        {
            image: "/sparkles.svg",
            title: "AI Recommendations",
            description: "Get personalized stylist suggestions based on your preferences and location",
        },
        {
            image: "/bar-chart.svg",
            title: "Real-time analytics dashboard",
            description: "Track your performance with live insights and real-time data visualization.",
        },
        {
            image: "/setting.svg",
            title: "Exclusive Offers",
            description: "Access special discounts and deals available only on our platform",
        },
    ]

    return (
        <section className="w-full py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-16 bg-[#FFF]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-18 items-center max-w-7xl mx-auto">
                {/* Left: Phone Mockup */}
                <div className="flex justify-center">
                    <Image src="/leftmock.png" alt="Phone" width={463} height={573} className="w-full h-auto" />
                </div>

                {/* Right: Content */}
                <div className="order-1 lg:order-2">
                    <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-dm-sans font-bold mb-4 sm:mb-5 md:mb-6 leading-tight sm:leading-snug md:leading-14 text-gray-secondary text-center md:text-start">
                        Discover the Next <br className="hidden sm:block" /> Generation of Beauty <br className="hidden sm:block" /> Booking
                    </h1>

                    <p className="text-gray-primary font-dm-sans text-base sm:text-lg md:text-xl lg:text-2xl font-normal leading-6 sm:leading-7 md:leading-8 mb-6 sm:mb-7 md:mb-8 text-center md:text-start text-balance">
                        From quick lists to detailed calendars, choose the booking view that fits your style and keep your schedule
                        perfectly organized.
                    </p>

                    <div className="space-y-4 sm:space-y-5 md:space-y-6">
                        {features.map((feature, index) => (
                            <div key={index} className="flex-col flex md:flex-row gap-3 sm:gap-4 md:gap-6 space-y-3.5 md:space-y-1 justify-center items-center md:items-start text-center md:text-start">
                                <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-secondary rounded-xl sm:rounded-2xl flex items-center justify-center">
                                    <Image src={feature.image} alt={feature.title} width={28} height={28} className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
                                </div>

                                <div className="flex-1 min-w-0">
                                    <h3 className="text-base sm:text-lg font-bold leading-tight sm:leading-5 text-gray-secondary mb-1 md:mb-2">{feature.title}</h3>
                                    <p className="text-sm font-normal text-gray-tertiary leading-5 sm:leading-6">{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
