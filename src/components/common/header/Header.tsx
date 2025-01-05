"use client"
import { useState } from 'react'
import Logo from './Logo'
import Navigation from './Navigation'
import SearchBar from './SearchBar'
import UserActions from './UserActions'
import MobileMenu from './MobileMenu'
import SearchModal from './SearchModal'
import { Menu, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4 lg:space-x-8">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </Button>
          <Logo />
          <Navigation className="hidden lg:flex" />
        </div>
        <div className="flex items-center space-x-4">
          <SearchBar className="hidden lg:flex w-80" />
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsSearchModalOpen(true)}
          >
            <Search className="h-6 w-6" />
          </Button>
          <UserActions />
        </div>
      </div>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      <SearchModal isOpen={isSearchModalOpen} onClose={() => setIsSearchModalOpen(false)} />
    </header>
  )
}

export default Header

