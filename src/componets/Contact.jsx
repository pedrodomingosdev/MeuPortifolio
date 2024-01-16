import React from 'react';
import logogit from '../imagens/git.png'
import logolinkedin from '../imagens/linkend.webp'

const Contact = () => {
    return (
        <div>
            <div className="container">
                <h2 id= "contato">Contato</h2>
                <div class="centered-links">
                    <div class="logo">
                        <a href="https://www.linkedin.com/in/pedro-henrique-b07749196/"><img src={logolinkedin} alt="Logo" /></a>
                        <a href="https://github.com/pedrodomingosdev"><img src={logogit} alt="Logo" /></a>
                    <br />
                    </div>
                </div>
         
                <a href="mailto:profissional.pedrodomingos@gmail.com" className="centered-links">profissional.pedrodomingos@gmail.com</a> 
            <br />
        </div>
        </div>
    );
};

export default Contact;