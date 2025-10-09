// import React from "react";

// function Navbar() {
//   return (
//     <nav className="py-4 h-fit flex ">
//       <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
//         <div className="flex items-center lg:order-2">
//           <button
//             data-collapse-toggle="mobile-menu-2"
//             type="button"
//             className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//             aria-controls="mobile-menu-2"
//             aria-expanded="true"
//           >
//             <span className="sr-only">Open main menu</span>
//             <svg
//               className="w-6 h-6"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
//                 clipRule="evenodd"
//               ></path>
//             </svg>
//             <svg
//               className="hidden w-6 h-6"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                 clipRule="evenodd"
//               ></path>
//             </svg>
//           </button>
//         </div>
//         <div
//           className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1"
//           id="mobile-menu-2"
//         >
//           <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 text-2xl">
//             <li>
//               <a
//                 href="#"
//                 className="block py-2 pl-3 pr-4 text-white bg-purple-700 rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white"
//                 aria-current="page"
//               >
//                 Home
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
//               >
//                 Solutions
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
//               >
//                 Success Stories
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
//               >
//                 About
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
//               >
//                 Let's Build Together
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

"use client";
import React, { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Home", href: "#home", active: true },
    { name: "Solutions", href: "#solutions", active: false },
    { name: "Success Stories", href: "#success-stories", active: false },
    { name: "About", href: "#education", active: false },
    { name: "Let's Build Together", href: "#contact", active: false },
  ];

  return (
    <nav className="relative py-4 w-full z-50">
      <div className="flex items-center justify-between max-w-screen-xl px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Logo/Brand (Optional - you can add your logo here) */}
        <div className="flex-shrink-0">
          <a href="#" className="text-white text-xl sm:text-2xl font-bold">
            Hi 👋
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:space-x-8">
          <ul className="flex flex-row items-center space-x-6 xl:space-x-8 text-base xl:text-lg font-medium">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className={`${
                    link.active
                      ? "text-[#f58e08] font-semibold"
                      : "text-gray-300 hover:text-white"
                  } transition-colors duration-300`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 text-gray-400 rounded-lg lg:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 transition-colors duration-300"
          aria-controls="mobile-menu"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          {/* Hamburger Icon */}
          <svg
            className={`${isMenuOpen ? "hidden" : "block"} w-6 h-6`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          {/* Close Icon */}
          <svg
            className={`${isMenuOpen ? "block" : "hidden"} w-6 h-6`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-[#070010]/95 backdrop-blur-sm`}
        id="mobile-menu"
      >
        <ul className="flex flex-col px-4 py-4 space-y-3 font-medium border-t border-gray-800">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 px-3 rounded-lg ${
                  link.active
                    ? "text-white bg-[#d68a0e]"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                } transition-colors duration-300`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
