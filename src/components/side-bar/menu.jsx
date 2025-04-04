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
import {
  SidebarLink,
  UserSessionWrapper,
} from "./styled";
import styled from 'styled-components'


function Navbar() {
  const [userMail, setUserMail] = useRecoilState(userMailState);
  const token = useCheckToken();
  const router = useRouter();

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
  }
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

      <NavContainer className='nav-container'>
        <div className={`links ${clicked ? 'active' : ''}`}>
          <Link style={{ textDecoration: 'none' }} onClick={handleClick} href="/login">

            Ingresar

          </Link>
          <Link style={{ textDecoration: 'none' }} onClick={handleClick} href="/profile">

            Mi perfil

          </Link>
          <Link style={{ textDecoration: 'none' }} onClick={handleClick} href="/">
            Buscar
          </Link>
          <>
            {userMail && token ? (
              <UserSessionWrapper >
                <TinyText>{userMail}</TinyText>
                <CancelButton onClick={handleLogOut}>
                  Cerrar sesion
                </CancelButton>
              </UserSessionWrapper>
            ) : null}
          </>
        </div>
      </NavContainer>
    </>
  )
}

export default Navbar

const NavContainer = styled.nav`
  width:100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height:100vh;
  overflow: hidden;
  transition: all .5s ease;
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
      color: white;
      font-size: 2rem;
      display: block;
      
    }
    @media(min-width: 960px){
      position: inherit;
      display: flex;
      align-items: center;
      justify-content: center;
      
    a{
      font-size: 1.5rem;
      padding: 12px;
    }
    
     
    }

  }
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 220px;
    left: 0;
    right: 0;
    text-align: center;
    opacity: 1;
    background-color:#313638;
    
    a{
      width: 100%;
      font-size: 1.5rem;
      margin-top: 1rem;
      color: white;
      
    }
  }
`