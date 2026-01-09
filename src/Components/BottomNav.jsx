import React, { useEffect } from "react";
import { SidebarItems } from "../Constants";
import { Link, useLocation } from "react-router-dom";
import { useCartContext } from "../Contexts/CartContext";

const BottomNav = () => {
  const { activeMenu, setActiveMenu } = useCartContext();
  const location = useLocation();

  // 🔹 Automatically set active menu based on current path
  useEffect(() => {
    const current = SidebarItems.find((item) => item.path === location.pathname);
    if (current) setActiveMenu(current);
  }, [location.pathname, setActiveMenu]);

  return (
    <div className="fixed md:hidden h-20 grid grid-cols-5 bg-white/10 backdrop-blur-md bottom-3 left-3 right-3 rounded-3xl">
      {SidebarItems.map((option) => {
        const isActive = activeMenu?.id === option.id;
        const Icon = option.Icon;

        return (
          <Link
            key={option.id}
            to={option.path}
            onClick={() => setActiveMenu(option)}
            className={`flex flex-col items-center justify-center text-2xl cursor-pointer transition-all duration-200 ${
              isActive
                ? "text-white -translate-y-1 scale-110"
                : "text-[#ff8d28]"
            }`}
          >
            <Icon />
            {isActive && <span className="text-[10px]">{option.title}</span>}
          </Link>
        );
      })}
    </div>
  );
};

export default BottomNav;
