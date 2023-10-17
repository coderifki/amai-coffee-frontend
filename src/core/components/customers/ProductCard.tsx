import Aos from 'aos'
import Link from 'next/link'
import { useEffect } from 'react'
import 'aos/dist/aos.css'

interface ProductCardProps {
  title: string
  description: string
  // price: number
  imageUrl: string
  // linkText: string
  // linkUrl: string
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  imageUrl,
}) => {
  useEffect(() => {
    Aos.init()
    // Cleanup AOS on component unmount
    return () => {
      Aos.refresh() // Optional: Reset AOS on component unmount
    }
  }, []) // Only run this effect once when the component mounts
  return (
    <>
      <div className="flex p-8 bg-white">
        <img
          src={imageUrl}
          alt={title}
          className="w-2/5 mr-4 object-cover object-left max-h-32"
        />
        <div className="w-1/2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
          <div className="text-gray-600 mb-4">{description}</div>
          {/* <Link href={linkUrl} passHref>
            <div className="text-red-300">{linkText}</div>
          </Link> */}
        </div>
      </div>
    </>
  )
}

export default ProductCard
