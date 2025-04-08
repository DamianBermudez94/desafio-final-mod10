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

type Props = {
  data: ProductoType;
  notFound: boolean;
};


export const ProductDetailPage: React.FC<Props> = (props) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [orderError, setOrderError] = useState(false);

  async function buyProduct() {
    setOrderError(false);
    setLoading(true);
    const token = await getSettedToken();
    if (!token) {
      router.push("/login");
      return;
    }
    try {
      const res = await getOrderUrl(props.data.objectID);
      console.log("Producto:", props.data?.Name, props.data?.Unit_cost);
      console.log("Producto:", props.data?.Name, props.data?.Images);


      window.location.href = res.url;
    } catch (error) {
      setOrderError(true);
      setLoading(false);
    }
  }

  return (
    <>
      {props.data?.objectID ? (
        <DetailWrapper>
          <DetailImgWrapper>
            <DetailImg src={props.data.Images?.[0]?.url || "/no-image.jpg"} />
          </DetailImgWrapper>
          <DetailDescriptionWrapper>
            <ProductDetailTitle style={{ margin: "0" }}>
              {props.data.Name}
            </ProductDetailTitle>
            <SubTitle style={{ margin: "0" }}>${props.data.Unit_cost}</SubTitle>
            <DetailButtonWrapper>
              <PrimaryButtonBig
                disabled={loading}
                onClick={buyProduct}
              >
                {loading ? <Spinner /> : "Comprar"}
              </PrimaryButtonBig>
              {orderError && (
                <BodyText style={{ color: "red" }}>
                  🛑 Ocurrió un error al procesar la compra. Por favor intentá nuevamente.
                </BodyText>
              )}

            </DetailButtonWrapper>
            <BodyText>{props.data.Description}</BodyText>
          </DetailDescriptionWrapper>
        </DetailWrapper>
      ) : (
        <>
          {props.notFound ? (
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