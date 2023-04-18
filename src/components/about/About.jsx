import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { BiRocket } from 'react-icons/bi'
import { FiTerminal } from 'react-icons/fi'
import { RiGitRepositoryLine } from 'react-icons/ri'

const About = () => {
    return (
        <section id="about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About me" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FiTerminal className='about__icon' />
                            <h5>Skills</h5>
                            <small>Front & Back</small>
                        </article>
                        <article className="about__card">
                            <RiGitRepositoryLine className='about__icon' />
                            <h5>Projects</h5>
                            <small>5 Completed</small>
                        </article>

                        <article className="about__card">
                            <BiRocket className='about__icon' />
                            <h5>Experience</h5>
                            <small>1+ Year</small>
                        </article>


                    </div>

                    <p>
                        I have recently completed courses in JavaScript and Node.js and I am eager to gain practical experience in these technologies. Although I have no prior experience, I am passionate about learning and applying my knowledge to real-world projects. I am committed to continuously improving my skills and contributing to the success of any team I am a part of.
                    </p>

                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About