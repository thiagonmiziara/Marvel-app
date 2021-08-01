import Home from "./components/Pages/Home";

import { GlobalStyle, Container } from "./styles/GlobalStyle";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

function App() {
  return (
    <Container>
      <Home />
      <GlobalStyle />
    </Container>
  );
}

export default App;
