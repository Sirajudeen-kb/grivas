// import ImageWithButtons from ".Components./Component";
import sc from "../../public/images/MSR/MSR-edited.png";
import polygard from "../../public/images/MSR/polygard.jpg";
import polyxeta from "../../public/images/MSR/polyxeta.jpg";
import polymarine from "../../public/images/MSR/polymarine-2.jpg";

import Image from "next/image";
import React from "react";
const App: React.FC = () => {

  return (
    <>
      <div>
        <div className="p-5 m-5">
          <h1 className=" text-center text-5xl font-bold">
            MSR Electronics
          </h1>
        </div>
        <div>
          <h1 className=" text-center text-3xl font-medium p-5">
           Msr Application
          </h1>
         <div className="w-full flex justify-center bg-[#eaf2fa] py-5">
  <div className="w-full  px-4">
    <Image
      src={sc}
      alt="MSR Diagram"
      layout="responsive"
      width={800}
      
      className="rounded-xl object-contain"
    />
  </div>
</div>

        </div>
<div className="text-center my-8">
  <h1 className="text-3xl md:text-4xl font-semibold text-blue-800">
    Gas Detection Systems
  </h1>
  <h2 className="text-xl md:text-2xl text-blue-700 mt-2">
    Buildings, Industry and Marine
  </h2>
</div>

<div className="flex flex-wrap justify-center items-center gap-6 max-w-[1000px] mx-auto">
  {/* PolyGard - Buildings */}
  <a
    href="https://www.msr-electronic.de/en/buildings/"
    target="_blank"
    rel="noreferrer"
    className="relative w-[300px] h-[200px] overflow-hidden rounded-md shadow-lg"
  >
    <Image
      src={polygard}
      alt="PolyGard"
      fill
      className="object-cover hover:scale-105 transition-transform duration-300"
    />
    <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 w-full text-sm md:text-base font-semibold">
      Buildings: PolyGard®
    </div>
  </a>

  {/* PolyXeta - Industry */}
  <a
    href="http://msr-electronic.de/en/industry/"
    target="_blank"
    rel="noreferrer"
    className="relative w-[300px] h-[200px] overflow-hidden rounded-md shadow-lg"
  >
    <Image
      src={polyxeta}
      alt="PolyXeta"
      fill
      className="object-cover hover:scale-105 transition-transform duration-300"
    />
    <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 w-full text-sm md:text-base font-semibold">
      Industry: PolyXeta®
    </div>
  </a>

  {/* PolyMarine - Shipping */}
  <a
    href="https://www.msr-electronic.de/en/shipping/"
    target="_blank"
    rel="noreferrer"
    className="relative w-[300px] h-[200px] overflow-hidden rounded-md shadow-lg"
  >
    <Image
      src={polymarine}
      alt="PolyMarine"
      fill
      className="object-cover hover:scale-105 transition-transform duration-300"
    />
    <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 w-full text-sm md:text-base font-semibold">
      Shipping: PolyMarine®
    </div>
  </a>
</div>
    

      </div>
     
      
     
      <h1 className=" text-center text-3xl font-medium p-5">Get it on</h1>
      
      <div className="flex  justify-center  w-100 ml-auto my-3 mx-2 gap-5">
            <a
              href="https://apps.apple.com/us/app/the-school-guard/id6443582194"
              target="_blank"
              className="flex items-center h-auto w-100  justify-center px-3  text-center text-white bg-white rounded-2xl"
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
              href="https://play.google.com/store/apps/details?id=com.theschoolgaurd.app&hl=en_IN"
              target="_blank"
              className="flex items-center h-auto w-100 justify-center px-3 py-3  text-center text-white bg-white rounded-2xl"
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
          </div>
    </>
  );
};

export default App;
