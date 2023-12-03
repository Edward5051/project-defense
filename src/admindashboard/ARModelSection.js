// components/ARModelSection.js

import React, { useState } from 'react';

const ARModelSection = ({ handleImageUpload, previewImages }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : previewImages.length - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex < previewImages.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handleImageChange = (e) => {
    const files = e.target.files;
    handleImageUpload(files);
  };

  return (
    <div className="mt-4">
      <h3>AR Model Section</h3>
      <input type="file" accept="image/*" onChange={handleImageChange} multiple />
      
      {previewImages && previewImages.length > 0 && (
        <div>
          <img src={previewImages[currentImageIndex]} alt={`Preview ${currentImageIndex + 1}`} />
          <div>
            <button onClick={handlePrevImage}>Previous</button>
            <button onClick={handleNextImage}>Next</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ARModelSection;
