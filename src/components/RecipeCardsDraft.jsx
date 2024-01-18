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
                translateY={[
                    '-50%',
                    '50%'
                ]}
            >
                <Parallax
                    className='recipe-card-title'
                >
                    <h1>Blueberry Muffins</h1>
                </Parallax>
                <Parallax
                    className='recipe-card-title'
                >
                    <Link className='link-style' to={`/recipe/${1}`}>View recipe</Link>
                </Parallax>
            </Parallax>
            <Parallax
                translateY={[
                    '-50%',
                    '50%'
                ]}
                className='recipe-card-img'>
                <img src={bbMuffin} />
            </Parallax>
        </ParallaxBanner>

    );
}