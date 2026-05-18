import React from 'react'
import useAPI from '../CustomHook/useAPI'
import 'bootstrap/dist/css/bootstrap.min.css'

const Products = () => {
    const { dataFromAPI, error, loading } = useAPI("https://fakestoreapi.com/products")

    if (loading) return <h3>Loading...</h3>
    if (error) return <h3>Error loading products</h3>

    return (
        <>
            <div>Products</div>
            <h2 className='text-center my-4'>Products</h2>

            <div className="container">
                <div className="row g-4">

                    {dataFromAPI?.map((p) => (

                        <div className="col-md-3" key={p.id}>

                            <div className="card h-100">

                                <img
                                    src={p.image}
                                    className="card-img-top p-3"
                                    alt={p.title}
                                    height="250px"
                                />

                                <div className="card-body">

                                    <h5 className="card-title">
                                        {p.title.slice(0, 30)}...
                                    </h5>

                                    <p className="card-text">
                                        ₹ {p.price}
                                    </p>

                                    <button className="btn btn-primary">
                                        Buy Now
                                    </button>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>
            </div>
        
            
        </>
    )
}

export default Products