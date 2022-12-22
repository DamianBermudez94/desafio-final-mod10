import { LoginForm } from "components/login-form";
import { useCheckToken, userMailState } from "hooks/hooks";
import { getAuth, getToken } from "lib/api/api";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { Spinner } from "ui/loader";
import { Title } from "ui/text";
import { LoginLoadersWrapper, LoginPageWrapper,LoginPageBody } from "./styled";

type Props = {
  children?: React.ReactNode;
};
export const LoginPage: React.FC<Props> = ({ children }) => {
  const router = useRouter();
  const token = useCheckToken();
  const [mail, setMail] = useState("");
  const [showCodePage, setShowCodePage] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loggedUser, setLoggedUser] = useRecoilState(userMailState);

  async function handleSubmit(data: any, e: any) {
    setError(false);
    setLoading(true);
    let res;
    if (data.email && !data.code) res = await getAuth({ email: data.email });
    if (data.email && data.code)
      res = await getToken({ email: mail, code: parseInt(data.code) });
    if (res.error) {
      setLoading(false);
      setError(true);
    } else if (res.token) {
      setLoggedUser(data.email);

      router.push("/profile");
    } else {
      setError(false);
      setMail(data.email);
      e.target.reset();
      setLoading(false);
      setShowCodePage(!showCodePage);
    }
  }
  return (
    <>
      {token ? (
        <LoginPageBody>Ya tienes una sesión activa</LoginPageBody>
      ) : (
        <LoginPageWrapper>
          {!showCodePage ? <Title>Ingresar</Title> : <Title>Código</Title>}
          <LoginForm submit={handleSubmit} type={mail ? "code" : "mail"} />
          <LoginLoadersWrapper>
            {loading && <Spinner></Spinner>}
            {error && <span>Algo salio mal</span>}
          </LoginLoadersWrapper>
        </LoginPageWrapper>
      )}
    </>
  );
};