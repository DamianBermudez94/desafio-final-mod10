import { SideBar } from "src/components/side-bar";
import React, { useState } from "react";

type Props = {
  form: boolean;
  sticky?: boolean;
};

export const Header: React.FC<Props> = (props) => {
  const [flag, setFlag] = useState(false);
  function toggleMenu() {
    setFlag(!flag);
  }
  return (
    <header
      className={
        "w-full h-auto px-11 flex flex-wrap justify-center items-center m-auto bg-white shadow-md"
      }
    >
      <SideBar toggle={toggleMenu} show={flag} />
    </header>
  );
};
