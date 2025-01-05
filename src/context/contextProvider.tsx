'use client'
import MyContext from "./context";

const ContextProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  let name = "sharjeel ahmed";
  return <MyContext.Provider value={name}>{children}</MyContext.Provider>;
};

export default ContextProvider;
