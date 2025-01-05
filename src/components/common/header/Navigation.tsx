import Link from 'next/link'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

interface NavigationProps {
  className?: string
}

const Navigation = ({ className = '' }: NavigationProps) => {
  return (
    <nav className={className}>
      <ul className="flex space-x-4">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="text-gray-600 hover:text-primary">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation

