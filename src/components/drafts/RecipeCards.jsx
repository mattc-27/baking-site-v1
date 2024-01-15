import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import cinnRols from '../assets/cinnRols.jpg';
import pumpkinPi from '../assets/pumpkinPi.jpg';
import bbMuffin from '../assets/bbMuffin.jpg';

export function RecipeCards() {

    return (
        <>
            <ParallaxBanner
                className='recipe-card'
            >
                <Parallax
                    className='recipe-card-details'
                >
                    <Parallax
                        className='recipe-card-title'
                    >
                        <h1>Cinnamon Rolls</h1>
                    </Parallax>
                    <img src={cinnRols} />
                    <Parallax
                        className='recipe-card-link'
                    >
                        <Parallax
                            className='recipe-card-title'
                        >
                            <Link className='link-style' to={`/recipe/${0}`}>View recipe</Link>
                        </Parallax>
                    </Parallax>
                </Parallax>


            </ParallaxBanner>
           {/* */}
            <ParallaxBanner
                className='recipe-card'
            >
                <Parallax
                    className='recipe-card-details'
                >
                    <Parallax
                        className='recipe-card-title'
                    >
                        <h1>Cinnamon Rolls</h1>
                    </Parallax>
                    <img src={bbMuffin} />
                    <Parallax
                        className='recipe-card-link'
                    >
                        <Parallax
                            className='recipe-card-title'
                        >
                            <Link className='link-style' to={`/recipe/${0}`}>View recipe</Link>
                        </Parallax>
                    </Parallax>
                </Parallax>

            </ParallaxBanner>
            {/* */}
            <ParallaxBanner
                className='recipe-card'
            >

                <Parallax
                    className='recipe-card-details'
                >
                    <Parallax
                        className='recipe-card-title'
                    >
                        <h1>Cinnamon Rolls</h1>
                    </Parallax>
                    <img src={pumpkinPi} />
                    <Parallax
                        className='recipe-card-link'
                    >
                        <Parallax
                            className='recipe-card-title'
                        >
                            <Link className='link-style' to={`/recipe/${0}`}>View recipe</Link>
                        </Parallax>
                    </Parallax>
                </Parallax>

            </ParallaxBanner>
        </>
    );

}