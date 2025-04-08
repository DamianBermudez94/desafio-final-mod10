// src/recoil/atoms.ts
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const userMailState = atom({
    key: "userMailState",
    default: "",
    effects_UNSTABLE: [persistAtom], // necesario si estás usando recoil-persist
});


