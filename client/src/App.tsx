import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { CityContextProvider } from "./contexts/CityContextProvider";
import { WeatherContextProvider } from "./contexts/WeatherContextProvider";

function App() {
  return (
    <CityContextProvider>
      <WeatherContextProvider>
        <header>
          <Header />
        </header>
        <main>
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
      </WeatherContextProvider>
    </CityContextProvider>
  );
}

export default App;
