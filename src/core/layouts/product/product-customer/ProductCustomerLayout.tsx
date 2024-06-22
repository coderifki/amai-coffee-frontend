import Footer from '@/core/components/customers/Footer'
import Navbar from '@/core/components/customers/Header'
import MetaCustomer from '@/core/components/customers/MetaCustomer'
import ProductCardCustomer from '@/core/components/customers/ProductCardCustomer'
import TextLogo from '@/core/components/customers/TextLogo'
import TransactionCustomerPage from '@/core/components/customers/TransactionCustomer'

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
      {/* <MetaCustomer></MetaCustomer> */}
      <Navbar></Navbar>
      <div className="bg-white mt-16 pb-6">
        <div className="flex justify-center">
          <TextLogo title="Our Menu" />
        </div>
        <div className="text-[#A75D5D] font-semibold text-center px-16 mb-10 sm:text-xl">
          You Can Choose The Menus
        </div>
      </div>

      {/* This is transaction for customer */}
      <TransactionCustomerPage />

      {/* Product Coffee Drinks */}
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className=" container mx-auto"
      >
        <TextLogo title="Coffee Drinks" />
        <div className="text-gray-600 font-semibold text-center px-16 mb-10 sm:text-xl">
          Experience the Richness of Our Coffee Creations Discover a Symphony of
          Aromas and Flavors Crafted with Precision Indulge in Handcrafted
          Blends and Signature Brews Each Sip is a Journey, Each Cup a Tale to
          Savor
        </div>

        <section className="grid grid-cols-1 auto-rows-max md:grid-cols-2 gap-8 pb-16 px-10 ">
          <div data-aos="zoom-in-up" data-aos-duration="1000">
            <ProductCardCustomer
              title="Special Coffee"
              description="Dalgona . Affogato . CoffeeBeer . Sarsaparilla . Butter Latte"
              imageUrl="/assets/images/card-product/affogato_coffee.jpg"
            />
          </div>
          <div data-aos="zoom-in-up" data-aos-duration="1000">
            <ProductCardCustomer
              title="Manual Brew Coffee"
              description="West Java Natural: Tubruk . Expresso . Americano . V-60"
              imageUrl="/assets/images/card-product/Image-Coffee.jpg"
            />
          </div>
          <div data-aos="zoom-in-up" data-aos-duration="1000">
            <ProductCardCustomer
              title="Coffee Milk"
              description="Tubruk Coffee Milk . Ice Coffee Milk"
              imageUrl="/assets/images/card-product/coffee_milk.jpg"
            />
          </div>
          <div data-aos="zoom-in-up" data-aos-duration="1000">
            <ProductCardCustomer
              title="Coffee Matcha"
              description="Matcha Original . Matcha Special . Redvelvet Original . Redvelvet Special"
              imageUrl="/assets/images/card-product/matcha_redvelvet_coffee.jpg"
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
          Explore our vibrant selection of non-coffee beverages crafted to
          delight your senses. From refreshing teas to indulgent smoothies and
          signature mocktails, our diverse menu offers an array of flavors to
          suit every palate. Embrace the perfect blend of taste and innovation
          in every sip, elevating your experience at Melina Coffee beyond just
          coffee.
        </div>

        <section className="grid grid-cols-1 auto-rows-max md:grid-cols-2 gap-8 pb-16 px-10 ">
          <div data-aos="zoom-in-up" data-aos-duration="1000">
            <ProductCardCustomer
              title="Tea"
              description="Sweet Iced Tea . Sweet Hot Tea . Hot Tea"
              imageUrl="/assets/images/card-product/tea_drink.jpg"
            />
          </div>
          <div data-aos="zoom-in-up" data-aos-duration="1000">
            <ProductCardCustomer
              title="Lemon Tea"
              description="Sweet Iced Lemon Tea . Sweet Hot Lemon Tea"
              imageUrl="/assets/images/card-product/Non-Coffee.jpg"
            />
          </div>
          <div data-aos="zoom-in-up" data-aos-duration="1000">
            <ProductCardCustomer
              title="Nutrisari"
              description="Nutrisari Manggo . Guava . Orange . Lime"
              imageUrl="/assets/images/card-product/nutrisari.jpg"
            />
          </div>
          <div data-aos="zoom-in-up" data-aos-duration="1000">
            <ProductCardCustomer
              title="Soda Milk"
              description="Fresh milk blended with fizzy soda for a delightful twist."
              imageUrl="/assets/images/card-product/soda_milk.jpg"
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
          Dive into a culinary adventure with our exquisite array of dishes
          meticulously crafted to tantalize your taste buds. From savory
          classics to innovative creations, each plate is a celebration of
          flavors, textures, and culinary artistry. Experience the perfect
          harmony of ingredients and culinary expertise at Melina Coffee, where
          every bite tells a story.
        </div>
        <section className="grid grid-cols-1 auto-rows-max md:grid-cols-2 gap-8 pb-16 px-10 ">
          <div data-aos="zoom-in-up" data-aos-duration="1000">
            <ProductCardCustomer
              title="Fried Rice"
              description="Savor our exquisite Fried Rice selections: from our aromatic Spiced Fried Rice to the comforting Village Fried Rice."
              imageUrl="/assets/images/card-product/nasi_goreng2.jpg"
            />
          </div>
          <div data-aos="zoom-in-up" data-aos-duration="1000">
            <ProductCardCustomer
              title="Noodles"
              description="Delight in our savory noodle dishes: from the flavorful Mie Goreng to the comforting Mie Kuah, each bowl is a symphony of taste."
              imageUrl="/assets/images/card-product/indomie_goreng.jpg"
            />
          </div>
          <div data-aos="zoom-in-up" data-aos-duration="1000">
            <ProductCardCustomer
              title="Dim-Sum"
              description="Learn about our story, our team, and our commitment to providing the best cafe experience."
              imageUrl="/assets/images/card-product/dim_sum.jpg"
            />
          </div>
          <div data-aos="zoom-in-up" data-aos-duration="1000">
            <ProductCardCustomer
              title="Toast Bread"
              description="Learn about our story, our team, and our commitment to providing the best cafe experience."
              imageUrl="/assets/images/card-product/roti_bakar.jpg"
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
          Indulge in our selection of delightful snacks that complement your
          coffee experience. From crispy bites to savory treats, our assortment
          of snacks is crafted to elevate your moments at Melina Coffee. Each
          bite is a burst of flavor, adding a touch of delight to your visit.
          Enjoy these accompaniments as you savor your favorite brew.
        </div>
        <section className="grid grid-cols-1 auto-rows-max md:grid-cols-2 gap-8 pb-16 px-10 ">
          <div data-aos="zoom-in-up" data-aos-duration="1000">
            <ProductCardCustomer
              title="French Fries"
              description="Savor our crispy French Fries, perfectly golden and seasoned to elevate your taste buds."
              imageUrl="/assets/images/card-product/Kentang-Goreng.jpg"
            />
          </div>
          <div data-aos="zoom-in-up" data-aos-duration="1000">
            <ProductCardCustomer
              title="Grilled Sausages"
              description="Indulge in our succulent Grilled Sausages, bursting with flavor and perfectly grilled to elevate your snack time."
              imageUrl="/assets/images/card-product/sosis_goreng.jpg"
            />
          </div>
          <div data-aos="zoom-in-up" data-aos-duration="1000">
            <ProductCardCustomer
              title="Otak-Otak"
              description="Savor the rich and aromatic flavors of our Otak-Otak, a delightful fusion of spices and grilled goodness."
              imageUrl="/assets/images/card-product/otak_otak_goreng.jpg"
            />
          </div>
          <div data-aos="zoom-in-up" data-aos-duration="1000">
            <ProductCardCustomer
              title="Cireng"
              description="Indulge in the crispy and savory delight of Cireng, a popular Indonesian snack that's perfect for your cravings."
              imageUrl="/assets/images/card-product/cireng_goreng.jpg"
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
export default ProductCustomerLayout
