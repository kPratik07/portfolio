import React from "react";
import "./Logo.css";

interface LogoProps {
  size?: "small" | "medium" | "large";
}

const Logo: React.FC<LogoProps> = ({ size = "medium" }) => {
  return (
    <div className={`logo-container ${size}`}>
      <div className="logo">
        <span className="logo-letter logo-p">P</span>
        <span className="logo-letter logo-r">R</span>
      </div>
      <div className="logo-dot"></div>
    </div>
  );
};

export default Logo;
