import { useRouter } from "next/router";
import React from "react";
import { ProductoType } from "src/types";
import { LargeText, SubTitle } from "./../../ui/text";

type Props = {
  producto: ProductoType;
};

export const ProductCard: React.FC<Props> = ({ producto }) => {
  const router = useRouter();

  const imageUrl = producto.Images?.[0]?.url || "/no-image.jpg";

  console.log(imageUrl);
  console.log(producto.Images?.[0]);
  function handleClick() {
    router.push("/detail/" + producto.objectID); // ✅
  }

  return (
    <div
      className="cursor-pointer max-w-[322px] flex flex-col rounded-[6px] border border-[rgba(0,0,0,0.5)] 
        shadow-[0_5px_15px_rgba(0,0,0,0.35)] hover:shadow-[0_5px_15px_rgba(0,0,0,0.8)]
        active:shadow-[0_5px_15px_#f09d51] transition-shadow duration-300 ease-in-out overflow-hidden bg-card-bg"
      onClick={handleClick}
    >
      {/* 📸 Caja para la imagen */}
      <div className="relative w-full h-[200px] overflow-hidden">
        <img
          src={imageUrl}
          alt={producto.Name || "Producto"}
          width={322}
          height={200}
          className="object-cover w-full h-[200px]"
        />
      </div>

      {/* 🛍️ Contenido del producto */}
      <div className="flex flex-col justify-between p-5 text-white bg-gray-600">
        <LargeText>{producto.Name}</LargeText>
        <SubTitle>${producto.Unit_cost}</SubTitle>
        <SubTitle>{producto.Type}</SubTitle>
        <p>{producto.Color}</p>
        <span>{producto.In_stock}</span>
      </div>
    </div>
  );
};
