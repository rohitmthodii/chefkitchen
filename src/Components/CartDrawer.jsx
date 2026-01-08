import { Trash2, X } from "lucide-react";
import { useAppContext } from "../Contexts/AppContext";

const CartDrawer = () => {
  const {
    cart,
    setCart,
    isCartOpen,
    onCartClose,
    orderType,
    setOrderType,
    openReceipt,
  } = useAppContext();

  const sizeLabel = {
    small: "S",
    medium: "M",
    large: "L",
  };

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const removeItem = (id, size) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id && item.size === size
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div
      className={`fixed top-0 right-0 z-50 h-full w-full sm:max-w-[425px]
      bg-[#1F1D2B] transition-transform duration-300
      px-3 sm:px-4 md:px-6 flex flex-col font-barlow
      ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      {/* HEADER */}
      <div className="sticky top-0 bg-[#1F1D2B] z-10 pt-6 sm:pt-8">
        <div className="flex justify-between items-center">
          <h2 className="text-white text-base sm:text-lg font-semibold">
            Orders #1234
          </h2>
          <button onClick={onCartClose}>
            <X className="text-red-500" />
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mt-4 sm:mt-5">
          {["Dine In", "Take Away", "Delivery"].map((type) => (
            <button
              key={type}
              onClick={() => setOrderType(type)}
              className={`
                px-3 py-1 rounded-lg text-xs sm:text-sm transition-all
                border
                ${
                  orderType === type
                    ? "bg-[#F99147] text-white border-[#F99147]"
                    : "text-[#F99147] border-gray-500/50 hover:bg-[#F99147] hover:text-white"
                }
              `}
            >
              {type}
            </button>
          ))}
        </div>

        <div
          className="grid grid-cols-[1fr_50px_60px]
          sm:grid-cols-[1fr_80px_80px] md:grid-cols-[1fr_20px_80px]
          text-white font-semibold mt-5 pb-4
          border-b border-gray-500/50 text-sm sm:text-base"
        >
          <p>Item</p>
          <p className="text-center">Qty</p>
          <p className="text-right pr-2">Price</p>
        </div>
      </div>

      {/* CART ITEMS */}
      <div className="flex-1 overflow-y-auto space-y-6 text-white mt-4 mb-4">
        {cart.length === 0 ? (
          <p className="text-gray-400 font-medium">Cart is empty</p>
        ) : (
          cart.map((item) => {
            const itemTotal = item.price * item.quantity;

            return (
              <div
                key={`${item.id}-${item.size}`}
                className="flex flex-col gap-3"
              >
                <div className="grid grid-cols-[1fr_50px_60px] items-center">
                  <div className="flex gap-3 min-w-0">
                    <img
                      src={item.image}
                      alt=""
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded flex-shrink-0"
                    />

                    <div className="flex flex-col min-w-0">
                      <p className="font-medium truncate max-w-44 sm:max-w-28 md:max-w-44">
                        {item.name}
                      </p>

                      <div className="flex gap-2 font-semibold">
                        <p className="flex items-center text-white border border-white/25 rounded-lg px-2 text-xs">
                          {sizeLabel[item.size]}
                        </p>
                        <p className="text-gray-400 text-sm">$ {item.price}</p>
                      </div>
                    </div>
                  </div>

                  {/* QTY */}
                  <div className="flex justify-center">
                    <p className="bg-[#2D303E] px-5 py-3 rounded-lg border border-[#393C49] text-sm">
                      {item.quantity}
                    </p>
                  </div>

                  {/* PRICE */}
                  <p className="text-right font-semibold pr-2 text-sm sm:text-base">
                    $ {itemTotal}
                  </p>
                </div>

                {/* NOTE + DELETE */}
                <div className="flex gap-2 items-center">
                  <input
                    className="flex-1 h-12 rounded-xl pl-4
                    bg-[#2D303E] text-white placeholder-gray-400 outline-none
                    border border-[#393C49] text-sm"
                    type="text"
                    placeholder="Order Note..."
                  />

                  <button
                    onClick={() => removeItem(item.id, item.size)}
                    className="text-[#F99147] hover:text-[#FF7CA3] border border-[#F99147] hover:border-[#FF7CA3] px-4 h-12 rounded-xl transition-all"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* TOTAL */}
      {cart.length > 0 && (
        <div
          className="sticky bottom-0 bg-[#1F1D2B]
          border-t border-gray-600 pt-4 pb-5 text-white"
        >
          <div className="flex justify-between text-sm sm:text-base">
            <p className="font-medium">Discount</p>
            <p>0%</p>
          </div>

          <div className="flex justify-between text-sm sm:text-base mt-2">
            <p className="font-medium">Sub total</p>
            <p>$ {totalAmount}</p>
          </div>

          <button
            onClick={() => openReceipt()}
            className="mt-4 w-full bg-[#F99147]
            py-2 rounded-lg font-medium
            hover:bg-[#f77b22] transition-all"
          >
            Order Now
          </button>
        </div>
      )}
    </div>
  );
};

export default CartDrawer;

