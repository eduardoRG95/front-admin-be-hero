import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';

import './style.css';

import logo from '../../assets/img/logo.png'
import admin from '../../assets/img/admin.png'

export default function Logon () {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logo} alt="Admin" />
                <form>
                    <h1>Faça seu login</h1>
                    <input placeholder="Informe ID" />
                    <button className="button" type="submit">Entrar</button>
                    <a href="/register">
                        <FiLogIn size={16} color="#e02041" />
                        Não tenho cadastro
                    </a>
                </form>
            </section>
            <img src={admin} alt="Admin" />
        </div>
    )
}