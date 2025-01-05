import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import Navigation from './Navigation'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <Navigation className="flex flex-col space-y-4 mt-8" />
      </SheetContent>
    </Sheet>
  )
}

export default MobileMenu

