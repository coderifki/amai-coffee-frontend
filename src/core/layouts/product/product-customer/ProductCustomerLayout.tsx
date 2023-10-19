import Footer from '@/core/components/customers/Footer'
import Navbar from '@/core/components/customers/Header'
import ProductCard from '@/core/components/customers/ProductCard'
import TextLogo from '@/core/components/customers/TextLogo'
import { useDisclosure } from '@mantine/hooks'

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
export function ProductCustomerLayout() {
  // const [opened, { open, close }] = useDisclosure(false)
  return (
    <div className="min-h-screen bg-gray-100 ">
      <Navbar></Navbar>
      <div className="bg-white mt-16 pb-6">
        <div className="flex justify-center">
          <TextLogo title="Our Menu" />
        </div>
        <div className="text-[#A75D5D] font-semibold text-center px-16 mb-10 sm:text-xl">
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

      {/* Product Coffee Drinks */}

      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className=" container mx-auto"
      >
        <TextLogo title="Coffee Drinks" />
        <div className="text-gray-600 font-semibold text-center px-16 mb-10 sm:text-xl">
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

        <section className="grid grid-cols-1 auto-rows-max md:grid-cols-2 gap-8 pb-16 px-10 ">
          <div data-aos="zoom-in-up" data-aos-duration="1000">
            <ProductCard
              title="Coffee"
              description="Explore our wide range of delicious coffee and pastries made with the finest ingredients."
              imageUrl="/assets/images/card-product/Image-Coffee.jpg"
            />
          </div>
          <div data-aos="zoom-in-up" data-aos-duration="1000">
            <ProductCard
              title="Non-Coffee"
              description="Learn about our story, our team, and our commitment to providing the best cafe experience."
              imageUrl="/assets/images/card-product/Non-Coffee.jpg"
            />
          </div>
          <div data-aos="zoom-in-up" data-aos-duration="1000">
            <ProductCard
              title="Food"
              description="Learn about our story, our team, and our commitment to providing the best cafe experience."
              imageUrl="/assets/images/card-product/Nasi-Goreng-2.jpg"
            />
          </div>
          <div data-aos="zoom-in-up" data-aos-duration="1000">
            <ProductCard
              title="Snack"
              description="Learn about our story, our team, and our commitment to providing the best cafe experience."
              imageUrl="/assets/images/card-product/Kentang-Goreng.jpg"
            />
          </div>
          <div data-aos="zoom-in-up" data-aos-duration="1000">
            <ProductCard
              title="Snack"
              description="Learn about our story, our team, and our commitment to providing the best cafe experience."
              imageUrl="/assets/images/card-product/Kentang-Goreng.jpg"
            />
          </div>
          <div data-aos="zoom-in-up" data-aos-duration="1000">
            <ProductCard
              title="Snack"
              description="Learn about our story, our team, and our commitment to providing the best cafe experience."
              imageUrl="/assets/images/card-product/Kentang-Goreng.jpg"
            />
          </div>
        </section>
      </div>

      {/* Product Non-Coffee Drinks */}

      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className=" container mx-auto"
      >
        <TextLogo title="Non-Coffee Drinks" />
        <div className="text-gray-600 font-semibold text-center px-5 mb-10 sm:text-xl">
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

        <section className="grid grid-cols-1 auto-rows-max md:grid-cols-2 gap-8 pb-16 px-10 ">
          <div data-aos="zoom-in-up" data-aos-duration="1000">
            <ProductCard
              title="Coffee"
              description="Explore our wide range of delicious coffee and pastries made with the finest ingredients."
              imageUrl="/assets/images/card-product/Image-Coffee.jpg"
            />
          </div>
          <div data-aos="zoom-in-up" data-aos-duration="1000">
            <ProductCard
              title="Non-Coffee"
              description="Learn about our story, our team, and our commitment to providing the best cafe experience."
              imageUrl="/assets/images/card-product/Non-Coffee.jpg"
            />
          </div>
          <div data-aos="zoom-in-up" data-aos-duration="1000">
            <ProductCard
              title="Food"
              description="Learn about our story, our team, and our commitment to providing the best cafe experience."
              imageUrl="/assets/images/card-product/Nasi-Goreng-2.jpg"
            />
          </div>
          <div data-aos="zoom-in-up" data-aos-duration="1000">
            <ProductCard
              title="Snack"
              description="Learn about our story, our team, and our commitment to providing the best cafe experience."
              imageUrl="/assets/images/card-product/Kentang-Goreng.jpg"
            />
          </div>
          <div data-aos="zoom-in-up" data-aos-duration="1000">
            <ProductCard
              title="Snack"
              description="Learn about our story, our team, and our commitment to providing the best cafe experience."
              imageUrl="/assets/images/card-product/Kentang-Goreng.jpg"
            />
          </div>
          <div data-aos="zoom-in-up" data-aos-duration="1000">
            <ProductCard
              title="Snack"
              description="Learn about our story, our team, and our commitment to providing the best cafe experience."
              imageUrl="/assets/images/card-product/Kentang-Goreng.jpg"
            />
          </div>
        </section>
      </div>

      {/* Product Foods */}

      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className=" container mx-auto"
      >
        <TextLogo title="Foods" />
        <div className="text-gray-600 font-semibold text-center px-5 mb-10 sm:text-xl">
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
        <section className="grid grid-cols-1 auto-rows-max md:grid-cols-2 gap-8 pb-16 px-10 ">
          <div data-aos="zoom-in-up" data-aos-duration="1000">
            <ProductCard
              title="Coffee"
              description="Explore our wide range of delicious coffee and pastries made with the finest ingredients."
              imageUrl="/assets/images/card-product/Image-Coffee.jpg"
            />
          </div>
          <div data-aos="zoom-in-up" data-aos-duration="1000">
            <ProductCard
              title="Non-Coffee"
              description="Learn about our story, our team, and our commitment to providing the best cafe experience."
              imageUrl="/assets/images/card-product/Non-Coffee.jpg"
            />
          </div>
          <div data-aos="zoom-in-up" data-aos-duration="1000">
            <ProductCard
              title="Food"
              description="Learn about our story, our team, and our commitment to providing the best cafe experience."
              imageUrl="/assets/images/card-product/Nasi-Goreng-2.jpg"
            />
          </div>
          <div data-aos="zoom-in-up" data-aos-duration="1000">
            <ProductCard
              title="Snack"
              description="Learn about our story, our team, and our commitment to providing the best cafe experience."
              imageUrl="/assets/images/card-product/Kentang-Goreng.jpg"
            />
          </div>
          <div data-aos="zoom-in-up" data-aos-duration="1000">
            <ProductCard
              title="Snack"
              description="Learn about our story, our team, and our commitment to providing the best cafe experience."
              imageUrl="/assets/images/card-product/Kentang-Goreng.jpg"
            />
          </div>
          <div data-aos="zoom-in-up" data-aos-duration="1000">
            <ProductCard
              title="Snack"
              description="Learn about our story, our team, and our commitment to providing the best cafe experience."
              imageUrl="/assets/images/card-product/Kentang-Goreng.jpg"
            />
          </div>
        </section>
      </div>

      {/* Product Snacks */}

      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className=" container mx-auto"
      >
        <TextLogo title="Snacks" />
        <div className="text-gray-600 font-semibold text-center px-5 mb-10 sm:text-xl">
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
        <section className="grid grid-cols-1 auto-rows-max md:grid-cols-2 gap-8 pb-16 px-10 ">
          <div data-aos="zoom-in-up" data-aos-duration="1000">
            <ProductCard
              title="Coffee"
              description="Explore our wide range of delicious coffee and pastries made with the finest ingredients."
              imageUrl="/assets/images/card-product/Image-Coffee.jpg"
            />
          </div>
          <div data-aos="zoom-in-up" data-aos-duration="1000">
            <ProductCard
              title="Non-Coffee"
              description="Learn about our story, our team, and our commitment to providing the best cafe experience."
              imageUrl="/assets/images/card-product/Non-Coffee.jpg"
            />
          </div>
          <div data-aos="zoom-in-up" data-aos-duration="1000">
            <ProductCard
              title="Food"
              description="Learn about our story, our team, and our commitment to providing the best cafe experience."
              imageUrl="/assets/images/card-product/Nasi-Goreng-2.jpg"
            />
          </div>
          <div data-aos="zoom-in-up" data-aos-duration="1000">
            <ProductCard
              title="Snack"
              description="Learn about our story, our team, and our commitment to providing the best cafe experience."
              imageUrl="/assets/images/card-product/Kentang-Goreng.jpg"
            />
          </div>
          <div data-aos="zoom-in-up" data-aos-duration="1000">
            <ProductCard
              title="Snack"
              description="Learn about our story, our team, and our commitment to providing the best cafe experience."
              imageUrl="/assets/images/card-product/Kentang-Goreng.jpg"
            />
          </div>
          <div data-aos="zoom-in-up" data-aos-duration="1000">
            <ProductCard
              title="Snack"
              description="Learn about our story, our team, and our commitment to providing the best cafe experience."
              imageUrl="/assets/images/card-product/Kentang-Goreng.jpg"
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
export default ProductCustomerLayout
