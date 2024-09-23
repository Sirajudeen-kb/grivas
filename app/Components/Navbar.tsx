"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Updated import
import Logo from "../../public/assets/Logo.png";
import Icon from "../../public/assets/icon.png";
import Facebook from "../../public/assets/Facebook.svg";
import Instagram from "../../public/assets/Instagram.svg";
import Enquiry from "../../public/assets/Enquiry.svg";
import Menu from "../../public/assets/Menu.svg";
import CloseIcon from "../../public/assets/Close.svg"; // Add a close icon for the menu
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfoCircle,
  faWrench,
  faComments,
  faBook,
} from "@fortawesome/free-solid-svg-icons"; // Import icons

interface NavLink {
  name: string;
  id: string;
  icon: any;
}

const navLinks: NavLink[] = [
  { name: "Home", id: "home-section", icon: faHome },
  { name: "About", id: "about-section", icon: faInfoCircle },
  { name: "Solutions", id: "solution-section", icon: faWrench },
  { name: "Testimony", id: "testimony-section", icon: faComments },
  { name: "Resources", id: "resources-section", icon: faBook },
  { name: "Gallery", id: "gallery-section", icon: faBook },

];

function Navbar() {
  const router = useRouter();
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);
  const [isSmartHomeDropdownVisible, setIsSmartHomeDropdownVisible] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const smartHomeDropdownRef = useRef<HTMLDivElement>(null);
  let dropdownTimeout: ReturnType<typeof setTimeout>;
  let smartHomeDropdownTimeout: ReturnType<typeof setTimeout>;

  const handleNavLinkClick = (id: string) => {
    if (window.location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      router.push(`/#${id}`);
    }
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(dropdownTimeout);
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout = setTimeout(() => {
      setIsDropdownVisible(false);
    }, 200);
  };

  const handleSmartHomeMouseEnter = () => {
    clearTimeout(smartHomeDropdownTimeout);
    setIsSmartHomeDropdownVisible(true);
  };

  const handleSmartHomeMouseLeave = () => {
    smartHomeDropdownTimeout = setTimeout(() => {
      setIsSmartHomeDropdownVisible(false);
    }, 200);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={`bg-blue-50 border-b ${isSticky ? "sticky top-0 z-50" : ""}`}>
      <nav className="flex items-center space-x-10 lg:px-5">
        <div className="flex w-full items-center justify-between px-[20px] py-[20px]">
          <div>
            <Image className="lg:hidden " src={Icon} alt="Logo" width={50} height={50}/>
            <span className="hidden lg:block ">
            <Image src={Logo} alt="Logo" width={200} height={200}/>
            </span>
          </div>

          <div className="hidden lg:flex md:flex gap-x-[35px]">
            {navLinks.map((item, index) =>
              item.name === "Solutions" ? (
                <div
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  key={index}
                >
                  <a
                    href="#"
                    className="font-normal text-[16px] link-underline"
                    onClick={() => handleNavLinkClick(item.id)}
                  >
                    {item.name}
                  </a>
                  {isDropdownVisible && (
                    <div
                      ref={dropdownRef}
                      className="absolute top-full mt-2 bg-blue-50 shadow-md rounded-lg z-50"
                    >
                      <div
                        className="relative"
                        onMouseEnter={handleSmartHomeMouseEnter}
                        onMouseLeave={handleSmartHomeMouseLeave}
                      >
                        <Link
                          href="#"
                          className="block px-4 py-2 text-[16px] whitespace-nowrap hover:bg-gray-200"
                        >
                           SmartHome Automation
                        </Link>
                        {isSmartHomeDropdownVisible && (
                          <div
                            ref={smartHomeDropdownRef}
                            className="absolute left-full top-0 mt-2 ml-2 bg-blue-50 shadow-md rounded-lg z-50"
                          >
                            <Link
                              href="/products/economy"
                              className="block px-4 py-2 text-[16px] whitespace-nowrap hover:bg-gray-200"
                            >
                              Economy series 
                            </Link>
                            <Link
                              href="/products/luxury"
                              className="block px-4 py-2 text-[16px] whitespace-nowrap hover:bg-gray-200"
                            >
                              Premium series
                            </Link>
                          </div>
                        )}
                      </div>
                      <Link
                        href="/school-guard"
                        className="block px-4 py-2 text-[16px] whitespace-nowrap hover:bg-gray-200"
                      >
                        School-Guard
                      </Link>
                    </div>
                  )}
                </div>
              ) : item.name === "Resources" ? (
                <Link
                  href="/resource"
                  key={index}
                  className="font-normal text-[16px] link-underline"
                >
                  {item.name}
                </Link>
              )
              : item.name === "Gallery" ? (
                <Link
                  href="/gallery"
                  key={index}
                  className="font-normal text-[16px] link-underline"
                >
                  {item.name}
                </Link>
              ) : item.name === "About" ? (
                <Link
                  href="/about"
                  key={index}
                  className="font-normal text-[16px] link-underline"
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  href="#"
                  className="font-normal text-[16px] link-underline"
                  key={index}
                  onClick={() => handleNavLinkClick(item.id)}
                >
                  {item.name}
                </a>
              )
            )}

            <div className="flex gap-x-[35px] lg:flex md:flex ">
              <a
                href="https://www.instagram.com/grivastechnologies/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-effect"
              >
                <Image src={Instagram} alt="Instagram" />
              </a>
              <a
                href="https://www.facebook.com/GrivasTechnology"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-effect"
              >
                <Image src={Facebook} alt="Facebook" />
              </a>
            </div>
          </div>

          <div className="items-center flex gap-x-5 lg:hidden md:hidden">
            <Image
              src={Enquiry}
              alt="Enquiry"
              onClick={() => handleNavLinkClick("enquiry-section")}
            />
            <Image src={Menu} alt="Menu" onClick={toggleMobileMenu} />
          </div>
        </div>
        <button
          className="hidden lg:block md:block shadow-md rounded-full text-white bg-gradient-to-r from-orange-500 to-yellow-300 px-12 py-2 hover:from-[#d97706] hover:to-[#fbbf24]"
          onClick={() => handleNavLinkClick("enquiry-section")}
        >
          <p>Enquire</p>
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="lg:hidden md:hidden fixed top-0 left-0 right-0 bottom-0 bg-blue-50 z-50 p-5">
          <div className="flex justify-end">
            <Image
              src={CloseIcon}
              alt="Close"
              onClick={toggleMobileMenu}
              className="cursor-pointer"
            />
          </div>
          <div className="flex flex-col mt-10 space-y-5">
            {navLinks.map((item, index) => (
              <React.Fragment key={index}>
                {item.name === "Solutions" ? (
                  <div className="relative">
                    <a
                      href="#"
                      className="font-normal text-[16px] hover:bg-gray-200 block"
                      onClick={() => handleNavLinkClick(item.id)}
                    >
                      <FontAwesomeIcon icon={item.icon} className="mr-2" />
                      {item.name}
                    </a>
                    <div className="pl-4 mt-2">
                      <div className="relative">
                        <Link
                          href="#"
                          className="block text-[16px] hover:bg-gray-200"
                          onClick={toggleMobileMenu}
                        >
                           SmartHome Automation
                        </Link>
                        <div className="pl-4 mt-2">
                          <Link
                            href="/products/economy"
                            className="block text-[16px] hover:bg-gray-200"
                            onClick={toggleMobileMenu}
                          >
                            Economy
                          </Link>
                          <Link
                            href="/products/luxury"
                            className="block text-[16px] hover:bg-gray-200"
                            onClick={toggleMobileMenu}
                          >
                            Luxury
                          </Link>
                        </div>
                      </div>
                      <Link
                        href="/school-guard"
                        className="block text-[16px] hover:bg-gray-200"
                        onClick={toggleMobileMenu}
                      >
                        School-Guard
                      </Link>
                    </div>
                  </div>
                ) : item.name === "Resources" ? (
                  <Link
                    href="/resource"
                    className="font-normal text-[16px] hover:bg-gray-200 block"
                    onClick={toggleMobileMenu}
                  >
                    <FontAwesomeIcon icon={item.icon} className="mr-2" />
                    {item.name}
                  </Link>
                )
                : item.name === "Gallery" ? (
                  <Link
                    href="/gallery"
                    className="font-normal text-[16px] hover:bg-gray-200 block"
                    onClick={toggleMobileMenu}
                  >
                    <FontAwesomeIcon icon={item.icon} className="mr-2" />
                    {item.name}
                  </Link>
                ) : item.name === "About" ? (
                  <Link
                    href="/about"
                    className="font-normal text-[16px] hover:bg-gray-200 block"
                    onClick={toggleMobileMenu}
                  >
                    <FontAwesomeIcon icon={item.icon} className="mr-2" />
                    {item.name}
                  </Link>
                ) : (
                  <a
                    href="#"
                    className="font-normal text-[16px] hover:bg-gray-200 block"
                    onClick={() => handleNavLinkClick(item.id)}
                  >
                    <FontAwesomeIcon icon={item.icon} className="mr-2" />
                    {item.name}
                  </a>
                )}
              </React.Fragment>
            ))}
            <div className="flex gap-x-5 mt-5">
              <a
                href="https://www.instagram.com/grivastechnologies/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-effect"
              >
                <Image src={Instagram} alt="Instagram" />
              </a>
              <a
                href="https://www.facebook.com/GrivasTechnology"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-effect"
              >
                <Image src={Facebook} alt="Facebook" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
