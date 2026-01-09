import { createContext, useContext, useState } from "react";
import { SidebarItems } from "../Constants";

const CartContext = createContext(null);

export const AppProvider = ({ children }) => {

  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [orderType, setOrderType] = useState("Dine In");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("today");
  const [activeMenu, setActiveMenu] = useState(SidebarItems[1]);

  const onCartOpen = () => setIsCartOpen(true);
  const onCartClose = () => setIsCartOpen(false);

  const [selectedSizes, setSelectedSizes] = useState([]);
  const handleSizeChange = (id, size) => {
    setSelectedSizes((prev) => {
      const exists = prev.find((item) => item.id === id);
      if (exists) {
        return prev.map((item) => (item.id === id ? { ...item, size } : item));
      }
      return [...prev, { id, size }];
    });
  };
  const addToCart = (item, size) => {
    const price = item.Prices[size]?.new;
    if (!price) return;

    setCart((prev) => {
      const index = prev.findIndex((c) => c.id === item.id && c.size === size);

      if (index !== -1) {
        return prev.map((c, i) =>
          i === index ? { ...c, quantity: c.quantity + 1 } : c
        );
      }

      return [
        ...prev,
        {
          id: item.id,
          name: item.name,
          size,
          price,
          image: item.image,
          quantity: 1,
        },
      ];
    });
  };

  const [showReceipt, setShowReceipt] = useState(false);
  const [orderDateTime, setOrderDateTime] = useState(null);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const openReceipt = (dateTime = new Date()) => {
    setOrderDateTime(dateTime);
    setShowReceipt(true);
  };

  const closeReceipt = () => setShowReceipt(false);

  const confirmOrder = () => {
    setOrderPlaced(true);
    setCart([]);
    setShowReceipt(false);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        isCartOpen,
        onCartOpen,
        onCartClose,
        orderType,
        setOrderType,
        searchQuery,
        setSearchQuery,
        activeTab,
        setActiveTab,
        activeMenu,
        setActiveMenu,
        selectedSizes,
        setSelectedSizes,
        handleSizeChange,
        addToCart,
        showReceipt,
        setShowReceipt,
        orderDateTime,
        setOrderDateTime,
        orderPlaced,
        setOrderPlaced,
        openReceipt,
        closeReceipt,
        confirmOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);

export default CartContext;
