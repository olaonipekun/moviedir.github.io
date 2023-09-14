import React from 'react'

function Header(props) {
  const source = props.source
  return (
    <>
      <div className=''>
        <div className={span}>
          The Movie Database Everyone
          <img src={source} alt='' className='object-fill' />
        </div>
      </div>
    </>
  )
}

export default Header