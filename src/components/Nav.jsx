import React from 'react'

const Nav = () => {
  return (
    <section id='nav'>

      <div className='nav-logo'>
        <p>Andrea <span>Smith</span>.</p>
      </div>

      <div className='nav-li'>
        <ul>
          <li><a href="#header">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#resume">Resume</a></li>
        </ul>
      </div>

      <div className='nav-btn'>
        <button>
          View GitHub
        </button>
      </div>
    </section>
  )
}

export default Nav