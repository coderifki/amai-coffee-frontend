import Aos from 'aos'
import Link from 'next/link'
import { useEffect } from 'react'
import 'aos/dist/aos.css'

interface CardHomeCustomerProps {
  title: string
  description: string
  // price: number
  imageUrl: string
  linkText: string
  linkUrl: string
}

const CardHomeCustomer: React.FC<CardHomeCustomerProps> = ({
  title,
  description,
  imageUrl,
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
      data-aos=""
      data-aos-duration=""
      className="p-8 rounded-md bg-white shadow-md"
    >
      <img src={imageUrl} alt={title} className="mb-4" />
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
      <div className="text-gray-600 mb-4">{description}</div>
      {/* <div className="text-gray-600 mb-4">{price}</div> */}
      <Link href={linkUrl} passHref>
        <div className="text-red-300">{linkText}</div>
      </Link>
    </div>
  )
}

export default CardHomeCustomer
