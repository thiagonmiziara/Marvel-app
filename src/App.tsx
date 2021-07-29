import Header from "./components/Header";
import Slider from "./components/Slider";
import { GlobalStyle } from "./styles/GlobalStyle";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import ListCharacters from "./components/ListCharacters";

function App() {
  return (
    <div>
      <Header />
      <Slider />
      <ListCharacters />
      <GlobalStyle />
    </div>
  );
}

export default App;
