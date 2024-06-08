import './App.css';
import fotoperfil from './imagens/perfil.enc'
import logogit from './imagens/git.png'
import logolinkedin from './imagens/linkend.webp'
import Menu from './componets/Menu.jsx';
import {Project1, Project2} from './componets/Project.jsx';
import Educacional from './componets/Educacional.jsx';
import Profisional from './componets/Profisional.jsx';
import Contact from './componets/Contact.jsx';
import Language from './componets/Language.jsx';
import Certifications from './componets/Certifications.jsx';

function App() {
  return (
    <>
      <Menu />
      <div className="container">
        <h2>Sobre Mim</h2>
        <div className="profile-image">
          <img src={fotoperfil} alt="Imagem de perfil" />
        </div>
        <p>Como você pode ver por esse lindo site, que eu não sou Front (risos), mas me chamo Pedro, tenho 20 anos, sou natural de Agudos - SP, faço Ciência da Computação e estou no meu 3° Ano.</p>
        <p>Estou usando esse site como uma forma de currículo para que eu possa treinar meus HTML, CSS e até mesmo React.</p>
      </div>

      <br />

      <div className="container">
        <h2 id="sobre">Meus Projetos</h2>
        <div className="project">
          <h3>Jogo da Velha em Java</h3>
          <p>Fiz um jogo da velha simples em Java com alguns recursos interessantes, onde é possível jogar com o computador em várias dificuldades.</p>
          <div className="logo">
            <Project1 />
          </div>
          <br />
        </div>

        <br />

        <div className="project">
          <h3>Jogo "Termo" em Python</h3>
          <p>Você provavelmente conhece "Wordle" ou "Termo", refiz esses jogos em Python para poder aprimorar minha aprendizagem em Python.</p>
          <div className="logo">
            <Project2 />
          </div>
          <br />
        </div>
      </div>

      <br />

      <Profisional />

      <br />

      <Educacional />

      <br />

      <Certifications />

      <br />

      <Language />

      <br />

      <Contact />
    </>
  );
}

export default App;
