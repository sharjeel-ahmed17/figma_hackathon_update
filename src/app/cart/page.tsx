import Card from "@/components/cart/card/Card";
import Order from "@/components/cart/order/Order";
import ContextProvider from "@/context/contextProvider";
import React from "react";

const Cart = () => {
  return (
    <>
      {/* breadcrumb */}
      <Card />
      <ContextProvider>
        <Order />
      </ContextProvider>
    </>
  );
};

export default Cart;
