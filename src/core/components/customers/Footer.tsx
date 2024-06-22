import Link from 'next/link'

export default function Footer() {
  return (
    <>
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
      <footer className="center min-h-0 flex justify-center space-x-4 bg-[#E7E8EF] p-4 text-xs">
        <div>Powered By</div>
        <span>|</span>
        <Link
          href="https://github.com/coderifki"
          className="font-medium text-red-300"
        >
          Mohammad Rifki Ramadhan Arsjad
        </Link>
      </footer>
    </>
  )
}
