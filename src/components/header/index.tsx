import { SearchForm } from "src/components/search-form";
import { SideBar } from "src/components/side-bar";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

type Props = {
  form: boolean;
  sticky?: boolean;
};

export const Header: React.FC<Props> = (props) => {
  const [flag, setFlag] = useState(false);
  const router = useRouter();
  function handleSubmit(data: any) {
    if (data.query) router.push("/search/" + data.query);
  }

  function toggleMenu() {
    setFlag(!flag);
  }
  return (
    <div
      className={`${props.sticky ? "sticky top-0 z-20 bg-white" : "static"}`}
    >
      <header
        className={
          "w-full h-auto z-20 p-10 px-11 flex flex-wrap justify-center items-center  m-auto bg-white"
        }
      >
        <SideBar toggle={toggleMenu} show={flag} />
      </header>
    </div>
  );
};
