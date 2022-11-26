import { ReactElement } from "react";
import Logo from "./logo.svg";
import WhiteLogo from "./white-logo.svg";
import Burguer from "./burguer.svg";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { BaseIcon } from "./styled";

type Props = {
  className?: string;
};

export function LogoIcon({ className }: Props): ReactElement {
  return (
    <BaseIcon>
      <Logo className={className}></Logo>
    </BaseIcon>
  );
}
export function WhiteLogoIcon({ className }: Props): ReactElement {
  return (
    <BaseIcon>
      <WhiteLogo className={className}></WhiteLogo>
    </BaseIcon>
  );
}
export function BurguerIcon({ className }: Props): ReactElement {
  return (
    <BaseIcon>
      <Burguer className={className}></Burguer>
    </BaseIcon>
  );
}
export function TwitterIcon({ className }: Props): ReactElement {
  return (
    <BaseIcon>
      <FiTwitter className={className}></FiTwitter>
    </BaseIcon>
  );
}
export function InstagramIcon({ className }: Props): ReactElement {
  return (
    <BaseIcon>
      <AiOutlineInstagram className={className}></AiOutlineInstagram>
    </BaseIcon>
  );
}
export function ArrowDownIcon({ className }: Props): ReactElement {
  return (
    <BaseIcon>
      <IoMdArrowDropdown className={className}></IoMdArrowDropdown>
    </BaseIcon>
  );
}