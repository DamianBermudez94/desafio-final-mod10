import { ReactElement } from "react";
import Logo from "./logo.svg";
import WhiteLogo from "./interior_decorating.svg";
import Burguer from "./burger.svg";
import InstaIcon  from "./Instagram_icon.svg";
import FacebooIcon from "./facebook-icon.svg";
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
export function InstagramLogoIcon({ className }: Props): ReactElement {
  return (
    <BaseIcon>
      <InstaIcon className={className}></InstaIcon>
    </BaseIcon>
  );
}
export function FacebookLogoIcon({ className }: Props): ReactElement {
  return (
    <BaseIcon>
      <FacebooIcon className={className}></FacebooIcon>
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