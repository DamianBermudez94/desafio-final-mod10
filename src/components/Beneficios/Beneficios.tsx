"use client";

import { Truck, RefreshCcw, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Truck,
    title: "Envíos a todo el país",
    description: "Rápido y seguro desde nuestra tienda hasta tu puerta.",
    animation: {
      hover: { x: 10 },
      transition: { type: "spring", stiffness: 300 },
    },
  },
  {
    icon: RefreshCcw,
    title: "Cambios y devoluciones",
    description: "Tenés 15 días para cambiar o devolver tu producto.",
    animation: {
      hover: { rotate: 360 },
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  },
  {
    icon: BadgeCheck,
    title: "Productos de alta calidad",
    description: "Trabajamos con materiales premium y duraderos.",
    animation: {
      hover: { scale: 1.2 },
      transition: { type: "spring", stiffness: 300 },
    },
  },
];

export default function Beneficios() {
  return (
    <section className="px-4 py-16 bg-gray-50">
      <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto text-center md:grid-cols-3">
        {features.map(
          ({ icon: Icon, title, description, animation }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              whileHover="hover"
              className="p-6 transition-all bg-white border shadow-sm group rounded-2xl hover:shadow-md"
            >
              <motion.div
                variants={{
                  hover: animation.hover,
                }}
                transition={animation.transition}
                className="mx-auto mb-4 text-blue-600 w-fit"
              >
                <Icon className="w-12 h-12" />
              </motion.div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{description}</p>
            </motion.div>
          )
        )}
      </div>
    </section>
  );
}
