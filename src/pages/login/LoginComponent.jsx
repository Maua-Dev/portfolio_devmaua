import { useState } from "react";
import { FaFacebook, FaTwitter, FaGoogle } from "react-icons/fa";
import Logo from './assets/logo-dev.png'
// import ModalCadastro from "../../components/modal_cadastro/ModalCadastro";
import './Login.css';

export default function LoginComponent() {

    const [login, setLogin] = useState(null);
    const [password, setPassword] = useState(null);
    // const [isOpen, setIsOpen] = useState(false);

    const handleRegister = () => {
        if(login === '' || login === null || password === '' || password === null) alert("Preencha os campos corretamente!");
        if(login && password) alert(`Login: ${login} e Senha: ${password}`);
    }

    return(
        <div className="login">
            <div className="container-login">
                <img src={Logo} alt="Logo da Dev. Community Mauá" />

                <form>
                    <label>Username</label>
                    <input
                    onChange={(event) => setLogin(event.target.value)}
                    placeholder="&#xf007;   Type your username"
                    type="text" />
                    <label>Password</label>
                    <input 
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="&#xf023;   Type your password"
                    type="password" />
                    <a href="/">Forgot password?</a>
                </form>

                <button className="login-btn" onClick={handleRegister}>login</button>

                <div className="other-icons">
                    <p>Or Sign Up Using</p>
                    <div className="icons">
                        {/* <button onClick={() => setIsOpen(true)}>
                            MODAL
                        </button> */}
                        <a href="/">
                            <FaFacebook/>
                        </a>
                        <a href="/">
                            <FaTwitter color="blue"/>
                        </a>
                        <a href="/">
                            <FaGoogle color="red"/>
                        </a>
                    </div>
                </div>
                {/* <ModalCadastro 
                isOpen={isOpen} 
                closeModal={() => setIsOpen(!isOpen)}/> */}
            </div>
        </div>
    );
}