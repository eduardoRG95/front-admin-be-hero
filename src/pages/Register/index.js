import React from 'react'

import './styles.css';
import logo from '../../assets/img/logo.png'

export default function Register () {
    return ( 
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logo} alt="Admin"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro para acessar as configs da plataaforma</p>
                </section>
            </div> 
        </div>
    );
}