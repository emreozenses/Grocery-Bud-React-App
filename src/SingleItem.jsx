import React, { useState } from 'react'


const SingleItem = ({item,removeItem}) => {
   const {name,completed,id} = item;

const [isChecked,setIsChecked] = useState(completed);

const handleIsChecked = (e)=>{
    setIsChecked(e.target.checked);
}

  return (
    <div className="single-item">
      <input
        name="item"
        id="item"
        type="checkbox"
        checked={isChecked}
        onChange={handleIsChecked}
      />
      <p style={isChecked ? { textDecorationLine: 'line-through' } : {}}>
        {name}
      </p>
      <button className='remove-btn' onClick={()=>removeItem(id)}>Delete</button>
    </div>
  )
}

export default SingleItem