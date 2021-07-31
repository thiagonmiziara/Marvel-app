import { useEffect, useState } from "react";
import { api } from "../../service/api";
import Loading from "../Loading";
import Pagination from "../Paginagtion";
import { Container, StyledDiv } from "./style";

interface CharactersData {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

const ListCharacters = () => {
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState<CharactersData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const limit: number = 30;
  let offset: number = page * limit;

  useEffect(() => {
    async function getCharacters() {
      try {
        setLoading(true);
        await api
          .get("characters?orderBy=name&", {
            params: {
              offset,
              limit,
            },
          })
          .then((response) => setCharacters(response.data.data.results));
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    }

    getCharacters();
  }, [page, offset]);

  return (
    <>
      <Container>
        <div>
          <h2>LISTA DE PERSONAGENS DA MARVEL</h2>
        </div>
        <StyledDiv>
          {loading ? (
            <Loading size={100} />
          ) : (
            <>
              {characters.map((character) => {
                return (
                  <div className='card' key={character.id}>
                    <img
                      src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                      alt=''
                    />
                    <div>
                      <span>{character.name}</span>
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </StyledDiv>
      </Container>

      <Pagination
        totalCountOfRegisters={1000}
        currentPage={page}
        onPageChange={setPage}
      />
    </>
  );
};

export default ListCharacters;
