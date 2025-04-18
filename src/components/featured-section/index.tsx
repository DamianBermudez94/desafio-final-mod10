import { ProductCard } from "src/components/product-card";
import React from "react";
import { SubTitle } from "src/ui/text";
import { CardsWrapper, FeaturedWrapper, SectionTitleWrapper } from "./styled";

type Props = {
  children?: React.ReactNode;
  data: any;
};
export const FeaturedSection: React.FC<Props> = ({ children, data }) => {

  return (
    <section className="bg-amber-50 p-10">
      <div className="text-center pb-6">
        <h2 className="text-4xl">Productos Destacados</h2>
      </div>
      <div className="bg-amber-50 flex flex-col flex-wrap md:flex-row justify-center gap-5">

        {data?.results


          ? data.results.map((product: any) => {
            return (
              <ProductCard
                key={product.objectID}
                productId={product.objectID}
                url={product.Images[0]?.url}
                title={product.Name}
                price={product.Unit_cost}
                type="featured"
              ></ProductCard>
            );
          })
          : null}
      </div>
    </section>
  );
};