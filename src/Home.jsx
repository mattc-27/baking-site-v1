import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Parallax, ParallaxBanner } from "react-scroll-parallax";

import { WelcomeSection } from './components/WelcomeSection';
import { RecipeCardsDraft } from './components/RecipeCardsDraft';
import { RecipeCards } from './components/drafts/RecipeCards';
import { recipeCollection } from './data/recipes';

export function Home() {

  return (
    <>
      <div className='welcome-section'>
        <WelcomeSection />
      </div>
      <div className='recipe-card-section'>
        <RecipeCardsDraft />
      </div>
    </>
  );
}
