import { createContext, useState } from "react";
import { useToast } from "@chakra-ui/react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);
  const [isAuth, setIsAuth] = useState(false);
  const [productData, setProductData] = useState([]);
  const toast = useToast();

  const handleToast = () => {
    toast({
      title: "Product Added To Cart.",
      // description: "We've created your account for you.",
      status: "success",
      duration: 1000,
      isClosable: true,
    });
  };

  const handleProductData = (data) => {
    setProductData([data]);
  };
  const handleClear = () => {
    setCartData([]);
  };
  const handleCartData = (data) => {
    handleToast();
    setCartData([
      ...cartData,
      {
        ...data,
        quantity: 1,
      },
    ]);
  };

  const handleDelete = (id) => {
    let updateData = cartData.filter((item) => item.id !== id);
    setCartData(updateData);
  };

  const handleQunatity = (id, no) => {
    let upDatedData = cartData.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + no,
        };
      } else {
        return item;
      }
    });
    //   console.log(id, no)
    setCartData(upDatedData);
  };

  const handleTotal = () => {
    return cartData.reduce((acu, c) => {
      return acu + c.price * c.quantity;
    }, 0);
  };
  let total = handleTotal();

  return (
    <AppContext.Provider
      value={{
        cartData,
        handleCartData,
        handleQunatity,
        handleDelete,
        handleClear,
        total,
        isAuth,
        setIsAuth,
        productData,
        handleProductData,
      }}
    >
      {" "}
      {children}
    </AppContext.Provider>
  );
};
