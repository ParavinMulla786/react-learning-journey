import React from 'react'
import Item from './Item';

const Fooditem = ({items}) => {

  

  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <Item key={item} fooditem={item} />
        ))}
      </ul>
    </>
  )
}

export default Fooditem