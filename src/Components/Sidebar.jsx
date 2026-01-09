import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import Exit from "../assets/exit.svg?react";
import { SidebarItems } from "../Constants";
import { useCartContext } from "../Contexts/CartContext";

const Sidebar = () => {
  const { activeMenu, setActiveMenu } = useCartContext();

  return (
    <section
      className="bg-[#1f1d2b] w-24 py-6 rounded-r-2xl hidden md:flex flex-col items-center"
    >
      <Link to="/">
        <img src={Logo} alt="" className="w-14 h-14" />
      </Link>

      <div className="flex flex-col w-full h-full mt-6 justify-between">
        <div className="flex w-full pl-2 gap-y-1 flex-col items-center">
          {SidebarItems.map((menu) => {
            const isActive = activeMenu?.id === menu.id;

            return (
              <Link
                to={menu.path}
                key={menu.id}
                className={`w-full h-20 cursor-pointer ${
                  isActive ? "bg-[#252836] rounded-l-2xl" : ""
                } flex items-center justify-center relative`}
                onClick={() => setActiveMenu(menu)}
              >
                <div
                  className={`w-[65%] h-[65%] rounded-lg flex items-center justify-center
                  transition-all duration-300 ${
                    isActive ? "bg-[#ff8d28]" : "bg-[#1f1d2b]"
                  }`}
                >
                  <menu.Icon
                    className={`w-6 h-6 transition-all duration-300 ${
                      isActive ? "text-white" : "text-[#ff8d28]"
                    }`}
                  />
                </div>

                {/* top cutting for curve */}
                {isActive && (
                  <>
                    <span className="absolute w-4 h-4 bg-[#1f1d2b] z-10 -top-4 right-0 rounded-br-2xl"></span>
                    <span className="absolute w-4 h-4 bg-[#252836] -top-4 right-0"></span>
                  </>
                )}
                {/* bottom cutting for curve */}
                {isActive && (
                  <>
                    <span className="absolute w-4 h-4 bg-[#1f1d2b] z-10 -bottom-4 right-0 rounded-tr-2xl"></span>
                    <span className="absolute w-4 h-4 bg-[#252836] -bottom-4 right-0"></span>
                  </>
                )}
              </Link>
            );
          })}
        </div>

        <button className="w-full h-20 cursor-pointer flex items-center justify-center">
          <Exit className="w-6 h-6 cursor-pointer text-[#ff8d28]" />
        </button>
      </div>
    </section>
  );
};

export default Sidebar;
