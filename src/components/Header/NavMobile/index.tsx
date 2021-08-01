import { Container } from "./style";
import { AiOutlineRight } from "react-icons/ai";

const NavMobile = () => {
  return (
    <Container>
      <nav>
        <a href='/'>
          Filmes
          <AiOutlineRight />
        </a>
        <a href='/'>
          Quadrinhos
          <AiOutlineRight />
        </a>
        <a href='/'>
          Programas de Tv
          <AiOutlineRight />
        </a>
        <a href='/'>
          Jogos
          <AiOutlineRight />
        </a>
      </nav>
    </Container>
  );
};

export default NavMobile;
