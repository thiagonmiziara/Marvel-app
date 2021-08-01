import logoMImg from "../../assets/images/logoM.png";
import blogImg from "../../assets/images/captain-invadiu.jpg";
import faceIcon from "../../assets/images/icons/facebook.svg";
import spotIcon from "../../assets/images/icons/spotify.svg";
import instaIcon from "../../assets/images/icons/instagram.svg";
import tubeIcon from "../../assets/images/icons/youtube.svg";
import { Container, Content } from "./style";

const Footer = () => {
  return (
    <Container>
      <Content>
        <div className='info'>
          <img src={logoMImg} alt='Logo M da marvel' />

          <ul>
            <p>A Marvel</p>
            <li>Sobre a Marvel</li>
            <li>Ajuda</li>
            <li>Carreiras</li>
          </ul>

          <ul>
            <p>Mídia</p>
            <li>Filmes</li>
            <li>Quadrinhos</li>
            <li>Programas de TV</li>
            <li>Jogos</li>
          </ul>
        </div>

        <div className='social'>
          <div>
            <p>Última do blog</p>
            <div>
              <img
                className='blog'
                src={blogImg}
                alt='Imagem 3 crianças fantasiadas de capitã marvel'
              />
              <span>
                Captain Marvel Challenge invadiu
                <br /> o tapete vermelho do Oscar
              </span>
            </div>
            <a href='https://www.marvel616.com/2019/02/captain-marvel-challenge-invadiu-o.html'>
              Continuar lendo
            </a>
          </div>

          <div className='social__redes'>
            <p>Siga a Marvel</p>
            <div>
              <img src={faceIcon} alt='Icone facebook' />
              <img src={spotIcon} alt='Icone spotify' />
              <img src={instaIcon} alt='Icone instagram' />
              <img src={tubeIcon} alt='Icone youtube' />
            </div>
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default Footer;
