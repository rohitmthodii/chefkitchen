import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import CartDrawer from "../Components/CartDrawer";
import { useState, useEffect } from "react";
import Receipt from "../Components/Receipt";
import BottomNav from "../Components/BottomNav";
import { menuData } from "../Constants";

const MenuLayout = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [showReceipt, setShowReceipt] = useState(false);
  const [orderDateTime, setOrderDateTime] = useState(null);
  const [orderType, setOrderType] = useState("Dine In");
  const [searchQuery, setSearchQuery] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const [activeTab, setActiveTab] = useState("today");
  const tabClass = (tabName) =>
    activeTab === tabName ? "text-orange-500" : "text-white";


  useEffect(() => {
    if (orderPlaced) {
      const timer = setTimeout(() => {
        setOrderPlaced(false);
      }, 3000); // ⏱ 3 seconds

      return () => clearTimeout(timer);
    }
  }, [orderPlaced]);

  return (
    <div className="flex h-screen overflow-hidden bg-[#1F1D2B]">
      {/* Sidebar */}
      <Sidebar />

      {/* Right Side */}
      <div
        className={`flex flex-col flex-1 transition-[margin] duration-300 ${
          isCartOpen ? "mr-[435px]" : "mr-0"
        }`}
      >
        {/* Header */}
 <Header
  isCartOpen={isCartOpen}
  onCartOpen={() => setIsCartOpen(true)}
  cart={cart}
  orderType={orderType}
  setOrderType={setOrderType}
  searchQuery={searchQuery}
  setSearchQuery={setSearchQuery}
  activeTab={activeTab}
  setActiveTab={setActiveTab}
/>

        {/* Pages */}
        <div className="flex-1 p-4 overflow-auto bg-black md:bg-[#252836]">
  <Outlet context={{ cart, setCart, searchQuery, activeTab }} />
</div>
      </div>

        <nav className="fixed bottom-0 left-0 right-0 md:hidden z-50">
          <BottomNav />
        </nav>

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        setCart={setCart}
        orderType={orderType}
        setOrderType={setOrderType}
        onOrderNow={() => {
          setOrderDateTime(new Date());
          setShowReceipt(true);
        }}
      />

      <Receipt
        isOpen={showReceipt}
        onClose={() => setShowReceipt(false)}
        cart={cart}
        orderDateTime={orderDateTime}
        orderType={orderType}
        onOrder={() => setOrderPlaced(true)}
      />
      {orderPlaced && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 transition-opacity duration-300">
          <div className="bg-[#1F1D2B] px-6 py-5 rounded-2xl text-center transform transition-all duration-300 ease-out scale-100 opacity-100 animate-bounce">
            <h2 className="text-lg font-semibold text-green-400">
              🎉 Order Placed!
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              Your food is on the way
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuLayout;
