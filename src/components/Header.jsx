import heroImg from '../assets/img/heroImg.png'

const Header = () => {
  return (
    <section id='header'>
        <div className='header-left'>
            <h1>Hi! I Am <br />
            <span>Andrea Smith</span>.
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio enim facilis alias labore voluptatibus suscipit.</p>

            <button>
                Projects
            </button>
        </div>

        <div className='header-right'>
            <img src={heroImg} alt="" />
        </div>
    </section>
  )
}

export default Header