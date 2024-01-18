import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Parallax, ParallaxBanner } from "react-scroll-parallax";

import { WelcomeSection } from './components/WelcomeSection';
import { RecipeCard } from './components/RecipeCard';
import { recipeCollection } from './data/recipes';


export function Home() {

  const [recipes, setRecipes] = useState('');

  useEffect(() => {
    setRecipes(recipeCollection)
  }, [])


  useEffect(() => {
    console.log(recipes)
  }, [recipes, setRecipes])

  return (
    <>
      <div className='welcome-section'>
        <WelcomeSection />
      </div>
      {recipes ?
        <>
          {recipes.map((item) => (
            <div className='recipe-card-section' key={item.id}>
              <RecipeCard item={item} />
            </div>
          ))}
        </>
        : null

      }
    </>
  );
}
