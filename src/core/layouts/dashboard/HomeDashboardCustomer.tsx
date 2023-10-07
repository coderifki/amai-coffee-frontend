// pages/index.tsx

import Footer from '@/core/components/customers/Footer'
import Navbar from '@/core/components/customers/Header'
import Hero from '@/core/components/customers/Hero'
import ProductCard from '@/core/components/customers/ProductCard'

export default function HomeDashboardCustomer() {
  return (
    <div className="bg-gray-100 min-h-screen ">
      <Navbar></Navbar>
      <Hero></Hero>
      <section className="grid grid-cols-1 auto-rows-max md:grid-cols-3 gap-8 py-8 px-10 ">
        <ProductCard
          title="Our Menu"
          description="Explore our wide range of delicious coffee and pastries made with the finest ingredients."
          linkText="View Menu"
          linkUrl="#"
        />
        <ProductCard
          title="About Us"
          description="Learn about our story, our team, and our commitment to providing the best cafe experience."
          linkText="About Us"
          linkUrl="#"
        />
        <ProductCard
          title="Our Schedule"
          description="Learn about our story, our team, and our commitment to providing the best cafe experience."
          linkText="Our Schedule"
          linkUrl="#"
        />
      </section>
      <Footer></Footer>
    </div>
  )
}
