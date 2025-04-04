import { useRouter } from "next/router";
import React from "react";
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
  productId?: string;
};
export const ProductCard: React.FC<Props> = (props) => {
  console.log("📦 Props recibidas:", props);
  console.log("🔍 Data:", props.url);
  console.log("🔍 NotFound:", props.title);

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
      </CardTextWrapper>
    </CardWrapper>
  );
};