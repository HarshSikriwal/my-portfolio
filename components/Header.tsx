import React from "react";
import { twMerge } from "tailwind-merge";

const Header = ({ className }: any) => {
  return (
    <div className={twMerge("text-primary-color name-nav", className)}>
      <h1 className="font-light">Harsh Sikriwal</h1>
      <p className="text-primary-color pl-1">Web-Developer</p>
    </div>
  );
};

export default Header;
