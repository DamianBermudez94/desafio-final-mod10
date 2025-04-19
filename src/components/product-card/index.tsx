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
  type: string;
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
    <div
      className="cursor-pointer max-w-[322px] max-h-[322px] flex flex-col rounded-[6px]
    border border-[rgba(0,0,0,0.5)]
    shadow-[0_5px_15px_rgba(0,0,0,0.35)]
    hover:shadow-[0_5px_15px_rgba(0,0,0,0.8)]
    active:shadow-[0_5px_15px_#f09d51]
    transition-shadow duration-300 ease-in-out
    overflow-hidden
    bg-card-bg
  "
      onClick={handleClick}
    >
      <img
        className="object-cover w-full h-full"
        alt={props.title + "-image"}
        src={props.url}
      ></img>

      <div className="flex flex-col justify-between p-5 bg-gray-600">
        <LargeText>{props.title}</LargeText>
        <SubTitle>${props.price}</SubTitle>
        <SubTitle>${props.type}</SubTitle>
      </div>
    </div>
  );
};
