import './header.css'

import React from 'react'

function header() {
  return (
    <>
 
 <div class="topnav">
  <a class="active" href="#home">Home</a>
  <a href="#about">About</a>
  <a href="#contact">Contact</a>
  <input type="text" placeholder="Search.."  />
</div>

    </>
  )
}

export default header
