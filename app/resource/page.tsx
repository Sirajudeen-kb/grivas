import React from "react";
import Image from "next/image";
import { FaDownload, FaPlayCircle } from "react-icons/fa"; // Import the play button icon from react-icons

const videos = [
  { id: "IcxXIz5co_0", title: "Home Automation", desc: "Grivas intro video" },
  // { id: "fJrna6Lqz_M", title: "Folding roof sitout ", desc: "Grivas Technologies" },
  // { id: "fsNdg7EK898", title: "Slide gate installation ", desc: "Grivas Technologies" },
  { id: "8A01u8PUsnI", title: "Smart Curtain", desc: "Grivas Technologies" },
  // { id: "8sPxEEOpsp8", title: "Flip Sitout", desc: "Grivas Technologies" },
  // { id: "sowveo8gZ6U", title: "Swing gate site", desc: "Grivas Technologies" },
  // { id: "9wpVM6YaTmA", title: "Top Ceiling", desc: "Grivas Technologies" },
  // { id: "UxF2LF79c8U", title: "Folding gate", desc: "Grivas Technologies" },
  { id: "KlBDVzIKh6I", title: "Complete Auto from Gate", desc: "Grivas Technologies" },
  { id: "XK43Ehdpkwo", title: "Exp Gate", desc: "Grivas Technologies" },


  // Add more video IDs and titles as needed
];

const getThumbnailUrl = (videoId: string) =>
  `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

const Resource = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center p-5">
        <p className="text-lg mb-5">
          Welcome to our resource page. Download our brochure to learn more!
        </p>
        
        <a
          href="/brochure.pdf"
          download
          className="bg-gradient-to-r from-orange-500 to-yellow-300 hover:from-orange-600 hover:to-yellow-400 text-white py-3 px-6 rounded-lg flex items-center gap-2"
        >
          <FaDownload />
          <p>Smart-Home:</p> Download Brochure
        </a>
      </div>
      <div className="flex flex-col items-center justify-center p-5">
        
        
        <a
          href="/The School Guard_Brochure.pdf"
          download
          className="bg-gradient-to-r from-orange-500 to-yellow-300 hover:from-orange-600 hover:to-yellow-400 text-white py-3 px-6 rounded-lg flex items-center gap-2"
        >
          <FaDownload />
          <p>School-Guard</p> Download Brochure
        </a>
      </div>
      <div className="heading text-center font-bold text-2xl m-5">
        Installation videos and tutorials
      </div>
      <div className="holder mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 rounded-md">
        {videos.map((video) => (
          <a
            key={video.id}
            href={`https://youtu.be/${video.id}`}
            target="_blank"
            className="each mb-10 m-5 shadow-lg border-gray-800 bg-white relative rounded-md block transform transition-transform hover:scale-105 hover:z-10 hover:shadow-2xl"
          >
            <div className="relative">
              <Image
                className="w-full"
                src={getThumbnailUrl(video.id)}
                alt={video.title}
                width={640} // Adjust width and height as needed
                height={360}
              />
              <FaPlayCircle
                className="absolute inset-0 m-auto text-white text-6xl opacity-75"
                style={{
                  top: "60%",
                  left: "20%",
                  transform: "translate(-50%, -50%)",
                }}
              />
            </div>
            <div className="desc p-4 text-gray-800">
              <div className="title font-bold block cursor-pointer hover:underline">
                {video.title}
              </div>
              <span className="description text-sm block py-2 border-gray-400 mb-2">
                {video.desc}
              </span>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default Resource;