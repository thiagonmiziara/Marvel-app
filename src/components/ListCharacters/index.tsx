import { useEffect, useState } from "react";
import { api } from "../../service/api";
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

  useEffect(() => {
    api
      .get("characters?orderBy=name&", {
        params: {
          offset: page,
          limit: 30,
        },
      })
      .then((response) => setCharacters(response.data.data.results));
  }, [page]);

  return (
    <>
      <Container>
        <div>
          <h2>LISTA DE PERSONAGENS DA MARVEL</h2>
        </div>
        <StyledDiv>
          {characters.map((character) => {
            return (
              <div key={character.id}>
                <img
                  src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  alt=''
                />
                <span>{character.name}</span>
              </div>
            );
          })}
        </StyledDiv>
      </Container>

      <Pagination
        totalCountOfRegisters={3000}
        currentPage={page}
        onPageChange={setPage}
      />
    </>
  );
};

export default ListCharacters;
