import cardImg from "../../assets/images/cards.png";
import { Container } from "./style";

const Mastercard = () => {
  return (
    <Container>
      <div>
        <h1>MARVEL MASTERCARD</h1>
        <span>Desbloqueie seus super poderes</span>
        <img src={cardImg} alt='Imagens de cartões de crédito marvel' />
        <button>CADASTRE-SE AGORA</button>
        <a href='/'>ENTENDA COMO FUNCIONA</a>
      </div>
    </Container>
  );
};

export default Mastercard;
