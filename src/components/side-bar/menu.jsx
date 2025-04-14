import React, { useState } from 'react'
import { useCheckToken } from "src/hooks/hooks";
import { userMailState } from "src/recoil/atoms";
import { removeToken } from "src/lib/api/api";
import { useRouter } from "next/router";
import Link from "next/link";

import { useRecoilState } from "recoil";

import BurguerButton from './burgerButton'
import { CancelButton } from "./../../ui/buttons";
import { TinyText } from "./../../ui/text";


function Navbar() {
  const [userMail, setUserMail] = useRecoilState(userMailState);
  const token = useCheckToken();
  const router = useRouter();

  const [clicked, setClicked] = useState(false)
  const handleClick = () => setClicked(!clicked)

  function handleRedirectToLogin() {
    router.push("/login");
  }
  function handleLogOut() {
    setUserMail("");
    removeToken();
  }

  return (
    <>
      <BurguerButton clicked={clicked} handleClick={handleClick} />

      <nav className="w-full h-screen flex justify-center items-center overflow-hidden transition-all duration-500">
        <div
          className={`
            absolute top-[-700px] left-[-2000px] right-0 
            mx-auto text-center transition-all duration-500
            ${clicked ? 'top-[220px] left-0 w-full bg-[#313638] block' : ''}
            lg:static lg:flex lg:items-center lg:justify-center
          `}
        >
          <Link
            href="/login"
            onClick={handleClick}
            className="text-white text-2xl block lg:text-[1.5rem] lg:p-3 no-underline"
          >
            Ingresar
          </Link>
          <Link
            href="/profile"
            onClick={handleClick}
            className="text-white text-2xl block lg:text-[1.5rem] lg:p-3 no-underline"
          >
            Mi perfil
          </Link>
          <Link
            href="/"
            onClick={handleClick}
            className="text-white text-2xl block lg:text-[1.5rem] lg:p-3 no-underline"
          >
            Buscar
          </Link>

          {userMail && token && (
            <div className="mx-auto max-w-[125px] relative flex flex-col justify-center items-center pb-5 text-white lg:text-black">
              <TinyText>{userMail}</TinyText>
              <CancelButton onClick={handleLogOut}>Cerrar sesión</CancelButton>
            </div>

          )}
        </div>
      </nav>
    </>
  )
}

export default Navbar
