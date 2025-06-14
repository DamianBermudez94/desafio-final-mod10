import { useRouter } from "next/router";
import React from "react";
import { ProductoType } from "src/types";
import Image from "next/image";

type Props = {
  producto: ProductoType;
};

export const ProductCard: React.FC<Props> = ({ producto }) => {
  const router = useRouter();

  const imageUrl = producto.Images?.[0]?.url || "/no-image.jpg";

  function handleClick() {
    router.push("/detail/" + producto.objectID); // ✅
  }

  return (
    <div
      className="overflow-hidden transition-shadow duration-300 bg-white shadow-md rounded-2xl hover:shadow-xl"
      onClick={handleClick}
    >
      {/* 📸 Caja para la imagen */}
      <div className="relative w-full h-48">
        <Image
          src={imageUrl}
          alt={producto.Name || "Producto"}
          width={322}
          height={200}
          className="object-cover group-hover:scale-105 transition-transform duration-300 w-full h-[200px]"
        />
      </div>

      {/* 🛍️ Contenido del producto */}
      <div className="p-4 ">
        <h3 className="text-lg font-semibold text-gray-800 transition-colors group-hover:text-blue-600">
          {producto.Name}
        </h3>
        <p className="mt-1 mb-2 text-sm text-gray-600">${producto.Unit_cost}</p>

        <span
          className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
            producto.In_stock
              ? "bg-green-100 text-green-700"
              : "bg-red-200 text-red-800"
          }`}
        >
          {" "}
          {producto.In_stock ? "En stock" : "Sin stock"}
        </span>
      </div>
    </div>
  );
};
