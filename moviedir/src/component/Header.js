import React from 'react'

function Header(props) {
  const source = props.source
  return (
    <>
      <div className=''>
        <div className=''>
          The Movie Database
          <img src={source} alt='' className='object-fill' />
        </div>
      </div>
    </>
  )
}

export default Header