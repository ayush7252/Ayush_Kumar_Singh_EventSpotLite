import React from 'react';
import { motion, useInView } from 'framer-motion';

const EventCard = ({ event, onClick }) => {
  // Create a ref to track if the component is in the viewport
  const ref = React.useRef(null);
  const isInView = useInView(ref); // Check if the component is in view

  return (
    <motion.div
      ref={ref} // Attach the ref to this div
      className="relative bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer h-[250px] w-full"
      onClick={() => onClick(event)} // Trigger the onClick event with the event data
      initial={{ opacity: 0, y: 20 }} // Initial state for animation
      animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate when in view
      transition={{ duration: 0.5 }} // Duration for the initial animation
      whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)" }} // Scale and shadow effect on hover
    >
      {/* Background image with a stronger gradient overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center h-full transition-transform duration-300 hover:scale-105"
        style={{
          backgroundImage: `url(${event.image})`, // Set the background image for the card
        }}
      >
        {/* Gradient overlay to darken the background image */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>
      </div>

      {/* Card content displayed over the background image */}
      <div className="relative z-10 p-4 h-full flex flex-col text-white">
        {/* Event Title and Details Section */}
        <div className="flex-grow flex flex-col justify-start">
          <h2 className="text-lg font-bold font-serif mb-1 truncate text-shadow-lg">
            {event.name} {/* Event name */}
          </h2>
          <p className="text-sm font-medium mb-1 truncate text-shadow-md">{event.date}</p> {/* Event date */}
          <p className="text-sm truncate text-shadow-md">{event.location}</p> {/* Event location */}
        </div>

        {/* Hover Description Box that appears when hovering over the card */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-md rounded-lg shadow-xl p-4 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100"
          initial={{ opacity: 0 }} // Initial opacity for the hover description
          whileHover={{ opacity: 1 }} // Change opacity when hovered
          transition={{ duration: 0.3 }} // Duration for the hover effect
        >
          <p className="text-gray-800 text-sm font-medium text-center">{event.description}</p> {/* Event description */}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default EventCard; // Export the EventCard component for use in other parts of the application
