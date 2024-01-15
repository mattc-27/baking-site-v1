import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { InstagramLogo } from './InstagramLogo';
import GithubLogo from '../assets/GithubLogo.png';

export function Layout() {

    return (

        <>
            <header>
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
                            <img src={GithubLogo} style={{ height: '30px', width: '30px', margin: '0.5%' }} />
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