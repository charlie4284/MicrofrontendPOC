import React, { useCallback, useState } from 'react';

import styles from "./signin.module.css";

import { Auth } from "aws-amplify";
import { CHALLENGE_MFA } from './signin.constants';

const SignIn = () => {
    const [signInValues, setSignInValues] = useState({
        username: "",
        password: ""
    });
    const [mfaToken, setMfaToken] = useState("");
    const [cognitoUser, setCognitoUser] = useState<any>(null);

    const onSignIn: React.FormEventHandler<any> = useCallback(async (e: React.FormEvent<any>) => {
        e.preventDefault();
        try {
            const currentUser = await Auth.signIn(signInValues);
            if (currentUser.challengeName === CHALLENGE_MFA) {
                setCognitoUser(currentUser);
                return;
            }
            return onSignInComplete(currentUser);
        } catch (err) {
            console.error(err)
        }
    }, [signInValues])

    const onVerifyMFA = useCallback(async () => {
        try {
            const verifiedUser = await Auth.confirmSignIn(cognitoUser, mfaToken, CHALLENGE_MFA);
            onSignInComplete(verifiedUser);
        } catch (err) {
            console.error(err)
        }
    }, [cognitoUser, mfaToken])

    function onSignInComplete(user: any) {
        console.log("Sign in complete: ", user)
    }

    return <form className={styles["form-container"]} onSubmit={onSignIn}>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" value={signInValues.username} onChange={e => setSignInValues(v => ({ ...v, username: e.target.value }))} />
        <label htmlFor='password'>Password</label>
        <input id="password" type="password" value={signInValues.password} onChange={e => setSignInValues(v => ({ ...v, password: e.target.value }))} />
        <button onClick={onSignIn}>Sign In</button>
        <label htmlFor="mfa" />
        <input id={styles["mfa"]} type="text" value={mfaToken} onChange={e => setMfaToken(e.target.value)} />
        <button onClick={onVerifyMFA}>Verify MFA</button>
    </form>
}

export default SignIn;