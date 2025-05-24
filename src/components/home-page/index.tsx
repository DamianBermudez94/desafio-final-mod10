import React from "react";
import Image from "next/image";
import Link from "next/link";

import { FeaturedSection } from "src/components/featured-section";
import Beneficios from "src/components/Beneficios/Beneficios";
import ParallaxSection from "src/components/parallaxSection/parallaxEfecto";

type Props = {
  children?: React.ReactNode;
  data: any;
};

export const HomePage: React.FC<Props> = ({ data }) => {
  return (
    <section>
      {/* Hero */}
      <ParallaxSection
        image="/images/img-home.webp"
        objectPosition="center 100%"
        overlayColor="black"
        overlayOpacity={0.5}
        strength={400}
        height="100vh"
      >
        <div className="inset-0 max-w-2xl">
          <h1 className="mb-4 text-5xl font-bold drop-shadow-lg">
            Conectá con lo esencial
          </h1>
          <p className="mb-6 text-xl drop-shadow">
            Productos que combinan diseño, calidad y funcionalidad.
          </p>
          <a
            href="/product"
            className="inline-block px-6 py-3 text-lg font-medium text-white transition bg-blue-600 rounded-xl hover:bg-blue-700"
          >
            Ver colección
          </a>
        </div>
      </ParallaxSection>
      {/* Contenido por encima */}
      <div className="relative z-10 w-full">
        <FeaturedSection data={data} />
      </div>

      {/* Historia / Propósito */}
      <div className="max-w-3xl mx-auto text-center text-gray-700">
        <h2 className="mb-4 text-2xl font-bold">Nuestra historia</h2>
        <p>
          Empezamos con una idea simple: crear un ecommerce que no venda solo
          productos, sino experiencias. Cada artículo está pensado para durar y
          acompañarte todos los días. Apostamos a la calidad y al diseño
          funcional.
        </p>
      </div>
      {/* Beneficios */}
      <div className="w-full h-full">
        <Beneficios />
      </div>
      {/* CTA Final */}
      <ParallaxSection
        image="/images/imagen-parallax.webp"
        objectPosition="center"
        overlayColor="black"
        overlayOpacity={0.5}
        strength={400}
        height="80vh"
      >
        <div className="py-12 text-center text-white bg-transparent rounded-xl">
          <h2 className="mb-4 text-3xl font-bold">¿Listo para comprar?</h2>
          <Link
            href="/product"
            className="px-6 py-3 text-lg text-blue-600 transition bg-white rounded-xl hover:bg-gray-100"
          >
            Explorá nuestros productos
          </Link>
        </div>
      </ParallaxSection>
    </section>
  );
};
