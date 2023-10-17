import Aos from 'aos'
import Link from 'next/link'
import { useEffect } from 'react'

interface TextLogoProps {
  title: string
}

const TextLogo: React.FC<TextLogoProps> = ({ title }) => {
  useEffect(() => {
    Aos.init()
    // Cleanup AOS on component unmount
    return () => {
      Aos.refresh() // Optional: Reset AOS on component unmount
    }
  }, []) // Only run this effect once when the component mounts
  return (
    <div className="flex justify-center my-10 ">
      <div className="text-3xl font-semibold  mb-5 text-[#A75D5D] ">
        {title}
        <div className="flex justify-center">
          <div className="absolute w-16 h-2 bg-red-300 my-5"></div>
        </div>
      </div>
      {/* <div className="text-gray-600 mb-4">{price}</div> */}
    </div>
  )
}

export default TextLogo
