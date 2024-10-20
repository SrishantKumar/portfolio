import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center space-x-2">
            <div className="relative w-12 h-12 overflow-hidden rounded-full">
              <Image
                src="/profile.png"
                alt="Profile"
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <span className="text-2xl font-bold">SK</span>
          </div>
        </Link>
        {/* ... rest of the component remains the same ... */}
      </div>
    </header>
  )
}

export default Header
