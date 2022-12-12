import React from 'react'
import andreaPhoto from '../assets/img/andrea-photo.jpg'

const About = () => {
  return (
    <section id='about'>
        <div className='about-left'>
            <img src={andreaPhoto} alt=""/>
            <div className='color-circle-1'></div>
            <div className='color-circle-1'></div>
        </div>

        <div className='about-right'>
            <h2>About Me</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius beatae fugiat soluta, eum eaque magnam?</p>

            <div>
                <button className='btn-client'>
                    <span>50+</span> <br />
                    Total Client
                </button>
                <button className='btn-projects'>
                    <span>100+</span> <br />
                    Projects
                </button>
            </div>
        </div>
    </section>
  )
}

export default About