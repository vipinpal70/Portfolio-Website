// "use client";
// import React, { useEffect, useState } from "react";
// import { min } from "three/tsl";

// function Education() {
//   const [datetime, setdatetime] = useState(new Date());
//   const [minute, setminute] = useState(0);

//   useEffect(() => {
//     const mn = new Date().getMinutes();
//     setminute(mn);
//     console.log(mn);
//   });

//   return (
//     <>
//       {minute % 3 === 0 && (
//         <div className="relative mx-auto flex w-full flex-col overflow-hidden rounded-xl bg-amber-950 shadow-lg transition opacity-50">
//           {/* <!-- Timeline Content --> */}
//           <h1 className="text-center text-3xl font-semibold text-gray-50 p-4 ">
//             Academic Qualification
//           </h1>
//           <div className="relative px-6 mx-auto py-10 w-[75%] h-[90%] inset-y-0 left-10 flex items-center justify-center sm:left-20">
//             {/* <!-- Timeline Line --> */}
//             <div className="absolute inset-y-0 left-6 flex w-8 ">
//               <div className="h-full w-0.5 rounded-full border border-indigo-100"></div>
//             </div>

//             <ol className="relative w-full border-s border-gray-200 dark:border-gray-700">
//               <li className="mb-10 ms-10 w-full">
//                 <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-white/80 dark:bg-blue-900">
//                   <svg
//                     className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
//                   </svg>
//                 </span>
//                 <h3 className="flex items-center mb-1 text-lg font-semibold text-white dark:text-white">
//                   Master in Computer Applications ( MCA ){" "}
//                   <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300 ms-3">
//                     Latest
//                   </span>
//                 </h3>
//                 <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
//                   Vellore Institute of Technology, Bhopal — 2024
//                 </time>
//                 <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
//                   CGPA: 8.2
//                 </p>
//                 <a
//                   href="#"
//                   className="inline-flex items-center px-4 py-2 text-sm font-medium text-black/90 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
//                 >
//                   <svg
//                     className="w-3.5 h-3.5 me-2.5"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
//                     <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
//                   </svg>{" "}
//                   Download Resume
//                 </a>
//               </li>
//               <li className="mb-10 ms-10">
//                 <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-white/80 dark:bg-blue-900">
//                   <svg
//                     className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
//                   </svg>
//                 </span>
//                 <h3 className="mb-1 text-lg font-semibold text-white dark:text-white">
//                   Bachelore of Computer Applications ( BCA )
//                 </h3>
//                 <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
//                   D.A.V PG College, Muzaffarnagar — 2022
//                 </time>
//                 <p className="text-base font-normal text-gray-500 dark:text-gray-400">
//                   Percentage: 65%
//                 </p>
//               </li>
//               <li className="ms-10 mb-8">
//                 <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-white/80 dark:bg-blue-900">
//                   <svg
//                     className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
//                   </svg>
//                 </span>
//                 <h3 className="mb-1 text-lg font-semibold text-white dark:text-white">
//                   Senior Secondary School Certificate ( 12th )
//                 </h3>
//                 <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
//                   Jawahar Navodaya Vidyalaya, Muzaffarnagar — 2018
//                 </time>
//                 <p className="text-base font-normal text-gray-500 dark:text-gray-400">
//                   Percentage: 76%
//                 </p>
//               </li>
//               <li className="ms-10 mb-8">
//                 <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-white/80 dark:bg-blue-900">
//                   <svg
//                     className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
//                   </svg>
//                 </span>
//                 <h3 className="mb-1 text-lg font-semibold text-white dark:text-white">
//                   Junior high School Certificate ( 10th )
//                 </h3>
//                 <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
//                   Jawahar Navodaya Vidyalaya, Muzaffarnagar — 2016
//                 </time>
//                 <p className="text-base font-normal text-gray-500 dark:text-gray-400">
//                   CGPA: 7.4
//                 </p>
//               </li>
//             </ol>
//           </div>
//         </div>
//       )}
//       {minute % 3 === 1 && (
//         <div className="relative mx-auto flex w-full flex-col overflow-hidden rounded-xl bg-[#141414] shadow-lg transition opacity-70">
//           {/* <!-- Timeline Content --> */}
//           <h1 className="text-center text-3xl font-semibold text-gray-50 p-4 ">
//             Academic Qualification
//           </h1>
//           <div className="relative px-6 mx-auto py-10 w-[75%] h-[90%] inset-y-0 left-10 flex items-center justify-center sm:left-20">
//             {/* <!-- Timeline Line --> */}
//             <div className="absolute inset-y-0 left-6 flex w-8 ">
//               <div className="h-full w-0.5 rounded-full border border-indigo-100"></div>
//             </div>

