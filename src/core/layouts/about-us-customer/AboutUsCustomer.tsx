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
export function AboutUsCustomer() {
  // const [opened, { open, close }] = useDisclosure(false)
  return (
    <div className="min-h-screen bg-gray-100 ">
      <MetaCustomer></MetaCustomer>
      <Navbar></Navbar>
      <div className="bg-white mt-16 pb-6">
        <div className="flex justify-center">
          <TextLogo title="About Us" />
        </div>
        <div className="text-[#A75D5D] font-semibold text-center px-16 mb-10 sm:text-xl">
          Melina Coffee is more than just a coffee shop, it's a culmination of
          passion, dedication, and a love for extraordinary coffee experiences.
          Our journey began with a vision to create a space where every cup
          tells a story.
          <br />
          <br />
          At Melina, we source the finest beans, handcraft each brew, and curate
          an atmosphere where coffee enthusiasts and casual sippers alike find
          solace. Our commitment extends beyond serving exceptional coffee, it's
          about fostering connections and creating moments that linger in
          memory.
        </div>
      </div>

      {/* Product Coffee Drinks */}

      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className=" container mx-auto"
      >
        <div className="flex md:justify-start sm:justify-center mb-8 text-[#A75D5D] font-semibold pt-10 px-16 lg:text-md text-xl sm:text-xl md:text-base">
          <div className="absolute w-16 h-1 bg-red-300 mt-8"></div>
          Our Story
        </div>
        <div className="text-gray-600 font-semibold text-left px-16 mb-10 text-sm">
          Melina Coffee's journey began with three passionate individuals driven
          by a singular vision: to create a haven where coffee enthusiasts like
          you could connect, converse, and craft stories over a perfect cup of
          coffee. The essence of our venture lies in fostering a community,
          transcending the ordinary, and embracing the art of conversation.
          <br />
          <br />
          From the moment you step into our space, you become part of this
          narrative. Each sip is a chapter, and every visit is an opportunity to
          add to the anthology of shared experiences. We are more than a coffee
          shop, we are a gathering place, a hub where the aroma of freshly
          brewed coffee intertwines with the tales spun by our patrons.
        </div>

        <section className="grid grid-cols-1 auto-rows-max md:grid-cols-2 gap-8 pb-16 px-10 ">
          <img
            data-aos="fade-right"
            data-aos-duration="1000"
            src="/assets/images/card-product/Non-Coffee.jpg"
            className=" sm:min-h-full md:min-h-full w-full  shadow-xl object-cover object-left max-h-96"
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
              <div className="mt-5">
                Melina Coffee is a family owned and operated coffee shop which
                provides a small town experience with big city appeal. It’s warm
                and friendly environment provides an excellent atmosphere to
                enjoy a great cup of coffee or sandwich, hang with friends, or
                do a bit of work using the FREE WiFi. Stop in today. We’d love
                to see ya …
              </div>
            </div>
          </div>
        </section>
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
export default AboutUsCustomer
