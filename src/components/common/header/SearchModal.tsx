import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import SearchBar from './SearchBar'

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Search</DialogTitle>
        </DialogHeader>
        <SearchBar className="mt-4" />
      </DialogContent>
    </Dialog>
  )
}

export default SearchModal

