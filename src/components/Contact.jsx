import { useState } from 'react'
import ErrorMessageContact from './ErrorMessageContact';

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [about, setAbout] = useState('');

  const alert = () => {
    alert(`hey`);
  }


  return (
    <section id='contact'>
        <div className='form-container'>
                <h2>Get in <span>Touch</span></h2>
                <p className='subtitle-p'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit nisi quod minima maxime ullam asperiores.</p>

                <form action="">
                    <label htmlFor="name">Name</label>
                    <input 
                    type="text" 
                    placeholder='Benito Martinez' 
                    id='name' 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    onMouseLeave={alert}/>

                    <label htmlFor="email">Email</label>
                    <input 
                    type="email" 
                    placeholder='example@gmail.com' 
                    id='email' 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>

                    <label htmlFor="phone">Phone Number</label>
                    <input 
                    type="tel" 
                    placeholder='Phone number' 
                    id='phone' 
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}/>

                    <label htmlFor="about">About</label>
                    <textarea 
                    id="about" 
                    cols="30" 
                    rows="10" 
                    placeholder='Write a shot message' 
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                    ></textarea>

                    <ErrorMessageContact/>

                    <input className='submit-btn' type="submit" />
                </form>
        </div>
    </section>
  )
}

export default Contact