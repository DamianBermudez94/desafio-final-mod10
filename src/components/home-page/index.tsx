import React from "react";
import { FeaturedSection } from "src/components/featured-section";
import Image from "next/image";
import Link from "next/link";
import Beneficios from "src/components/Beneficios/Beneficios";

type Props = {
  children?: React.ReactNode;
  data: any;
};

export const HomePage: React.FC<Props> = ({ data }) => {
  return (
    <section>
      <div className="relative flex items-center justify-center w-full h-[80vh] overflow-hidden text-center bg-gray-100">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/img-home.webp"
            alt="Mueblería - Home & Deco"
            className="object-cover object-center w-full h-full opacity-70"
            fill
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Contenido centrado */}
        <div className="relative z-10 max-w-2xl px-6">
          <h1 className="mb-4 text-5xl font-bold text-white drop-shadow-lg">
            Conectá con lo esencial
          </h1>
          <p className="mb-8 text-xl text-gray-100 drop-shadow">
            Productos que combinan diseño, calidad y funcionalidad.
          </p>
          <Link
            href="/product"
            className="inline-block px-6 py-3 text-lg font-medium text-white transition bg-blue-600 rounded-xl hover:bg-blue-700"
          >
            Ver colección
          </Link>
        </div>
      </div>
      {/* Beneficios */}
      <div className="w-full h-full">
        <Beneficios />
      </div>

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

      {/* CTA Final */}
      <div className="py-12 text-center text-white bg-blue-600 rounded-xl">
        <h2 className="mb-4 text-3xl font-bold">¿Listo para comprar?</h2>
        <Link
          href="/product"
          className="px-6 py-3 text-lg text-blue-600 transition bg-white rounded-xl hover:bg-gray-100"
        >
          Explorá nuestros productos
        </Link>
      </div>
    </section>
  );
};
