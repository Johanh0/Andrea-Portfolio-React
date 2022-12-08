import React from 'react'

const Contact = () => {
  return (
    <section id='contact'>
        <div className='form-container'>
                <h2>Get in <span>Touch</span></h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit nisi quod minima maxime ullam asperiores.</p>

                <form action="">
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder='Alexander Milo' id='name' />

                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder='example@gmail.com' id='email'/>

                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" placeholder='Phone number' id='phone'/>

                    <label htmlFor="about">About</label>
                    <textarea name="" id="about" cols="30" rows="10" placeholder='Write a shot message'></textarea>
                </form>
        </div>
    </section>
  )
}

export default Contact