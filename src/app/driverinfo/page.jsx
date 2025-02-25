"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Drivers from "../list/driverdetails";
import Image from "next/image";
import { BellDot, SquarePen, Trash2 } from "lucide-react";
import Passengers from "./passengerdetails";

export default function DriverInfo() {
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
    setPassengerList([...passengerList, { ...newPassenger, id: passengerList.length + 1 }]);
    setShowModal(false);
    setNewPassenger({ name: "", phone: "", location: "" });
  };

  const handleDeletePassenger = (id) => {
    setPassengerList(passengerList.filter((p) => p.id !== id));
  };

  if (!driver) {
    return <p className="text-center text-red-500 mt-10">Loading......</p>;
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
      
      <button
        className="mb-5 mt-5 flex items-center text-gray-600 hover:text-gray-900"
        onClick={() => window.history.back()}
      >
        ◀ Back
      </button>
      
      <div className="bg-white shadow-md p-6 rounded-lg">
        <div className="flex justify-between">
          <div>
            <p className="text-lg font-semibold text-gray-800">Route ID</p>
            <p className="text-gray-600">{driver.id}</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-800">Zone</p>
            <p className="text-gray-600">{driver.zone}</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-800">Start Location</p>
            <p className="text-blue-500 underline">{driver.startLocation}</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-800">End Location</p>
            <p className="text-blue-500 underline">{driver.endLocation}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 mt-6">
      <div className="col-span-1 bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Driver Info</h2>


          <Image
            src={driver.image ? driver.image : "/assets/imgs/image.png"}
            width={350}
            height={150}
            alt={driver.name}
            className="rounded-md"
          />

          <div className="flex gap-24 mt-3">
            <p className="text-lg font-bold text-gray-800">
              <span className="text-sm text-gray-500"> Driver Name </span>
              <br />
              {driver.name}
            </p>
            <p className="text-lg font-bold text-gray-800">
              <span className="text-sm text-gray-500"> Phone Number </span>
              <br />
              {driver.phone}
            </p>
          </div>

          <hr className="my-3" />

          <div className="flex gap-10">
            <p>
              Car Info
              <br />
              <strong>{driver.car}</strong>
            </p>
            <p>
              Password
              <br />
              <strong> *********</strong>
            </p>
          </div>
        </div>

        <div className="col-span-2 bg-white shadow-md p-6 rounded-lg">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">Passengers</h2>
            <button onClick={() => setShowModal(true)} className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-600">
              + Add Passenger
            </button>
          </div>
          <table className="w-full bg-white shadow-lg rounded-lg">
            <thead>
              <tr className="bg-gray-800 text-white uppercase text-sm font-semibold">
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Passenger Name</th>
                <th className="px-4 py-2">Phone Number</th>
                <th className="px-4 py-2">Location</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {passengerList.length > 0 ? (
                passengerList.map((passenger, index) => (
                  <tr key={index} className="text-center">
                    <td className="border border-gray-300 px-4 py-2">{passenger.id}</td>
                    <td className="border border-gray-300 px-4 py-2">{passenger.name}</td>
                    <td className="border border-gray-300 px-4 py-2">{passenger.phone}</td>
                    <td className="border border-gray-300 px-4 py-2">{passenger.location}</td>
                    <td className="border border-gray-300 px-4 py-2">
                      <button onClick={() => handleDeletePassenger(passenger.id)}>
                        <Trash2 size={14} color="red" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-4 text-gray-500">
                    No passengers found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded-lg">
            <h1 className="text-[30px] font-bold mb-3">Add Passenger</h1>
            <h2 className="text-lg font-semibold mb-3">Add Passenger</h2>
            <div className="flex gap-5">
            <input type="text" placeholder="Name" value={newPassenger.name} onChange={(e) => setNewPassenger({ ...newPassenger, name: e.target.value })} className="border p-2 w-full mb-2 rounded-lg" />
            <input type="text" placeholder="Phone" value={newPassenger.phone} onChange={(e) => setNewPassenger({ ...newPassenger, phone: e.target.value })} className="border p-2 w-full mb-2 rounded-lg" />
            <input type="text" placeholder="Location" value={newPassenger.location} onChange={(e) => setNewPassenger({ ...newPassenger, location: e.target.value })} className="border p-2 w-full mb-2 rounded-lg" />
            </div>
            <div className="flex justify-between gap-2 mt-2 h-10">
            <button onClick={handleAddPassenger} className="w-1/2 border rounded">Add</button>
            <button className="w-1/2 bg-gray-700 text-white rounded" onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}