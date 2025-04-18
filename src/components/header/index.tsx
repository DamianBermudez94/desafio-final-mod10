import { SearchForm } from "src/components/search-form";
import { SideBar } from "src/components/side-bar";
import { WhiteLogoIcon } from "src/ui/icons"
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
    <header className={`w-full h-[150px] z-20 px-10 flex items-center justify-between bg-[#ffffff] ${props.sticky ? "sticky top-0" : "static"}`}>
      {/* Logo */}
      <Link href="/">
        <WhiteLogoIcon />
      </Link>

      {/* Formulario centrado */}
      {props.form && (
        <div className="flex-1 flex justify-center">
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