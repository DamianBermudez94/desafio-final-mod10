import { SearchForm } from "src/components/search-form";
import { SideBar } from "src/components/side-bar";
import { WhiteLogoIcon } from "src/ui/icons";
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
    <header
      className={`w-full h-auto z-20 px-4 p-10 flex flex-wrap items-center justify-between bg-white" ${
        props.sticky ? "sticky top-0" : "static"
      }`}
    >
      {/* Logo */}
      <Link href="/" className="mr-auto">
        <WhiteLogoIcon />
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
  );
};
