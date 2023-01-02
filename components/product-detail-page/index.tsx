import { getOrderUrl, getSettedToken } from "lib/api/api";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { PrimaryButtonBig } from "ui/buttons";
import { PageLoader, Spinner } from "ui/loader";
import { BodyText, SubTitle } from "ui/text";
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
  data: any;
  notFound: boolean;
};

export const ProductDetailPage: React.FC<Props> = (props) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [orderError, setOrderError] = useState(false);

  console.log(props);

  async function buyProduct() {
    setOrderError(false);
    setLoading(true);
    const token = await getSettedToken();
    if (!token) {
      router.push("/login");
    }
    try {
      const res = await getOrderUrl(props.data.objectID);
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
            <DetailImg src={props.data.Images[0]?.url} />
          </DetailImgWrapper>
          <DetailDescriptionWrapper>
            <ProductDetailTitle style={{ margin: "0" }}>
              {props.data.Name}
            </ProductDetailTitle>
            <SubTitle style={{ margin: "0" }}>${props.data.Unit_cost}</SubTitle>
            <DetailButtonWrapper>
              <PrimaryButtonBig
                onClick={() => {
                  buyProduct();
                }}
              >
                {loading ? <Spinner /> : "Comprar"}
              </PrimaryButtonBig>
              {orderError ? "ups algo salio mal" : null}
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