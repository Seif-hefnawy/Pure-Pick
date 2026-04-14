import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
      <h2 className="text-4xl font-black text-primary mb-4">404</h2>
      <p className="text-xl font-medium mb-6">يا سيف المنتج ده مش موجود عندنا!</p>
      <Link 
        href="/" 
        className="bg-primary text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform"
      >
        ارجع للهوم من هنا
      </Link>
    </div>
  )
}