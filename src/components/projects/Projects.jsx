import React from 'react'
import './projects.css'
import IMG1 from '../../assets/apatrament-new.png'
import IMG2 from '../../assets/old-portfolio.png'
import IMG3 from '../../assets/StartHelping.JPG'
import IMG4 from '../../assets/BestShop.JPG'
import IMG5 from '../../assets/CarSharing.JPG'

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Sea Apartment',
        github: 'https://github.com/qazwaz/apartament3',
        demo: 'https://silver-fox-e6696b.netlify.app/'
    },
    {
        id: 2,
        image: IMG2,
        title: 'Old Portfolio',
        github: 'https://github.com/qazwaz/old-portfolio',
        demo: 'https://et-portfolio.web.app/'
    },
    {
        id: 3,
        image: IMG3,
        title: 'Start Helping',
        github: 'https://github.com/qazwaz/Start-helping',
        demo: 'https://et-starthelping.web.app'
    },
    {
        id: 4,
        image: IMG4,
        title: 'Best Shop',
        github: 'https://github.com/qazwaz/BestShop',
        demo: 'https://et-bestshop.web.app/'
    },
    {
        id: 5,
        image: IMG5,
        title: 'Car Sharing',
        github: 'https://github.com/qazwaz/BestShop',
        demo: 'https://et-carsharing.web.app/'
    }
]

const Projects = () => {
    return (
        <section id="projects">
            <h5>My Recent Work</h5>
            <h2>Projects</h2>

            <div className="container portfolio__container">
                {
                    data.map(({ id, image, title, github, demo }) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                                    <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Projects