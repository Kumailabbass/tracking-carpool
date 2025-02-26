"use client";
import React, { useState } from "react";
import { BellDot } from "lucide-react";
import { Settings2 } from "lucide-react";
import { Plus } from "lucide-react";
import { SquarePen, Trash2 } from "lucide-react";
import Drivers from "../list/driverdetails"
import Image from "next/image";



const DriverTable = () => {

  const [showPassengerModal, setShowPassengerModal] = useState(false);
  // const [selectedDriver, setSelectedDriver] = useState(null);
  // const [passengers, setPassengers] = useState([]);
  const [newPassenger, setNewPassenger] = useState("");


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
    carType: ""
  });

  const filteredDrivers = drivers.filter((driver) =>
    Object.values(driver).some((value) =>
      value.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );
  // const handleShowModal = (driver) => {
  //   setSelectedDriver(driver);
  //   setShowModal(true);
  // };

  // const handleCloseModal = () => {
  //   setShowModal(false);
  //   setPassengers([]);
  // };

  const handleShowPassengerModal = () => {
    setShowPassengerModal(true);
  };

  const handleClosePassengerModal = () => {
    setShowPassengerModal(false);
  };

  // const handleAddPassenger = () => {
  //   if (newPassenger.trim() !== "") {
  //     setPassengers([...passengers, newPassenger]);
  //     setNewPassenger("");
  //   }
  // };

  const handleAddDriver = () => {
    const nextId = drivers.length > 0 
      ? Math.max(...drivers.map(driver => Number(driver.id) || 0)) + 1 
      : 1;
  
    setDrivers([...drivers, { ...newDriver, id: nextId.toString() }]);
    setShowModal(false);
    setNewDriver({ id: "", name: "", phone: "", car: "", passenger: "", zone: "", startLocation: "", endLocation: "", carType: "" });
  };


  const handleDeleteDriver = (id) => {
    setDrivers(drivers.filter((driver) => driver.id !== id));
  };
  return (
    <div className='p-5'>

      <nav className="flex justify-between items-center px-6 py-2 bg-white shadow-md rounded-lg">

        <div className="text-gray-400 font-semibold text-lg">LOGO</div>

        <div className="flex items-center space-x-3">
          <div className="relative w-5 h-5">
          </div>

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
        <div className='flex justify-between m-5'>
          <p>All Routes({Drivers.length})</p>
          <div className='flex gap-2'>
            <a className='bg-gray-800 w-16 rounded-md text-white flex justify-center items-center gap-1 text-xs' href="">
              <Settings2 size={14} color="white" />
              Filter</a>
            <input
              className="border-2 rounded-md indent-2 px-2"
              type="text"
              placeholder="Search Routes"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} />
            <button className='bg-gray-800 w-24 text-white rounded-md text-xs flex justify-center items-center gap-1'
              onClick={() => setShowModal(true)}>
              <Plus size={14} color="white" /> Add Routes
            </button>
          </div>
        </div>
      </div>


      <div className="p-6">
        <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
          <table className="min-w-full ">
            <thead>
              <tr className="bg-gray-800 text-white uppercase text-sm font-semibold">
                <th className="py-2 px-4 rounded-l-md">ID</th>
                <th className="py-2 px-4">Driver Name</th>
                <th className="py-2 px-4">Phone Number</th>
                <th className="py-2 px-4">Car</th>
                <th className="py-2 px-4">Passenger</th>
                <th className="py-2 px-4">Zone</th>
                <th className="py-2 px-4">Start Location</th>
                <th className="py-2 px-4">End Location</th>
                <th className="py-2 px-4 rounded-r-md">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredDrivers.length > 0 ? (
                filteredDrivers.map((driver) => (
                  <tr key={driver.id} className="text-gray-700  text-xs hover:bg-slate-100">
                    <td className="py-2 px-4">{driver.id}</td>
                    <td className="py-2 px-4">{driver.name}</td>
                    <td className="py-2 px-4">{driver.phone}</td>
                    <td className="py-2 px-4">{driver.car}</td>
                    <td className="py-2 px-4">{driver.passenger}</td>
                    <td className="py-2 px-4">{driver.zone}</td>
                    <td className="py-2 px-4">{driver.startLocation} <br /> <a className="text-blue-500 underline " href="">{driver.map}</a></td>
                    <td className="py-2 px-4">{driver.endLocation} <br /> <a className="text-blue-500 underline " href="">{driver.map}</a></td>
                    <td className="py-2 px-4">
                      <div className="flex">
                        <a className="text-white px-3 py-1 rounded" href={`/driverinfo?id=${driver.id}`}>
                          <SquarePen size={14} color="green" />
                        </a>

                        <button className="text-red-600" onClick={() => handleDeleteDriver(driver.id)}>
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
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-xl w-[600px]">
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
                  <input className="border p-2 rounded w-full" placeholder="Driver Name"
                    onChange={(e) => setNewDriver({ ...newDriver, name: e.target.value })} />
                  <input className="border p-2 rounded w-full" placeholder="Car Number"
                    onChange={(e) => setNewDriver({ ...newDriver, car: e.target.value })} />
                  <input className="border p-2 rounded w-full" placeholder="Phone Number"
                    onChange={(e) => setNewDriver({ ...newDriver, phone: e.target.value })} />

                  <select className="border p-1 rounded w-full text-gray-400" onChange={(e) => setNewDriver({ ...newDriver, carType: e.target.value })} >
                    <option value="">Choose Car Type</option>
                    <option value="sodan">Sodan</option>
                    <option value="mini">Mini</option>
                  </select>

                  <input className="border p-2 rounded w-full col-span-2" type="password" placeholder="Password" />
                </div>
              </div>
            </div>




            <div className="mb-4">
              <h3 className="font-semibold mb-2">Add Route</h3>
              <div className="grid grid-cols-3 gap-2">
                <input className="border p-2 rounded w-full" placeholder="Zone"
                  onChange={(e) => setNewDriver({ ...newDriver, zone: e.target.value })} />
                <input className="border p-2 rounded w-full" placeholder="Start Location"
                  onChange={(e) => setNewDriver({ ...newDriver, startLocation: e.target.value })} />
                <input className="border p-2 rounded w-full" placeholder="End Location"
                  onChange={(e) => setNewDriver({ ...newDriver, endLocation: e.target.value })} />
              </div>
            </div>


            <div className="mb-4">
              <h3 className="font-semibold mb-2">Add Passenger</h3>
              <div className="grid grid-cols-3 gap-2">
                <input className="border p-2 rounded w-full" placeholder="Passenger Name"
                  onChange={(e) => setNewDriver({ ...newDriver, passengerName: e.target.value })} />
                <input className="border p-2 rounded w-full" placeholder="Phone Number"
                  onChange={(e) => setNewDriver({ ...newDriver, passengerPhone: e.target.value })} />
                <input className="border p-2 rounded w-full" placeholder="Location"
                  onChange={(e) => setNewDriver({ ...newDriver, passengerLocation: e.target.value })} />
              </div>
              <button
                className=" text-black px-4 py-2 rounded-lg mt-4 flex gap-2 items-center"
                onClick={handleShowPassengerModal}
              >
               <span className="rounded-full bg-slate-900 text-white px-2 ">+</span> Add Passenger
              </button>
            </div>

            <div className="flex justify-between mt-4 gap-3">
              <button className="border px-4 py-2 rounded  w-1/2" onClick={() => setShowModal(false)}>Cancel</button>
              <button className="bg-black text-white px-6 py-2 rounded w-1/2" onClick={handleAddDriver}>Add Route</button>
            </div>
          </div>
        </div>
      )}

      {showPassengerModal && (
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
              <button className="w-1/2 border rounded" onClick={/*handleAddPassenger*/handleClosePassengerModal}>Add</button>
              <button className="w-1/2 bg-gray-700 text-white rounded" onClick={handleClosePassengerModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
export default DriverTable;

