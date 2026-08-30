import { IoClose } from "react-icons/io5";
import { CiSearch, CiLocationOn } from "react-icons/ci";

export function StoresModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const mockStores = [
    { id: 1, name: "Inshaatcilar", city: "Baku", distance: "7.7 km", status: "Available for pickup. Choose a convenient location." },
    { id: 2, name: "28 Mall", city: "Baku", distance: "3.2 km", status: "Available for pickup." },
    { id: 3, name: "Deniz Mall", city: "Baku", distance: "4.5 km", status: "Available for pickup." },
  ];

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-xs transition-opacity">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col z-10 p-6 overflow-y-auto">
        
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 text-2xl text-gray-500 hover:text-black cursor-pointer"
        >
          <IoClose />
        </button>

        <h2 className="text-2xl font-bold text-gray-900 mt-2 mb-6">Stores</h2>

       

        <div className="mt-6 relative">
          <div className="border border-gray-200 rounded-xl p-3 flex items-center gap-3 bg-gray-50/50">
            <CiSearch className="text-xl text-gray-400 shrink-0" />
            <div className="flex-1">
              <span className="block text-[10px] text-gray-400 uppercase font-semibold">City</span>
              <select className="w-full bg-transparent text-sm font-medium text-gray-800 focus:outline-none cursor-pointer">
                <option value="baku">Baku</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <button className="flex items-center gap-2 text-blue-600 text-xs font-semibold hover:underline cursor-pointer">
            <CiLocationOn className="text-base" />
            <span>Use current location</span>
          </button>
          <p className="text-[11px] text-red-500 mt-1 leading-tight">
            The definition of your location is prohibited in the browser settings. Please allow access to continue.
          </p>
        </div>

        <div className="mt-6 flex-1">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs text-gray-500 font-medium">{mockStores.length} near stores results</span>
            <select className="text-xs border border-gray-200 rounded-lg p-1.5 focus:outline-none">
              <option>All location stores</option>
            </select>
          </div>

          <div className="space-y-3">
            {mockStores.map((store) => (
              <div 
                key={store.id} 
                className="p-4 border border-gray-200 rounded-xl hover:border-blue-500 transition cursor-pointer"
              >
                <div className="flex justify-between items-start">
                  <h4 className="font-bold text-sm text-gray-900">{store.name}</h4>
                  <span className="text-xs text-gray-400">{store.distance}</span>
                </div>
                <p className="text-xs text-gray-500 mt-0.5">{store.city}</p>
                <p className="text-[11px] text-green-600 font-medium mt-2">{store.status}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-gray-100 mt-auto">
          <button 
            onClick={onClose}
            className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 rounded-xl transition text-sm cursor-pointer"
          >
            Select
          </button>
        </div>

      </div>
    </div>
  );
}