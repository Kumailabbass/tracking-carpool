"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import Drivers from "../list/driverdetails";
import Image from "next/image";
import { BellDot, Trash2, SquarePen } from "lucide-react";
import Passengers from "./passengerdetails";

function DriverInfoComponent() {
  const searchParams = useSearchParams();
  const driverId = searchParams.get("id");
  const [driver, setDriver] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false); 
  const [showPassengerEditModal, setShowPassengerEditModal] = useState(false); 
  const [selectedPassenger, setSelectedPassenger] = useState(null); 
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
      setPassengerList([...passengerList, { ...newPassenger, id: `PP-BK ${passengerList.length + 436}` }]);
      setShowModal(false);
      setNewPassenger({ name: "", phone: "", location: "" });
    }
  };

  const handleDeletePassenger = (id) => {
    setPassengerList(passengerList.filter((p) => p.id !== id));
  };

  const handleEditPassenger = (passenger) => {
    setSelectedPassenger(passenger); 
    setShowPassengerEditModal(true); 
  };

  if (!driver) {
    return <p className="text-center text-red-500 mt-10">Loading...</p>;
  }

  return (
    <div className="p-6 min-h-screen bg-white text-black">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
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
          <div>
            <p className="text-lg font-semibold text-gray-800">No. of Passengers</p>
            <p className="text-gray-600">{driver.passenger}</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-800">Status</p>
            <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full">Online</span>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md p-6 rounded-lg mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="col-span-1">
            <div className="relative w-[80%]">
              <h2 className="text-lg font-semibold text-gray-800 mb-3">Driver Info</h2>
              <button
                className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md"
                onClick={() => setShowEditModal(true)} 
              >
                <SquarePen size={14} color="black" />
              </button>
            </div>
            <div className="relative">
              <Image
                src={driver.image ? driver.image : "/assets/imgs/image.png"}
                width={350}
                height={150}
                alt={driver.name}
                className="rounded-md"
              />
            </div>
            <div className="mt-3">
              <div className="flex space-x-32">
                <p className="text-lg font-bold text-gray-800">
                  <span className="text-sm text-gray-500">Driver Name</span>
                  <br />
                  {driver.name}
                </p>
                <p className="text-lg font-bold text-gray-800">
                  <span className="text-sm text-gray-500">Phone Number</span>
                  <br />
                  {driver.phone}
                </p>
              </div>
              <div className="flex space-x-20 mt-3">
                <p>
                  <span className="text-sm text-gray-500">Car Info</span>
                  <br />
                  <strong>{driver.car}</strong>
                </p>
                <p>
                  <span className="text-sm text-gray-500">Password</span>
                  <br />
                  <strong>*********</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="flex flex-col sm:flex-row sm:justify-between items-center mb-2">
              <h2 className="text-lg font-semibold text-gray-800 mb-3 sm:mb-0">Passengers</h2>
              <button onClick={() => setShowModal(true)} className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-600">
                + Add Passenger
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[400px] bg-white shadow-lg rounded-lg">
                <thead>
                  <tr className="bg-gray-800 text-white uppercase text-sm font-semibold">
                    <th className="px-4 py-2 rounded-l-lg">ID</th>
                    <th className="px-4 py-2">Passenger Name</th>
                    <th className="px-4 py-2">Phone Number</th>
                    <th className="px-4 py-2">Location</th>
                    <th className="px-4 py-2 rounded-r-lg">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {passengerList.length > 0 ? (
                    passengerList.map((passenger, index) => (
                      <tr key={index} className="text-center">
                        <td className="border-b-2 px-4 py-2">{passenger.id}</td>
                        <td className="border-b-2 px-4 py-2">{passenger.name}</td>
                        <td className="border-b-2 px-4 py-2">{passenger.phone}</td>
                        <td className="border-b-2 px-4 py-2">{passenger.location}</td>
                        <td className="border-b-2 px-4 py-2">
                          <div className="flex justify-center space-x-2">
                            <button onClick={() => handleEditPassenger(passenger)}>
                              <SquarePen size={14} color="green" />
                            </button>
                            <button onClick={() => handleDeletePassenger(passenger.id)}>
                              <Trash2 size={14} color="red" />
                            </button>
                          </div>
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
        </div>
      </div>

      {showEditModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white text-black p-6 rounded-lg w-[450px]">
            <h1 className="text-2xl font-bold mb-4">Driver Info</h1>
            <div className="relative w-full h-40 mb-4">
              <Image
                src={driver.image ? driver.image : "/assets/imgs/image.png"}
                layout="fill"
                objectFit="contain"
                alt={driver.name}
                className="rounded-md"
              />
            </div>
                <div className="grid grid-cols-2 gap-2 mb-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">Driver Name</label>
                <input
                  type="text"
                  value={driver.name}
                  readOnly
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="text"
                  value={driver.phone}
                  readOnly
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Car Info</label>
                <input
                  type="text"
                  value={driver.car}
                  readOnly
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  value="********"
                  readOnly
                  className="w-full p-2 border rounded-lg"
                />
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-6">
              <button
                className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
                onClick={() => setShowEditModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {showPassengerEditModal && selectedPassenger && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white text-black p-6 rounded-lg w-[450px]">
            <h1 className="text-2xl font-bold mb-4">Passenger Info</h1>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Passenger Name</label>
                <input
                  type="text"
                  value={selectedPassenger.name}
                  readOnly
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="text"
                  value={selectedPassenger.phone}
                  readOnly
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Location</label>
                <input
                  type="text"
                  value={selectedPassenger.location}
                  readOnly
                  className="w-full p-2 border rounded-lg"
                />
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-6">
              <button
                className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
                onClick={() => setShowPassengerEditModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white text-black p-5 rounded-lg">
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

export default function DriverInfo() {
  return (
    <Suspense fallback={<p className="text-center text-red-500 mt-10">Loading...</p>}>
      <DriverInfoComponent />
    </Suspense>
  );
}