import React from 'react'
import './skills.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Skills = () => {
    return (
        <section id="skills">
            <h5>What Skills I Have</h5>
            <h2>My Skills</h2>

            <div className="container skills__container">
                <div className="skills__frontend">
                    <h3>Frontend Dewelopment</h3>
                    <div className="skills__content">
                        <article className="skills__details">
                            <BsPatchCheckFill className="skills__details-icon" />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className="skills__details">
                            <BsPatchCheckFill className="skills__details-icon" />
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className="skills__details">
                            <BsPatchCheckFill className="skills__details-icon" />
                            <div>
                                <h4>JavaScript</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className="skills__details">
                            <BsPatchCheckFill className="skills__details-icon" />
                            <div>
                                <h4>Bootstrap</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className="skills__details">
                            <BsPatchCheckFill className="skills__details-icon" />
                            <div>
                                <h4>React</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>

                <div className="skills__backend">
                    <h3>Backend Dewelopment</h3>
                    <div className="skills__content">
                        <article className="skills__details">
                            <BsPatchCheckFill className="skills__details-icon" />
                            <div>
                                <h4>Node JS</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className="skills__details">
                            <BsPatchCheckFill className="skills__details-icon" />
                            <div>
                                <h4>MongoDB</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className="skills__details">
                            <BsPatchCheckFill className="skills__details-icon" />
                            <div>
                                <h4>Express JS</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className="skills__details">
                            <BsPatchCheckFill className="skills__details-icon" />
                            <div>
                                <h4>TypeScript</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Skills