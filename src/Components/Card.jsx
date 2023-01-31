import React from 'react'

function card({img, titulo, descrip}){
  return (
    <div className='mx-auto'>
<div className='card' style={{ width: '18rem' }}>
    <img className='card-img-top' src={img} alt="" />
   <div className='card-body'>
        <h4 className='card-title'>{titulo}</h4>
        <p className='card-text'>{descrip}</p>
    </div>
</div>
</div>
  )
}

export default card
