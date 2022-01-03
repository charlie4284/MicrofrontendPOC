import { atom } from "recoil";

export const isSignedInState = atom({
    key: "global/isSignedIn",
    default: true
});