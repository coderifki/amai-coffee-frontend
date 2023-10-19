import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <header className="relative">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
      <div className="mx-auto">
        <div className="relative shadow-2xl sm:overflow-hidden">
          <div className="absolute  inset-0">
            <Image
              priority
              fill
              className="h-full  w-full object-cover"
              src="/assets/images/dashboard/Hero.png"
              // placeholder="blur"
              alt="Coffee grinder"
            />
            <div className="absolute inset-0 bg-orange-100 mix-blend-multiply" />
          </div>
          <div className="relative px-4 hover:font-outline-4 drop-shadow-[0_1.5px_1.2px_rgba(0,0,0,0.8)] py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8 ">
            <div className="relative left-0 right-0 mx-auto mt-5 max-w-xl text-center lg:text-4xl sm:text-xl font-semibold uppercase tracking-wide text-[#A75D5D]">
              The Coffee House
            </div>
            <h1 className="mt-1 text-center font-bold uppercase text-gray-900 sm:text-5xl sm:tracking-tight lg:text-7xl">
              <span className="block text-white">Life is better with</span>
              <span className="block font-bold hover:font-outline-4 text-[#A75D5D]">
                coffee
              </span>
            </h1>

            <div className="grid grid-rows-2 grid-flow-col gap-y-16 mx-auto mt-10 max-w-xs sm:max-w-none sm:justify-center justify-center">
              <Link
                href="/product-customer"
                className="gap-y-16 mx-auto mt-10 max-w-xs sm:max-w-none sm:justify-center justify-center"
              >
                <button className="marfi btn  hover:shadow-[0_4px_0px_rgb(0,0,0)]  hover:translate-y-1 items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-[#A75D5D] shadow-sm hover:bg-orange-100 sm:px-6 transition duration-300 ease-in-out">
                  Shop coffees
                </button>
              </Link>
              <Link href="/about-customer">
                <button className=" btn  hover:shadow-[0_4px_0px_rgb(0,0,0)]  hover:translate-y-1   gap-y-8 items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-[#A75D5D] shadow-sm hover:bg-orange-100 sm:px-6 transition duration-300 ease-in-out">
                  See Our Dily Specials
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
