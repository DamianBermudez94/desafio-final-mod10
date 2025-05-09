import React, { useState } from 'react'
import Link from "next/link";
import { useRecoilState } from "recoil";

import { useCheckToken } from "src/hooks/hooks";
import { userMailState } from "src/recoil/atoms";
import { removeToken } from "src/lib/api/api";
import { useRouter } from "next/router";

import { CartIcon } from "src/components/cartIcon/cartIcon";
import { User } from 'lucide-react';
import BurguerButton from './burgerButton'

function Navbar() {
  const [userMail, setUserMail] = useRecoilState(userMailState);
  const token = useCheckToken();
  const router = useRouter();

  const [clicked, setClicked] = useState(false)
  const handleClick = () => setClicked(!clicked)

  function handleLogOut() {
    setUserMail("");
    removeToken();
    router.push("/login");
  }

  return (
    <div className="fixed top-0 z-50 flex items-center justify-between w-full px-4 py-3 bg-white shadow-md">

      {/* Logo */}
      <Link href="/" className="text-2xl font-bold text-gray-800">
        MiTienda
      </Link>

      {/* Botón Hamburguesa (Mobile) */}
      <div className="md:hidden">
        <BurguerButton clicked={clicked} handleClick={handleClick} />
      </div>

      {/* Menú de Navegación */}
      <nav
        className={`fixed top-16 right-0 flex flex-col items-center gap-6 bg-neutral-50 transition-all duration-300 ease-in-out
        ${clicked ? "w-full h-[calc(100vh-4rem)] p-6" : "w-0 h-[calc(100vh-4rem)] overflow-hidden"}
        md:static md:flex md:flex-row md:w-auto md:h-auto md:bg-transparent md:p-0
      `}
      >



        {/* Links principales */}
        <Link
          href="/"
          onClick={() => setClicked(false)}
          className="text-lg text-gray-600 transition hover:text-black"
        >
          Inicio
        </Link>


        <Link
          href="/product"
          onClick={() => setClicked(false)}
          className="text-lg text-gray-600 transition hover:text-black"
        >
          Productos
        </Link>

        {/* Solo mostrar "Ingresar" si NO hay usuario logueado */}
        {!(userMail && token) && (
          <Link
            href="/login"
            onClick={() => setClicked(false)}
            className="text-lg text-gray-600 transition hover:text-black"
          >
            Ingresar
          </Link>
        )}


        <Link
          href="/profile"
          onClick={() => setClicked(false)}
          className="text-lg text-gray-600 transition hover:text-black"
        >
          Mi perfil
        </Link>

        {/* Usuario logueado */}
        {userMail && token && (

          <div className="flex flex-col items-center md:items-start">
            <User className="w-5 h-5 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">{userMail}</span>
            <button
              onClick={handleLogOut}
              className="px-3 py-1 text-xs text-white transition bg-red-500 rounded-full hover:bg-red-600"
            >
              Cerrar sesión
            </button>
          </div>
        )}
        <CartIcon />
      </nav>
    </div>
  )
}

export default Navbar
