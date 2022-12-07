import React from 'react'

const Nav = () => {
  return (
    <section className='nav'>

      <div className='nav-logo'>
        <img src="" alt="" />
        <p>Andrea <span>Smith.</span></p>
      </div>

      <div className='nav-li'>
        <ul>
          <li>Home</li>
          <li>Projects</li>
          <li>footer</li>
        </ul>
      </div>

      <div className='nav-btn'>
        <button>
          Contact Me
        </button>
      </div>
    </section>
  )
}

export default Nav