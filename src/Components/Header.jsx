import { Search, ShoppingCartIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useCartContext } from "../Contexts/CartContext";

const Header = () => {
  const {
    cart,
    isCartOpen,
    onCartOpen,
    orderType,
    setOrderType,
    searchQuery,
    setSearchQuery,
    activeTab,
    setActiveTab,
  } = useCartContext();

  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const tabClass = (tabName) =>
    activeTab === tabName ? "text-orange-500" : "text-white";

  const dateToday = date.toLocaleDateString("en-IN", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="bg-black md:bg-[#252836]">
      <div className="px-3 sm:px-4 md:px-6 mt-6 sm:mt-8 md:mt-10 flex flex-col gap-6 md:gap-6">
        <div className="font-barlow flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex flex-col">
            <h1 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold">
              Chef Kitchen
            </h1>
            <p className="text-slate-500 text-xs sm:text-xs md:text-sm font-medium">
              {dateToday}
            </p>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex items-center bg-[#2D303E] border border-[#393C49] rounded-lg h-10 sm:h-11 w-full sm:w-auto">
              <Search className="ml-3 w-4 sm:w-5 text-white shrink-0" />
              <input
                className="bg-[#2D303E] outline-none ml-2 mr-3 w-full sm:w-56 md:w-52 text-white text-sm placeholder-gray-400"
                type="search"
                placeholder="Search for food, coffee..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {!isCartOpen && (
              <button onClick={onCartOpen} className="relative shrink-0">
                <ShoppingCartIcon className="bg-orange-500 hover:bg-orange-600 text-white w-10 h-10 sm:w-11 sm:h-11 p-2 rounded-lg transition-all" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </button>
            )}
          </div>
        </div>

        {/* TABS */}
        <div className="flex gap-5 sm:gap-5 md:gap-8 lg:gap-8 pb-2 border-b border-b-slate-500/50 font-semibold text-sm sm:text-base overflow-x-auto whitespace-nowrap">
          <button
            onClick={() => setActiveTab("today")}
            className={tabClass("today")}
          >
            All
          </button>

          <button
            onClick={() => setActiveTab("special")}
            className={tabClass("special")}
          >
            Noodles
          </button>

          <button
            onClick={() => setActiveTab("south")}
            className={tabClass("south")}
          >
            Rice
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center py-2 mt-2 px-3 md:px-6">
        <p className="text-white text-lg md:text-xl">Choose Dishes</p>

        <div className="w-28 md:w-[120px] truncate">
          <select
            value={orderType}
            onChange={(e) => setOrderType(e.target.value)}
            className="w-full bg-[#1F1D2B] text-white text-sm px-2 md:px-4 py-2 rounded-lg border border-gray-600 outline-none"
          >
            <option>Dine In</option>
            <option>Take Away</option>
            <option>Delivery</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
