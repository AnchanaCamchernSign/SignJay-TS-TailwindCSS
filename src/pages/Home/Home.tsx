import GetStartButton from "../../components/Buttons/GetStartButton";
import BannerHompage from "../../components/Header/BannerHomePage";
import ExampleContents from "../../components/Header/ExampleContents";
import { Hamburger } from "../../components/Menu/Hamburger";
import OpinionList from "../../components/OpinionData/OpinionList";

function HomePage() {
  const handleHamburgerClick = () => {
    console.log("Hamburger clicked!");
  };

  return (
    <div>
      <Hamburger onClick={handleHamburgerClick} />
      <BannerHompage />
      <GetStartButton />
      <ExampleContents />
      <OpinionList />
    </div>
  );
}

export default HomePage;
