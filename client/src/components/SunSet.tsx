import { useWeatherContext } from "../contexts/WeatherContextProvider";
import "../style-css/Sunset.css";
import "../style-css/SunTime.css";
import "../style-css/ResponsiveBox.css";

function SunSet() {
  const weatherContext = useWeatherContext();
  const timeSunset = weatherContext.weather.DailyForecasts[0].Sun.Set;
  const dateSunset = new Date(timeSunset);

  return (
    <section className="sunset-style">
      <h4>Coucher du Soleil</h4>
      <p>{dateSunset.toLocaleTimeString("fr-FR")}</p>
    </section>
  );
}

export default SunSet;
