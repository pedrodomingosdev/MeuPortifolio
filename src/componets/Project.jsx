import React from 'react';
import logogit from '../imagens/git.png'
import logolinkedin from '../imagens/linkend.webp'

const Project1 = () => {
    return (
        <div>
            <a href="https://github.com/pedrodomingosdev/TicTacToe"><img src={logogit} alt="Logo" /></a>
            <a href="https://www.linkedin.com/posts/pedro-henrique-b07749196_java-gamedev-programming-activity-7149115573216464897-KpEQ?utm_source=share&utm_medium=member_desktop"><img src={logolinkedin} alt="Logo" /></a>
        </div>
    );
};



const Project2 = () => {
    return (
        <div>
            <a href="https://github.com/pedrodomingosdev/Termo-em-Python"><img src={logogit} alt="Logo" /></a>
            <a href="https://www.linkedin.com/feed/update/urn:li:activity:7151612256252747777/"><img src={logolinkedin} alt="Logo" /></a>
        </div>
    );
};

export {Project1 , Project2};