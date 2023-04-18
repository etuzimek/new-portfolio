import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { IoLogoTwitter } from 'react-icons/io'
import { BsLinkedin } from 'react-icons/bs'

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>ETUZ</a>
            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://linkedin.com/in/tuzimek" target="_blanck"><BsLinkedin /></a>
                <a href="https://www.facebook.com/profile.php?id=100087440607084" target='_blanck'><FaFacebookF /></a>
                <a href="https://twitter.com/ETuzimek" target='_blanck'><IoLogoTwitter /></a>
            </div>
            <div className="footer__copyright">
                <small>&copy; ETUZ all rights reserved</small>
            </div>
        </footer>
    )
}

export default Footer