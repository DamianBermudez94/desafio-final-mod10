import { Parallax } from "react-parallax";
import { motion } from "framer-motion";
import React from "react";

type Props = {
  children: React.ReactNode;
  image: string;
  overlayColor?: string;
  overlayOpacity?: number;
  strength?: number;
  height?: string;
  objectPosition?: "top" | "center" | "bottom";
};

const ParallaxSection = ({
  children,
  image,
  overlayColor = "black",
  overlayOpacity = 0.6,
  strength = 200,
  height = "80vh",
  objectPosition = "center",
}: Props) => {
  return (
    <Parallax
      bgImage={image}
      strength={strength}
      bgImageStyle={{
        width: "100%",
        height: "100%",
      }}
      style={{
        backgroundPosition: objectPosition,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="relative top-0 flex items-center justify-center w-full px-6 text-center text-white"
        style={{ height }}
      >
        <div
          className="absolute inset-0"
          style={{ backgroundColor: overlayColor, opacity: overlayOpacity }}
        />
        <motion.div
          className="relative z-10 max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {children}
        </motion.div>
      </div>
    </Parallax>
  );
};

export default ParallaxSection;
