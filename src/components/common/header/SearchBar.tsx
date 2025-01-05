import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

interface SearchBarProps {
  className?: string
}

const SearchBar = ({ className = '' }: SearchBarProps) => {
  return (
    <div className={`relative ${className}`}>
      <Input
        type="text"
        placeholder="Search..."
        className="pl-10 pr-4 py-2 w-full"
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
    </div>
  )
}

export default SearchBar

