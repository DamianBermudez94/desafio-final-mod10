import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { motion } from "framer-motion";

import { FeaturedSection } from "src/components/featured-section";
import Beneficios from "src/components/Beneficios/Beneficios";
import ParallaxSection from "src/components/parallaxSection/parallaxEfecto";

type Props = {
  children?: React.ReactNode;
  data: any;
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: false,
};

export const HomePage: React.FC<Props> = ({ data }) => {
  return (
    <section>
      {/* Hero */}
      <ParallaxSection
        image="/images/efecto-parallax.webp"
        objectPosition="bottom"
        overlayColor="black"
        overlayOpacity={0.6}
        strength={400}
        height="80vh"
      >
        <div className="inset-0 max-w-2xl">
          <h1 className="mb-4 text-5xl font-bold drop-shadow-lg">
            Conectá con lo esencial
          </h1>
          <p className="mb-6 text-xl drop-shadow">
            Productos que combinan diseño, calidad y funcionalidad.
          </p>
          <Link
            href="/product"
            className="inline-block px-6 py-3 text-lg font-medium text-white transition bg-blue-600 rounded-xl hover:bg-blue-700"
          >
            Ver colección
          </Link>
        </div>
      </ParallaxSection>
      {/* Contenido por encima */}
      <div className="relative z-10 w-full">
        <FeaturedSection data={data} />
      </div>

      {/* Historia / Propósito */}
      <section className="grid items-center max-w-6xl grid-cols-1 gap-12 px-6 py-20 mx-auto overflow-hidden bg-white md:px-20 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-6 text-4xl font-bold">Nuestra Historia</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            Creemos que cada hogar tiene su propia historia, y nosotros estamos
            para ayudarte a contarla. Empezamos con una idea simple: ofrecer
            productos que no solo decoren, sino que transformen espacios.
          </p>
          <p className="mt-4 text-lg text-gray-700">
            Desde alfombras acogedoras hasta lámparas que iluminan momentos,
            seleccionamos cuidadosamente cada pieza para acompañarte en tu día a
            día con estilo, funcionalidad y calidez.
          </p>
        </motion.div>
        <div className="block w-full">
          <Slider {...settings}>
            <div className="overflow-hidden shadow-lg aspect-w-4 aspect-h-3 rounded-xl">
              <img
                src="/images/lampara.webp"
                alt="Producto 1"
                className="object-cover w-full h-[300px] shadow-lg rounded-xl"
              />
            </div>
            <div className="overflow-hidden shadow-lg aspect-w-4 aspect-h-3 rounded-xl">
              <img
                src="/images/alfombra.webp"
                alt="Producto 1"
                className="object-cover w-full h-[300px] max-w-full shadow-lg rounded-xl"
              />
            </div>{" "}
            <div className="overflow-hidden shadow-lg aspect-w-4 aspect-h-3 rounded-xl">
              <img
                src="/images/biblioteca.webp"
                alt="Producto 1"
                className="object-cover w-full h-[300px] max-w-full shadow-lg rounded-xl"
              />
            </div>{" "}
            <div className="overflow-hidden shadow-lg aspect-w-4 aspect-h-3 rounded-xl">
              <img
                src="/images/mesa-ratona.webp"
                alt="Producto 1"
                className="object-cover w-full h-[300px] max-w-full shadow-lg rounded-xl"
              />
            </div>
          </Slider>
        </div>
      </section>
      {/* Beneficios */}
      <div className="w-full h-full">
        <Beneficios />
      </div>
      {/* CTA Final */}
      <ParallaxSection
        image="/images/efecto-home-parallax-2.webp"
        objectPosition="center"
        overlayColor="black"
        overlayOpacity={0.6}
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
