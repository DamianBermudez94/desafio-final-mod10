import { ProductCard } from "src/components/product-card";
import React from "react";
import { ProductoType } from "src/types";

type Props = {
  children?: React.ReactNode;
  data: { results: ProductoType[] };
};

export const FeaturedSection: React.FC<Props> = ({ children, data }) => {
  return (
    <section className="p-10 bg-amber-50">
      <div className="pb-6 text-center">
        <h2 className="text-4xl font-bold">Conoce nuestros productos</h2>
      </div>

      <div className="flex flex-col flex-wrap justify-center gap-5 bg-amber-50 md:flex-row">
        {data?.results?.length ? (
          data.results.map((product) => (
            <ProductCard key={product.objectID} producto={product} />
          ))
        ) : (
          <p>No hay productos para mostrar 😢</p>
        )}
      </div>
    </section>
  );
};
