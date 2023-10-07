import Aos from 'aos'
import Link from 'next/link'
import { useEffect } from 'react'
import 'aos/dist/aos.css'

interface ProductCardProps {
  title: string
  description: string
  // price: number
  linkText: string
  linkUrl: string
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  linkText,
  linkUrl,
}) => {
  useEffect(() => {
    Aos.init()
    // Cleanup AOS on component unmount
    return () => {
      Aos.refresh() // Optional: Reset AOS on component unmount
    }
  }, []) // Only run this effect once when the component mounts
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      className="p-8 rounded-md bg-white shadow-md"
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
      <div className="text-gray-600 mb-4">{description}</div>
      {/* <div className="text-gray-600 mb-4">{price}</div> */}
      <Link href={linkUrl} passHref>
        <div className="text-red-300">{linkText}</div>
      </Link>
    </div>
  )
}

export default ProductCard
