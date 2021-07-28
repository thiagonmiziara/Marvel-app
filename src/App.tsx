import Header from "./components/Header";
import Slider from "./components/Slider";
import { GlobalStyle } from "./styles/GlobalStyle";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

function App() {
  return (
    <div>
      <Header />
      <Slider />
      <GlobalStyle />
    </div>
  );
}

export default App;
