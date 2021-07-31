import Header from "./components/Header";
import Slider from "./components/Slider";
import ListCharacters from "./components/ListCharacters";
import Mastercard from "./components/Mastercad";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

import { GlobalStyle, Container } from "./styles/GlobalStyle";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

function App() {
  return (
    <Container>
      <Header />
      <Slider />
      <ListCharacters />
      <Mastercard />
      <Newsletter />
      <Footer />
      <GlobalStyle />
    </Container>
  );
}

export default App;
