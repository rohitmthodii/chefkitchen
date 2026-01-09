import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import CartDrawer from "../Components/CartDrawer";
import Receipt from "../Components/Receipt";
import BottomNav from "../Components/BottomNav";
import { useEffect } from "react";
import { useCartContext } from "../Contexts/CartContext";

const MenuLayout = () => {
  const { isCartOpen, orderPlaced, setOrderPlaced } = useCartContext();

  useEffect(() => {
    if (orderPlaced) {
      const timer = setTimeout(() => setOrderPlaced(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [orderPlaced, setOrderPlaced]);

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
        <Header />

        {/* Pages */}
        <div className="flex-1 p-4 overflow-auto bg-black md:bg-[#252836]">
          <Outlet />
        </div>
      </div>

      {/* Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 md:hidden z-50">
        <BottomNav />
      </nav>

      {/* Cart Drawer */}
      <CartDrawer />

      {/* Receipt */}
      <Receipt />

      {/* Order Placed Toast */}
      {orderPlaced && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-[#1F1D2B] px-6 py-5 rounded-2xl text-center animate-bounce">
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
