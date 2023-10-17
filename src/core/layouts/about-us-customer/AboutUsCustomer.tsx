// pages/index.tsx

import EmblaCarousel from '@/core/components/carousel/EmblaCarousel'
import Footer from '@/core/components/customers/Footer'
import Navbar from '@/core/components/customers/Header'
import Hero from '@/core/components/customers/Hero'
import ProductCard from '@/core/components/customers/ProductCard'
import TextLogo from '@/core/components/customers/TextLogo'

export function AboutUsCustomer() {
  return (
    <div className="min-h-screen bg-gray-100 ">
      <Navbar></Navbar>
      <div className="bg-white mt-16 pb-6">
        <div className="flex justify-center">
          <TextLogo title="About Us" />
        </div>
        <div className="text-[#A75D5D] font-semibold text-center px-5 mb-10 lg:text-sm md:text-sm sm:text-xl">
          INI ADALAH MENGENAI CERITA DAN PERJALANAN KAMI, APA YANG KAMI LAKUKAN,
          SERTA ORANG - ORANG DI BELAKANG BRAND COFFEE MELINA
        </div>
      </div>
      <div className="bg-gray-100  pb-6 ">
        <div className="flex md:justify-start sm:justify-center mb-10 text-[#A75D5D] font-semibold pt-10 px-16 lg:text-md text-xl sm:text-xl md:text-base">
          <div className="absolute w-16 h-1 bg-red-300 mt-8"></div>
          About Us
        </div>
        <div className="text-[#A75D5D] font-semibold text-left sm:text-start px-16 mb-10 lg:text-sm md:text-sm sm:text-xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 auto-rows-max sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 pb-16 px-10">
          <img
            src="/assets/images/card-product/Non-Coffee.jpg"
            className=" sm:min-h-full w-full shadow-xl object-cover object-left max-h-64"
          />
          <div className="flex justify-center bg-red px-5 text-[#A75D5D] font-semibold text-left sm:text-center mb-10 lg:text-sm md:text-sm sm:text-xl">
            KINTILLLL dapat menyebabkan kontol
          </div>
        </div>
      </div>
      {/* Product Coffee Drinks */}

      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className=" container mx-auto"
      ></div>
      <div className="flex justify-center p-8 bg-white border">
        <img
          src="/assets/images/login/melina_coffee_logo1_removebg.png"
          className="h-8 mr-2"
        />
        <span className="text-[#A75D5D] font-semibold text-xl">
          Melina Coffee
        </span>
      </div>
      {/* <EmblaCarousel
        slides={[
          <img
            key="1"
            src="/assets/images/card-product/Image-Coffee.jpg"
            alt="Slide 1"
          />,
          <img
            key="2"
            src="/assets/images/card-product/Nasi-Goreng-2.jpg"
            alt="Slide 2"
          />,
          <img
            key="3"
            src="/assets/images/card-product/Kentang-Goreng.jpg"
            alt="Slide 3"
          />,
        ]}
        options={{ autoplay: 5000 }} // Autoplay setiap 5 detik
      /> */}
      <Footer></Footer>
    </div>
    // </div>
  )
}
export default AboutUsCustomer
