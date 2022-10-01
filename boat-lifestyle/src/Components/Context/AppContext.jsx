import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [cartData, setCartData] = useState([]);
  const [isAuth, setIsAuth] = useState(false);

  const handleCartData = (data) => {
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
        total,
        isAuth,
        setIsAuth,
      }}
    >
      {" "}
      {children}
    </AppContext.Provider>
  );
};