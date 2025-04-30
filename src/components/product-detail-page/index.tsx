import { getOrderUrl, getSettedToken } from "src/lib/api/api";
import { ProductoType } from "src/types"; // Ajustá el path si lo pusiste en otro lado
import { useRouter } from "next/router";
import React, { useState } from "react";
import { PrimaryButtonBig } from "./../../ui/buttons";
import { PageLoader, Spinner } from "./../../ui/loader";
import { BodyText, SubTitle } from "./../../ui/text";
import {
  DetailButtonWrapper,
  DetailDescriptionWrapper,
  DetailImg,
  DetailImgWrapper,
  DetailWrapper,
  NotFoundWrapper,
  ProductDetailTitle,
} from "./styled";

import { useCarrito } from "src/context/CarrtitoContext";

type Props = {
  producto: ProductoType;
  notFound: boolean;
};

export const ProductDetailPage: React.FC<Props> = ({ producto, notFound }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [orderError, setOrderError] = useState(false);
  const { agregarAlCarrito } = useCarrito();

  async function buyProduct() {
    setOrderError(false);
    setLoading(true);
    const token = await getSettedToken();
    if (!token) {
      router.push("/login");
      return;
    }
    try {
      const res = await getOrderUrl(producto.objectID);
      console.log(res);

      window.location.href = res.url;
    } catch (error) {
      setOrderError(true);
      setLoading(false);
    }
  }

  return (
    <>
      {producto?.objectID ? (
        <DetailWrapper>
          <DetailImgWrapper>
            <DetailImg
              src={producto.Images?.[0]?.filename || "/no-image.jpg"}
            />
          </DetailImgWrapper>
          <DetailDescriptionWrapper>
            <ProductDetailTitle style={{ margin: "0" }}>
              {producto.Name}
            </ProductDetailTitle>
            <SubTitle style={{ margin: "0" }}>${producto.Unit_cost}</SubTitle>
            <DetailButtonWrapper>
              <PrimaryButtonBig disabled={loading} onClick={buyProduct}>
                {loading ? <Spinner /> : "Comprar"}
              </PrimaryButtonBig>
              <button onClick={() => agregarAlCarrito(producto)}>
                Agregar al carrito
              </button>
              {orderError && (
                <BodyText style={{ color: "red" }}>
                  🛑 Ocurrió un error al procesar la compra. Por favor intentá
                  nuevamente.
                </BodyText>
              )}
            </DetailButtonWrapper>
            <BodyText>{producto.Description}</BodyText>
          </DetailDescriptionWrapper>
        </DetailWrapper>
      ) : (
        <>
          {notFound ? (
            <NotFoundWrapper>
              <SubTitle>Producto no encontrado</SubTitle>
            </NotFoundWrapper>
          ) : (
            <PageLoader></PageLoader>
          )}
        </>
      )}
    </>
  );
};
