import { LoginForm } from "src/components/login-form";
import { useCheckToken } from "src/hooks/hooks";
import { userMailState } from "src/recoil/atoms"
import { getAuth, getToken } from "src/lib/api/api";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { Spinner } from "src/ui/loader";
import { Title } from "src/ui/text";
import { LoginLoadersWrapper, LoginPageWrapper } from "./styled";

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
        <div style={{ "height": "500px" }}><p style={{ "display": "flex", "flexDirection": "row", "height": "100%", "textAlign": "center", "justifyItems": "center", "justifyContent": "center" }}>Ya tienes una sesión activa</p></div>
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