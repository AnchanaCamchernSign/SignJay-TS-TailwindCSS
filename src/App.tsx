import "./App.css";
//import { CountryList } from "./components/CountryList";
import { Hamburger } from "./components/Menu/Hamburger";
import OpinionList from "./components/OpinionData/OpinionList";

function App() {

  const handleHamburgerClick = () => {
    console.log("Hamburger clicked!");
  };

  return (
    <div>
       <Hamburger onClick={handleHamburgerClick}/>
      <div className="bg-violet-200 h-40">
        <h1 className="text-black font-mono text-center text-3xl font-bold mt-6 pt-12 p-4 ">
          Cioa Gracey <br /> Welcome to my world!
        </h1>
      </div>
      <div className="mt-4 ">
        <button className="bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded mt-8">
          Get Started
        </button>
        <OpinionList />
      </div>
    </div>
  );
}

export default App;
