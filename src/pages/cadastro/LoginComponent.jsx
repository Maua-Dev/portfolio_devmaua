import { useState } from "react";
import { FaFacebook, FaTwitter, FaGoogle } from "react-icons/fa";
import Logo from './assets/logo-dev.png'
import './Login.css';

export default function LoginComponent() {

    const [login, setLogin] = useState(null);
    const [password, setPassword] = useState(null);

    const handleRegister = () => {
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

                <button onClick={handleRegister}>login</button>

                <div className="other-icons">
                    <p>Or Sign Up Using</p>
                    <div className="icons">
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

                <div className="other-login">
                    <p>Or Sign Up Using</p>
                    <a href="/">SIGN UP</a>
                </div>
            </div>
        </div>
    );
}