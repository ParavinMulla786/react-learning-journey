import React, { useEffect, useState } from 'react'
import useAPI from '../CustomHook/useAPI'

const Recipes = () => {

    const [recipes, setRecipes] = useState([])

    const { dataFromAPI, loading, error } =
        useAPI("https://dummyjson.com/recipes")

    useEffect(() => {

        setRecipes(dataFromAPI?.recipes || [])

    }, [dataFromAPI])

    if (loading) return <h1>Loading...</h1>

    if (error) return <h1>Error...</h1>

    return (
        <div className="container my-4">

            <div className="row">

                {recipes.map((r) => (

                    <div className="col-12 mb-4" key={r.id}>

                        <div className="card shadow-lg p-3">

                            <div className="row align-items-center">

                                {/* LEFT IMAGE */}

                                <div className="col-md-3">

                                    <img
                                        src={r.image}
                                        alt={r.name}
                                        className="img-fluid rounded"
                                    />

                                </div>

                                {/* RIGHT CONTENT */}

                                <div className="col-md-9">

                                    <h2>{r.name}</h2>

                                    <p>
                                        <b>Cuisine:</b> {r.cuisine}
                                    </p>

                                    <p>
                                        <b>Difficulty:</b> {r.difficulty}
                                    </p>

                                    <p>
                                        <b>Rating:</b> ⭐ {r.rating}
                                    </p>

                                    <p>
                                        <b>Calories:</b> {r.caloriesPerServing}
                                    </p>

                                    <button className="btn btn-primary">
                                        View Recipe
                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>
    )
}

export default Recipes