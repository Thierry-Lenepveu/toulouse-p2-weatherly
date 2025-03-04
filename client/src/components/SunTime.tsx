import SunRise from "./SunRise";
import SunSet from "./SunSet";
import "../style-css/SunTime.css";
import "../style-css/ResponsiveBox.css";

function SunTime() {
  return (
    <>
      <article className="sun-time-style">
        <SunRise />
        <SunSet />
      </article>
    </>
  );
}

export default SunTime;
