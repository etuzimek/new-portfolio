import React from 'react'
import './projects.css'
import IMG1 from '../../assets/apartment.jpg'
import IMG2 from '../../assets/portfolio-old.png'
import IMG3 from '../../assets/oldme.png'
import IMG4 from '../../assets/oldme.png'
import IMG5 from '../../assets/oldme.png'

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
        github: 'https://github.com/qazwaz/apartament3',
        demo: 'https://et-portfolio.web.app/'
    },
    {
        id: 3,
        image: IMG1,
        title: 'Start Helping',
        github: 'https://github.com/qazwaz/apartament3',
        demo: 'https://silver-fox-e6696b.netlify.app/'
    },
    {
        id: 4,
        image: IMG1,
        title: 'Best Shop',
        github: 'https://github.com/qazwaz/apartament3',
        demo: 'https://silver-fox-e6696b.netlify.app/'
    },
    {
        id: 5,
        image: IMG1,
        title: 'Car Sharing',
        github: 'https://github.com/qazwaz/apartament3',
        demo: 'https://silver-fox-e6696b.netlify.app/'
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
                                <div className="portfolio__itme-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio__item-cta">
                                    <a href={github} className='btn' target='_blank'>Github</a>
                                    <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
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