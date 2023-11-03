
import React, { useState } from 'react';
// Array of image objects
const gallery = [
      { id: "image-1", url: "/images/image-1.webp" },
      { id: "image-2", url: "/images/image-2.webp" },
      { id: "image-3", url: "/images/image-3.webp" },
      { id: "image-4", url: "/images/image-4.webp" },
      { id: "image-5", url: "/images/image-5.webp" },
      { id: "image-6", url: "/images/image-6.webp" },
      { id: "image-7", url: "/images/image-7.webp" },
      { id: "image-8", url: "/images/image-8.webp" },
      { id: "image-9", url: "/images/image-9.webp" },
      { id: "image-10", url: "/images/image-10.jpeg" },
      { id: "image-11", url: "/images/image-11.jpeg" },
    
     
    ]

const Gallery = () => {
      const [images, setImages] = useState(gallery);
  const [selectedImages, setSelectedImages] = useState([]);

  const handleCheckboxChange = (index) => {
      const isSelected = selectedImages.includes(index);
      let newSelectedImages;
  
      if (isSelected) {
        newSelectedImages = selectedImages.filter((selectedIndex) => selectedIndex !== index);
      } else {
        newSelectedImages = [...selectedImages, index];
      }
  
      setSelectedImages(newSelectedImages);
    };
      return (
            <div className="gallery-container">
                {images.map((image, index) => (
           
               
                  <div
                  className= "gallery-image"
                  >
                    <img src={image.url} alt={`Image Index: ${index}`} />
                      {/* For image selection */}
                    <input
                        type="checkbox"
                        checked={selectedImages.includes(index)}
                        onChange={() => handleCheckboxChange(index)}
                      />
                  </div>
            
            
            ))}    
            </div>
      );
};

export default Gallery;
