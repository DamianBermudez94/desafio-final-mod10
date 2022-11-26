import { getSettedToken } from "lib/api";
import { useEffect, useState } from "react";
import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const userMailState = atom({
  key: "userMailState",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

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