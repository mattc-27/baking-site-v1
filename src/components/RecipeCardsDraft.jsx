import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import cinnRols from '../assets/cinnRols.jpg';
import bbMuffin from '../assets/bbMuffin.jpg';

export function RecipeCardsDraft() {

    return (

        <ParallaxBanner
            className='recipe-card'
        >
            <Parallax className='recipe-card-text'
                translateX={[
                    '-150%',
                    '100%'
                ]} >
                <Parallax
                    className='recipe-card-title'
                >
                    <h1>Cinnamon Rolls</h1>
                </Parallax>
                <Parallax
                    className='recipe-card-title'
                >
                    <Link className='link-style' to={`/recipe/${0}`}>View recipe</Link>
                </Parallax>
            </Parallax>
            <Parallax
                translateY={[
                    '-50%',
                    '50%'
                ]}
                className='recipe-card-img'>
                <img src={cinnRols} />
            </Parallax>
        </ParallaxBanner>

    );
}