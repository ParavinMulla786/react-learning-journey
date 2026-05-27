import React from 'react'

const CurrentTime = () => {
    let time = new Date();

  return (
    <p className='lead'> 
      This is CurrentTime: {time.toLocaleDateString()} - {time.toLocaleTimeString()}
    </p>
  )
}

export default CurrentTime
