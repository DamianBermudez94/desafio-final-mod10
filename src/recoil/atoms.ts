import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

export const userMailState = atom<string>({
    key: "userMailState",
    default: "",
    effects_UNSTABLE: [persistAtom],
});