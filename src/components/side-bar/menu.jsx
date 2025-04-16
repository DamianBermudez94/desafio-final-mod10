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
    <div className='w-full flex justify-center'>
      <BurguerButton clicked={clicked} handleClick={handleClick} />
      {/* Menú hamburguesa (solo mobile) */}
      <nav
        className={`flex flex-col items-center gap-4 bg-amber-800 w-[500px] overflow-hidden transition-all duration-500 ease-in-out
          ${clicked ? "max-h-[400px] py-4" : "max-h-0"}
          md:max-h-full md:flex-row md:justify-center md:py-0 lg:gap-8 md:flex
        `}
      >
        <Link
          href="/login"
          onClick={() => setClicked(false)}
          className="text-xl hover:underline"
        >
          Ingresar
        </Link>
        <Link
          href="/profile"
          onClick={() => setClicked(false)}
          className="text-xl hover:underline"
        >
          Mi perfil
        </Link>
        <Link
          href="/"
          onClick={() => setClicked(false)}
          className="text-xl hover:underline"
        >
          Buscar
        </Link>

        {userMail && token && (
          <div className="text-center lg:text-left">
            <TinyText>{userMail}</TinyText>
            <CancelButton onClick={handleLogOut}>Cerrar sesión</CancelButton>
          </div>
        )}
      </nav>
    </div>
  )
}

export default Navbar
