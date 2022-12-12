import cardOne from '../assets/img/card-1.svg'
import cardTwo from '../assets/img/card-2.svg'
import cardThree from '../assets/img/card-3.svg'

const Projects = () => {
  return (
    <section id="projects">
        <div className="projects-title">
          <h2>Recent Projects</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere cum quisquam eius officiis expedita alias.</p>
        </div>

        <div className="project-cards_container">
          <article className="project-card card-1">
            <img src={cardOne} alt="" />
            <h4>Web Template Ui</h4>
            <p className="card-date">06 March 2021</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, nostrum quis. Architecto, dolor nostrum odit fugiat eaque placeat atque laborum!</p>
            <a href="">Read more</a>
          </article>

          <article className="project-card card-2">
            <img src={cardTwo} alt="" />
            <h4>Web Template Ui</h4>
            <p className="card-date">06 March 2021</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, nostrum quis. Architecto, dolor nostrum odit fugiat eaque placeat atque laborum!</p>
            <a href="">Read more</a>
          </article>

          <article className="project-card card-3">
            <img src={cardThree} alt="" />
            <h4>Web Template Ui</h4>
            <p className="card-date">06 March 2021</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, nostrum quis. Architecto, dolor nostrum odit fugiat eaque placeat atque laborum!</p>
            <a href="">Read more</a>
          </article>

          <article className="project-card card-3">
            <img src={cardThree} alt="" />
            <h4>Web Template Ui</h4>
            <p className="card-date">06 March 2021</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, nostrum quis. Architecto, dolor nostrum odit fugiat eaque placeat atque laborum!</p>
            <a href="">Read more</a>
          </article>


          <article className="project-card card-1">
            <img src={cardOne} alt="" />
            <h4>Web Template Ui</h4>
            <p className="card-date">06 March 2021</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, nostrum quis. Architecto, dolor nostrum odit fugiat eaque placeat atque laborum!</p>
            <a href="">Read more</a>
          </article>

          <article className="project-card card-2">
            <img src={cardTwo} alt="" />
            <h4>Web Template Ui</h4>
            <p className="card-date">06 March 2021</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, nostrum quis. Architecto, dolor nostrum odit fugiat eaque placeat atque laborum!</p>
            <a href="">Read more</a>
          </article>
        </div>

        
    </section>
  )
}

export default Projects