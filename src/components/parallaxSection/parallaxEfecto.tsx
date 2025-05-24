// src/components/ParallaxSection.tsx

import React from "react";
import { Parallax } from "react-parallax";

type Props = {
  image: string;
  objectPosition?: string;
  overlayColor?: string;
  overlayOpacity?: number;
  height?: string;
  strength?: number;
  children: React.ReactNode;
};

const ParallaxSection: React.FC<Props> = ({
  image,
  objectPosition = "center",
  overlayColor = "black",
  overlayOpacity = 0.4,
  height = "70vh",
  strength = 300,
  children,
}) => {
  return (
    <Parallax
      bgImage={image}
      strength={strength}
      bgImageStyle={{
        objectFit: "cover",
        objectPosition: objectPosition, // 👈 usamos la prop
      }}
    >
      <div
        style={{ height }}
        className="flex items-center justify-center px-4 text-center"
      >
        <div className="z-10 text-white">{children}</div>
      </div>
    </Parallax>
  );
};

export default ParallaxSection;
