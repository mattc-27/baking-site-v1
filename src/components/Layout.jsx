import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { InstagramLogo } from './InstagramLogo';

export function Layout() {

    return (
        <>
            <header>
                <div className='header-content'>
                    <Link className='header-link' to={'/'}>
                        <h1>Get Baked with Matt</h1>
                    </Link>
                </div>
            </header>
            <>
                <Outlet />
            </>
            <footer>
                <div className='footer-content'>
                    <p>Footer content</p>
                    <div className='col content-center items-center' style={{ backgroundColor: 'none' }}>
                        <div style={{ height: '50px', width: '50px' }}>
                            <InstagramLogo />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );

}