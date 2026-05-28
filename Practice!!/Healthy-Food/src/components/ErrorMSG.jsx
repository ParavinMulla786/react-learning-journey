import React from 'react'

const ErrorMSG = ({items}) => {

    
  return (
    <>
    {items.length === 0 ? <h3>I am Still Hungry</h3> : null}

      {items.length === 0 && <h3>FoodList is Empty</h3>}

      </>

  )
}

export default ErrorMSG