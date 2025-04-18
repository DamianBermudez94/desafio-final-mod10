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
        className={`fixed top-36 right-0 flex flex-col gap-5 items-center transition-all duration-300 ease-in-out
        ${clicked ? "w-full h-full p-6 bg-neutral-50" : "w-0 h-full overflow-hidden"}
        md:static md:w-auto md:h-auto md:flex-row
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
