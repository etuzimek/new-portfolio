import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://linkedin.com/in/tuzimek" target="_blanck"><BsLinkedin /></a>
            <a href="https://github.com/qazwaz" target="_blanck"><FaGithub /></a>
            <a href="https://www.facebook.com/profile.php?id=100087440607084" target="_blanck"><FaFacebook /></a>
        </div>
    )
}

export default HeaderSocials