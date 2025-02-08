import React from 'react';

const ImageGallery = ({ images }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative overflow-hidden">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 flex items-center justify-center">
              <span className="text-white text-lg">{image.caption}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
