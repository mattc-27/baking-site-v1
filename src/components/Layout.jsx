import React, { useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';
import { InstagramLogo } from './InstagramLogo';
import GithubLogo from '../assets/GithubLogo.png';

export function Layout() {

    const location = useLocation();

    useEffect(() => {
        ReactGA.send(location.pathname + location.search);
    }, [location]);

    return (

        <>
            <header >
                <div className='header-content'>
                    <Link className='header-link' to={'/'}>
                        <h1>GetBakedWithMe</h1>
                    </Link>
                </div>
            </header>
            {/** **/}
            <Outlet />
            {/** **/}
            <footer>
                <div className='footer-container'>
                    <div className='footer-content' >
                        <div className='footer-icons'>
                            <Link to={'https://github.com/mattc-27/baking-site-v1'} >
                                <img src={GithubLogo} style={{ height: '30px', width: '30px', margin: '0.5%' }} />
                            </Link>
                            <Link style={{ height: '30px', width: '30px', margin: '0.5%' }}
                                to={'https://instagram.com/getbakedwith.me'} >
                                <InstagramLogo />
                            </Link>
                        </div>
                        <div className='footer-text'>
                            <p>Website by Matt Copeland</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>

    );
}