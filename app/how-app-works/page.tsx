"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { ChevronDown, Send } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import ReadyForBooking from "@/components/ready-for-booking"

export default function Page() {
  // Country code mapping
  const countryCodes: Record<string, string> = {
    US: "+1",
    CA: "+1",
    UK: "+44",
    AU: "+61",
  }

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "US",
    phone: "",
    message: "",
    agreeToPolicy: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showCountryDropdown, setShowCountryDropdown] = useState(false)
  const countryDropdownRef = useRef<HTMLDivElement>(null)

  // Initialize phone with country code on mount
  useEffect(() => {
    const currentCode = countryCodes[formData.country] || ""
    if (formData.phone === "" || !formData.phone.startsWith("+")) {
      setFormData((prev) => ({
        ...prev,
        phone: currentCode,
      }))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (countryDropdownRef.current && !countryDropdownRef.current.contains(event.target as Node)) {
        setShowCountryDropdown(false)
      }
    }

    if (showCountryDropdown) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [showCountryDropdown])

  // Handle country selection from dropdown
  const handleCountrySelect = (country: string) => {
    const newCountryCode = countryCodes[country] || ""
    const currentCode = countryCodes[formData.country] || ""
    let numberPart = formData.phone.replace(currentCode, "").trim()

    if (!numberPart || numberPart === "") {
      setFormData((prev) => ({
        ...prev,
        country: country,
        phone: newCountryCode,
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        country: country,
        phone: `${newCountryCode} ${numberPart}`,
      }))
    }
    setShowCountryDropdown(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    // Handle country change - update phone number with new country code
    if (name === "country") {
      const newCountryCode = countryCodes[value] || ""
      // Extract the number part (everything after country code)
      const currentCode = countryCodes[formData.country] || ""
      let numberPart = formData.phone.replace(currentCode, "").trim()

      // If phone is empty or just the country code, set to new code only
      if (!numberPart || numberPart === "") {
        setFormData((prev) => ({
          ...prev,
          country: value,
          phone: newCountryCode,
        }))
      } else {
        // Keep the number part, just change the country code
        setFormData((prev) => ({
          ...prev,
          country: value,
          phone: `${newCountryCode} ${numberPart}`,
        }))
      }
      setShowCountryDropdown(false)
      return
    }

    // Handle phone number change
    if (name === "phone") {
      const countryCode = countryCodes[formData.country] || ""

      // If user deletes everything, keep just the country code
      if (!value || value.trim() === "") {
        setFormData((prev) => ({
          ...prev,
          phone: countryCode,
        }))
        return
      }

      // Remove all non-digit characters to get clean number
      const digitsOnly = value.replace(/\D/g, "")
      const codeDigits = countryCode.replace(/\D/g, "")

      // Extract the number part (remove country code digits if present at start)
      let numberDigits = digitsOnly
      if (digitsOnly.startsWith(codeDigits)) {
        numberDigits = digitsOnly.slice(codeDigits.length)
      }

      // Format the number part
      let formatted = ""
      if (numberDigits.length > 6) {
        formatted = `(${numberDigits.slice(0, 3)}) ${numberDigits.slice(3, 6)}-${numberDigits.slice(6, 10)}`
      } else if (numberDigits.length > 3) {
        formatted = `(${numberDigits.slice(0, 3)}) ${numberDigits.slice(3)}`
      } else if (numberDigits.length > 0) {
        formatted = `(${numberDigits}`
      }

      setFormData((prev) => ({
        ...prev,
        phone: `${countryCode} ${formatted}`.trim(),
      }))
      return
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    console.log("Form submitted:", formData)
    const resetCountryCode = countryCodes["US"] || ""
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      country: "US",
      phone: resetCountryCode,
      message: "",
      agreeToPolicy: false,
    })
    setIsSubmitting(false)
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Gradient Background Layer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(38deg, var(--purple-300, #C4B5FD) 44.13%, var(--red-300, #FDA4AF) 67.45%)",
          opacity: 0.21,
          filter: "blur(125px)",
          zIndex: 0,
        }}
      />

      {/* Content Layer */}
      <div className="relative z-10">
        <div className="mx-auto w-full max-w-lg py-20 px-4">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
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

            {/* Phone Number with Country Selector */}
            <div className="flex flex-col">
              <Label htmlFor="phone" className="mb-2 font-medium font-dm-sans text-base leading-5 text-gray-700">
                Phone number
              </Label>
              <div className="relative" ref={countryDropdownRef}>
                {/* Country Code Selector */}
                <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center z-10">
                <button
                  type="button"
                  onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                  className="flex items-center gap-1 font-medium font-dm-sans text-base leading-5 text-gray-700 hover:text-gray-900 focus:outline-none pr-2"
                >
                  <span>{formData.country}</span>
                  <ChevronDown className={`h-4 w-4 text-gray-600 transition-transform ${showCountryDropdown ? "rotate-180" : ""}`} />
                </button>
                  <div className="h-6 w-px bg-gray-200 ml-1" />
                </div>
                {/* Country Dropdown */}
                {showCountryDropdown && (
                  <div className="absolute top-full left-0 mt-1 bg-white border-2 border-gray-200 rounded-lg shadow-lg z-20 min-w-[100px]">
                    {Object.entries(countryCodes).map(([country, code]) => (
                      <button
                        key={country}
                        type="button"
                        onClick={() => handleCountrySelect(country)}
                        className={`w-full px-10 py-2 text-left font-medium font-dm-sans text-sm leading-5 hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg ${formData.country === country ? "bg-blue-50 text-blue-600" : "text-gray-700"
                          }`}
                      >
                        {country} {code}
                      </button>
                    ))}
                  </div>
                )}
                {/* Phone Input */}
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 000-0000"
                  className="w-full pl-20 focus:border-blue-500"
                  required
                  onFocus={(e) => {
                    // Set cursor position after country code if phone is just the code
                    const countryCode = countryCodes[formData.country] || ""
                    if (formData.phone === countryCode) {
                      setTimeout(() => {
                        e.target.setSelectionRange(countryCode.length + 1, countryCode.length + 1)
                      }, 0)
                    }
                  }}
                />
              </div>
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
            <div className="flex items-start gap-3">
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
              className="px-6 py-6 cursor-pointer w-full gap-10 font-semibold text-lg font-rethink-sans text-white hover:text-white"
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
        <ReadyForBooking />
      </div>
    </div>
  )
}
