import React, { useState } from 'react';

const Image = () => {
  const [data, setData] = useState(null); // Initialize with null for clarity

  // Handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the first selected file
    setData(file); // Update state with the file
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*" // Restrict to images for better UX
        onChange={(e)=>setData(e.target.files[0])}
      />
      {/* Conditionally render the img tag only if data exists */}
      {data && (
        <img
          src={URL.createObjectURL(data)}
          alt="Selected"
          // Optional: Limit image size
        />
      )}
    </div>
  );
};

export default Image;