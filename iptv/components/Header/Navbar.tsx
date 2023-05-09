import Logo from 'components/Logo';
import Link from 'next/link';
import React from 'react';
import { BiMenu } from 'react-icons/bi';
import { motion } from 'framer-motion';
// const Navbar = () => {
//   //links nav bar
const navLinks = [
  { id: '1', link: '#home', title: 'Home' },
  { id: '2', link: '#trial', title: '7-day Trial' },
  { id: '3', link: '#featues', title: 'Features' },
  { id: '4', link: '#contact', title: 'Contact Us' },
  { id: '4', link: '#pricing', title: 'Pricing' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleToggle = () => {
    setTimeout(() => {
      setIsOpen((prv) => !prv), 300;
    });
  };
  return (
    <nav className="bg-white  w-full z-20 top-0 left-0 border-b border-gray-200 mb-10">
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Logo />
        <div className="flex md:order-2">
          <button
            type="button"
            className=" flex items-center gap-2 mr-auto px-4 py-2 cursor-pointer bg-yellow-400 rounded-md text-neutral-50 font-bold text-lg transition duration-300 ease-in-out  hover:shadow-md hover:scale-105 active:scale-100"
          >
            Get started
          </button>
          <button
            onClick={handleToggle}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="ml-2 group inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-yellow-100 outline-none "
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {/* <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg> */}
            <BiMenu className="text-3xl group-hover:text-yellow-500 " />
          </button>
        </div>
        <div
          className={`items-center justify-between  w-full md:flex md:w-auto md:order-1  ${
            !isOpen ? 'hidden ' : 'animate-fade-in '
          }  `}
          id="navbar-sticky"
        >
          <ul
            className={`flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-4 lg:space-x-8 md:mt-0 md:border-0 md:bg-white tansition duration-300 ease-in-out `}
          >
            {navLinks.map((link) => (
              <li
                key={link.id}
                className="group block px-2 py-2  group cursor-pointer hover:bg-neutral-100    hover:text-yellow-500 tansition duration-300 ease-in-out "
              >
                <Link
                  href={link.link}
                  className=" group-hover:border-yellow-400 group-hover:border-b-2 tansition duration-300 ease-in-out "
                >
                  {' '}
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
