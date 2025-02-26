"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import Drivers from "../list/driverdetails";
import Image from "next/image";
import { BellDot, Trash2 } from "lucide-react";
import Passengers from "./passengerdetails";

function DriverInfoComponent() {
  const searchParams = useSearchParams();
  const driverId = searchParams.get("id");
  const [driver, setDriver] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [newPassenger, setNewPassenger] = useState({ name: "", phone: "", location: "" });
  const [passengerList, setPassengerList] = useState(Passengers);

  useEffect(() => {
    if (driverId) {
      const foundDriver = Drivers.find((d) => d.id === driverId);
      setDriver(foundDriver || null);
    }
  }, [driverId]);

  const handleAddPassenger = () => {
    if (newPassenger.name && newPassenger.phone && newPassenger.location) {
      setPassengerList([...passengerList, { ...newPassenger, id: passengerList.length + 1 }]);
      setShowModal(false);
      setNewPassenger({ name: "", phone: "", location: "" });
    }
  };

  const handleDeletePassenger = (id) => {
    setPassengerList(passengerList.filter((p) => p.id !== id));
  };

  if (!driver) {
    return <p className="text-center text-red-500 mt-10">Loading...</p>;
  }

  return (
    <div className="p-6 min-h-screen">
      <nav className="flex justify-between items-center px-6 py-2 bg-white shadow-md rounded-lg">
        <div className="text-gray-400 font-semibold text-lg">LOGO</div>
        <div className="flex items-center space-x-3">
          <div className="relative w-5 h-5"></div>
          <div className="w-6 h-6 rounded-full bg-gray-300 flex justify-center items-center">
            <BellDot size={14} color="black" />
          </div>
          <div>
            <p className="text-gray-800 text-sm font-medium">Alex Adamward</p>
            <p className="text-gray-500 text-xs">Administrator</p>
          </div>
          <div className="w-8 h-8 rounded-full bg-gray-300"></div>
        </div>
      </nav>
      
      <button className="mb-5 mt-5 flex items-center text-gray-600 hover:text-gray-900" onClick={() => window.history.back()}>◀ Back</button>
      
      <div className="bg-white shadow-md p-6 rounded-lg">
        <h2 className="text-lg font-semibold text-gray-800">Driver Details</h2>
        <div className="flex gap-6 mt-3">
          <Image src={driver.image || "/assets/imgs/image.png"} width={150} height={150} alt={driver.name} className="rounded-md" />
          <div>
            <p className="font-bold">{driver.name}</p>
            <p className="text-gray-500">{driver.phone}</p>
            <p className="text-gray-500">{driver.car}</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white shadow-md p-6 rounded-lg mt-6">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Passengers</h2>
          <button onClick={() => setShowModal(true)} className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-600">
            + Add Passenger
          </button>
        </div>
        <table className="w-full mt-4 border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">Location</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {passengerList.map((passenger, index) => (
              <tr key={index} className="text-center border border-gray-200">
                <td className="px-4 py-2">{passenger.id}</td>
                <td className="px-4 py-2">{passenger.name}</td>
                <td className="px-4 py-2">{passenger.phone}</td>
                <td className="px-4 py-2">{passenger.location}</td>
                <td className="px-4 py-2">
                  <button onClick={() => handleDeletePassenger(passenger.id)}>
                    <Trash2 size={14} color="red" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-5 rounded-lg w-96">
            <h2 className="text-lg font-semibold">Add Passenger</h2>
            <input type="text" placeholder="Name" value={newPassenger.name} onChange={(e) => setNewPassenger({ ...newPassenger, name: e.target.value })} className="border p-2 w-full mb-2 rounded-lg" />
            <input type="text" placeholder="Phone" value={newPassenger.phone} onChange={(e) => setNewPassenger({ ...newPassenger, phone: e.target.value })} className="border p-2 w-full mb-2 rounded-lg" />
            <input type="text" placeholder="Location" value={newPassenger.location} onChange={(e) => setNewPassenger({ ...newPassenger, location: e.target.value })} className="border p-2 w-full mb-2 rounded-lg" />
            <div className="flex gap-2 mt-3">
              <button onClick={handleAddPassenger} className="bg-blue-500 text-white p-2 rounded-lg w-1/2">Add</button>
              <button onClick={() => setShowModal(false)} className="bg-gray-500 text-white p-2 rounded-lg w-1/2">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function DriverInfo() {
  return (
    <Suspense fallback={<p className="text-center text-red-500 mt-10">Loading...</p>}>
      <DriverInfoComponent />
    </Suspense>
  );
}
