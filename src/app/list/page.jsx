// import React from 'react'

// const data = () => {
//     id:"wdkjkd";


//   return (
//     <div className='p-5'>

// <nav className="flex justify-between items-center px-6 py-2 bg-white shadow-md rounded-lg">

//       <div className="text-gray-400 font-semibold text-lg">LOGO</div>

//       <div className="flex items-center space-x-3">
//         <div className="relative w-5 h-5">
//           {/* <Image
//             src="/" 
//             alt="Notification"
//             layout="fill"
//             objectFit="contain"
//           /> */}
//         </div>
//         <div>
//           <p className="text-gray-800 text-sm font-medium">Alex Adamward</p>
//           <p className="text-gray-500 text-xs">Administrator</p>
//         </div>
//         <div className="w-8 h-8 rounded-full bg-gray-300"></div>
//       </div>
//     </nav>

//     <div>
//         <div className='flex justify-between m-10'>
//                 <p>All Routes(154)</p>
//                 <div className='flex gap-2'>
//                 <a className='bg-black w-16 rounded-md' href=""></a>
//                 <input className='border-2 rounded-md' type="text" name="" id="" />
//                 <a className='bg-black w-24 rounded-md' href=""></a>
//                 </div>
//         </div>
//     </div>

//     <div className='w-full flex justify-center gap-x-4 bg-gray-800 text-white'>
//         <table>
//             <thead>
//                 <tr className='flex gap-10'>
//                 <th>ID</th>
//                 <th>Driver Name</th>
//                 <th>Phone Number</th>
//                 <th>Car</th>
//                 <th>Pessenger</th>
//                 <th>Zone</th>
//                 <th>Start Loaction</th>
//                 <th>End Location</th>
//                 <th>Action</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr className='flex gap-10'>
//                     <td>01</td>
//                     <td>aweem</td>
//                     <td>kumail</td>
//                     <td>pakistan</td>
//                     <td>karachi</td>
//                     <td>lab</td>
//                     <td>theory</td>
//                     <td>Practical</td>
//                     <td>marks</td>
//                 </tr>
//             </tbody>
//         </table>
//     </div>

//     </div>
//   )
// }

// export default data


// components/DriverTable.js

import React from "react";

const DriverTable = () => {
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

  
  return (
    <div className='p-5'>

    <nav className="flex justify-between items-center px-6 py-2 bg-white shadow-md rounded-lg">
    
          <div className="text-gray-400 font-semibold text-lg">LOGO</div>
    
          <div className="flex items-center space-x-3">
            <div className="relative w-5 h-5">
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
                    <a className='bg-gray-800 w-16 rounded-md text-white flex justify-center items-center text-xs' href="">Filter</a>
                    <input className='border-2 rounded-md indent-2' type="text" name="" id="" placeholder="Enter Routes" />
                    <a className='bg-gray-800 w-24 text-white rounded-md text-xs flex justify-center items-center' href="">Add Routes</a>
                    </div>
            </div>
        </div>
        
    
    <div className="p-6">
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 shadow-md bg-white rounded-lg">
          <thead>
            <tr className="bg-gray-800 text-white uppercase text-sm font-semibold">
              <th className="py-2 px-4 border rounded-md">ID</th>
              <th className="py-2 px-4 border">Driver Name</th>
              <th className="py-2 px-4 border">Phone Number</th>
              <th className="py-2 px-4 border">Car</th>
              <th className="py-2 px-4 border">Passenger</th>
              <th className="py-2 px-4 border">Zone</th>
              <th className="py-2 px-4 border">Start Location</th>
              <th className="py-2 px-4 border">End Location</th>
              <th className="py-2 px-4 border rounded-md">Action</th>
            </tr>
          </thead>
          <tbody>
            {drivers.map((driver, index) => (
              <tr key={index} className="text-gray-700 text-center text-xs">
                <td className="py-2 px-4 border">{driver.id}</td>
                <td className="py-2 px-4 border">{driver.name}</td>
                <td className="py-2 px-4 border">{driver.phone}</td>
                <td className="py-2 px-4 border">{driver.car}</td>
                <td className="py-2 px-4 border">{driver.passenger}</td>
                <td className="py-2 px-4 border">{driver.zone}</td>
                <td className="py-2 px-4 border">{driver.startLocation}</td>
                <td className="py-2 px-4 border">{driver.endLocation}</td>
                <td className="py-2 px-4 border">
                  <button className="bg-green-300 text-white px-3 py-1 rounded">
                    Edit
                  </button>
                  <button className="bg-red-300 text-white px-3 py-1 rounded ml-2">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
</div>
  );
};


export default DriverTable;
