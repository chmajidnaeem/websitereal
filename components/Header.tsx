import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoMdSearch, IoMdPerson, IoMdMenu, IoMdClose } from "react-icons/io";
import Head from "next/head";
import Image from "next/image";
import Logo from '../public/Logo.png';

function Header() {
  const [active, setActive] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="absolute mt-5 w-full px-5 text-xs font-lg uppercase opacity-90 md:px-10">
      <Head>
        <title>DNK Real Estate</title>
      </Head>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xl tracking-[6px]">
          <div>
            <Image
              src={Logo}
              alt=""
              width={100}
              height={100}
              className="w-32 h-15 m-9"
            />
          </div>
        </div>
        <div className="hidden md:flex items-center gap-3">
          {menus.map((menu, index) => (
            <motion.li
              layout
              key={index}
              className={`${
                active === index && "border-b-2 border-b-yellow-500"
              } md:inline-block cursor-pointer border-b-yellow-500 transition duration-300 ease-in-out hover:border-b-2 hover:text-white`}
            >
              {menu}
            </motion.li>
          ))}
          <div className="flex md:hidden items-center gap-6">
            {/* Conditionally render icons based on screen size */}
            <IoMdSearch className="text-lg sm:hidden" />
            <IoMdPerson className="text-lg sm:hidden" />
          </div>
        </div>
        <div className="md:hidden  cursor-pointer" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? (
            <IoMdClose className="text-lg" />
          ) : (
            <IoMdMenu className="text-lg" />
          )}
        </div>
      </div>
      <ul className={`flex flex-wrap items-center gap-3 text-[11px] mt-2 md:hidden ${mobileMenuOpen ? 'flex-col' : 'hidden'}`}>
        {menus.map((menu, index) => (
          <motion.li
            layout
            key={index}
            className={`${
              active === index && "border-b-2 border-b-yellow-500"
            } block cursor-pointer border-b-yellow-500 transition duration-300 ease-in-out hover:border-b-2 hover:text-white`}
          >
            {menu}
          </motion.li>
        ))}
      
      </ul>
    </div>
  );
}

export default Header;

const menus = [
  "Home",
  "Properties",
  "About Us",
  "Vision and Mission",
  "Services",
  "Our Story",
  "Contacts",
];
