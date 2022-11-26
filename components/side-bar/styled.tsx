import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { animated } from "react-spring";

export const SideBarContainer = styled(animated.aside)`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #313638;
  display: grid;
  grid-template-rows: 1fr 6fr 1fr;
  align-items: center;
  left: 0;
  @media screen and (min-width: 744px) {
    max-height: 300px;
    margin-top: 84px;
    grid-template-rows: 6fr 1fr;
    left: auto;
    right: 0;
    max-width: 300px;
  }
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;
export const Icon = styled.div`
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  display: flex;
  justify-content: end;
  padding: 0 30px;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
  @media screen and (min-width: 744px) {
    display: none;
  }
`;

export const SidebarLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2 ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #212325;
  }
  @media screen and (min-width: 744px) {
    font-size: 1.5rem;
  }
`;
export const SideBarMenuWrap = styled.div`
  color: #fff;
  height: 100%;
  display: grid;
  align-items: center;
`;

export const SideBarMenu = styled(animated.ul)`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 110px);
  text-align: center;
  padding: 0;
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(3, 90px);
  }
  @media screen and (min-width: 744px) {
    grid-template-rows: repeat(3, 60px);
  }
`;
export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const UserSessionWrapper = styled(animated.div)`
  margin: 0 auto;
  max-width: 125px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
  color: #fff;
`;