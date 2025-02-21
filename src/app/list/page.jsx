"use client";
import React, { useState } from "react";
import { BellDot} from "lucide-react";
import { Settings2 } from "lucide-react";
import { Plus } from "lucide-react";
import { SquarePen, Trash2 } from "lucide-react";


const DriverTable = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const drivers = [

    {
      id: "CP-BK 436",
      name: "Ali Ahmed",
      phone: "+92 318 028882",
      car: "Alto MINI-BPW-124",
      passenger: "3-Passenger",
      zone: "Gulistan e Johar",
      startLocation: "Kamran Chowrangi",
      endLocation: "Nazimabad 7 Number Bus Stop",
    },
    {
      id: "CP-BK 501",
      name: "Raza Shafiq",
      phone: "+92 318 028882",
      car: "Alto MINI-BPW-124",
      passenger: "3-Passenger",
      zone: "Gulistan e Johar",
      startLocation: "Kamran Chowrangi",
      endLocation: "Nazimabad 7 Number Bus Stop",
    },
    {
      id: "CP-BK 325",
      name: "Ali Ahmed",
      phone: "+92 318 028882",
      car: "Alto MINI-BPW-124",
      passenger: "3-Passenger",
      zone: "Gulistan e Johar",
      startLocation: "Kamran Chowrangi",
      endLocation: "Nazimabad 7 Number Bus Stop",
    },
    {
      id: "CP-BK 712",
      name: "Ali Ahmed",
      phone: "+92 318 028882",
      car: "Alto MINI-BPW-124",
      passenger: "3-Passenger",
      zone: "Gulistan e Johar",
      startLocation: "Kamran Chowrangi",
      endLocation: "Nazimabad 7 Number Bus Stop",
    },
    {
      id: "CP-BK 876",
      name: "Ali Ahmed",
      phone: "+92 318 028882",
      car: "Alto MINI-BPW-124",
      passenger: "3-Passenger",
      zone: "Gulistan e Johar",
      startLocation: "Kamran Chowrangi",
      endLocation: "Nazimabad 7 Number Bus Stop",
    },
    {
      id: "CP-BK 440",
      name: "Ali Ahmed",
      phone: "+92 318 028882",
      car: "Alto MINI-BPW-124",
      passenger: "3-Passenger",
      zone: "Gulistan e Johar",
      startLocation: "Kamran Chowrangi",
      endLocation: "Nazimabad 7 Number Bus Stop",
    },
    {
      id: "CP-BK 618",
      name: "Ali Ahmed",
      phone: "+92 318 028882",
      car: "Alto MINI-BPW-124",
      passenger: "3-Passenger",
      zone: "Gulistan e Johar",
      startLocation: "Kamran Chowrangi",
      endLocation: "Nazimabad 7 Number Bus Stop",
    },
    {
      id: "CP-BK 203",
      name: "Ahmed khan",
      phone: "+92 318 028882",
      car: "Alto MINI-BPW-124",
      passenger: "3-Passenger",
      zone: "Gulistan e Johar",
      startLocation: "Kamran Chowrangi",
      endLocation: "Nazimabad 7 Number Bus Stop",
    },
  ];

  const filteredDrivers = drivers.filter((driver) =>
    driver.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    driver.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    driver.zone.toLowerCase().includes(searchQuery.toLowerCase()) ||
    driver.passenger.toLowerCase().includes(searchQuery.toLowerCase())||
    driver.phone.toLowerCase().includes(searchQuery.toLowerCase())||
    driver.startLocation.toLowerCase().includes(searchQuery.toLowerCase())||
    driver.endLocation.toLowerCase().includes(searchQuery.toLowerCase())||
    driver.car.toLowerCase().includes(searchQuery.toLowerCase())
  );
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
          <p>All Routes({drivers.length})</p>
          <div className='flex gap-2'>
            <a className='bg-gray-800 w-16 rounded-md text-white flex justify-center items-center gap-1 text-xs' href="">
            <Settings2 size={14} color="white" />
            Filter</a>
            <input
              className="border-2 rounded-md indent-2 px-2"
              type="text"
              placeholder="Search Routes"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}/> 
              <a className='bg-gray-800 w-24 text-white rounded-md text-xs flex justify-center items-center gap-1' href="">
              <Plus size={14} color="white" />
                Add Routes</a>
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
                filteredDrivers.map((driver, index) => (
                  <tr key={index} className="text-gray-700 text-center text-xs">
                    <td className="py-2 px-4">{driver.id}</td>
                    <td className="py-2 px-4">{driver.name}</td>
                    <td className="py-2 px-4">{driver.phone}</td>
                    <td className="py-2 px-4">{driver.car}</td>
                    <td className="py-2 px-4">{driver.passenger}</td>
                    <td className="py-2 px-4">{driver.zone}</td>
                    <td className="py-2 px-4">{driver.startLocation}</td>
                    <td className="py-2 px-4">{driver.endLocation}</td>
                    <td className="py-2 px-4">
                      <button className=" text-white px-3 py-1 rounded">
                      <SquarePen size={14} color="green" />                      
                      </button>
                      <button className=" text-white px-3 py-1 rounded ml-2">
                      <Trash2 size={14} color="red" />
                      </button>
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
  );
};



export default DriverTable;
