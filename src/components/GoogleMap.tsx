
import React from 'react';

const GoogleMap = () => {
  return (
    <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden shadow-md">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2947.8544515472234!2d-83.4763815845916!3d42.41159744408925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824b0c87bc47b3f%3A0x1b4b3b3b3b3b3b3b!2sNovi%2C%20MI%2C%20USA!5e0!3m2!1sen!2sus!4v1625684400000!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Hikigai AI Headquarters Location"
      />
    </div>
  );
};

export default GoogleMap;
