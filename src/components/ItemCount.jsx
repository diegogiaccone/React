import React, { useState } from 'react'

const ItemCount = ({stock}) => {   
  const [count, setCount] = useState(1)
  
 


  const decrease = () => {
    setCount(count -1)
  }

  const increase = () => {
    setCount(count +1)
  }

  return (
    <div className='counter'>
      <button disabled={count <= 0} onClick={decrease}><strong>-</strong></button>
      <strong>{count}</strong>
      <button disabled={count >= stock} onClick={increase}><strong>+</strong></button>
    </div>
  )
}

export default ItemCount