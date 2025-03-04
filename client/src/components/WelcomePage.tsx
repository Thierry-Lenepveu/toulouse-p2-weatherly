import CityLocation from "./CityLocation";
import Summary from "./Summary";
import SunTime from "./SunTime";
import TodayWeather from "./TodayWeather";
import WeatherParameter from "./WeatherParameter";
import "../style-css/WelcomePage.css";
import "../style-css/ResponsiveBox.css";
import MapRainViewer from "./MapRainViewer";

function WelcomePage() {
  return (
    <>
      <CityLocation />
      <section className="welcome-page-container">
        <Summary />
        <SunTime />
        <WeatherParameter />
        <TodayWeather />
        <MapRainViewer />
      </section>
    </>
  );
}
export default WelcomePage;
