import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import cinnRols from '../assets/cinnRols.jpg';
import bbMuffin from '../assets/bbMuffin.jpg';


export function RecipeCard({item}) {

    return (

        <div
     
            className='recipe-card'
        >
            <Parallax className='recipe-card-content'
                   translateY={[
                    '20%',
                    '0%'
                ]}
            >
                <Parallax
                    className='recipe-card-img'
                    speed={5}>
                    <img src={item.image} />
                </Parallax>
                <Parallax
                    className='recipe-card-top'
                    speed={15}
                >
                    <div
                        className='recipe-card-title'
                    >
                        <h1>{item.title}</h1>
                    </div>
                    <div
                        className='recipe-card-title'
                    >
                        <Link className='link-style' to={`/recipe/${item.id}`}>View recipe</Link>
                    </div>
                </Parallax>
            </Parallax>

        </div>

    );
}