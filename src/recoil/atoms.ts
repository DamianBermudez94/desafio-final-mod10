// src/recoil/atoms.ts
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

// Este patrón evita redefinición durante HMR
let _userMailState;
try {
    _userMailState = atom({
        key: "userMailState",
        default: "",
        effects_UNSTABLE: [persistAtom],
    });
} catch (e) {
    if (e.message.includes("Duplicate atom key")) {
        console.warn("userMailState ya estaba registrado.");
    } else {
        throw e;
    }
}

export const userMailState = _userMailState;


