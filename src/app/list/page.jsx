"use client";
import React, { useState } from "react";
import { BellDot, Settings2, Plus, SquarePen, Trash2 } from "lucide-react";
import Drivers from "../list/driverdetails";
import Image from "next/image";

const DriverTable = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [drivers, setDrivers] = useState(Drivers);
  const [showModal, setShowModal] = useState(false);
  const [newDriver, setNewDriver] = useState({
    id: "",
    name: "",
    phone: "",
    car: "",
    passenger: "",
    zone: "",
    startLocation: "",
    endLocation: "",
    carType: "", 
    passengers: Array(3).fill({ name: "", phone: "", location: "" }), 
  });

  const handleCarTypeChange = (e) => {
    const carType = e.target.value;

    setNewDriver((prev) => ({
      ...prev,
      carType,
      passengers: Array(carType === "sedan" ? 4 : 3).fill({ name: "", phone: "", location: "" }), 
    }));
  };

  const filteredDrivers = drivers.filter((driver) =>
    Object.values(driver).some((value) =>
      value.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const handleAddDriver = () => {

    const nextId = drivers.length > 0
      ? Math.max(...drivers.map((driver) => Number(driver.id))) + 1
      : 1;


      setDrivers([...drivers, { ...newDriver, id: nextId.toString() }]);


      setShowModal(false);


      setNewDriver({
      id: "",
      name: "",
      phone: "",
      car: "",
      passenger: "",
      zone: "",
      startLocation: "",
      endLocation: "",
      carType: "",
      passengers: Array(3).fill({ name: "", phone: "", location: "" }), 
    });
  };

  const handleDeleteDriver = (id) => {
    setDrivers(drivers.filter((driver) => driver.id !== id));
  };

  const handlePassengerChange = (index, field, value) => {
    const updatedPassengers = [...newDriver.passengers];
    updatedPassengers[index] = { ...updatedPassengers[index], [field]: value };
    setNewDriver({ ...newDriver, passengers: updatedPassengers });
  };

  return (
    <div className="p-5 bg-white text-black">
      <nav className="flex justify-between items-center px-6 py-2 bg-white shadow-md rounded-lg">
        <div className="text-gray-400 font-semibold text-lg">LOGO</div>
        <div className="flex items-center space-x-3">
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

      <div>
        <div className="flex flex-col sm:flex-row justify-between items-center m-5 gap-4">
          <p>All Routes({Drivers.length})</p>
          <div className="flex flex-col sm:flex-row gap-2">
            <a className="bg-gray-800 rounded-md p-2 text-white flex justify-center items-center gap-1 text-xs w-full sm:w-auto" href="">
              <Settings2 size={14} color="white" />
              Filter
            </a>
            <input
              className="border-2 rounded-md indent-2 px-2"
              type="text"
              placeholder="Search Routes"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              className="bg-gray-800 px-4 py-2 text-white rounded-md text-xs flex items-center gap-1 w-full sm:w-auto"
              onClick={() => setShowModal(true)}
            >
              <Plus size={14} color="white" /> Add Routes
            </button>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-4">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-800 text-white uppercase text-sm font-semibold text-left">
                    <th className="py-2 px-4 rounded-l-lg">ID</th>
                    <th className="py-2 px-4">Driver Name</th>
                    <th className="py-2 px-4">Phone Number</th>
                    <th className="py-2 px-4">Car</th>
                    <th className="py-2 px-4">Passenger</th>
                    <th className="py-2 px-4">Zone</th>
                    <th className="py-2 px-4">Start Location</th>
                    <th className="py-2 px-4">End Location</th>
                    <th className="py-2 px-4 rounded-r-lg">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredDrivers.length > 0 ? (
                    filteredDrivers.map((driver, index) => (
                      <tr
                        key={driver.id}
                        className={`text-gray-700 text-sm border-b hover:bg-gray-50 cursor-pointer ${
                          index % 2 === 0 ? "bg-white" : "bg-gray-100"
                        }`}
                        onClick={() => (window.location.href = `/driverinfo?id=${driver.id}`)}
                      >
                        <td className="py-2 px-4">{driver.id}</td>
                        <td className="py-2 px-4">{driver.name}</td>
                        <td className="py-2 px-4">{driver.phone}</td>
                        <td className="py-2 px-4">{driver.car}</td>
                        <td className="py-2 px-4">{driver.passenger}</td>
                        <td className="py-2 px-4">{driver.zone}</td>
                        <td className="py-2 px-4">
                          {driver.startLocation} <br />
                          <a className="text-blue-500 underline" href="">
                            {driver.map}
                          </a>
                        </td>
                        <td className="py-2 px-4">
                          {driver.endLocation} <br />
                          <a className="text-blue-500 underline" href="">
                            {driver.map}
                          </a>
                        </td>
                        <td className="py-2 px-4">
                          <div className="flex space-x-2">
                            <a
                              className="text-green-600 hover:text-green-800"
                              href={`/driverinfo?id=${driver.id}`}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <SquarePen size={14} />
                            </a>
                            <button
                              className="text-red-600 hover:text-red-800"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDeleteDriver(driver.id);
                              }}
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="9" className="py-2 px-4 border text-center text-gray-500">
                        No drivers found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white text-black p-6 rounded-lg shadow-xl w-[600px]">
            <h2 className="text-xl font-semibold mb-4">Add New Routes</h2>

            <div className="mb-4">
              <h3 className="font-semibold mb-2">Add Driver and Car Info</h3>
              <div className="flex items-center gap-4">
                <Image
                  src="/assets/imgs/image.png"
                  alt="Driver"
                  width={176}
                  height={192}
                  className="rounded-md object-cover border"
                />

                <div className="flex-1 grid grid-cols-2 gap-2">
                  <input
                    className="border p-2 rounded w-full"
                    placeholder="Driver Name"
                    onChange={(e) => setNewDriver({ ...newDriver, name: e.target.value })}
                  />
                  <input
                    className="border p-2 rounded w-full"
                    placeholder="Car Number"
                    onChange={(e) => setNewDriver({ ...newDriver, car: e.target.value })}
                  />
                  <input
                    className="border p-2 rounded w-full"
                    placeholder="Phone Number"
                    onChange={(e) => setNewDriver({ ...newDriver, phone: e.target.value })}
                  />

                  <select
                    className="border p-1 rounded w-full text-gray-400"
                    onChange={handleCarTypeChange}
                  >
                    <option value="">Choose Car Type</option>
                    <option value="sedan">Sedan</option>
                    <option value="mini">Mini</option>
                  </select>

                  <input
                    className="border p-2 rounded w-full col-span-2"
                    type="password"
                    placeholder="Password"
                  />
                </div>
              </div>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold mb-2">Add Passenger</h3>
              {newDriver.passengers.map((passenger, index) => (
                <div key={index} className="grid grid-cols-3 gap-2 mb-2">
                  <input
                    className="border p-2 rounded w-full"
                    placeholder="Passenger Name"
                    value={passenger.name}
                    onChange={(e) => handlePassengerChange(index, "name", e.target.value)}
                  />
                  <input
                    className="border p-2 rounded w-full"
                    placeholder="Phone Number"
                    value={passenger.phone}
                    onChange={(e) => handlePassengerChange(index, "phone", e.target.value)}
                  />
                  <input
                    className="border p-2 rounded w-full"
                    placeholder="Location"
                    value={passenger.location}
                    onChange={(e) => handlePassengerChange(index, "location", e.target.value)}
                  />
                </div>
              ))}
            </div>

            <div className="flex justify-between mt-4 gap-3">
              <button
                className="border border-black px-4 py-2 rounded w-1/2"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-black text-white px-6 py-2 rounded w-1/2"
                onClick={handleAddDriver}
              >
                Add Route
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DriverTable;