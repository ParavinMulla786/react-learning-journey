import React from 'react'

const Item = ({fooditem}) => {
  return (
    <li className="list-group-item kg-items">
      <span className='kg-span'>{fooditem}</span>
    </li>
  )
}

export default Item