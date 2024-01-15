import React, { useState, useEffect } from 'react';


export function RecipeView({ data }) {

    const [recipe, setRecipe] = useState('');

    useEffect(() => {
        setRecipe(data)
    }, [])

    useEffect(() => {
        console.log(recipe)
    }, [setRecipe])


    return (
        <div className='main-container'>
            <div className='recipe-content'>
                <div className='recipe-page-title'>
                    {recipe ?
                        <h1>{recipe.title}</h1>
                        : null}
                </div>
                {/* <div className='other-details'>
                   Created          <p></p>
                </div>*/}
                <div className='recipe-main'>
                    <div className='ingredients-section'>
                        {/* 
                    <div className='recipe-section-title'>
                        <h2>Ingredients</h2>
                    </div>*/}

                        {recipe ?
                            <>
                                <table className='recipe-table' >
                                    <tbody className='recipe-table-body'>
                                        <tr className='row-th' >
                                            <th className='row-lg'> Ingredients</th>
                                            <th className='row-sm'> Amount</th>
                                            <th className='row-md'> Unit</th>

                                        </tr>
                                        {recipe.ingredients.map((item) => (
                                            <tr className='row-td' key={item.id} /* style={{ fontFamily: 'Cabin', fontSize: '1em', margin: '2% 0' }}*/>
                                                <td className='row-lg'>{item.name}</td>
                                                <td className='row-sm'>{item.quantity}</td>
                                                <td className='row-td-md'>{item.unit}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </>
                            : null}
                    </div>
                    <div className='instructions-section'>
                        <div className='recipe-section-title'>
                            <h2>Instructions</h2>
                        </div>
                        {recipe ?
                            <div className='recipe-instructions  col content-center items-center w-100'>
                                <ol>
                                    {recipe.instructions.map((item) => (
                                        <li>{item}</li>
                                    ))}
                                </ol>
                                {/*  <p>{recipe.instructions}</p> */}
                            </div>
                            : null}
                    </div>
                    <div className='recipe-notes-section'>
                        <div className='recipe-section-title'>
                            <h2>Notes</h2>
                        </div>
                        {/* Attributes */}         <p></p>
                        {/* Tags, categories */}         <p></p>
                    </div>
                </div>

            </div>
        </div>
    );
}