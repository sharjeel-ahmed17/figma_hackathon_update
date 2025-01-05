'use client'
import MyContext from "@/context/context"
import { useContext } from "react"


const Order = () => {
  const name = useContext(MyContext);
  console.log(name);
  
  return (
    <div>Order
    </div>
  )
}

export default Order