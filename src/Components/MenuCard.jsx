import React, { useState } from "react";
import { menuData } from "../Constants";
import { useOutletContext } from "react-router-dom";

const MenuCard = () => {
  const { cart, setCart, searchQuery, activeTab } = useOutletContext();
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

  const addToCart = (id) => {
    const item = menuData.find((i) => i.id === id);
    if (!item) return;

    const selected = selectedSizes.find((s) => s.id === id);
    const size = selected?.size || "small";

    const price = item.Prices[size]?.new;
    if (!price) return;

    setCart((prev) => {
      const index = prev.findIndex((c) => c.id === id && c.size === size);

      if (index !== -1) {
        return prev.map((c, i) =>
          i === index ? { ...c, quantity: c.quantity + 1 } : c
        );
      }

      return [
        ...prev,
        {
          id,
          name: item.name,
          size,
          price,
          image: item.image,
          quantity: 1,
        },
      ];
    });
  };

const filteredMenu = menuData.filter((item) => {
    if (activeTab === "special" && item.category !== "noodles") return false;
    if (activeTab === "south" && item.category !== "rice") return false;
    return item.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="md:px-3 sm:px-4 font-barlow pb-24">
      {/* GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-10">
        {filteredMenu.map((item) => {
          const currentSize =
            selectedSizes.find((s) => s.id === item.id)?.size || "small";

          const price = item.Prices[currentSize];

          const isAdded = cart.some(
            (c) => c.id === item.id && c.size === currentSize
          );

          return (
            <div
              key={item.id}
              className="bg-[#1F1D2B] rounded-xl mt-16 sm:mt-20 p-4 text-center pb-8"
            >
              {/* IMAGE */}
              <img
                src={item.image}
                alt=""
                className="w-24 sm:w-28 md:w-32 mx-auto -mt-16 sm:-mt-20"
              />

              <p className="text-white mt-4 text-xs sm:text-base whitespace-normal md:truncate">
                {item.name}
              </p>

              {/* PRICE */}
              <div className="mt-2 flex gap-3 items-center justify-center text-sm sm:text-base truncate">
                {price.old && (
                  <span className="text-red-500 line-through">
                    $ {price.old}
                  </span>
                )}
                <span className="text-green-500">$ {price.new}</span>
              </div>

              {/* SIZE BUTTONS */}
              <div className="flex justify-center gap-2 mt-3 md:gap-3">
                {["small", "medium", "large"].map((size) => (
                  <button
                    key={size}
                    onClick={() => handleSizeChange(item.id, size)}
                    className={`
        rounded
        text-xs md:text-sm
        px-2 py-1 md:px-3 md:py-2
        ${currentSize === size ? "bg-[#F99147] text-white" : "text-white"}
        transition-colors duration-200
      `}
                  >
                    {size[0].toUpperCase()}
                  </button>
                ))}
              </div>

              {/* ADD TO CART */}
              <button
                onClick={() => addToCart(item.id)}
                className={`mt-3 sm:mt-4 w-fit sm:w-auto px-4 sm:px-6 py-2 rounded-lg text-xs sm:text-sm md:text-base transition-colors truncate
                ${
                  isAdded
                    ? "bg-green-600 text-white"
                    : "bg-[#F99147] text-white"
                }`}
              >
                {isAdded ? "Added ✔" : "Add to Cart"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuCard;
