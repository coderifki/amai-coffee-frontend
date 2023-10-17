import EmblaCarousel from '@/core/components/carousel/EmblaCarousel'
import CardHomeCustomer from '@/core/components/customers/CardHomeCustomer'
import Footer from '@/core/components/customers/Footer'
import Navbar from '@/core/components/customers/Header'
import Hero from '@/core/components/customers/Hero'
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
export function HomeDashboardCustomer() {
  return (
    <div className="min-h-screen bg-gray-100 ">
      <Navbar></Navbar>
      <Hero></Hero>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="container mx-auto"
      >
        <div className="flex justify-center mt-10">
          <img
            src="/assets/images/login/melina_coffee_logo1_removebg.png"
            className="h-9 mr-2"
          />
          <div className="text-[#A75D5D] font-semibold text-3xl mb-4">
            Melina Coffee
            <div className="absolute w-16 h-2 ms-12 my-5 bg-red-300 "></div>
          </div>
        </div>
        <div className="text-[#A75D5D] font-semibold text-center px-5 mt-10 sm:text-xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of typed
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className=" container mx-auto"
      >
        <TextLogo title="Our Menu" />

        <section className="grid grid-cols-1 auto-rows-max sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-16 px-10 ">
          <div data-aos="fade-up" data-aos-duration="1000">
            <CardHomeCustomer
              title="Coffee"
              description="Explore our wide range of delicious coffee and pastries made with the finest ingredients."
              imageUrl="/assets/images/card-product/Image-Coffee.jpg"
              linkText="View Menu"
              linkUrl="/product-customer"
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="1000">
            <CardHomeCustomer
              title="Non-Coffee"
              description="Learn about our story, our team, and our commitment to providing the best cafe experience."
              imageUrl="/assets/images/card-product/Non-Coffee.jpg"
              linkText="View Menu"
              linkUrl="/product-customer"
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="1000">
            <CardHomeCustomer
              title="Food"
              description="Learn about our story, our team, and our commitment to providing the best cafe experience."
              imageUrl="/assets/images/card-product/Nasi-Goreng-2.jpg"
              linkText="View Menu"
              linkUrl="/product-customer"
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="1000">
            <CardHomeCustomer
              title="Snack"
              description="Learn about our story, our team, and our commitment to providing the best cafe experience."
              imageUrl="/assets/images/card-product/Kentang-Goreng.jpg"
              linkText="View Menu"
              linkUrl="/product-customer"
            />
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
export default HomeDashboardCustomer
