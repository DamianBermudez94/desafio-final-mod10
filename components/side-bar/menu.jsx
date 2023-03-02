import React, { useState } from 'react'
import { useCheckToken, userMailState } from "hooks/hooks";
import { removeToken } from "lib/api/api";
import styled from 'styled-components'
import { useRouter } from "next/router";

import { useRecoilState } from "recoil";
import BurguerButton from './burgerButton'
import Link from "next/link";
import { CancelButton } from "ui/buttons";
import { TinyText } from "ui/text";
import {
  SidebarLink,
  UserSessionWrapper,
} from "./styled";


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
        <NavContainer className='nav-container'>
          <div className={`links ${clicked ? 'active' : ''}`}>
          <Link style={{textDecoration:'none'}} onClick={handleClick} href="/login">
                        
                          Ingresar
                        
                      </Link>
                      <Link style={{textDecoration:'none'}} onClick={handleClick} href="/profile">
                   
                          Mi perfil
                       
                      </Link>
                      <Link style={{textDecoration:'none'}}  onClick={handleClick} href="/">
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
          <div className='burguer'>
            <BurguerButton clicked={clicked} handleClick={handleClick} />
          </div>
          <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
        </NavContainer>
      </>
    )
  }

export default Navbar

const NavContainer = styled.nav`
  padding: .4rem;
  display: flex;
  flex-direction: row-reverse;
  
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
      width: 100%;
      position: inherit;
      margin: auto;
      padding: 10px;
      display: flex;
      
      a{
        font-size: 1.5rem;
        color: #fff;
      
        margin: 0 auto;
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
    top: 150px;
    left: 0;
    right: 0;
    text-align: center;
 
    a{
      width: 100%;
      font-size: 1.5rem;
      margin-top: 1rem;
      color: white;
      
    }
    @media(min-width: 960px){
      width: 50%;
      top: 70px;
      display: flex;
      justify-content: space-between;
    }
    a{
      width: 100%;
      font-size: 1.5rem;
      margin-top: 1rem;
      color: white;
      
    }


  }
  .burguer{
    @media(min-width: 960px){
      display: none;
      
    }
  }
`

const BgDiv = styled.div`
  background-color: #222;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 100% 0;
    top: 96px;
    left: 0;
    width: 100%;
    height: 100vh;
  }
  @media(min-width: 960px){
    position: initial;
    background-color: inherit;
    
    
    &.active{
      border-radius: 0 0 100% 0;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
     
    }
     
    }
`

