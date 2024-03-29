import React from 'react';
import MainNavigation from '../components/MainNavigation';
import { Outlet, useNavigation } from 'react-router-dom';

function RootLayout(props) {
    const navigation = useNavigation();
    return (
        <>
            <MainNavigation />
            {navigation.state === 'loading' && <p>Loading...</p>}
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default RootLayout;