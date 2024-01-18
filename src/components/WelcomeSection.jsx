import React, { useState, useEffect } from 'react';
import { Parallax, ParallaxBanner } from "react-scroll-parallax";


export function WelcomeSection() {

    return (

        <ParallaxBanner
            className='welcome-banner'
        >
            <Parallax className='welcome-content'
             translateY={[
                '-50%',
                '50%'
            ]}
              /*   translateY={[
                    '100%',
                    '-50%'
                ]}*/>

                <p>Welcome! This site is both a collection of my favorite recipes, and an ongoing web development project.</p>
                <p>Thank you for visiting. Enjoy!</p>
            </Parallax>
        </ParallaxBanner>

    );
}