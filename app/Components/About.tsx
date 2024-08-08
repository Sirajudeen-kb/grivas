import React from "react";

const About: React.FC = () => {
  return (
    <div >
      <div className="container mx-auto max-w-5xl flex gap-12 flex-wrap items-start justify-center md:justify-between py-10 sm:py-14 lg:py-24">
        <div className="grid gap-4 justify-items-center text-center md:flex-1">
          <div className="rounded-full border-8 border-amber-500 p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-14 h-14"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          </div>
          <h3 className="text-3xl font-bold">Safe</h3>
          <p>Our products are secure and private out-of-the-box</p>
        </div>
        <div className="grid gap-4 justify-items-center text-center md:flex-1">
          <div className="rounded-full border-8 border-amber-500 p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-14 h-14"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
              />
            </svg>
          </div>
          <h3 className="text-3xl font-bold">Efficient</h3>
          <p>Feel good about your wallet and the environment</p>
        </div>
        <div className="grid gap-4 justify-items-center text-center md:flex-1">
          <div className="rounded-full border-8 border-amber-500 p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-14 h-14"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
              />
            </svg>
          </div>
          <h3 className="text-3xl font-bold">Proven</h3>
          <p>Leading the Smart Home world </p>
        </div>
      </div>
      {/* About Icon Section */}
      <section id="works" className="relative  py-6 sm:py-16 lg:py-10">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl text-gray-900 font-extrabold mx-auto md:text-6xl lg:text-5xl">
              How does it work?
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-base text-gray-600 leading-relaxed md:text-2xl">
              Our executive will help you from start to finish
            </p>
          </div>
          <div className="relative mt-12 lg:mt-20">
            <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
              <img
                alt=""
                loading="lazy"
                width="1000"
                height="500"
                decoding="async"
                data-nimg="1"
                className="w-full"
                style={{ color: "transparent" }}
                src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
              />
            </div>
            <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-100 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700">1</span>
                </div>
                <h3 className="mt-6 text-xl text-gray-900 font-semibold leading-tight md:mt-10">
                  Select product
                </h3>
                <p className="mt-4 text-base text-gray-600 md:text-lg">
                  Select products according to your requirement
                </p>
              </div>
              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-100 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700">2</span>
                </div>
                <h3 className="mt-6 text-xl text-gray-900 font-semibold leading-tight md:mt-10">
                  Connect with us
                </h3>
                <p className="mt-4 text-base text-gray-600 md:text-lg">
                  Put in your personalized details and let our executive do the rest.
                </p>
              </div>
              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-100 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700">3</span>
                </div>
                <h3 className="mt-6 text-xl text-gray-900 font-semibold leading-tight md:mt-10">
                  Automate your home
                </h3>
                <p className="mt-4 text-base text-gray-600 md:text-lg">
                  Enjoy a smart and automated home.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
          style={{
            backgroundImage:
              "radial-gradient(1.89deg, rgba(34, 78, 95, 0.4) -1000%, rgba(191, 227, 205, 0.26) 1500.74%, rgba(34, 140, 165, 0.41) 56.49%, rgba(28, 47, 99, 0.11) 1150.91%)",
          }}
        ></div>
      </section>
    </div>
  );
};

export default About;
