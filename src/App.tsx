import Header from "./components/Header";
import Slider from "./components/Slider";
import { GlobalStyle, Container } from "./styles/GlobalStyle";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import ListCharacters from "./components/ListCharacters";
import Mastercard from "./components/Mastercad";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <Container>
      <Header />
      <Slider />
      <ListCharacters />
      <Mastercard />
      <Newsletter />
      <GlobalStyle />
    </Container>
  );
}

export default App;
