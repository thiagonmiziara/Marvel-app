import { useEffect, useState } from "react";
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container, StyledSwiper } from "./style";
import { api } from "../../service/api";

SwiperCore.use([Pagination, Navigation]);

interface CharactersData {
  Array: [
    id: number,
    name: string,
    thumbnail: {
      path: string;
      extension: string;
    }
  ];
}

const Slider = () => {
  const [characters, setCharacters] = useState<CharactersData[]>([]);

  useEffect(() => {
    Promise.all([
      api.get("characters?name=thor"),
      api.get("characters?name=hulk"),
      api.get("characters?name=thanos"),
      api.get("characters?name=captain america"),
      api.get("characters?name=Black Panther"),
      api.get("characters/1012200"),
      api.get("characters/1017109"),
      api.get("characters/1017104"),
    ]).then(
      ([
        thorResponse,
        hulkResponse,
        thanosResponse,
        capitanAmericaResponse,
        blackPantherResponse,
        spiderManResponse,
        blackWidowResponse,
        ironManResponse,
      ]) => {
        let heros: CharactersData[] = [
          thorResponse.data.data.results,
          hulkResponse.data.data.results,
          thanosResponse.data.data.results,
          capitanAmericaResponse.data.data.results,
          spiderManResponse.data.data.results,
          blackPantherResponse.data.data.results,
          blackWidowResponse.data.data.results,
          ironManResponse.data.data.results,
        ];
        setCharacters(heros);
      }
    );
  }, []);

  return (
    <Container>
      <div>
        <h3>PERSONAGENS EM DESTAQUE</h3>
      </div>

      <StyledSwiper>
        <Swiper
          slidesPerView={4.5}
          spaceBetween={10}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className='mySwiper'
        >
          {characters.map((hero: any) => {
            return (
              <SwiperSlide key={hero[0].id}>
                <img
                  src={`${hero[0].thumbnail.path}.${hero[0].thumbnail.extension}`}
                  alt={hero[0].name}
                />
                <span>{hero[0].name.replace("(MAA)", "")}</span>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </StyledSwiper>
    </Container>
  );
};

export default Slider;
