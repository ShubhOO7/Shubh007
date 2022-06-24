import React from 'react'


function button({resume}) {
  return (
      <>
  <button style = {{cursor: "pointer"}} variant="outline-danger"className="nav-btn"
  >{resume}</button>{' '}
</>
    
  )
}


export default button