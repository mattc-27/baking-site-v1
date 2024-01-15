import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Parallax, ParallaxBanner } from "react-scroll-parallax";

import { WelcomeSection } from './components/WelcomeSection';
import { RecipeCardsDraft } from './components/RecipeCardsDraft';
import { RecipeCards } from './components/RecipeCards';
import { recipeCollection } from './data/recipes';

export function Home() {

  const [defaultPosts, setDefaultPosts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      setDefaultPosts(recipeCollection)
    }
    fetchData()

  }, [])

  useEffect(() => {
    console.log(recipeCollection[1].title)
  }, [setDefaultPosts, defaultPosts])

  console.log(defaultPosts)



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
