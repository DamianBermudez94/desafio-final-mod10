import { useEffect, useState } from "react";
import { getSettedToken } from "src/lib/api/api";

export function useCheckToken() {
  const [token, setToken] = useState("" as any);
  useEffect(() => {
    async function checkToken() {
      const token = await getSettedToken();
      setToken(token);
    }
    checkToken();
  }, []);
  return token;
}
