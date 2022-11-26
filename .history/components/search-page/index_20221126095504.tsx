import { ProductCard } from "components/product-card";
import { fetchApi } from "lib/api";
import React, { useState } from "react";
import useSWR from "swr";
import { Spinner } from "ui/loader";
import { BodyText, SubTitle } from "ui/text";
import {
  PageNumber,
  ProductNotFoundWrapper,
  ProductsCardPagesWrapper,
  ProductsCardWrapper,
  SearchWrapper,
} from "./styled";

type Props = {
  children?: React.ReactNode;
  query: string;
};
export const SearchPage: React.FC<Props> = ({ children, query }) => {
  const [page, setPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const { data, error, mutate } = useSWR(
    "/search?q=" + query + "&offset=" + offset + "&limit=3",
    fetchApi
  );

  const results = data?.results;
  console.log(data);

  //recibo el numero de pag
  function goToPage(page: number) {
    let newOffset = 0;
    //aumento el offset de a 3 por pagina
    //ya que cada pag tiene 3 productos
    for (let index = 1; index < page; index++) {
      newOffset = newOffset + 3;
    }

    //seteo el nuevo offset y rerenderizo
    setPage(page);
    setOffset(newOffset);
    window.scrollTo(0, 0);
  }
  function generatePages() {
    //checkeo el total de productos
    const total = data?.pagination.total;

    //obtengo el total de paginas dividiendo por 3 productos por pagina
    const pages = Math.ceil(total / 3);
    const result = [];
    //Genero los divs que me llevan a cada pagina
    for (let index = 0; index < pages; index++) {
      result.push(
        <PageNumber
          key={index}
          onClick={() => {
            goToPage(index + 1);
          }}
          style={page == index + 1 ? { border: "solid 1px black" } : {}}
        >
          {index + 1}
        </PageNumber>
      );
    }
    return result;
  }

  return (
    <SearchWrapper>
      {error ? (
        <div>Upss algo salio mal</div>
      ) : (
        <ProductsCardWrapper>
          {results ? (
            results.length > 0 ? (
              results.map((item: any) => {
                return (
                  <ProductCard
                    key={item.objectID}
                    productId={item.objectID}
                    url={item.Images[0]?.url}
                    title={item.Name}
                    price={item.Price}
                  />
                );
              })
            ) : (
              <ProductNotFoundWrapper>
                <SubTitle>No se encontraron resultados</SubTitle>
                <BodyText>Sugerencias: Silla, Mesa, Alfombra.</BodyText>
              </ProductNotFoundWrapper>
            )
          ) : (
            <Spinner></Spinner>
          )}
        </ProductsCardWrapper>
      )}
      {data ? (
        <ProductsCardPagesWrapper>{generatePages()}</ProductsCardPagesWrapper>
      ) : null}
    </SearchWrapper>
  );
};