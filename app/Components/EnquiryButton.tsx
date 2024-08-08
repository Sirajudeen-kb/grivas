"use client";
import { useEffect, useState } from "react";

const EnquiryButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const targetId = entry.target.id;
          if (targetId === "enquiry-section" || targetId === "home-section") {
            setIsVisible(!entry.isIntersecting);
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    const enquirySection = document.getElementById("enquiry-section");
    const homeSection = document.getElementById("home-section");
    if (enquirySection) {
      observer.observe(enquirySection);
    }
    if (homeSection) {
      observer.observe(homeSection);
    }

    return () => {
      if (enquirySection) {
        observer.unobserve(enquirySection);
      }
      if (homeSection) {
        observer.unobserve(homeSection);
      }
    };
  }, []);

  const handleScrollToEnquiry = () => {
    const enquirySection = document.getElementById("enquiry-section");
    if (enquirySection) {
      enquirySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return isVisible ? (
    <div className="enquiry-button">
      <button onClick={handleScrollToEnquiry}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-envelope"
          viewBox="0 0 16 16"
        >
          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zM.05 4.555l7.323 4.89a.5.5 0 0 0 .558 0l7.323-4.89A1.986 1.986 0 0 1 14 4H2c-.538 0-1.045.127-1.483.342L.05 4.555zM0 12V4.697l5.803 3.879a1.5 1.5 0 0 0 1.66 0L16 4.697V12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1z" />
        </svg>
        <span className="button-text">Contact Us</span>
      </button>
    </div>
  ) : null;
};

export default EnquiryButton;
