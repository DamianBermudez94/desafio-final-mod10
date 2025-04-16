import Navbar from "./menu"
type props = {
  toggle: () => any;
};

export const SideBar = (props: props) => {

  return (
    <Navbar></Navbar>
  );
};