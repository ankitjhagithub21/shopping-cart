import React, { useState } from 'react'
import categories from '../api/categories'

const FilterButtons = ({ handleClick }) => {
  const [activeButton, setActiveButton] = useState('All'); 

  const handleButtonClick = (text) => {
    setActiveButton(text); // Set the clicked button as active
    handleClick(text); // Call the parent's click handler
  };

  return (
    <div className='flex gap-5 mb-20 overflow-scroll'>
      {categories.map((btn) => (
        <button
          className={`border py-2 px-5 hover:bg-slate-950 hover:text-white ${
            activeButton === btn.text ? 'bg-slate-950 text-white' : ''
          }`}
          key={btn.id}
          onClick={() => handleButtonClick(btn.text)}
        >
          {btn.text}
        </button>
      ))}
    </div>
  )
}

export default FilterButtons
