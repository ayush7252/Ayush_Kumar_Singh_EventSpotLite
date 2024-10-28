import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import social media icons from react-icons

const Footer = () => {
  return (
    <footer className="mt-10 bg-gradient-to-r from-[#3a6073] to-[#4b928b] text-white py-8 text-center">
      {/* Footer container with gradient background and centered text */}
      <div className="container mx-auto">
        {/* Copyright notice with the current year */}
        <p className="mb-4 text-lg font-semibold">&copy; {new Date().getFullYear()} EventSpot Lite. All rights reserved.</p>

        {/* Social media icons container */}
        <div className="flex justify-center space-x-4 mb-4">
          {/* Facebook link with icon */}
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-white hover:text-gray-300 transition duration-300" size={24} />
          </a>
          {/* Twitter link with icon */}
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-white hover:text-gray-300 transition duration-300" size={24} />
          </a>
          {/* Instagram link with icon */}
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white hover:text-gray-300 transition duration-300" size={24} />
          </a>
          {/* LinkedIn link with icon */}
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white hover:text-gray-300 transition duration-300" size={24} />
          </a>
        </div>

        {/* Text prompting users to follow on social media */}
        <p className="text-sm">Follow us on social media for updates and events!</p>
      </div>
    </footer>
  );
};

export default Footer; // Export the Footer component for use in other parts of the application
