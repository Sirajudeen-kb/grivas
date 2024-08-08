"use client";
import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import Image from "next/image";
import Home from "../../public/assets/Home.svg";
import Map from "../../public/assets/Map.svg";
import People from "../../public/assets/People.svg";
import Happy from "../../public/assets/Happy.svg";

interface CounterProps {}

const Counter: React.FC<CounterProps> = () => {
  const [isCounterVisible, setIsCounterVisible] = useState<boolean>(false);
  const counterRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsCounterVisible(true);
          }
        });
      },
      { threshold: 0.5 } // Adjust this value to control when the animation starts
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  return (
    <section className="py-12 " ref={counterRef}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center bg-opacity-50 p-6 rounded-lg shadow-md backdrop-blur-md border border-gray-200">
            <div className="flex justify-center mb-5">
              <Image src={Home} alt="Home" />
            </div>
            <CountUp
              start={isCounterVisible ? 0 : undefined}
              end={126}
              delay={0}
              duration={2}
            >
              {({ countUpRef }) => (
                <strong className="block text-4xl font-bold">
                  <span ref={countUpRef} />
                </strong>
              )}
            </CountUp>
            <span className="block text-lg ">Homes Automated</span>
          </div>
          <div className="text-center bg-opacity-50 p-6 rounded-lg shadow-md backdrop-blur-md border border-gray-200">
            <div className="flex justify-center mb-5">
              <Image src={Map} alt="Map" />
            </div>
            <CountUp
              start={isCounterVisible ? 0 : undefined}
              end={63}
              delay={0}
              duration={2}
            >
              {({ countUpRef }) => (
                <strong className="block text-4xl font-bold">
                  <span ref={countUpRef} />
                </strong>
              )}
            </CountUp>
            <span className="block text-lg">States Covered</span>
          </div>
          <div className="text-center bg-opacity-50 p-6 rounded-lg shadow-md backdrop-blur-md border border-gray-200">
            <div className="flex justify-center mb-5">
              <Image src={People} alt="People" />
            </div>
            <CountUp
              start={isCounterVisible ? 0 : undefined}
              end={18}
              delay={0}
              duration={2}
            >
              {({ countUpRef }) => (
                <strong className="block text-4xl font-bold">
                  <span ref={countUpRef} />
                </strong>
              )}
            </CountUp>
            <span className="block text-lg">Channel Partners</span>
          </div>
          <div className="text-center bg-opacity-50 p-6 rounded-lg shadow-md backdrop-blur-md border border-gray-200">
            <div className="flex justify-center mb-5">
              <Image src={Happy} alt="Happy" />
            </div>
            <CountUp
              start={isCounterVisible ? 0 : undefined}
              end={27}
              delay={0}
              duration={2}
            >
              {({ countUpRef }) => (
                <strong className="block text-4xl font-bold">
                  <span ref={countUpRef} />
                </strong>
              )}
            </CountUp>
            <span className="block text-lg">Happy Clients</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
