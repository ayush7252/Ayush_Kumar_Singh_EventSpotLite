import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import EventCard from '../components/EventCard';
import EventModal from '../components/EventModal';
import Footer from '../components/Footer'; 
import events from '../data/mockEvents.json';
import Slider from 'react-slick'; 
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 

const HomePage = () => {
  const [search, setSearch] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const modalWrapperRef = useRef(null);

  const closeModal = () => setSelectedEvent(null);

  // Handle click outside the modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the modal
      if (modalWrapperRef.current && !modalWrapperRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (selectedEvent) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [selectedEvent]);

  // Filter events based on search input
  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(search.toLowerCase())
  );

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  const sliderEvents = events.slice(0, 10);

  return (
    <div>
      {/* Set Navbar with fixed positioning and z-index */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar search={search} setSearch={setSearch} />
      </div>

      {/* Padding-top added to avoid content overlapping with Navbar */}
      <div className="pt-[80px]">
        {/* Automatic Event Slider */}
        <div className="mt-[30px] mb-8 h-[100px]">
          <Slider {...sliderSettings} className="mx-0">
            {sliderEvents.map((event) => (
              <div key={event.id} className="px-4">
                <EventCard event={event} onClick={() => setSelectedEvent(event)} />
              </div>
            ))}
          </Slider>
        </div>

        {/* Event Grid */}
        <div className="pt-8 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-[170px]">
          {filteredEvents.length ? (
            filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} onClick={() => setSelectedEvent(event)} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-600">No events found.</p>
          )}
        </div>

        {/* Event Modal */}
        {selectedEvent && (
          <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50">
            <div ref={modalWrapperRef} className="bg-white p-4 rounded-lg shadow-lg">
              <EventModal event={selectedEvent} onClose={closeModal} />
            </div>
          </div>
        )}

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
