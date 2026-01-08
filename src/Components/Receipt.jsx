import { X } from "lucide-react";

const ReceiptPopup = ({
  isOpen,
  onClose,
  cart,
  orderDateTime,
  orderType,
  onOrder,
}) => {
  if (!isOpen) return null;

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const date = orderDateTime?.toLocaleDateString();
  const time = orderDateTime?.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="fixed inset-0 z-[999] bg-black/60 flex items-center justify-center font-barlow">
      <div className="bg-[#1F1D2B] w-[90%] max-w-md rounded-xl p-6 text-white relative">
        {/* CLOSE */}
        <div className="flex justify-start">
          <h2 className="text-xl font-semibold">Receiptxx</h2>

          {/* <button onClick={onClose} className=" text-red-500">
            <X />
          </button> */}
        </div>
        <div className="flex flex-col mt-">
          <div className="flex flex-row gap-2 items-center">
            {orderDateTime && <p className="text-sm text-gray-400">{date}</p>}

            <p className="text-lg text-gray-400">|</p>

            {orderDateTime && <p className="text-sm text-gray-400">{time}</p>}
          </div>

          <div>
            <p className="text-sm text-gray-400">
              Order Type: <span className="text-blue-500">{orderType}</span>
            </p>
          </div>
        </div>

        <div className="space-y-2 mt-4 max-h-[300px] overflow-y-auto">
          {cart.map((item) => (
            <div
              key={`${item.id}-${item.size}`}
              className="flex justify-between text-sm border-t border-gray-500/70 py-2"
            >
              <p className="md:max-w-60 truncate w-full">{item.name}</p>
              <p className="max-w-20 w-full text-gray-300 ml-5 md:ml-0 lg:ml-0">
                {item.size} × {item.quantity}
              </p>
              <p className="max-w-16 text-right w-full">
                $ {item.price * item.quantity}
              </p>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-600 mt-4 pt-4 flex justify-between font-semibold">
          <p>Total</p>
          <p>$ {total}</p>
        </div>

        <button
          onClick={() => {
            onOrder();
            onClose();
          }}
          className="mt-5 w-full bg-[#F99147] py-2 rounded-lg hover:bg-[#f77b22] shadow-2xl font-sans font-semibold">
          Confirm Order
        </button>
        <button
          onClick={onClose}
          className="mt-2 w-full py-2 rounded-lg border hover:bg-[#22202e] border-gray-500/50 shadow-2xl font-sans font-semibold"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ReceiptPopup;
