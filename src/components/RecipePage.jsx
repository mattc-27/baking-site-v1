import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { RecipeView } from './RecipeView';
import { recipeCollection } from '../data/recipes.js';

export function RecipePage() {

    const { id } = useParams();
    const [data, setData] = useState('');

    useEffect(() => {
        async function fetchData() {
            const recipeId = parseInt(id, 10);
            if (recipeId >= 0 && recipeId < recipeCollection.length) {
                setData(recipeCollection[recipeId]);
            } else {
                // Handle the case where the recipe with the given id is not found
                console.error(`Recipe with id ${id} not found`);
            }
        }
        fetchData()
    }, [])

    console.log(data)
    if (!data) {
        // You might want to render a loading state or an error message here
        return <p>Loading...</p>;
    }

    return (
        <div className='main-container'>
            <div className='recipe-details'>
                <RecipeView data={data} />
            </div>
        </div>
    );
}
