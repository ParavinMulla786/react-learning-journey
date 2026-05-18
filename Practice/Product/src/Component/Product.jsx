import React from 'react'
import Productinfo 

const Product = (title,Price,Discount) => {
  return (
    <>
    <h1>{title}</h1>
    <h3>{Price}</h3>
    <h4>{Discount}</h4>
    <Button>Buy Now</Button>
    </>
  )
}

export default Product