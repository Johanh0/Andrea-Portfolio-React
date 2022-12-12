import React from 'react'

const Footer = () => {
  return (
    <section id='footer'>
        <div className='footer-nav'>
            <ul>
            <li><a href="#header">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#resume">Resume</a></li>
            </ul>
        </div>

        <div className='footer-media'>
            <a href="">
                <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="">
                <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="">
                <i class="fa-brands fa-github"></i>
            </a>
            <a href="">
                <i class="fa-brands fa-linkedin"></i>
            </a>
        </div>
    </section>
  )
}

export default Footer