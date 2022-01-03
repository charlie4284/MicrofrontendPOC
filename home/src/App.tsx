import React from 'react';
import ReactDOM from 'react-dom';

import { RecoilRoot } from 'recoil';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Amplify from 'aws-amplify';

import { AMPLIFY_CONFIG } from './services/amplify/amplify';

import './index.css';
import AuthWrapper from './components/AuthWrapper';
import ErrorBoundary from './components/ErrorBoundary';

const Register = React.lazy(() => import('auth/Register'));

Amplify.configure(AMPLIFY_CONFIG);

const App = () => (
	<RecoilRoot>
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={
						<AuthWrapper>
							<div>Hello world!</div>
						</AuthWrapper>
					}
				/>
				<Route
					path='/register'
					element={
						<ErrorBoundary>
							<React.Suspense fallback={'LOADING...'}>
								<Register />
							</React.Suspense>
						</ErrorBoundary>
					}
				/>
			</Routes>
		</BrowserRouter>
	</RecoilRoot>
);

ReactDOM.render(<App />, document.getElementById('app'));
