"use client";
import React from "react";
//import Image from "next/image";
import { useRouter } from "next/navigation"; // Updated import
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

function Footer() {
  const router = useRouter();

  const handleNavLinkClick = (id: string) => {
    if (window.location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      router.push(`/#${id}`);
    }
  };

  return (
    <>
      <div className="w-full flex md:flex-row flex-col justify-around items-start">
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-3xl pb-6">
              
            </p>

            <div className="flex gap-6 pb-5">
              <a
                href="https://www.instagram.com/grivastechnologies/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-2xl cursor-pointer hover:text-orange-600" />
              </a>
             
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-2xl cursor-pointer hover:text-orange-600" />
              </a>
              <a
                href="https://www.youtube.com/@Grivastech"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="text-2xl cursor-pointer hover:text-orange-600" />
              </a>
            </div>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 font-bold text-2xl mb-4">Quick Links</p>
            <li
              className="text-gray-500 text-md pb-2 font-light hover:text-orange-600 cursor-pointer"
              onClick={() => handleNavLinkClick("home-section")}
            >
              Home
            </li>
            <li className="text-gray-500 text-md pb-2 font-light hover:text-orange-600 cursor-pointer">
              <a href="/about"> About Us </a>
            </li>
            <li
              className="text-gray-500 text-md pb-2 font-light hover:text-orange-600 cursor-pointer"
              onClick={() => handleNavLinkClick("testimony-section")}
            >
              Testimonials
            </li>
            <li
              className="text-gray-500 text-md pb-2 font-light hover:text-orange-600 cursor-pointer"
              onClick={() => handleNavLinkClick("enquiry-section")}
            >
              Enquire
            </li>
          </ul>
        </div>
        <div className="p-5">
          <p className="text-gray-800 font-bold text-2xl mb-4">Our products</p>
          <p className="text-gray-500 text-md pb-2 font-light hover:text-orange-600 cursor-pointer">
            <a href="/products"> Smart Home Automation</a>
          </p>
          <p className="text-gray-500 text-md pb-2 font-light hover:text-orange-600 cursor-pointer">
            <a href="/school-guard"> School Guard</a>
          </p>

          {/* <div className="flex w-full ml-auto my-3 mx-2 gap-2">
            <a
              href="https://apps.apple.com/in/app/ojasvit/id1605235377"
              target="_blank"
              className="flex items-center h-auto w-full justify-center px-3  text-center text-white bg-white rounded-2xl"
              rel="noreferrer"
            >
              <svg
                className="w-7"
                viewBox="0 0 40 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0)">
                  <path
                    d="M32.6226 23.7016C32.6026 20.0267 34.2591 17.253 37.6118 15.2103C35.7359 12.5167 32.902 11.0347 29.1601 10.7443C25.6177 10.464 21.7461 12.8171 20.3292 12.8171C18.8324 12.8171 15.3998 10.8445 12.7057 10.8445C7.13769 10.9346 1.22048 15.3004 1.22048 24.1822C1.22048 26.8057 1.69945 29.516 2.65738 32.3131C3.93461 35.988 8.54465 45 13.3542 44.8498C15.8688 44.7897 17.645 43.0574 20.9179 43.0574C24.091 43.0574 25.7375 44.8498 28.5414 44.8498C33.3909 44.7797 37.5619 36.5888 38.7793 32.9039C32.2733 29.8298 32.6226 23.8919 32.6226 23.7016ZM26.9748 7.25968C29.6989 4.01535 29.4494 1.06142 29.3696 0C26.9648 0.140187 24.1808 1.64219 22.5943 3.49466C20.848 5.4773 19.8203 7.93058 20.0398 10.6943C22.6442 10.8945 25.019 9.55274 26.9748 7.25968Z"
                    fill="black"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect
                      width="40"
                      height="45"
                      fill="rgb(59 130 246 / 0.5)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
              <div className="flex flex-col ml-2 leading-4 text-left md:ml-3">
                <span className="text-sm text-black">Get it on</span>
                <span className="text-base font-semibold text-black">
                  App Store
                </span>
              </div>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=in.ojasvit.smarthome"
              target="_blank"
              className="flex items-center h-auto w-full justify-center px-3 py-3  text-center text-white bg-white rounded-2xl"
              rel="noreferrer"
            >
              <svg
                className="w-7"
                viewBox="-9 0 274 274"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="M188.81319,178.874645 C221.272218,161.051727 245.880297,147.470853 248.001319,146.415618 C254.78648,142.806714 261.79324,133.256838 248.001319,125.838536 C243.548228,123.506467 219.573289,110.347687 188.81319,93.3795092 L146.171146,136.443648 L188.81319,178.874645 Z"
                    fill="#FFD900"
                  ></path>
                  <path
                    d="M146.171146,136.443648 L10.3940643,273.286517 C13.5808739,273.708611 17.1792251,272.864423 21.4212696,270.532353 C30.3274526,265.657168 124.739324,214.098388 188.81319,178.885198 L146.171146,136.443648 Z"
                    fill="#F43249"
                  ></path>
                  <path
                    d="M146.171146,136.443648 L188.81319,93.5905562 C188.81319,93.5905562 30.9711459,7.45172685 21.4212696,2.36549437 C17.8229184,0.233919759 13.7919209,-0.399221214 10.1830173,0.233919759 L146.171146,136.443648 Z"
                    fill="#00EE76"
                  ></path>
                  <path
                    d="M146.171146,136.443648 L10.1830173,0.233919759 C4.6641385,1.51075405 0,6.38593954 0,16.3579099 C0,32.270853 0,244.003747 0,257.162527 C0,266.290309 3.60890354,272.864423 10.3940643,273.497564 L146.171146,136.443648 Z"
                    fill="#00D3FF"
                  ></path>
                </g>
              </svg>
              <div className="flex flex-col ml-2 leading-4 text-left md:ml-3">
                <span className="text-sm text-black">Get it on</span>
                <span className="text-base font-semibold text-black">
                  Play Store
                </span>
              </div>
            </a>
          </div> */}
        </div>
        <div className="p-5">
          <p className="text-gray-800 font-bold text-2xl mb-4">Contact Us</p>
          <p className="text-gray-500 text-md pb-2 font-light hover:text-orange-600 cursor-pointer">
            <span className="text-gray-800 font-semibold text-l mb-4">
              Phone:
            </span>{" "}
            +91 7010258295, +91 8925512140
            {/* added +91 */}
            <br />
            <span className="text-gray-800 font-semibold text-l mb-4">
              Email :
            </span>{" "}
            sales@grivas.in,<br/>
            grivas.techno@gmail.com
          </p>
          <p className="text-gray-800 font-bold text-2xl mb-4">Office</p>
          <p className="text-gray-500 text-md pb-2 font-light hover:text-orange-600 cursor-pointer">
            GRIVAS Technologies
            <br />
            {/* added company name  */}
            53, 1st Floor, Velachery Main Rd, Mehta Nagar,
            <br />
            Selaiyur, Chennai, Tamil Nadu 600073
          </p>
        </div>
      </div>
      <div className="text-center"><p>Copyright © 2024 <strong> GRIVAS Technologies</strong> . All Rights Reserved</p>
      <p>Developed By</p></div>
    </>
  );
}

export default Footer;
