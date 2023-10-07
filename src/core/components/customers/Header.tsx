// 'use client'

// import { Navbar } from 'flowbite-react'

// export default function Header() {
//   return (
//     <Navbar fluid rounded>
//       <Navbar.Brand href="">
//         <img
//           alt="Melina Coffee Logo"
//           className="mr-3 h-6 sm:h-9"
//           src="/assets/images/login/melina_coffee_logo1_removebg.png"
//         />
//         <span className="self-start whitespace-nowrap text-xl font-semibold dark:text-white">
//           Melina Coffee
//         </span>
//       </Navbar.Brand>
//       <div className="flex md:order-2">
//         <Navbar.Toggle />
//       </div>
//       <Navbar.Collapse>
//         <Navbar.Link active href="#">
//           <p>Home</p>
//         </Navbar.Link>
//         <Navbar.Link href="#">About</Navbar.Link>
//         <Navbar.Link href="#">Services</Navbar.Link>
//         <Navbar.Link href="#">Pricing</Navbar.Link>
//         <Navbar.Link href="#">Contact</Navbar.Link>
//       </Navbar.Collapse>
//     </Navbar>
//   )
// }
import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-[#A75D5D] p-4 fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="/assets/images/login/melina_coffee_logo1_removebg.png"
            className="h-8 mr-2"
          />
          <span className="text-slate-200 font-semibold text-xl">
            Melina Coffee
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-4 ">
          <Link
            href="/dashboard-customer"
            className="relative group font-semibold text-slate-200"
          >
            Home
            <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-red-300 group-hover:w-1/2 group-hover:transition-all"></span>
            <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-red-300 group-hover:w-1/2 group-hover:transition-all"></span>
          </Link>
          <Link
            href="#"
            className="font-semibold text-slate-200	 relative group"
          >
            Products
            <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-red-300 group-hover:w-1/2 group-hover:transition-all"></span>
            <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-red-300 group-hover:w-1/2 group-hover:transition-all"></span>
          </Link>
          <Link
            href="#"
            className="font-semibold text-slate-200	 relative group"
          >
            Services
            <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-red-300 group-hover:w-1/2 group-hover:transition-all"></span>
            <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-red-300 group-hover:w-1/2 group-hover:transition-all"></span>
          </Link>
          <Link
            href="#"
            className="font-semibold text-slate-200 relative group"
          >
            Contact
            <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-red-300 group-hover:w-1/2 group-hover:transition-all"></span>
            <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-red-300 group-hover:w-1/2 group-hover:transition-all"></span>
            s
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="text-center md:hidden mt-2 p-4 bg-[#A75D5D]">
          <Link
            href="#"
            className="block relative group font-semibold text-slate-200 py-2"
          >
            Home
            <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-red-300 group-hover:w-1/2 group-hover:transition-all"></span>
            <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-red-300 group-hover:w-1/2 group-hover:transition-all"></span>
          </Link>
          <Link
            href="#"
            className="block relative group font-semibold text-slate-200 py-2"
          >
            Products
            <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-red-300 group-hover:w-1/2 group-hover:transition-all"></span>
            <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-red-300 group-hover:w-1/2 group-hover:transition-all"></span>
          </Link>
          <Link
            href="#"
            className="block relative group font-semibold text-slate-200 py-2"
          >
            Services
            <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-red-300 group-hover:w-1/2 group-hover:transition-all"></span>
            <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-red-300 group-hover:w-1/2 group-hover:transition-all"></span>
          </Link>
          <Link
            href="#"
            className="block relative group font-semibold text-slate-200 py-2"
          >
            Contact
            <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-red-300 group-hover:w-1/2 group-hover:transition-all"></span>
            <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-red-300 group-hover:w-1/2 group-hover:transition-all"></span>
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
