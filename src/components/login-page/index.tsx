import React, { useState } from "react";
import { useRouter } from "next/router";
import { LoginForm } from "src/components/login-form";
import { Spinner } from "src/ui/loader";
import { getAuth, getToken } from "src/lib/api/api";
import { userMailState } from "src/recoil/atoms";
import { useRecoilState } from "recoil";
import ParallaxSection from "src/components/parallaxSection/parallaxEfecto";

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
    <ParallaxSection
      image="/images/efecto-parallax.webp"
      objectPosition="bottom"
      overlayColor="black"
      overlayOpacity={0.6}
      strength={400}
      height="80vh"
    >
      <section className="flex flex-col items-center justify-center w-full max-w-md min-h-screen p-8 bg-gradient-to-br from-blue-500 to-purple-700">
        <div className="w-full max-w-md p-8 text-white border shadow-xl backdrop-blur-md bg-white/10 border-white/30 rounded-xl">
          <h2 className="text-amber-500">
            {showCodePage ? "Código" : "Ingresar"}
          </h2>
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
        </div>
      </section>
    </ParallaxSection>
  );
};
