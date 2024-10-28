import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = ({ search, setSearch }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle function for mobile menu and search input
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 mx-6 mt-6 flex justify-between items-center px-6 py-4 bg-gradient-to-r from-[#3a6073] via-[#5b7f8c] to-[#a1c6c2] text-white shadow-lg z-10 rounded-full"
    >
      <div className="flex-1 flex justify-start">
        <motion.h1
          whileHover={{ scale: 1.1, color: '#f2e9e4' }}
          className="text-2xl md:text-3xl font-bold tracking-widest cursor-pointer whitespace-nowrap"
        >
          EventSpot Lite
        </motion.h1>
      </div>

      {/* Desktop Search Bar */}
      <div className="hidden md:flex flex-1 justify-end">
        <motion.div whileFocus={{ scale: 1.05 }} className="flex items-center bg-white rounded-full px-3 py-1 shadow-inner">
          <input
            type="text"
            placeholder="Search events..."
            className="px-3 py-1 text-gray-800 rounded-full bg-white placeholder-gray-500 focus:outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <motion.div whileHover={{ scale: 1.2, rotate: 20 }}>
            <FaSearch className="ml-2 text-indigo-600 hover:text-indigo-800" />
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile Search Icon */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <AiOutlineClose size={30} className="text-white" />
          ) : (
            <FaSearch size={30} className="text-white" />
          )}
        </button>
      </div>

      {/* Mobile Search Input */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-16 left-0 right-0 mx-4 bg-white text-gray-800 rounded-lg shadow-lg z-20"
        >
          <div className="flex flex-col p-4">
            <motion.input
              type="text"
              placeholder="Search events..."
              className="px-3 py-2 mb-2 text-gray-800 rounded-full bg-white placeholder-gray-500 focus:outline-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              initial={{ scale: 0 }}
              animate={{ scale: isMobileMenuOpen ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
