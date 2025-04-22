import React from "react";
import {
  InstagramLogoIcon,
  FacebookLogoIcon,
  WhiteLogoIcon,
} from "./../../ui/icons";
export const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center justify-between w-full h-auto bg-neutral-600">
      <div className="m-3">
        <WhiteLogoIcon></WhiteLogoIcon>
      </div>

      <div className="flex items-center gap-5 mt-4">
        <a href="https://damianbermudezdev.es/" target="_blank">
          <FacebookLogoIcon />
        </a>
        <a href="https://damianbermudezdev.es/" target="_blank">
          <InstagramLogoIcon />
        </a>
      </div>
    </footer>
  );
};
