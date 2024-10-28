import React, { useState } from 'react'; // Import necessary libraries and hooks
import { motion } from 'framer-motion'; // Import motion for animations

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState(""); // State to hold the search query

  // Function to handle input changes
  const handleSearch = (e) => {
    setQuery(e.target.value); // Update the query state
    onSearch(e.target.value); // Call the onSearch function passed as a prop
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }} // Initial animation properties
      animate={{ opacity: 1, scale: 1 }} // Animate to these properties
      transition={{ duration: 0.3 }} // Transition duration for the animation
      className="relative mb-6" // Styling for the container
    >
      <input
        type="text"
        placeholder="Search events..." // Placeholder text for the input
        value={query} // Bind the input value to the query state
        onChange={handleSearch} // Handle changes in the input
        className="px-4 py-2 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out hover:shadow-md" // Styling for the input
      />
      <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"> {/* Positioning for the search icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg" // SVG namespace
          className="h-5 w-5" // Size of the icon
          fill="none" // No fill for the icon
          viewBox="0 0 24 24" // Viewbox for the SVG
          stroke="currentColor" // Stroke color for the icon
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11 4a7 7 0 11-7 7 7 7 0 017-7zm0 0a7 7 0 017 7 7 7 0 01-7-7z" // Path data for the search icon
          />
        </svg>
      </span>
    </motion.div>
  );
};

export default SearchBar; // Export the SearchBar component for use in other parts of the application
