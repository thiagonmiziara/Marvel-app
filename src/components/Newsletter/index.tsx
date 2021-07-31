import { Container } from "./style";

const Newsletter = () => {
  return (
    <Container>
      <div>
        <article>
          <h1>RECEBA AS NOVIDADES DA MARVEL</h1>
        </article>
      </div>
      <div className='content'>
        <p>
          Cadastre-se para receber nossas notícias em primeira mão<span>!</span>
        </p>

        <form>
          <label>SEU MELHOR E-MAIL</label>
          <div>
            <input
              type='email'
              required
              placeholder='Informe seu melhor e-mail'
            />
            <button>ENVIAR</button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Newsletter;
