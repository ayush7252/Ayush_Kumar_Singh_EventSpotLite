import React from 'react';
import { motion } from 'framer-motion';

const EventModal = ({ event, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-30 backdrop-blur-sm">
      {/* Modal container with a blurred background and centered content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }} // Initial state for the modal animation
        animate={{ opacity: 1, scale: 1 }} // Animate to full opacity and scale
        exit={{ opacity: 0, scale: 0.9 }} // Animate out on exit
        transition={{ duration: 0.4 }} // Duration of the animation
        className="bg-white/80 backdrop-blur-lg rounded-xl max-w-lg w-full relative shadow-xl overflow-hidden border border-gray-200"
      >
        {/* Close Button with Aesthetic Styling */}
        <div className="absolute top-4 right-4 z-40">
          <button 
            onClick={onClose} // Call the onClose function when clicked
            className="text-2xl font-bold text-gray-700 bg-gradient-to-r from-gray-100 to-gray-200 hover:bg-gradient-to-l hover:from-gray-200 hover:to-gray-300 transition-all duration-300 ease-out border border-gray-300 w-10 h-10 flex items-center justify-center rounded-lg shadow-md hover:shadow-lg"
          >
            &times; {/* Close button symbol */}
          </button>
        </div>
        
        {/* Event Image */}
        <motion.img
          src={event.image} // Event image source
          alt={event.name} // Alt text for the image
          className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105 rounded-t-xl"
          whileHover={{ scale: 1.05 }} // Scale the image slightly on hover
        />
        
        {/* Event Details Section */}
        <div className="p-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">{event.name}</h2> {/* Event name */}
          <p className="text-gray-600 mb-4">{event.description}</p> {/* Event description */}
          <p className="text-gray-500 text-sm mb-4">{event.date} - {event.location}</p> {/* Event date and location */}
          
          {/* RSVP Button */}
          <motion.button
            className="mt-4 px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full shadow-lg hover:bg-gradient-to-l transition duration-300 ease-out hover:shadow-xl"
            whileHover={{ scale: 1.05 }} // Scale the button on hover
          >
            RSVP Now {/* Call to action button */}
          </motion.button>
          
          {/* Social Share Buttons */}
          <div className="flex mt-4 space-x-3">
            <motion.a
              href={`https://facebook.com/sharer/sharer.php?u=${window.location.href}`} // Share on Facebook
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 transition"
              whileHover={{ scale: 1.1 }} // Scale the button on hover
            >
              Share on Facebook {/* Facebook share button text */}
            </motion.a>
            <motion.a
              href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${event.name}`} // Share on Twitter
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-400 text-white rounded-full p-2 hover:bg-blue-500 transition"
              whileHover={{ scale: 1.1 }} // Scale the button on hover
            >
              Share on Twitter {/* Twitter share button text */}
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default EventModal; // Export the EventModal component for use in other parts of the application
