import React, { useState } from "react";
import { useRouter } from "next/router";
import { LoginForm } from "src/components/login-form";
import { Spinner } from "src/ui/loader";
import { Title } from "src/ui/text";
import { getAuth, getToken } from "src/lib/api/api";
import { userMailState } from "src/recoil/atoms";
import { useRecoilState } from "recoil";

export const LoginPage: React.FC = () => {
  const router = useRouter();
  const [showCodePage, setShowCodePage] = useState(false);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [loggedUser, setLoggedUser] = useRecoilState(userMailState);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      if (!showCodePage) {
        const res = await getAuth({ email });
        if (res.error) throw new Error("Error en getAuth");
        setShowCodePage(true); // --> MOSTRAR INPUT DE CÓDIGO
      } else {
        const res = await getToken({ email, code: parseInt(code) });
        if (!res.token) throw new Error("Código incorrecto");
        setLoggedUser(email);
        router.push("/profile"); // --> REDIRIGE A PERFIL
      }
    } catch (err) {
      console.error("Error en login:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex justify-between w-full h-full p-10">
      <Title>{showCodePage ? "Código" : "Ingresar"}</Title>
      <LoginForm
        type={showCodePage ? "code" : "mail"}
        email={email}
        setEmail={setEmail}
        code={code}
        setCode={setCode}
        submit={handleSubmit}
      />
      <div>
        {loading && <Spinner />}
        {error && <span>Algo salió mal</span>}
      </div>
    </section>
  );
};
