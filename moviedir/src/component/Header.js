import React from 'react'

function Header(props) {
  const source = props.source
  return (
    <>
      <div className='container-fluid'>
        <div className='grid grid-cols-1'>
          The Movie Database
          <img src={source} alt='' className='object-fill' />
        </div>
      </div>
    </>
  )
}

export default Header