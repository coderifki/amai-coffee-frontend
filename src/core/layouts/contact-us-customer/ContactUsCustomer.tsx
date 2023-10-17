// pages/index.tsx

import EmblaCarousel from '@/core/components/carousel/EmblaCarousel'
import Footer from '@/core/components/customers/Footer'
import Navbar from '@/core/components/customers/Header'
import Hero from '@/core/components/customers/Hero'
import ProductCard from '@/core/components/customers/ProductCard'
import TextLogo from '@/core/components/customers/TextLogo'
import Aos from 'aos'
import { useEffect } from 'react'

export function ContactUsCustomer() {
  useEffect(() => {
    Aos.init()
    // Cleanup AOS on component unmount
    return () => {
      Aos.refresh() // Optional: Reset AOS on component unmount
    }
  }, []) // Only run this effect once when the component mounts
  return (
    <div className="min-h-screen bg-gray-100 ">
      <Navbar></Navbar>
      <div className="bg-white mt-16 pb-6">
        <div className="flex justify-center">
          <TextLogo title="Contact Us" />
        </div>
        <div className="text-[#A75D5D] font-semibold text-center px-5  lg:text-sm md:text-sm sm:text-xl"></div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="container mx-auto"
      >
        <div className="grid grid-cols-1 auto-rows-max sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 pb-16 px-10 mt-8">
          <div data-aos="fade-right" data-aos-duration="1000">
            <img
              data-aos="fade-right"
              data-aos-duration="1000"
              src="/assets/images/contact-us/VintageIki.jpg"
              className=" sm:min-h-full md:min-h-full w-full  shadow-xl object-cover object-left max-h-96"
            />
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="md:justify-start  font-semibold  text-[#A75D5D] px-4 lg:text-md sm:text-sm "
          >
            <div className="absolute w-16 h-1 md:justify-start  bg-red-300 mt-8"></div>
            {/* Our Store */}
            OUR STORE AT:
            <div className="mt-8 text-gray-600">
              <span className="font-bold">Our Store is located</span> at
              Pertamina Complex, South Tangerang, East Ciputat, Pondok Ranji.
            </div>
            {/* Our Address */}
            <div className="flex flex-wrap items-center mt-8 mb-2">
              <img
                src="/assets/images/contact-us/location.png"
                className="mr-2"
                alt="Location Icon"
              />
              Our Address
            </div>
            <div className="ml-10 text-gray-600">Alvania Street</div>
            {/* Phone Number */}
            <div className="flex flex-wrap items-center mt-4 mb-2">
              <img
                src="/assets/images/contact-us/phone-call.png"
                className="mr-3 ml-1"
                alt="Location Icon"
              />
              Phone Number
            </div>
            <div className="ml-10 text-gray-600">+62 858-8734-7103</div>
            <div className="flex flex-wrap items-center mt-4 mb-2">
              <img
                src="/assets/images/contact-us/mail.png"
                className="mr-2 "
                alt="Location Icon"
              />
              Email
            </div>
            <div className="ml-10 text-gray-600">melinacoffee@gmail.com</div>
          </div>
        </div>
        {/* Maps */}
        <div className="flex justify-center">
          <TextLogo title="Our Location" />
        </div>
        <div className="flex justify-center">
          <a
            href="https://maps.app.goo.gl/4R2GbQBWMU4k62eh7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/images/contact-us/kios-alvania.png"
              className="shadow-xl rounded-md max-h-[50rem] max-w-[50rem] mb-10 w-full"
              alt="Location Icon"
            />
          </a>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className=" container mx-auto"
      ></div>

      <Footer></Footer>
    </div>
  )
}
export default ContactUsCustomer
