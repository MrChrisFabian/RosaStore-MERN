=== component.jsx ===

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/v1kgZiXV8g8
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"

export default function Component() {
  return (
    <div key="1" className="min-h-screen bg-[#FFF0F5] text-[#333] font-inter">
      <header className="bg-[#FF69B4] py-4 px-6 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <HammerIcon className="h-8 w-8 text-white" />
            <h1 className="text-2xl font-bold text-white">Nails Salon</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link className="text-white hover:underline" href="#">
              Home
            </Link>
            <Link className="text-white hover:underline" href="#">
              Services
            </Link>
            <Link className="text-white hover:underline" href="#">
              About
            </Link>
            <Link className="text-white hover:underline" href="#">
              Contact
            </Link>
          </nav>
          <Button className="text-white hover:bg-white hover:text-[#FF69B4] group" variant="outline">
            <span className="group-hover:visible">Book Now</span>
          </Button>
        </div>
      </header>
      <main className="container mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-6">Book Your Appointment</h2>
            <form className="space-y-6">
              <div>
                <Label htmlFor="service">Select Service</Label>
                <Select className="w-full" id="service">
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="manicure">Manicure</SelectItem>
                    <SelectItem value="pedicure">Pedicure</SelectItem>
                    <SelectItem value="acrylic-nails">Acrylic Nails</SelectItem>
                    <SelectItem value="gel-nails">Gel Nails</SelectItem>
                    <SelectItem value="nail-art">Nail Art</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="date">Select Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button className="w-full" variant="outline">
                      <span id="date-display">Select a date</span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="p-4">
                    <Calendar />
                  </PopoverContent>
                </Popover>
              </div>
              <div>
                <Label htmlFor="time">Select Time</Label>
                <Select className="w-full" id="time">
                  <SelectTrigger>
                    <SelectValue placeholder="Select a time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="9:00am">9:00 AM</SelectItem>
                    <SelectItem value="10:00am">10:00 AM</SelectItem>
                    <SelectItem value="11:00am">11:00 AM</SelectItem>
                    <SelectItem value="12:00pm">12:00 PM</SelectItem>
                    <SelectItem value="1:00pm">1:00 PM</SelectItem>
                    <SelectItem value="2:00pm">2:00 PM</SelectItem>
                    <SelectItem value="3:00pm">3:00 PM</SelectItem>
                    <SelectItem value="4:00pm">4:00 PM</SelectItem>
                    <SelectItem value="5:00pm">5:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full bg-[#FF69B4] text-white hover:bg-[#F08080]" type="submit">
                Book Appointment
              </Button>
            </form>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-3xl font-bold mb-6">Our Services</h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[#FFF0F5] rounded-lg p-4 text-center">
                <HammerIcon className="h-12 w-12 mx-auto mb-4 text-[#FF69B4]" />
                <h3 className="text-lg font-bold mb-2">Manicure</h3>
                <p className="text-sm text-[#666]">Pamper your hands with our luxurious manicure service.</p>
              </div>
              <div className="bg-[#FFF0F5] rounded-lg p-4 text-center">
                <FootprintsIcon className="h-12 w-12 mx-auto mb-4 text-[#FF69B4]" />
                <h3 className="text-lg font-bold mb-2">Pedicure</h3>
                <p className="text-sm text-[#666]">Treat your feet to a relaxing and rejuvenating pedicure.</p>
              </div>
              <div className="bg-[#FFF0F5] rounded-lg p-4 text-center">
                <PaintbrushIcon className="h-12 w-12 mx-auto mb-4 text-[#FF69B4]" />
                <h3 className="text-lg font-bold mb-2">Acrylic Nails</h3>
                <p className="text-sm text-[#666]">Get the perfect set of long-lasting acrylic nails.</p>
              </div>
              <div className="bg-[#FFF0F5] rounded-lg p-4 text-center">
                <PaintbrushIcon className="h-12 w-12 mx-auto mb-4 text-[#FF69B4]" />
                <h3 className="text-lg font-bold mb-2">Gel Nails</h3>
                <p className="text-sm text-[#666]">Enjoy the beauty and durability of our gel nail services.</p>
              </div>
              <div className="bg-[#FFF0F5] rounded-lg p-4 text-center">
                <PaintbrushIcon className="h-12 w-12 mx-auto mb-4 text-[#FF69B4]" />
                <h3 className="text-lg font-bold mb-2">Nail Art</h3>
                <p className="text-sm text-[#666]">Express your style with our creative nail art designs.</p>
              </div>
              <div className="bg-[#FFF0F5] rounded-lg p-4 text-center">
                <PaintbrushIcon className="h-12 w-12 mx-auto mb-4 text-[#FF69B4]" />
                <h3 className="text-lg font-bold mb-2">Nail Treatments</h3>
                <p className="text-sm text-[#666]">
                  Nourish and strengthen your nails with our specialized treatments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-[#FF69B4] py-4 px-6 text-white">
        <div className="container mx-auto flex items-center justify-between">
          <p>� 2023 Nails Salon. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <Link className="hover:underline" href="#">
              Privacy Policy
            </Link>
            <Link className="hover:underline" href="#">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FootprintsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z" />
      <path d="M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z" />
      <path d="M16 17h4" />
      <path d="M4 13h4" />
    </svg>
  )
}


function HammerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9" />
      <path d="M17.64 15 22 10.64" />
      <path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25v-.86L16.01 4.6a5.56 5.56 0 0 0-3.94-1.64H9l.92.82A6.18 6.18 0 0 1 12 8.4v1.56l2 2h2.47l2.26 1.91" />
    </svg>
  )
}


function PaintbrushIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z" />
      <path d="M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7" />
      <path d="M14.5 17.5 4.5 15" />
    </svg>
  )
}

=== styles.css ===

body {
  font-family: var(--font-inter), serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-poppins), serif;
}

=== layout.jsx ===

// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required

import { Poppins } from 'next/font/google'
import { Inter } from 'next/font/google'
import './styles.css'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.variable + inter.variable}>
        {children}
      </body>
    </html>
  )
}