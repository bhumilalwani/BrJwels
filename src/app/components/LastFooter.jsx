"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const LastFooter = () => {
  const [visibleSection, setVisibleSection] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to update the state based on the window width
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    // Set initial state
    handleResize();

    // Attach event listener
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSection = (section) => {
    setVisibleSection(visibleSection === section ? null : section);
  };

  const sections = [
    {
      title: "ASSISTANCE",
      links: [
        "Contact",
        "Email Us",
        "Chat With Us",
        "Track Your Order",
        "Returns & Exchange",
        "Resize & Repair",
        "FAQs",
        "Accessibility",
      ],
    },
    {
      title: "EXPERIENCE BR",
      links: [
        "The BR Difference",
        "Free Express Shipping",
        "Free Returns",
        "Payment Options",
        "Lifetime Warranty",
        "Enhanced Warranty Plan",
      ],
    },
    {
      title: "SHOP",
      links: [
        "Lab Grown Jewelry",
        "Diamond Jewelry",
        "Sapphire Jewelry",
        "Emerald Jewelry",
        "Ruby Jewelry",
        "Tanzanite Jewelry",
        "Pearl Jewelry",
        "Opal Jewelry",
      ],
    },
    {
      title: "ABOUT US",
      links: ["Our Story", "Customer Reviews", "BR in the Press", "The Blog"],
    },
    {
      title: "PARTNER WITH US",
      links: ["Affiliate Program", "Join the Glam Squad"],
    },
    {
      title: "PROMOTIONS",
      links: ["Promo Codes & Offers", "US Service Discount", "Community Offers"],
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-[20px] px-[5vw] mt-[10vh] pb-[5vh] mb-[5vh] bg-[#F5F5F6]">
      {sections.map((section, index) => (
        <div key={index} className="flex flex-col items-start px-[10px]">
          {/* Heading Section */}
          <div
            className={`flex items-center justify-between w-full cursor-pointer ${
              isMobile && "sm:cursor-auto"
            }`}
            onClick={() => {
              if (isMobile) toggleSection(index); // Toggle only in mobile view
            }}
          >
            <h2 className="font-semibold my-[2.5vh]">{section.title}</h2>
            {isMobile && (
              <i
                className={`text-xl ${
                  visibleSection === index ? "ri-subtract-line" : "ri-add-line"
                }`}
              ></i>
            )}
          </div>

          {/* Links */}
          {(isMobile ? visibleSection === index : true) && (
            <div className="w-full mt-2 space-y-2">
              {section.links.map((link, i) => (
                <Link key={i} className="block hover:text-[#d6993e]" href="/">
                  {link}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default LastFooter;
