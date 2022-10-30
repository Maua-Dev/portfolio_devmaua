import React from 'react'
import './InscricaoCard.css'
import QR_Code from '../assets/QR_Code.png'

export default function InscricaoCard() {

    return (
        <div className="Caixote">
            <div className="Inscricao">
                Nosso processo seletivo será aberto ano que vem!
                <ul className='List'>
                    <li>Não precisa saber programar</li>
                    <li>Vagas para todas as áreas</li>
                </ul>
            </div>
            <div className="Link">
                {/* <a className='Botao' href="https://forms.gle/NG2FLfEjAW8V5r256" target="_blank" rel="noreferrer">INSCREVA-SE</a> */}
                <img src={QR_Code} alt="QR_Code formulário" className="QR_Code" />
                <p>AGUARDE!</p>
            </div>
        </div>
    )
}