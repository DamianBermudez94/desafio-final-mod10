import Navbar  from "./menu"
import {
  SideBarContainer,
} from "./styled";

type props = {
  show: boolean;
  toggle: () => any;
};

export const SideBar = (props: props) => {

  return (
    <>
      <SideBarContainer  onClick={props.toggle}>
        <Navbar></Navbar>
      </SideBarContainer>
    </>
  );
};