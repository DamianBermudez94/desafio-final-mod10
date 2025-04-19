import React from "react";
import { FeaturedSection } from "src/components/featured-section";
import { MainSection } from "src/components/main-section";

type Props = {
  children?: React.ReactNode;
  data: any;
};

export const HomePage: React.FC<Props> = ({ data }) => {
  return (
    <section className="relative flex flex-col items-center justify-center w-full overflow-hidden text-center">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <img
          src="/img-home.webp"
          alt="Mueblería - Home & Deco"
          className="object-cover object-bottom w-full h-full opacity-70"
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
