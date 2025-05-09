import Navbar from "./menu";
type props = {
  toggle: () => any;
  show: boolean;
};

export const SideBar = (props: props) => {
  return <Navbar></Navbar>;
};
