// src/hooks/useLogin.ts
import { useState } from "react";
import { getAuth, getToken } from "src/lib/api/api";
import { useRecoilState } from "recoil";
import { userMailState } from "src/recoil/atoms";
import { useRouter } from "next/router";

export function useLogin() {
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [showCodePage, setShowCodePage] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [loggedUser, setLoggedUser] = useRecoilState(userMailState);
    const router = useRouter();

    // useLogin.ts
    async function handleSubmit(data: { email?: string; code?: string }) {
        setLoading(true);
        setError("");

        try {
            if (!showCodePage) {
                const res = await getAuth({ email: data.email! });
                if (res.error) throw new Error(res.error);
                setEmail(data.email!); // guardamos el mail
                setShowCodePage(true);
            } else {
                const res = await getToken({
                    email,
                    code: parseInt(data.code!),
                });
                if (!res?.token) throw new Error("Código incorrecto");
                setLoggedUser(email);
                router.push("/profile");
            }
        } catch (err: any) {
            setError(err.message || "Algo salió mal");
        } finally {
            setLoading(false);
        }
    }


    return {
        email, setEmail,
        code, setCode,
        showCodePage,
        loading,
        error,
        handleSubmit
    };
}

