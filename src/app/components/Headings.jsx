import React from 'react'

const Headings = (props) => {
  return (
    <div>
      <h2 className='text-center text-[var(--headings-color)] text-2xl'>{props.text}</h2>
    </div>
  )
}

export default Headings
