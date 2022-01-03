import React from 'react';
import { useSignedIn } from '../../hooks/auth';
import ErrorBoundary from '../ErrorBoundary';

const SignIn = React.lazy(() => import('auth/SignIn'));

const SignInFallback = (
	<ErrorBoundary>
		<React.Suspense fallback={<div>LOADING...</div>}>
			<SignIn />
		</React.Suspense>
	</ErrorBoundary>
);

const AuthWrapper: React.FunctionComponent<any> = props => {
	const signedIn = useSignedIn();
	if (!signedIn) return SignInFallback;
	return props.children;
};

export default AuthWrapper;
