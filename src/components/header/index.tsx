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
          "w-full h-auto z-20 p-10 px-11 flex flex-wrap items-center justify-between m-auto bg-white"
        }
      >
        {/* Logo */}
        <Link href="/" className="mr-auto">
          <ShoppingCart className="w-[50px] h-[50px]" />
        </Link>

        <div className="w-full mt-2 sm:w-auto">
          <SearchForm type="primary" submit={handleSubmit}></SearchForm>
        </div>

        {/* Formulario centrado */}
        {props.form && (
          <div className="flex justify-center flex-1 bg-amber-950">
            <div className="w-full max-w-[360px]">
              <SearchForm submit={handleSubmit} type="secondary" />
            </div>
          </div>
        )}

        {/* Botón del menú o sidebar */}
        <div className="ml-auto">
          <SideBar toggle={toggleMenu} show={flag} />
        </div>
      </header>
    </div>
  );
};
