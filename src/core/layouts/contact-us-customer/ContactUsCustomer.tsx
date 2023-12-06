import Footer from '@/core/components/customers/Footer'
import Navbar from '@/core/components/customers/Header'
import MetaCustomer from '@/core/components/customers/MetaCustomer'
import TextLogo from '@/core/components/customers/TextLogo'

// const slides = [
//   <img
//     key="1"
//     src="/assets/images/card-product/Image-Coffee.jpg"
//     alt="Slide 1"
//   />,
//   <img
//     key="2"
//     src="/assets/images/card-product/Non-Coffee.jpg"
//     alt="Slide 2"
//   />,
//   <img
//     key="3"
//     src="/assets/images/card-product/Kentang-Goreng.jpg"
//     alt="Slide 3"
//   />,
// ]
export function ContactUsCustomer() {
  // const [opened, { open, close }] = useDisclosure(false)
  return (
    <div className="min-h-screen bg-gray-100 ">
      <MetaCustomer></MetaCustomer>
      <Navbar></Navbar>
      <div className="bg-white mt-16 pb-1">
        <div className="flex justify-center">
          <TextLogo title="Contact Us" />
        </div>
        <div className="text-[#A75D5D] font-semibold text-center px-16 mb-6 sm:text-xl"></div>
      </div>
      {/* Product Coffee Drinks */}
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className=" container mx-auto"
      >
        <section className="grid grid-cols-1 auto-rows-max md:grid-cols-2 gap-8 pb-16 mt-10 px-10 ">
          <img
            data-aos="fade-right"
            data-aos-duration="1000"
            src="/assets/images/contact-us/kedai_melina_coffee.jpg"
            className="min-h-full md:min-h-full w-full rounded-sm shadow-xl object-cover object-left max-h-96"
          />
          <div className="md:justify-start font-semibold text-[#A75D5D] px-4 text-sm ">
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              className="absolute w-16 h-1 md:justify-start  bg-red-300 mt-8"
            ></div>
            {/* Our Store */}
            MELINA COFFEE
            <div className="mt-8 text-gray-600">
              <span className="font-bold">Our Store is located</span> at
              Pertamina Complex, South Tangerang, East Ciputat, Pondok Ranji.
              <div className="flex flex-wrap items-center mt-8 mb-2">
                <img
                  data-aos="fade-left"
                  data-aos-duration="1000"
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
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  src="/assets/images/contact-us/phone-call.png"
                  className="mr-3 ml-1"
                  alt="Location Icon"
                />
                Phone Number
              </div>
              <div className="ml-10 text-gray-600">+62 858-8734-7103</div>
              <div className="flex flex-wrap items-center mt-4 mb-2">
                <img
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  src="/assets/images/contact-us/mail.png"
                  className="mr-2 "
                  alt="Location Icon"
                />
                Email
              </div>
              <div className="ml-10 text-gray-600">melinacoffee@gmail.com</div>
            </div>
          </div>
        </section>
      </div>
      {/* Maps */}
      <TextLogo title="Our Location" />

      <div className="flex md:justify-center sm:justify-center mb-8 text-[#A75D5D] font-semibold px-16 lg:text-md text-xl sm:text-xl md:text-base">
        <div className="flex justify-center">
          <a
            href="https://maps.app.goo.gl/4R2GbQBWMU4k62eh7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              data-aos="zoom-out"
              data-aos-duration="1000"
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
        className="flex justify-center p-8 bg-white border"
      >
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
  )
}
export default ContactUsCustomer
