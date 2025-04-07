import Button from "../components/Button";
import InfoCard from "../components/InfoCard";
import NavBar from "../components/NavBar";
import PlanetInfo from "../components/PlanetInfo";

import style from "./MainPaige.module.scss";

import planet from "../assets/planet-earth.svg";

import planetJupiter from "../assets/planet-jupiter.svg";

export default function MainPage() {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>
        <section className={style.gridMain}>

          <div className={style.planetImage}>
            <img src={planetJupiter} alt="Planet Image" />
          </div>
          
          <div className={style.infoCardsContainer}>
            <InfoCard label="Rotation time" data="243 days"/>
            <InfoCard label="Rotation time" data="243 days"/> 
            <InfoCard label="Rotation time" data="243 days"/> 
            <InfoCard label="Rotation time" data="243 days"/>
          </div>

          <div className={style.planetInfo}>
            <PlanetInfo planet="eart" info="Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive."></PlanetInfo>
          </div>
          
          <div className={style.buttons}>
            <Button index="01" label="overview" isActive={false}/>
            <Button index="01" label="overview" isActive={false}/>
            <Button index="01" label="overview" isActive={false}/>
          </div>

        </section>
      </main>
    </>
  )
}