//             <ol className="relative w-full border-s border-gray-200 dark:border-gray-700">
//               <li className="mb-10 ms-10 w-full">
//                 <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-white/80 dark:bg-blue-900">
//                   <svg
//                     className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
//                   </svg>
//                 </span>
//                 <h3 className="flex items-center mb-1 text-lg font-semibold text-white dark:text-white">
//                   Master in Computer Applications ( MCA ){" "}
//                   <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300 ms-3">
//                     Latest
//                   </span>
//                 </h3>
//                 <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
//                   Vellore Institute of Technology, Bhopal — 2024
//                 </time>
//                 <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
//                   CGPA: 8.2
//                 </p>
//                 <a
//                   href="#"
//                   className="inline-flex items-center px-4 py-2 text-sm font-medium text-black/90 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
//                 >
//                   <svg
//                     className="w-3.5 h-3.5 me-2.5"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
//                     <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
//                   </svg>{" "}
//                   Download Resume
//                 </a>
//               </li>
//               <li className="mb-10 ms-10">
//                 <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-white/80 dark:bg-blue-900">
//                   <svg
//                     className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
//                   </svg>
//                 </span>
//                 <h3 className="mb-1 text-lg font-semibold text-white dark:text-white">
//                   Bachelore of Computer Applications ( BCA )
//                 </h3>
//                 <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
//                   D.A.V PG College, Muzaffarnagar — 2022
//                 </time>
//                 <p className="text-base font-normal text-gray-500 dark:text-gray-400">
//                   Percentage: 65%
//                 </p>
//               </li>
//               <li className="ms-10 mb-8">
//                 <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-white/80 dark:bg-blue-900">
//                   <svg
//                     className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
//                   </svg>
//                 </span>
//                 <h3 className="mb-1 text-lg font-semibold text-white dark:text-white">
//                   Senior Secondary School Certificate ( 12th )
//                 </h3>
//                 <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
//                   Jawahar Navodaya Vidyalaya, Muzaffarnagar — 2018
//                 </time>
//                 <p className="text-base font-normal text-gray-500 dark:text-gray-400">
//                   Percentage: 76%
//                 </p>
//               </li>
//               <li className="ms-10 mb-8">
//                 <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-white/80 dark:bg-blue-900">
//                   <svg
//                     className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
//                   </svg>
//                 </span>
//                 <h3 className="mb-1 text-lg font-semibold text-white dark:text-white">
//                   Junior high School Certificate ( 10th )
//                 </h3>
//                 <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
//                   Jawahar Navodaya Vidyalaya, Muzaffarnagar — 2016
//                 </time>
//                 <p className="text-base font-normal text-gray-500 dark:text-gray-400">
//                   CGPA: 7.4
//                 </p>
//               </li>
//             </ol>
//           </div>
//         </div>
//       )}
//       {minute % 3 === 2 && (
//         <div className="relative mx-auto flex w-full flex-col overflow-hidden rounded-xl bg-[#031303] shadow-lg transition opacity-50">
//           {/* <!-- Timeline Content --> */}
//           <h1 className="text-center text-3xl font-semibold text-gray-50 p-4 ">
//             Academic Qualification
//           </h1>
//           <div className="relative px-6 mx-auto py-10 w-[75%] h-[95%] inset-y-0 left-10 flex items-center justify-center sm:left-20">
//             {/* <!-- Timeline Line --> */}
//             <div className="absolute inset-y-0 left-6 flex w-8 ">
//               <div className="h-full w-0.5 rounded-full border border-indigo-100"></div>
//             </div>

