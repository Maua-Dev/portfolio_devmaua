import React from 'react'
import './ModalCadastro.css'
import logo from './assets/logo-dev.png'
import { useState } from 'react';

export default function ModalCadastro({isOpen, closeModal}) {
    const [user, setUser] = useState({
        name: '',
        lastname: '',
        ra: '',
        year: '',
        course: '',
        email: '',
        cellphone: '',
        area: '',
        position: '',
        entrydate: '',
        status: ''
    });

    const handleSubmit = () => {
        let validation = true;
        console.table(user);
        Object.values(user).forEach(value => {
            if(value === '')  {
                alert("Preencha os campos corretamente!");
                validation = !validation
            }
        });
        
        if(validation) alert("Usuário cadastrado!");
    }

    if(isOpen) {
        return (
            <div className='modal'>
                <div className="container-modal">
                    <div className="logo-dev">
                        <img className='dev' src={logo} alt="Logo da Dev. Community Mauá"/>
                    </div>
                    <div className="content">
                        <div className='left-side'>

                            <label className='label-input'>Nome:</label>
                            <input
                            onChange={(event) => setUser({...user, name: event.target.value})}
                            className='user-input'
                            placeholder="&#xf007;   Type"
                            type="text" />

                            <div className='double-container'>
                                <div className='double-input'>
                                    <label className='label-input'>R.A:</label>
                                    <input
                                    onChange={(event) => setUser({...user, ra: event.target.value})}
                                    className='user-input'
                                    placeholder="&#xf007;   Type"
                                    type="text" />
                                </div>
                                <div className='double-input'>
                                    <label className='label-input'>Ano Mauá:</label>
                                    <input
                                    onChange={(event) => setUser({...user, year: event.target.value})}
                                    className='user-input'
                                    placeholder="&#xf007;   Type"
                                    type="text" />
                                </div>
                            </div>

                            <label className='label-input'>Email DEV:</label>
                            <input
                            onChange={(event) => setUser({...user, email: event.target.value})}
                            className='user-input'
                            placeholder="&#xf007;   Type"
                            type="text" />

                            <label className='label-input'>Área da DEV:</label>
                            <input
                            onChange={(event) => setUser({...user, area: event.target.value})}
                            className='user-input'
                            placeholder="&#xf007;   Type"
                            type="text" />

                            <label className='label-input'>Data de Entrada DEV:</label>
                            <input
                            onChange={(event) => setUser({...user, entrydate: event.target.value})}
                            className='user-input'
                            placeholder="&#xf007;   Type"
                            type="text" />

                        </div>
                        <div className='right-side'>
                            <label className='label-input'>Sobrenome:</label>
                            <input
                            onChange={(event) => setUser({...user, lastname: event.target.value})}
                            className='user-input'
                            placeholder="&#xf007;   Type"
                            type="text" />

                            <label className='label-input'>Curso:</label>
                            <input
                            onChange={(event) => setUser({...user, course: event.target.value})}
                            className='user-input'
                            placeholder="&#xf007;   Type"
                            type="text" />

                            <label className='label-input'>Celular:</label>
                            <input
                            onChange={(event) => setUser({...user, cellphone: event.target.value})}
                            className='user-input'
                            placeholder="&#xf007;   Type"
                            type="text" />

                            <label className='label-input'>Cargo:</label>
                            <input
                            onChange={(event) => setUser({...user, position: event.target.value})}
                            className='user-input'
                            placeholder="&#xf007;   Type"
                            type="text" />

                            <label className='label-input'>Status do Membro:</label>
                            <input
                            onChange={(event) => setUser({...user, status: event.target.value})}
                            className='user-input'
                            placeholder="&#xf007;   Type"
                            type="text" />

                        </div>
                    </div>
                    <div className="submit-btn">
                        <button className='close-btn' onClick={handleSubmit}>Enviar</button>
                        <button className='close-btn' onClick={closeModal}>Fechar</button>
                    </div>
                </div>
            </div>
        );
    }

    return null;
}
