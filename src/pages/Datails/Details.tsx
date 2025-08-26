import BackButton from "../../components/Buttons/BackBotton";
import { CountryList } from "../../components/Country/CountryList";
import BannerHompage from "../../components/Header/BannerHomePage";

function DetailsPage() {
  return (
    <div>
      <BackButton text="Back" />
      <BannerHompage text={"Ciao Gracey"} />
      <CountryList/>
    </div>
  );
}

export default DetailsPage;
