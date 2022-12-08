import andreaImg from '../assets/img/andrea-picture.png'

const EmailMe = () => {
  return (
    <section id='email-me'>
        <div className='email-me-container'>
            <div>
                <p>CONTACT ME</p>
                <h3>Got a Project? Let's Talk!</h3>
                <a href=''>
                <i class="fa-solid fa-envelope"></i>
                AndreaExample@gmail.com
                </a>
            </div>
            <img src={andreaImg} alt="" />
        </div>
    </section>
  )
}

export default EmailMe