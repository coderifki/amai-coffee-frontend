import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="center min-h-0 flex justify-center space-x-4 bg-[#E7E8EF] p-4 text-xs">
      <div>Powered By</div>
      <span>|</span>
      <Link href="#" className="font-medium text-red-300">
        Mohammad Rifki Ramadhan Arsjad
      </Link>
    </footer>
  )
}
