"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Drivers from "../list/driverdetails";
import Image from "next/image";
import { BellDot } from "lucide-react";
import Passengers from "./passengerdetails";
import { SquarePen, Trash2 } from "lucide-react";

export default function DriverInfo() {
  const searchParams = useSearchParams();
  const driverId = searchParams.get("id");

  const [driver, setDriver] = useState(null);

  useEffect(() => {
    if (driverId) {
      const foundDriver = Drivers.find((d) => d.id === driverId);
      setDriver(foundDriver || null);
    }
  }, [driverId]);

  if (!driver) {
    return <p className="text-center text-red-500 mt-10">Loading......</p>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

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
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">Passengers</h2>
            <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-600">
              + Add Passenger
            </button>
          </div>


          <table className="w-full overflow-x-auto bg-white shadow-lg rounded-lg">
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
              {Passengers.length > 0 ? (
                Passengers.map((passenger, index) => (
                  <tr key={index} className="text-center">
                    <td className="border border-gray-300 px-4 py-2">{passenger.id}</td>
                    <td className="border border-gray-300 px-4 py-2">{passenger.name}</td>
                    <td className="border border-gray-300 px-4 py-2">{passenger.phone}</td>
                    <td className="border border-gray-300 px-4 py-2">{passenger.location}</td>
                    <td className="border border-gray-300 px-4 py-2">
                    <div className="flex">
    <a className="text-white px-3 py-1 rounded" href={`/driverinfo?id=${driver.id}`}>
      <SquarePen size={14} color="green" />
    </a>

    <a className="text-white px-3 py-1 rounded" href="">
      <Trash2 size={14} color="red" />
    </a>
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
  );
}
