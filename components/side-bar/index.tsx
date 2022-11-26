import { useCheckToken, userMailState } from "hooks/hooks";
import { removeToken } from "lib/api";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTransition } from "react-spring";
import { useRecoilState } from "recoil";
import { CancelButton } from "ui/buttons";
import { TinyText } from "ui/text";
import {
  CloseIcon,
  Icon,
  SideBarContainer,
  SidebarLink,
  SideBarMenu,
  SideBarMenuWrap,
  UserSessionWrapper,
} from "./styled";

type props = {
  show: boolean;
  toggle: () => any;
};

export const SideBar = (props: props) => {
  const [userMail, setUserMail] = useRecoilState(userMailState);
  const token = useCheckToken();
  const router = useRouter();

  const menuTranstition = useTransition(props.show, {
    from: { opacity: 0, top: `-100%` },
    enter: { opacity: 1, top: `0` },
    leave: { opacity: 0, top: `-100%` },
  });

  const menuLinksTransition = useTransition(props.show, {
    from: { opacity: 0, left: `-100%` },
    enter: { opacity: 1, left: `0` },
    leave: { opacity: 0, left: `-100%` },
    config: { duration: 650 },
  });
  const userSessionTransition = useTransition(props.show, {
    from: { opacity: 0, bottom: `-100%` },
    enter: { opacity: 1, bottom: `0` },
    leave: { opacity: 0, bottom: `-100%` },
    config: { duration: 650 },
  });
  function handleRedirectToLogin() {
    router.push("/login");
  }
  function handleLogOut() {
    setUserMail("");
    removeToken();
  }
  return (
    <>
      {menuTranstition((style, item) =>
        item ? (
          <SideBarContainer style={style} onClick={props.toggle}>
            <Icon onClick={props.toggle}>
              <CloseIcon />
            </Icon>
            <SideBarMenuWrap>
              {menuLinksTransition((style, item) =>
                item ? (
                  <>
                    <SideBarMenu style={style}>
                      <Link href="/login">
                        <SidebarLink onClick={props.toggle}>
                          Ingresar
                        </SidebarLink>
                      </Link>
                      <Link href="/profile">
                        <SidebarLink onClick={props.toggle}>
                          Mi perfil
                        </SidebarLink>
                      </Link>
                      <Link href="/">
                        <SidebarLink onClick={props.toggle}>Buscar</SidebarLink>
                      </Link>
                    </SideBarMenu>
                  </>
                ) : null
              )}
            </SideBarMenuWrap>
            {userSessionTransition((style, item) =>
              item ? (
                <>
                  {userMail && token ? (
                    <UserSessionWrapper style={style}>
                      <TinyText>{userMail}</TinyText>
                      <CancelButton onClick={handleLogOut}>
                        Cerrar sesion
                      </CancelButton>
                    </UserSessionWrapper>
                  ) : null}
                </>
              ) : null
            )}
          </SideBarContainer>
        ) : null
      )}
    </>
  );
};