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
    <header className={`w-full h-[150px] px-10 flex justify-between items-center z-[3] bg-[#313638] ${props.sticky ? "sticky top-0" : "static"
      }`}>
      <div className="m-5">
        <Link href="/">
          <div className="place-self-start">
            <WhiteLogoIcon></WhiteLogoIcon>
          </div>
        </Link>
      </div>

      {props.form ? (
        <div className="w-1/2 max-w-[360px] mx-auto col-span-2 md:col-span-1">
          <SearchForm submit={handleSubmit} type="secondary"></SearchForm>
        </div>
      ) : null}
      <SideBar toggle={toggleMenu} show={flag}></SideBar>
    </header>
  );
};