//             <ol className="relative w-full border-s border-gray-200 dark:border-gray-700">
//               <li className="mb-10 ms-10 w-full">
//                 <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-white/80 dark:bg-blue-900">
//                   <svg
//                     className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
//                   </svg>
//                 </span>
//                 <h3 className="flex items-center mb-1 text-lg font-semibold text-white dark:text-white">
//                   Master in Computer Applications ( MCA ){" "}
//                   <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300 ms-3">
//                     Latest
//                   </span>
//                 </h3>
//                 <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
//                   Vellore Institute of Technology, Bhopal — 2024
//                 </time>
//                 <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
//                   CGPA: 8.2
//                 </p>
//                 <a
//                   href="#"
//                   className="inline-flex items-center px-4 py-2 text-sm font-medium text-black/90 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
//                 >
//                   <svg
//                     className="w-3.5 h-3.5 me-2.5"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
//                     <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
//                   </svg>{" "}
//                   Download Resume
//                 </a>
//               </li>
//               <li className="mb-10 ms-10">
//                 <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-white/80 dark:bg-blue-900">
//                   <svg
//                     className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
//                   </svg>
//                 </span>
//                 <h3 className="mb-1 text-lg font-semibold text-white dark:text-white">
//                   Bachelore of Computer Applications ( BCA )
//                 </h3>
//                 <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
//                   D.A.V PG College, Muzaffarnagar — 2022
//                 </time>
//                 <p className="text-base font-normal text-gray-500 dark:text-gray-400">
//                   Percentage: 65%
//                 </p>
//               </li>
//               <li className="ms-10 mb-8">
//                 <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-white/80 dark:bg-blue-900">
//                   <svg
//                     className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
//                   </svg>
//                 </span>
//                 <h3 className="mb-1 text-lg font-semibold text-white dark:text-white">
//                   Senior Secondary School Certificate ( 12th )
//                 </h3>
//                 <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
//                   Jawahar Navodaya Vidyalaya, Muzaffarnagar — 2018
//                 </time>
//                 <p className="text-base font-normal text-gray-500 dark:text-gray-400">
//                   Percentage: 76%
//                 </p>
//               </li>
//               <li className="ms-10 mb-8">
//                 <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-white/80 dark:bg-blue-900">
//                   <svg
//                     className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                   >
//                     <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
//                   </svg>
//                 </span>
//                 <h3 className="mb-1 text-lg font-semibold text-white dark:text-white">
//                   Junior high School Certificate ( 10th )
//                 </h3>
//                 <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
//                   Jawahar Navodaya Vidyalaya, Muzaffarnagar — 2016
//                 </time>
//                 <p className="text-base font-normal text-gray-500 dark:text-gray-400">
//                   CGPA: 7.4
//                 </p>
//               </li>
//             </ol>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Education;

"use client";
import React, { useEffect, useState } from "react";

