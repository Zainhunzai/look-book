"use client"

import { useState, useEffect } from "react"
import { ChevronRight, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import ReadyForBooking from "@/components/ready-for-booking"

const resourcesData = [
    {
        id: 1,
        title: "3 steps to build your profile",
        description: "How do you create compelling presentations that wow your colleagues and impress your managers?",
        category: "Booking Stylist",
        image: "/card1.png",
        author: {
            name: "Olivia Rhye",
            date:"17 Oct 2025",
            avatar: "/profile1.png",
        },
    },
    {
        id: 2,
        title: "3 steps to build your profile",
        description: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
        category: "Booking Stylist",
        image: "/card2.png",
        author: {
            name: "Phoenix Baker",
            date:"17 Oct 2025",
            avatar: "/profile2.png",
        },
    },
    {
        id: 3,
        title: "3 steps to build your profile",
        description: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
        category: "Booking Stylist",
        image: "/card3.png",
        author: {
            name: "Lana Steiner",
            date:"17 Oct 2025",
            avatar: "/profile3.png",
        },
    },
    {
        id: 4,
        title: "Bill Walsh leadership lessons",
        description:"Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
        category: "Management",
        image: "/card4.png",
        author: {
            name: "Alec Whitten",
            date:"29 Oct 2025",
            avatar: "/profile4.png",
        },
    },
    {
        id: 5,
        title: "PM mental models",
        description:
            "Mental models are simple expressions of complex processes or relationships.",
        category: "Product",
        image: "/card5.png",
        author: {
            name: "Demi WIlkinson",
            date:"17 Oct 2025",
            avatar: "/profile5.png",
        },
    },
    {
        id: 6,
        title: "What is Wireframing?",
        description:
            "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
        category: "Design",
        image: "/card6.png",
        author: {
            name: "Candice Wu",
            date:"17 Oct 2025",
            avatar: "/profile6.png",
        },
    },
    {
        id: 7,
        title: "How collaboration makes us better designers",
        description:
            "Collaboration can make our teams stronger, and our individual designs better.",
        category: "Design",
        image: "/card7.png",
        author: {
            name: "Natali Craig",
            date:"17 Oct 2025",
            avatar: "/profile7.png",
        },
    },
    {
        id: 8,
        title: "Our top 10 resources for success",
        description:
            "JavaScript frameworks make development easy with extensive features and functionalities.",
        category: "Product",
        image: "/card8.png",
        author: {
            name: "Drew Cano",
            date:"17 Oct 2025",
            avatar: "/profile8.png",
        },
    },
    {
        id: 9,
        title: "Podcast: Creating a better CX Community",
        description:
            "Starting a community doesn’t need to be complicated, but how do you get started?",
        category: "Customer Success",
        image: "/card9.png",
        author: {
            name: "Orlando Diggs",
            date:"17 Oct 2025",
            avatar: "/profile9.png",
        },
    },
]

export default function ResourcesPage() {
    const [showAll, setShowAll] = useState(false)
    // Initialize with window size check (safe in client component)
    const [isLargeScreen, setIsLargeScreen] = useState(() => {
        if (typeof window !== 'undefined') {
            return window.innerWidth >= 1024
        }
        return false
    })

    // Detect screen size (lg breakpoint is 1024px)
    useEffect(() => {
        const checkScreenSize = () => {
            setIsLargeScreen(window.innerWidth >= 1024)
        }

        // Check on mount (in case of SSR mismatch)
        checkScreenSize()

        // Add event listener for window resize
        window.addEventListener('resize', checkScreenSize)

        // Cleanup
        return () => window.removeEventListener('resize', checkScreenSize)
    }, [])

    // Show all 9 cards on lg screens, 6 cards on smaller screens
    const initialCount = isLargeScreen ? resourcesData.length : 6
    const displayedResources = showAll || isLargeScreen 
        ? resourcesData 
        : resourcesData.slice(0, initialCount)
    const remainingCount = resourcesData.length - initialCount

    return (
        <main className="relative min-h-screen overflow-hidden bg-white">
            {/* Background Gradient */}
            <div
                className="absolute inset-x-0 top-0 pointer-events-none"
                style={{
                    minHeight: "100vh",
                    height: "100vh",
                    background: "linear-gradient(180deg, rgba(196, 181, 253, 0.9) 0%, rgba(253, 164, 175, 0.6) 55%, rgba(253, 164, 175, 0) 100%)",
                    opacity: 0.21,
                    filter: "blur(125px)",
                    zIndex: 0
                }}
            />

            {/* Content Layer */}
            <div className="relative z-10">
                {/* Header Section */}
                <div className="py-12 md:py-16 lg:py-20">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="bg-[#F9F5FF] w-fit px-3 py-2 rounded-full mx-auto">
                            <p className="text-purple-700 text-sm font-inter font-medium leading-5">Our blog</p>
                        </div>
                        <div className="text-center">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-purple-dark font-inter leading-16 py-6 ;">
                                Resources and insights
                            </h1>
                            <p className="text-base md:text-xl text-purple-700 font-inter font-normal leading-8 text-balance">
                                The latest industry news, interviews, technologies, and resources.
                            </p>
                            <div className="mt-6 flex justify-center gap-3 max-w-96 mx-auto">
                                <div className="relative w-full">
                                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
                                    <Input
                                        className="w-full pl-12"
                                        placeholder="Search"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16 overflow-visible">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {displayedResources.map((resource, index) => (
                            <div key={resource.id} className={index === 0 ? "relative" : ""}>
                                {/* Background Bands for First Card */}
                                {index === 0 && (
                                    <>
                                        {/* // left side */}
                                        <div className="absolute left-0 top-0 -z-10 pointer-events-none w-full h-full overflow-visible">
                                            <Image
                                                src="/Left-band1.svg"
                                                alt="band"
                                                width={466}
                                                height={130}
                                                className="absolute -left-48 sm:-left-56 lg:-left-90 top-72"
                                            />
                                            <Image
                                                src="/Left-band2.svg"
                                                alt="band"
                                                width={466}
                                                height={130}
                                                className="absolute -left-40 sm:-left-48 lg:-left-90 top-88"
                                            />
                                        </div>

                                        {/* // right side  */}
                                        <div className="hidden lg:block absolute right-0 lg:-right-210 top-0 -z-20 pointer-events-none w-full h-full">
                                        <Image
                                                src="/Left-band2.svg"
                                                alt="band"
                                                width={466}
                                                height={130}
                                                className="absolute -right-40 sm:-right-48 lg:-right-90 top-50"
                                            />
                                            <Image
                                                src="/Left-band1.svg"
                                                alt="band"
                                                width={466}
                                                height={130}
                                                className="absolute -right-48 sm:-right-56 lg:-right-90 top-90"
                                            />
                                               <Image
                                                src="/Right-band-2.svg"
                                                alt="band"
                                                width={466}
                                                height={130}
                                                className="absolute right-40 sm:-right-48 lg:-right-90 top-72"
                                            />
                                          
                                        </div>
                                    </>
                                )}

                                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full p-5 relative z-10">
                                    {/* Image Container */}
                                    <div className="relative w-full h-48 overflow-hidden bg-slate-400">
                                        <img
                                            src={resource.image || "/placeholder.svg"}
                                            alt={resource.title}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>

                                    <CardContent className="flex flex-col grow relative z-10 px-0">
                                        {/* Category and Arrow */}
                                        <div className="flex items-start justify-between">
                                            <span className="text-sm font-semibold text-purple-700 font-inter leading-5 tracking-wider">{resource.category}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            {/* Title */}
                                            <h3 className="w-3/4 text-lg lg:text-2xl font-semibold text-gray-900 my-3 leading-6">{resource.title}</h3>
                                        <Image src="/arrow-up.svg" alt="arrow" height={24} width={24} className="items-center flex justify-center"/>
                                        </div>
                                        {/* Description */}
                                        <p className="text-sm lg:text-base font-normal font-inter leading-6 text-gray-500 mb-5 grow line-clamp-3">{resource.description}</p>

                                        {/* Author Info */}
                                        <div className="flex items-center gap-3 border-slate-100 pt-4 mt-auto">
                                            <img
                                                src={resource.author.avatar || "/placeholder.svg"}
                                                alt={resource.author.name}
                                                className="h-8 w-8 rounded-full object-cover"
                                            />
                                            <div>
                                            <span className="text-sm font-medium text-slate-700">{resource.author.name}</span>
                                            <p>{resource.author.date}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>

                    <div className="hidden lg:flex mt-12 justify-center">
                            <Button
                            variant="outline"
                                className="bg-[#F9F5FF] hover:bg-purple-100  text-purple-700 hover:text-purple-600 px-5 py-3"
                            >
                                <Image src="/download-icon.svg" alt="arrow" width={12} height={12}/>
                                Load more
                            </Button>
                        </div>

                    {/* Load More Button - Show on mobile/tablet when there are more cards */}
                    {!isLargeScreen && !showAll && remainingCount > 0 && (
                        <div className="mt-12 flex justify-center">
                            <Button
                                onClick={() => setShowAll(true)}
                                className="bg-[#F9F5FF] hover:bg-purple-100  text-purple-700 hover:text-purple-600 px-5 py-3"
                            >
                                Load more
                                <ChevronRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </main>
    )
}
