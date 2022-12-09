import andreaImg from '../assets/img/andrea-picture.png'
import resume from '../assets/pdf/resume.pdf'

const Resume = () => {
  return (
    <section id='resume'>
        <div className='resume-container'>
            <div>
                <p>RESUME</p>
                <h3>Check My Resume!</h3>
                <a 
                  href={resume}
                  target="_blank"
                  rel="noopener noreferrer" 
                  download="resume.pdf"
                >
                <i class="fa-solid fa-file"></i>
                Click To Donwload It
                </a>
            </div>
            <img src={andreaImg} alt="" />
        </div>
    </section>
  )
}

export default Resume