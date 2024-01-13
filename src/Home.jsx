import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { recipeCollection } from './data/recipes';

export function Home() {

  const [defaultPosts, setDefaultPosts] = useState([]);

  const [startColumn, setStartColumn] = useState(0);


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

  const handlePrevClick = () => {
    if (startColumn > 0) {
      setStartColumn(startColumn - 1);
    } else {
      // If already at the beginning, wrap around to the end
      setStartColumn(defaultPosts.length - 1);
    }
  };
  const handleNextClick = () => {
    if (startColumn < defaultPosts.length - 1) {
      setStartColumn(startColumn + 1);
    } else {
      // If already at the end, wrap around to the beginning
      setStartColumn(0);
    }
  }



  return (
    <div className='main-container'>
      {/* 
      <div className='search-area'>
        <Link className='nav-link' to={'/recipe'}>Cinnamon Rolls</Link>
      </div>
      */}
      <div className='home-content'>
        <div className='col w-100 content-center items-center h-100'>
          <div className='welcome-content'>
            <p>Welcome! This site is both a collection of my favorite recipes, and an ongoing web development project.</p>
            <br />
            <p>Thanks for visiting. I hope you enjoy!</p>
          </div>
        </div>
        <div className='recipe-card-section'>
          {defaultPosts ?
            <>
              {defaultPosts.slice(startColumn, startColumn + 1).map(item => (
                <>
                  <div key={item.id} className='recipe-card'>
                    <div className='recipe-card-title'>
                      <h1>{item.title}</h1>
                      <p className='view-link'><Link className='link-style' to={`/recipe/${item.id}`}>View</Link></p>
                    </div>
                    <div className='recipe-card-details'>
                      {/* <p>{item.description}</p> */}
                      <img src='https://placehold.co/500x350' />
                    </div>
                    {/* 
                    <div className='recipe-card-details'>
                      <p><Link to={'/recipe'}>View</Link></p>
                    </div>
                    */}
                  </div>
                  <div className='row content-center items-center w-100 h-50'>
                    <button id='prevBtn' onClick={handlePrevClick}>Previous</button>
                    <button id='nextBtn' onClick={handleNextClick}>Next</button>
                  </div>
                </>
              ))}
            </>
            : null
          }
        </div>
      </div>
    </div>
  );
}
