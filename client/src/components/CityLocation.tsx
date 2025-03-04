import { useCityContext } from "../contexts/CityContextProvider";
import "../style-css/CityLocation.css";
import "../style-css/ResponsiveBox.css";

function CityLocation() {
  const cityContext = useCityContext();
  const date = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <section className="city-location-container">
      <h2 className="city-style">
        {cityContext.city.LocalizedName.toUpperCase()}
      </h2>
      <h3 className="date-style">
        {date.toLocaleDateString("fr-FR", options)}
      </h3>
    </section>
  );
}
export default CityLocation;
