import EmblaCarousel from '@/core/components/carousel/EmblaCarousel'
import CardHomeCustomer from '@/core/components/customers/CardHomeCustomer'
import Footer from '@/core/components/customers/Footer'
import Navbar from '@/core/components/customers/Header'
import Hero from '@/core/components/customers/Hero'
import MetaCustomer from '@/core/components/customers/MetaCustomer'
import TextLogo from '@/core/components/customers/TextLogo'
import Head from 'next/head'

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
      <MetaCustomer></MetaCustomer>
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
        <div className="text-[#A75D5D] font-semibold text-center px-16 mt-10 sm:text-xl md:text-2xl">
          Welcome to Melina Coffee, Where Aroma Waves and Perfect Flavors Await
          You.
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
              description="Indulge in our curated selection of coffees, each blend a testament to quality and flavor, promising a delightful journey with every sip. "
              imageUrl="/assets/images/card-product/Image-Coffee.jpg"
              linkText="View Menu"
              linkUrl="/product-customer"
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="1000">
            <CardHomeCustomer
              title="Non-Coffee"
              description="Discover our delightful selection of beverages beyond coffee, crafted with care using premium ingredients, from refreshing teas to flavorful smoothies."
              imageUrl="/assets/images/card-product/Non-Coffee.jpg"
              linkText="View Menu"
              linkUrl="/product-customer"
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="1000">
            <CardHomeCustomer
              title="Food"
              description="Experience a delectable array of savory dishes meticulously prepared to tantalize your taste buds, from classic favorites to chef-inspired creations."
              imageUrl="/assets/images/card-product/Nasi-Goreng-2.jpg"
              linkText="View Menu"
              linkUrl="/product-customer"
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="1000">
            <CardHomeCustomer
              title="Snack"
              description="Indulge in our tempting selection of snacks, perfect for those in-between cravings. From crispy bites to savory treats, there's something for every snack enthusiast."
              imageUrl="/assets/images/card-product/Kentang-Goreng.jpg"
              linkText="View Menu"
              linkUrl="/product-customer"
            />
          </div>
        </section>
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
