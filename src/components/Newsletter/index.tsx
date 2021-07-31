import { FormEvent } from "react";
import { Container } from "./style";

const Newsletter = () => {
  return (
    <Container>
      <div>
        <article>
          <h1>
            RECEBA AS <br />
            NOVIDADES
            <br /> DA MARVEL
          </h1>
        </article>
      </div>
      <div className='content'>
        <p>
          Cadastre-se para receber nossas <br /> notícias em primeira mão
          <span>!</span>
        </p>

        <form onSubmit={(e: FormEvent) => e.preventDefault()}>
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