function Education() {
  const [minute, setMinute] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const mn = new Date().getMinutes();
    setMinute(mn);
  }, []);

  if (!hasMounted) {
    return null;
  }

  const educationData = [
    {
      degree: "Master in Computer Applications (MCA)",
      institution: "Vellore Institute of Technology, Bhopal",
      year: "2024",
      score: "CGPA: 8.2",
      isLatest: true,
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "D.A.V PG College, Muzaffarnagar",
      year: "2022",
      score: "Percentage: 65%",
      isLatest: false,
    },
    {
      degree: "Senior Secondary School Certificate (12th)",
      institution: "Jawahar Navodaya Vidyalaya, Muzaffarnagar",
      year: "2018",
      score: "Percentage: 76%",
      isLatest: false,
    },
    {
      degree: "Junior High School Certificate (10th)",
      institution: "Jawahar Navodaya Vidyalaya, Muzaffarnagar",
      year: "2016",
      score: "CGPA: 7.4",
      isLatest: false,
    },
  ];

  // Color schemes based on minute
  const colorSchemes = [
    {
      bg: "bg-gradient-to-br from-amber-950/30 via-amber-900/20 to-black",
      cardBg: "bg-amber-950/20",
      accentColor: "bg-amber-500",
      textAccent: "text-amber-400",
      borderAccent: "border-amber-500/30",
      glowColor: "shadow-amber-500/20",
    },
    {
      bg: "bg-gradient-to-br from-slate-950/30 via-slate-900/20 to-black",
      cardBg: "bg-slate-950/20",
      accentColor: "bg-indigo-500",
      textAccent: "text-indigo-400",
      borderAccent: "border-indigo-500/30",
      glowColor: "shadow-indigo-500/20",
    },
    {
      bg: "bg-gradient-to-br from-emerald-950/30 via-emerald-900/20 to-black",
      cardBg: "bg-emerald-950/20",
      accentColor: "bg-emerald-500",
      textAccent: "text-emerald-400",
      borderAccent: "border-emerald-500/30",
      glowColor: "shadow-emerald-500/20",
    },
  ];

  const currentScheme = colorSchemes[minute % 3];

  return (
    <section
      id="education"
      className={`min-h-screen py-12 sm:py-16 lg:py-20 ${currentScheme.bg} transition-all duration-1000`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4">
            Academic{" "}
            <span className={`${currentScheme.textAccent}`}>Journey</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            Building expertise through continuous learning and dedication
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line - Hidden on mobile, visible on md+ */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-transparent via-gray-700 to-transparent" />

          {/* Education Items */}
          <div className="space-y-8 sm:space-y-12">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className={`relative ${
                  index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2"
                } group`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 top-8 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                  <div
                    className={`w-4 h-4 rounded-full ${currentScheme.accentColor} ring-8 ring-black/50 group-hover:scale-125 transition-transform duration-300`}
                  />
                </div>

                {/* Card */}
                <div
                  className={`relative ${
                    index % 2 === 0 ? "md:mr-8 lg:mr-12" : "md:ml-8 lg:ml-12"
                  }`}
                >
                  <div
                    className={`relative overflow-hidden rounded-2xl ${currentScheme.cardBg} backdrop-blur-sm border ${currentScheme.borderAccent} p-6 sm:p-8 hover:scale-[1.02] transition-all duration-500 hover:shadow-2xl ${currentScheme.glowColor} group`}
                  >
                    {/* Gradient Overlay on Hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${currentScheme.accentColor} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    />

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Degree Title */}
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                        <h3 className="text-xl sm:text-2xl font-bold text-white flex-1 min-w-0">
                          {edu.degree}
                        </h3>
                        {edu.isLatest && (
                          <span
                            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${currentScheme.accentColor} text-white flex-shrink-0`}
                          >
                            Latest
                          </span>
                        )}
                      </div>

                      {/* Institution */}
                      <div className="flex items-start mb-4">
                        <svg
                          className={`w-5 h-5 mr-2 mt-0.5 flex-shrink-0 ${currentScheme.textAccent}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                        <p className="text-sm sm:text-base text-gray-300">
                          {edu.institution}
                        </p>
                      </div>

                      {/* Year */}
                      <div className="flex items-center mb-3">
                        <svg
                          className={`w-5 h-5 mr-2 flex-shrink-0 ${currentScheme.textAccent}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <p className="text-sm sm:text-base text-gray-400">
                          {edu.year}
                        </p>
                      </div>

                      {/* Score */}
                      <div
                        className={`inline-flex items-center px-4 py-2 rounded-lg bg-black/30 border ${currentScheme.borderAccent}`}
                      >
                        <svg
                          className={`w-5 h-5 mr-2 ${currentScheme.textAccent}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                          />
                        </svg>
                        <span
                          className={`text-sm sm:text-base font-semibold ${currentScheme.textAccent}`}
                        >
                          {edu.score}
                        </span>
                      </div>

                      {/* Download Resume Button - Only on first item */}
                      {index === 0 && (
                        <div className="mt-6 pt-6 border-t border-gray-700/50">
                          <a
                            href="#"
                            className={`inline-flex items-center px-6 py-3 rounded-xl bg-white text-black font-semibold text-sm sm:text-base hover:scale-105 active:scale-95 transition-all duration-300 hover:shadow-lg hover:shadow-white/20`}
                          >
                            <svg
                              className="w-4 h-4 sm:w-5 sm:h-5 mr-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                              />
                            </svg>
                            Download Resume
                          </a>
                        </div>
                      )}
                    </div>

                    {/* Decorative Corner Gradient */}
                    <div
                      className={`absolute top-0 right-0 w-32 h-32 ${currentScheme.accentColor} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500 rounded-full`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
