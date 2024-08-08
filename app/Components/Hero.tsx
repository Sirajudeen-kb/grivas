"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface SlideData {
  id: number;
  title: string;
  description: string;
  productImage: string;
  backgroundImage: string;
  moreDetails: string[];
}

const slides: SlideData[] = [
  {
    id: 1,
    title: "Smart Lock",
    description:
      "The Smart Lock offers keyless entry through fingerprint, passcode, smart card, mobile app, or manual key, ensuring convenience and security with durable construction and activity monitoring.",
    productImage: "/images/img1.png",
    backgroundImage: "/images/background/interior-1.jpg",
    moreDetails: [
      "Keyless entry through multiple methods",
      "Fingerprint recognition for up to 100 prints",
      "Bluetooth connectivity for remote unlocking",
      "Durable zinc alloy construction with tamper-proof design",
      "Long-lasting battery with emergency charging",
      "Activity log to monitor access",
      "Provides temporary guest access",
    ],
  },
  {
    id: 2,
    title: "Smart Lights",
    description:
      "Discover smart lights with cutting-edge tech, Wi-Fi connectivity, voice assistant compatibility, and convenient guest access, elevating home lighting effortlessly.",
    productImage: "/images/img3.png",
    backgroundImage: "/images/background/interior-3.jpg",
    moreDetails: [
      "Dimmable, tunable lights",
      "Indian-made driver and automation controller",
      "Lighting tailored to human needs",
      "Control multiple lights through one interface",
      "Wi-Fi connection at 2.4GHz",
      "User-friendly mobile app",
      "Compatible with Amazon Alexa and Google Assistant",
      "Temporary guest access",
    ],
  },
  {
    id: 3,
    title: "Smart Gate",
    description:
      "Seamless gate automation with mobile app control, voice assistant compatibility, and Wi-Fi connectivity, plus temporary guest access.",
    productImage: "/images/img4.jpeg",
    backgroundImage: "/images/background/interior-4.jpg",
    moreDetails: [
      "Powered by trusted global brand motors",
      "Tailored solutions for sliding or swivel gates",
      "Automation controller made in India",
      "User-friendly mobile app for Android and iOS",
      "Compatible with Amazon Alexa and Google Assistant",
      "Robust Wi-Fi-based automation at 2.4GHz",
      "Simplified installation without extra hubs",
      "Temporary guest access",
    ],
  },
  {
    id: 4,
    title: "Smart Touch Pro Switch Boards",
    description:
      "Customizable, Wi-Fi-enabled control with overload protection, voice assistant compatibility, and a sleek design.",
    productImage: "/images/img5.jpeg",
    backgroundImage: "/images/background/interior-1.jpg",
    moreDetails: [
      "Easy control and automation for home or office",
      "Customizable icons for simple operation",
      "Overload protection for enhanced safety",
      "Sleek design, available in standard or designer colours",
      "Made in India with high-quality craftsmanship",
      "User-friendly mobile app and voice assistant compatibility",
      "Wi-Fi connectivity, no extra hubs needed",
      "Fits existing switchboards without rewiring",
      "Elevates your space with convenience, safety, and style",
    ],
  },
  {
    id: 5,
    title: "Smart Behind Modules",
    description:
      "Seamless integration for partial home automation with built-in safety features, Wi-Fi connectivity, voice control, and easy installation, elevating your home automation experience effortlessly.",
    productImage: "/images/img7.jpg",
    backgroundImage: "/images/background/interior-2.jpg",
    moreDetails: [
      "Easy installation into current switchboards, perfect for retrofitting",
      "Partial automation for controlling specific devices",
      "Built-in overload protection for safety",
      "High manufacturing standards in India for reliability",
      "Operable via mobile app for Android and iOS",
      "Voice control with Amazon Alexa and Google Assistant",
      "Wi-Fi-based automation on 2.4GHz frequency, no extra hub needed",
      "Temporary guest access for limited control, ensuring privacy",
      "Fits standard modular switchboards, blends with home decor",
    ],
  },
  {
    id: 6,
    title: "Smart Curtains and Blinds",
    description:
      "The Smart Curtains and Blinds provide automated control via mobile app and voice assistants. Crafted with global brand motors, they fit any window and include easy installation.",
    productImage: "/images/img8.jpg",
    backgroundImage: "/images/background/interior-4.jpg",
    moreDetails: [
      "Motors and accessories from a trusted global brand",
      "Tailored fit for any window size",
      "Crafted in India",
      "Automation controller with mobile app for Android and iOS",
      "Voice control with Amazon Alexa and Google Assistant",
      "Wi-Fi-based automation on 2.4GHz frequency, no hub needed",
      "Temporary guest access for specified periods",
      "Simplified installation and operation",
    ],
  },
];

const HeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const [visibleSlide, setVisibleSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 20000);

    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    setIsTransitioning(true);
    const nextIndex = (currentSlide + 1) % slides.length;
    

    // Start fade out
    setTimeout(() => {
      setCurrentSlide(nextIndex);
      // Start fade in
      setTimeout(() => {
        setVisibleSlide(nextIndex);
        setIsTransitioning(false);
      }, 50);
    }, 300);

    setShowMoreDetails(false);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    const prevIndex = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    

    // Start fade out
    setTimeout(() => {
      setCurrentSlide(prevIndex);
      // Start fade in
      setTimeout(() => {
        setVisibleSlide(prevIndex);
        setIsTransitioning(false);
      }, 50);
    }, 300);

    setShowMoreDetails(false);
  };

  const goToSlide = (index: number) => {
    if (index === currentSlide) return;
    setIsTransitioning(true);
    

    // Start fade out
    setTimeout(() => {
      setCurrentSlide(index);
      // Start fade in
      setTimeout(() => {
        setVisibleSlide(index);
        setIsTransitioning(false);
      }, 50);
    }, 300);

    setShowMoreDetails(false);
  };

  const toggleDetails = () => {
    setShowMoreDetails((prev) => !prev);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${
            index === visibleSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div
            className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${
              index === currentSlide ? "scale-100" : "scale-110"
            }`}
            style={{
              backgroundImage: `url(${slide.backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="container mx-auto h-full flex items-center relative z-20">
            <div className="w-1/2 text-white p-8">
              <div
                className={`transition-all duration-500 ease-in-out lg:px-10 ${
                  isTransitioning
                    ? "opacity-0 translate-y-4"
                    : "opacity-100 translate-y-0"
                }`}
              >
                <h2 className="lg:text-4xl text-2xl font-bold mb-4">
                  {slide.title}
                </h2>
                {showMoreDetails ? (
                  <ul className="text-xl mb-8 hidden lg:block md:block list-disc list-inside">
                    {slide.moreDetails.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="lg:text-xl md:text-lg text-s mb-8  lg:block md:block ">
                    {slide.description}
                  </p>
                )}
                <button
                  className="bg-gradient-to-r from-orange-500 to-yellow-300 hover:from-[#d97706] hover:to-[#fbbf24] px-6 py-2 rounded-full lg:block md:block hidden"
                  onClick={toggleDetails}
                >
                  {showMoreDetails ? "Back" : "Learn More"}
                </button>
              </div>
            </div>
            <div className="w-1/2 flex justify-center items-center px-5">
              <div
                className={`transition-all duration-500 ease-in-out ${
                  isTransitioning
                    ? "opacity-0 scale-95"
                    : "opacity-100 scale-100"
                }`}
              >
                <Image
                  src={slide.productImage}
                  alt={slide.title}
                  width={500}
                  height={500}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 bg-opacity-50 text-white z-20"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800 bg-opacity-50 text-white z-20"
      >
        &#10095;
      </button>
    </div>
  );
};

export default HeroCarousel;
