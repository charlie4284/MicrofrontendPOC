import React, { useEffect } from 'react';

import type { Home } from 'shared/Home';

const HomeComponent: Home = ({ name }: { name: string }) => {
	useEffect(() => {}, []);
	return <div>Welcome {name}!</div>;
};

export default HomeComponent;
