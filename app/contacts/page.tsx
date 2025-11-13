"use client"

import type React from "react"

import { useState } from "react"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Page() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    agreeToPolicy: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handlePhoneChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      phone: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    console.log("Form submitted:", formData)
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      agreeToPolicy: false,
    })
    setIsSubmitting(false)
  }

  return (
    <div className="relative overflow-hidden bg-color">
      <div className="bg-color">
        {/* Gradient Background Layer */}
        <div
          className="absolute inset-0 pointer-events-none top-40 z-10 bg-contact-us-gradient" />

        {/* Bottom Fade Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-20 bg-gradient-to-t from-[#ffffff] to-transparent" />

        {/* Content Layer */}
        <div className="relative z-10">
          <div className="mx-auto w-full max-w-lg pt-28 px-4 pb-32">
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* First Name & Last Name - Side by side on desktop */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <Label htmlFor="firstName" className="mb-2 font-medium font-dm-sans text-base leading-5 text-gray-700">
                    First name
                  </Label>
                  <Input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First name"
                    className="focus:border-blue-500"
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <Label htmlFor="lastName" className="mb-2 font-medium font-dm-sans text-base leading-5 text-gray-700">
                    Last name
                  </Label>
                  <Input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last name"
                    className="focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <Label htmlFor="email" className="mb-2 font-medium font-dm-sans text-base leading-5 text-gray-700">
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className="focus:border-blue-500"
                  required
                />
              </div>

              {/* Phone Number */}
              <div className="flex flex-col">
                <Label htmlFor="phone" className="mb-2 font-medium font-dm-sans text-base leading-5 text-gray-700">
                  Phone number
                </Label>
                <PhoneInput
                  country={"us"}
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  inputProps={{
                    id: "phone",
                    name: "phone",
                    required: true,
                  }}
                  containerClass="phone-input-container"
                  inputClass="phone-input"
                  buttonClass="phone-button"
                  dropdownClass="phone-dropdown"
                  containerStyle={{
                    width: "100%",
                  }}
                  inputStyle={{
                    width: "100%",
                    height: "56px",
                    borderRadius: "12px",
                    border: "2px solid #e5e7eb",
                    paddingLeft: "60px",
                    fontSize: "16px",
                    fontFamily: "inherit",
                    color: "#111827",
                    transition: "border-color 0.2s",
                  }}
                  buttonStyle={{
                    border: "none",
                    borderRight: "1px solid #e5e7eb",
                    borderRadius: "12px 0 0 12px",
                    background: "transparent",
                    paddingLeft: "16px",
                    paddingRight: "8px",
                  }}
                  dropdownStyle={{
                    borderRadius: "8px",
                    border: "2px solid #e5e7eb",
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                  }}
                />
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <Label htmlFor="message" className="mb-2 font-medium font-dm-sans text-base leading-5 text-gray-700">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows={6}
                  className="focus:border-blue-500"
                  required
                />
              </div>

              {/* Privacy Policy Checkbox */}
              <div className="flex items-start gap-3 pb-4">
                <input
                  type="checkbox"
                  id="policy"
                  name="agreeToPolicy"
                  checked={formData.agreeToPolicy}
                  onChange={handleChange}
                  className="mt-1 h-5 w-5 rounded border-2 border-gray-200 text-blue-500 transition-colors focus:border-blue-500 focus:outline-none cursor-pointer accent-blue-500"
                  required
                />
                <Label htmlFor="policy" className="text-base text-gray-600 font-normal font-inter mt-1">
                  You agree to our friendly{" "}
                  <a href="#" className="text-base font-inter text-netural-primary font-normal underline hover:text-blue-600">
                    privacy policy
                  </a>
                  .
                </Label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                variant="outline"
                className="px-6 py-3 cursor-pointer w-full gap-10 font-semibold text-lg font-rethink-sans text-white hover:text-white"
                style={{
                  borderRadius: '16px',
                  border: '1px solid var(--Temp-UntitledStyle, #000)',
                  background: 'var(--Gradient, linear-gradient(286deg, var(--purple-500, #8B5CF6) -5.43%, var(--purple-800, #5B21B6) 111.96%))',
                  boxShadow: '0 0 0 1px #FFF inset, 0 0 0 1.5px var(--purple-50, #F5F3FF) inset, 0 0 0 1px var(--purple-300, #C4B5FD), 0 8px 16px 0 var(--purple-100, #EDE9FE), 0 16px 32px 0 var(--purple-100, #EDE9FE)',
                }}
              >
                Send a Message
                <Image src="/downArrow.svg" alt="submit" width={32} height={32} />
              </Button>
            </form>
          </div>
        </div>
    </div>
  </div>
)
}
