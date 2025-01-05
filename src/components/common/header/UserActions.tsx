import { ShoppingCart, User } from 'lucide-react'
import { Button } from '@/components/ui/button'

const UserActions = () => {
  return (
    <div className="flex items-center space-x-2">
      <Button variant="ghost" size="icon">
        <ShoppingCart className="h-5 w-5" />
      </Button>
      <Button variant="ghost" size="icon">
        <User className="h-5 w-5" />
      </Button>
    </div>
  )
}

export default UserActions

