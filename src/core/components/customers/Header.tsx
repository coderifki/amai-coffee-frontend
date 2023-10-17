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
//         <Navbar.Link href="#">About Us</Navbar.Link>
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
  const genericHamburgerLine = `h-1 w-4 my-0.5 rounded-full bg-[#A75D5D] transition ease transform duration-300`
  const isMenuOpenTransition = ` transition ease-in-out duration-300`

  return (
    <nav className="bg-[#A75D5D] p-4 fixed top-0 left-0 right-0 z-10 ">
      <div className="container mx-auto flex justify-between items-center ">
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
            href="/product-customer"
            className="font-semibold text-slate-200	 relative group"
          >
            Products
            <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-red-300 group-hover:w-1/2 group-hover:transition-all"></span>
            <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-red-300 group-hover:w-1/2 group-hover:transition-all"></span>
          </Link>
          <Link
            href="/about-customer"
            className="font-semibold text-slate-200	 relative group"
          >
            About Us
            <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-red-300 group-hover:w-1/2 group-hover:transition-all"></span>
            <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-red-300 group-hover:w-1/2 group-hover:transition-all"></span>
          </Link>
          <Link
            href="/contact-customer"
            className="font-semibold text-slate-200 relative group"
          >
            Contact
            <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-red-300 group-hover:w-1/2 group-hover:transition-all"></span>
            <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-red-300 group-hover:w-1/2 group-hover:transition-all"></span>
          </Link>
        </div>
        <div className="md:hidden flex items-center transition ease-in-out duration-300">
          <button
            className="flex flex-col h-7 w-7 border-2 border-black rounded justify-center items-center group transition ease-in-out duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen || !isMenuOpenTransition)}
          >
            <div
              className={`${genericHamburgerLine} ${
                isMenuOpen && isMenuOpenTransition
                  ? 'transition ease-in-out duration-300 rotate-45 translate-y-2 opacity-50 group-hover:opacity-100'
                  : 'transition ease-in-out duration-300 opacity-50 group-hover:opacity-100'
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isMenuOpen && isMenuOpenTransition
                  ? 'transition ease-in-out duration-300 opacity-0'
                  : 'transition ease-in-out duration-300 opacity-50 group-hover:opacity-100'
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isMenuOpen && isMenuOpenTransition
                  ? 'transition ease-in-out duration-300 -rotate-45 -translate-y-2 opacity-50 group-hover:opacity-100'
                  : 'transition ease-in-out duration-300 opacity-50 group-hover:opacity-100'
              }`}
            />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="container mx-auto transition ease-in-out duration-300">
          <div className=" text-center md:hidden mt-2 p-4 transition ease-in-out duration-300">
            <Link
              href="/dashboard-customer"
              className="block relative group font-semibold text-slate-200 py-2 underline underline-offset-3"
            >
              Home
            </Link>
            <Link
              href="/product-customer"
              className="block relative group font-semibold text-slate-200 py-2 underline underline-offset-3"
            >
              Products
            </Link>
            <Link
              href="/about-customer"
              className="block relative group font-semibold text-slate-200 py-2 underline underline-offset-3"
            >
              About Us
            </Link>
            <Link
              href="/contact-customer"
              className="block relative group font-semibold text-slate-200 py-2 underline underline-offset-3"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
