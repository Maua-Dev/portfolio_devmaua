import React from 'react'
import './Card.css'
import { AiFillMail } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { FaDiscord } from 'react-icons/fa'

export default function Cards() {

    return (
        <div className="Container">
            <a href="mailto:dev@maua.br" target="_blank" rel="noreferrer">
                <div className="Card">
                    <AiFillMail className="Icon" />
                    <p>dev@maua.br</p>
                </div>
            </a>

            <a href="https://www.instagram.com/devcommunitymaua/" target="_blank" rel="noreferrer">
                <div className="Card">
                    <AiFillInstagram className="Icon" />
                    <p>Dev. Community Mauá</p>
                </div>
            </a>

            <a href="https://github.com/Maua-Dev" target="_blank" rel="noreferrer">
                <div className="Card">
                    <AiFillGithub className="Icon" />
                    <p>Dev. Community Mauá</p>
                </div>
            </a>

            <a href="https://discord.gg/BHqjH3MYpu" target="_blank" rel="noreferrer">
                <div className="Card">
                    <FaDiscord className="Icon" />
                    <p>Dev. Community Mauá</p>
                </div>
            </a>
        </div>
    )
}