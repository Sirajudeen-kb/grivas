import Image from "next/image";
import React from "react";
import about from "../../public/images/img.jpeg";
import sc from "../../public/images/sc.jpeg";

function About() {
  return (
    <>
      <div className="p-5">
        <div className="lg:px-20 md:px-10">
          <h1 className="text-4xl font-bold p-4 mb-4 text-black text-center">
            About
          </h1>
          <div className="w-full flex flex-col-reverse lg:flex-row mb-8 lg:mb-0 gap-5 lg:pr-8">
            <div className="relative w-full lg:w-[30%] flex justify-center rounded-lg overflow-hidden transition-opacity duration-[2500ms]">
              <Image
                src={about}
                alt="About Us"
                layout="responsive"
                className="object-cover transition-transform duration-300 w-[100%] h-auto hover:scale-105 rounded-xl mb-5 lg:mb-0"
              />
            </div>
            <div className="w-full lg:w-[70%] grid items-center flex-col justify-between transition-opacity duration-[2500ms]">
              <p className="text-sm sm:text-base md:text-lg mb-6 p-5 lg:mb-0">
                GRIVAS Technologies leads in Smart Home Automation, developed
                with OjasviT, featuring intelligent lighting, automated gates,
                and secure locks. These advancements redefine modern living,
                ensuring convenience and a secure home environment. By
                integrating state-of-the-art technology, GRIVAS sets a new
                standard in home automation for sophistication and reliability.
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col lg:flex-row mb-8 gap-5 lg:mb-0 lg:pr-8">
            <div className="w-full lg:w-[70%] grid items-center flex-col justify-between transition-opacity duration-[2500ms]">
              <p className="text-sm sm:text-base md:text-lg mb-6 p-5 lg:mb-0">
                In School Student Safety, GRIVAS collaborates with School Guard
                to deliver innovative solutions. Our Schoolguard system utilizes
                BLE Technology for precise monitoring of buses and campuses,
                significantly enhancing safety protocols. This seamless
                integration and comprehensive monitoring capability allow
                schools to ensure student well-being with confidence.
              </p>
            </div>
            <div className="relative w-full lg:w-[30%] flex justify-center rounded-lg overflow-hidden transition-opacity duration-[2500ms]">
              <Image
                src={sc}
                alt="School Safety"
                layout="responsive"
                className="object-cover transition-transform duration-300 w-[100%] h-auto hover:scale-105 rounded-xl mb-5 lg:mb-0"
              />
            </div>
          </div>
          <h2 className="max-w-[800px] text-lg mt-2 mb-2 p-5 m-5 mx-auto text-center">
            GRIVAS Technologies remains committed to innovation and excellence,
            continuously providing cutting-edge solutions that enhance both home
            automation and school safety.
          </h2>
        </div>
        <h1 className="text-4xl font-bold text-black text-center">
          Why Prefer Us
        </h1>
        <div className="flex flex-col gap-10 p-5 justify-center">
          <div className="flex flex-col md:flex-row gap-5 px-5">
            <div className="card bg-white shadow-lg rounded-xl p-5 w-full md:w-1/2 px-2 transition-transform transform hover:scale-105 hover:shadow-2xl hover:text-indigo-950">
              <h2 className="text-xl font-semibold mb-3 text-center">
                Explore cutting-edge gadgets
              </h2>
              <p className="p-5">
                Discover the forefront of cutting-edge gadgets: witness the
                latest in smart home devices that are revolutionizing modern
                living. Experience how these innovations seamlessly integrate
                into everyday life, offering unparalleled convenience and
                efficiency. These gadgets epitomize sleek design and
                groundbreaking technology, ensuring your home is not just
                smarter but also more intuitive and stylish than ever before.
              </p>
            </div>
            <div className="card bg-white shadow-lg rounded-xl w-full md:w-1/2 px-2 p-5 transition-transform transform hover:scale-105 hover:shadow-2xl hover:text-indigo-950">
              <h2 className="text-xl font-semibold text-center mb-3">
                Safety and Security Showcase
              </h2>
              <p className="p-5">
                Experience state-of-the-art safety and security solutions
                designed to elevate your peace of mind. Explore advanced smart
                locks, automated curtain and blind systems, gate automation, and
                cutting-edge smart lighting technology. Our showcase offers a
                glimpse into the future of home protection and convenience,
                where innovative designs and intelligent systems converge to
                safeguard your home and loved ones effectively. Discover how
                these technologies redefine modern living by seamlessly
                integrating with your lifestyle while ensuring unparalleled
                safety and security.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5 px-5">
            <div className="card bg-white w-full md:w-1/2 px-2 shadow-lg rounded-xl p-5 transition-transform transform hover:scale-105 hover:shadow-2xl hover:text-indigo-950">
              <h2 className="text-xl text-center font-semibold mb-3">
                Personalized Consultations
              </h2>
              <p className="p-5">
                Receive personalized consultations from our experts tailored to
                your lifestyle and home needs. Benefit from bespoke advice that
                aligns perfectly with your preferences and enhances both
                functionality and aesthetics. Our dedicated team ensures your
                satisfaction by providing comprehensive insights and
                recommendations, empowering you to create a harmonious living
                environment with confidence and clarity.
              </p>
            </div>
            <div className="card bg-white w-full md:w-1/2 px-2 shadow-lg rounded-xl p-5 transition-transform transform hover:scale-105 hover:shadow-2xl hover:text-indigo-950">
              <h2 className="text-xl font-semibold mb-3 text-center">
                Interactive Demonstrations
              </h2>
              <p className="p-5">
                Experience interactive demos showcasing advanced smart
                technology for streamlined daily routines. Explore seamless
                integration of cutting-edge innovations enhancing lifestyle
                facets with intuitive solutions, amplifying convenience for
                modern living standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
