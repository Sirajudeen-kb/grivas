"use client";
import React, { useState } from "react";

interface Button {
  label: string;
  imageUrl: string;
}

interface ImageWithButtonsProps {
  initialImageUrl: string;
  buttons: Button[];
}

const ImageWithButtons: React.FC<ImageWithButtonsProps> = ({
  initialImageUrl,
  buttons,
}) => {
  const [selectedImage, setSelectedImage] = useState(initialImageUrl);
  const [animating, setAnimating] = useState(false);
  const [nextImage, setNextImage] = useState<string | null>(null);

  const handleButtonClick = (imageUrl: string) => {
    if (imageUrl !== selectedImage) {
      setNextImage(imageUrl);
      setAnimating(true);
    }
  };

  const handleAnimationEnd = () => {
    if (nextImage) {
      setSelectedImage(nextImage);
      setNextImage(null);
      setAnimating(false);
    }
  };

  return (
    <div>
    <div className="flex flex-col md:flex-row items-center p-5">
      <div className="relative w-full md:w-1/2 mb-4 md:mb-0 h-64 md:h-80 overflow-hidden">
        <img
          src={selectedImage}
          alt="Main"
          className={`absolute w-full h-full object-contain transition-transform duration-500 ${
            animating ? "swipe-out" : ""
          }`}
          onAnimationEnd={handleAnimationEnd}
        />
        {nextImage && (
          <img
            src={nextImage}
            alt="Next"
            className="absolute w-full h-full object-contain transition-transform duration-500 swipe-in-next"
          />
        )}
      </div>
      <div className="w-full md:w-1/2 md:pl-40">
        {buttons.map((button, index) => (
          <button
            key={index}
            className="block  lg:text-start lg:w-fit md:text-start md:w-fit text-center w-full mb-2 px-4 py-2 text-[#1f2937] font-medium  rounded border border-gray-500 hover:outline focus:bg-blue-600 focus:text-white"
            onClick={() => handleButtonClick(button.imageUrl)}
          >
            {button.label}
          </button>
          
        ))}
        
      </div>
      
    </div>
    
    </div>
    
  );
};

export default ImageWithButtons;