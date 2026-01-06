import React from "react";
import Image from "next/image";

export default function Header(): React.ReactElement {
  const logoUrl = "https://garberbrosinc.com/websites/garberbrosinc/templates/GarberBrosInc/images/logo.png";
  const safeSrc = encodeURI(logoUrl);

  return (
    <header className="bg-white border-b" role="banner">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center">
          <a href="/">
            <Image src={safeSrc} alt="Garber Bros logo" unoptimized width={180} height={60} />
          </a>
        </div>

        <nav className="header-nav" aria-label="Primary Navigation">
          <ul className="flex gap-4 text-sm">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/lock-status">Lock Status</a></li>
            <li><a href="/vessels">Vessels</a></li>
            <li><a href="/barges">Barges</a></li>
            <li><a href="/websites/garberbrosinc/images/application.pdf" target="_blank">Employment</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
