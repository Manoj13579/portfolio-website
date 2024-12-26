import { useState } from "react";

export default function Navbar() {
  

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [closingAnimation, setClosingAnimation] = useState(false);
  const handleToggleClick = () => {
    setMobileNavOpen(!mobileNavOpen);
    setClosingAnimation(false);
  };

  

  const handleNavItemClick = () => {
    // Close mobile nav on any nav item click
    setMobileNavOpen(false);
  };

  return (
    <section>
      <div
        className="navbar-container flex justify-between items-center h-14 px-48 py-10 md:px-24 overflow-y-hidden"
        style={{
          position: "fixed",
          width: "100%",
          zIndex: "10000",
        }}
      >
        <div className="my-logo font-medium text-white">ML</div>
        <div className="toggle-icon text-white" onClick={handleToggleClick}>
          {mobileNavOpen ? (
            <i className="fa-solid fa-xmark"></i> // Cross icon for closing
          ) : (
            <i className="fa-solid fa-bars"></i> // Bar icon for opening
          )}
        </div>

        <div className="nav-links flex font-medium text-white justify-around gap-8">
          <a href="#" className="home">
            Home
          </a>
          <a href="#about-section" className="about">
            About
          </a>
          <a href="#skill-container" className="skill">
            Skills
          </a>
          <a href="#workex-container" className="workex">
            Work Exp
          </a>
          <a href="#projects-container" className="project">
            Projects
          </a>
          <a href="#certifications-container" className="certification">
            Certifications
          </a>
        </div>
      </div>

      <div
        className={`mobile-nav bg-gradient-to-r from-stone-950 to-indigo-950 px-12 py-6 h-screen w-screen ${
          mobileNavOpen
            ? "slide-in-from-left block"
            : closingAnimation
            ? "slide-out-to-right" // Use 'slide-out-to-right' for right slide out:
            : " hidden"
        }`}
        style={{ zIndex: 1000, position: "fixed" }}
      >
        
        <div className="nav-links-mobile flex flex-col font-small text-white justify-around gap-4 mt-10">
          <a href="#" className="home" onClick={handleNavItemClick}>
            Home
          </a>
          <a
            href="#about-section"
            className="about"
            onClick={handleNavItemClick}
          >
            About
          </a>
          <a
            href="#skill-container"
            className="skill"
            onClick={handleNavItemClick}
          >
            Skills
          </a>
          <a
            href="#works-container"
            className="workes"
            onClick={handleNavItemClick}
          >
            Work Exp
          </a>
          <a
            href="#projects-container"
            className="project"
            onClick={handleNavItemClick}
          >
            Projects
          </a>
          <a
            href="#certifications-container"
            className="certification"
            onClick={handleNavItemClick}
          >
            Certifications
          </a>
        </div>
      </div>
    </section>
  );
}
