import { useState } from 'react'
import ErrorMessageContact from './ErrorMessageContact';
import ErrorEmail from './ErrorEmail';

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [about, setAbout] = useState('');
  const [errorMessage, setErrorMessage] = useState(false);

  const [errorEmail, setErrorEmail] = useState(null);

  const checkInput = (e) => {
    if(e.target.value === '') {
      setErrorMessage(true)
      return;
    }
    setErrorMessage(false);
  }

  const isValidEmail = email => {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChangeForEmail = e => {
    if(!isValidEmail(e.target.value)) {
      setErrorEmail(true)
    } else {
      setErrorEmail(null)
    }

    setEmail(e.target.value)
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
                    onMouseLeave={checkInput}/>

                    <label htmlFor="email">Email</label>
                    <input 
                    type="email" 
                    placeholder='example@gmail.com' 
                    id='email' 
                    value={email}
                    onChange={(e) => handleChangeForEmail(e)}
                    onMouseLeave={checkInput}/>

                    <label htmlFor="phone">Phone Number</label>
                    <input 
                    type="tel" 
                    placeholder='Phone number' 
                    id='phone' 
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    onMouseLeave={checkInput}/>

                    <label htmlFor="about">About</label>
                    <textarea 
                    id="about" 
                    cols="30" 
                    rows="10" 
                    placeholder='Write a shot message' 
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                    onMouseLeave={checkInput}
                    ></textarea>

                    {errorMessage && <ErrorMessageContact/>}
                    {errorEmail && <ErrorEmail/>}

                    <input className='submit-btn' type="submit" />
                </form>
        </div>
    </section>
  )
}

export default Contact