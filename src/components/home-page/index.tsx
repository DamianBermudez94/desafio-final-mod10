import React from "react";
import { FeaturedSection } from "src/components/featured-section";
import { MainSection } from "src/components/main-section";


type Props = {
  children?: React.ReactNode;
  data: any;
};

export const HomePage: React.FC<Props> = ({ data }) => {
  return (
    <section className="relative w-full flex flex-col justify-center items-center text-center overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <img
          src="/img-home.webp"
          alt="Mueblería - Home & Deco"
          className="w-full h-full object-cover object-bottom opacity-70"
        />
        {/* Overlay opcional para oscurecer */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Contenido por encima */}
      <div className="relative z-10 w-full">
        <MainSection />
        <FeaturedSection data={data} />
      </div>
    </section>

  );
};