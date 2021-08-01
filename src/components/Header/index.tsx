import { useState } from "react";
import logoImg from "../../assets/images/icons/logo-marvel.svg";
import useWindowSize from "../../hooks/useWindowSize";
import Banner from "./Banner";
import { ButtonMobile, StyledHeader } from "./style";
import { CgMenuGridR } from "react-icons/cg";
import { CgCloseR } from "react-icons/cg";
import NavMobile from "./NavMobile";

const Header = () => {
  const [isOpenMenuMobile, setIsOpenMenuMobile] = useState<boolean>(false);

  const widthPage: Array<number> = useWindowSize();
  const widthMobile = widthPage[0] <= 768;

  function unloadScrollBars() {
    document.documentElement.style.overflow = "hidden";
    setIsOpenMenuMobile(true);
  }

  function reloadScrollBars() {
    document.documentElement.style.overflow = "auto";
    setIsOpenMenuMobile(false);
  }

  return (
    <>
      <StyledHeader>
        <nav>
          <img src={logoImg} alt='Logo Marvel' />

          <div>
            {!isOpenMenuMobile ? (
              <ButtonMobile onClick={() => unloadScrollBars()}>
                <CgMenuGridR size={30} color='#ffffff' />
              </ButtonMobile>
            ) : (
              <ButtonMobile onClick={() => reloadScrollBars()}>
                <CgCloseR size={30} color='#ffffff' />
              </ButtonMobile>
            )}
            <a href='/'>Filmes</a>
            <a href='/'>Quadrinhos</a>
            <a href='/'>Programas de Tv</a>
            <a href='/'>Jogos</a>
          </div>
        </nav>
      </StyledHeader>
      <Banner />
      {isOpenMenuMobile && widthMobile ? <NavMobile /> : null}
    </>
  );
};

export default Header;
