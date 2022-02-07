import React from 'react'
import './Card.css'
import { AiFillMail } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'

export default props =>
    <div className="Container">
        <a href="mailto:dev@maua.br" target="_blank">
            <div className="Card">
                <AiFillMail className="Icon" />
                <p>dev@maua.br</p>
            </div>
        </a>

        <a href="https://www.instagram.com/devcommunitymaua/" target="_blank">
            <div className="Card">
                <AiFillInstagram className="Icon" />
                <p>Dev. Community Mauá</p>
            </div>
        </a>

        <a href="https://github.com/Maua-Dev" target="_blank">
            <div className="Card">
                <AiFillGithub className="Icon" />
                <p>Dev. Community Mauá</p>
            </div>
        </a>
    </div>