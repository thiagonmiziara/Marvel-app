import logoImg from "../../assets/images/icons/logo-marvel.svg";
import Banner from "./Banner";
import { StyledHeader } from "./style";

const Header = () => {
  return (
    <>
      <StyledHeader>
        <nav>
          <img src={logoImg} alt='Logo Marvel' />
          <div>
            <a href='#'>Filmes</a>
            <a href='#'>Quadrinhos</a>
            <a href='#'>Programas de Tv</a>
            <a href='#'>Jogos</a>
          </div>
        </nav>
      </StyledHeader>
      <Banner />
    </>
  );
};

export default Header;
