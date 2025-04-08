import { useRouter } from "next/router";
import React from "react";
import { ProductoType } from "src/types";
import { LargeText, SubTitle } from "./../../ui/text";
import {
  CardImg,
  CardImgWrapper,
  CardTextWrapper,
  CardWrapper,
} from "./styled";
type Props = {
  url: string;
  title: string;
  price: number;
  type: string,
  productId?: string;
};
export const ProductCard: React.FC<Props> = (props) => {
  console.log("📦 Props recibidas:", props);
  console.log("🔍 Data:", props.url);
  console.log("🔍 NotFound:", props.title);
  console.log("🔍 NotFound:", props.type);

  const router = useRouter();
  function handleClick() {
    router.push("/detail/" + props.productId);
  }

  return (
    <CardWrapper onClick={handleClick}>
      <CardImgWrapper>
        <CardImg alt={props.title + "-image"} src={props.url}></CardImg>
      </CardImgWrapper>
      <CardTextWrapper>
        <LargeText>{props.title}</LargeText>
        <SubTitle>${props.price}</SubTitle>
        <SubTitle>${props.type}</SubTitle>
      </CardTextWrapper>
    </CardWrapper>
  );
};