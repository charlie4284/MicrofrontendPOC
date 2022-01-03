import { Auth } from "aws-amplify";
import { useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";
import { isSignedInState } from "../states/auth";

export function useSignedIn(){
    const [isSignedIn, setIsSignedIn] = useRecoilState(isSignedInState);

    const setSignedInState = useCallback(async ()=>{
        try {
            const _ = await Auth.currentAuthenticatedUser();
            setIsSignedIn(true);
        } catch (err){
            setIsSignedIn(false);
        }
    },[Auth]);

    useEffect(()=>{
        setSignedInState();
    },[setSignedInState]);

    return isSignedIn
}