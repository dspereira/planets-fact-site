import { createContext, useState } from "react";
import Button from "../components/Button";
import InfoCard from "../components/InfoCard";
import NavBar from "../components/NavBar";
import PlanetInfo from "../components/PlanetInfo";

import style from "./MainPaige.module.scss";
import PlanetImage from "../components/PlanetImage";
import BorderLine from "../components/BorderLine";
import { useMobileMenu } from "../contexts/MobileMenuContext";

const tabNames = ["overview", "structure", "geology"];

export  function MainPage({ data }) {
  const [activeTab, setActiveTab] = useState(0);
  const [planetName, setPlanetName] = useState("");
  const isMobileMenuOpen = useMobileMenu(); 
  
  if (data.name.toLowerCase() !== planetName) {
    setPlanetName(data.name.toLowerCase());
    setActiveTab(0);
  }

  function getButtonMenu(options) {
    return options.map((elm, idx) =>
      <Button
        key={idx}
        planetName={planetName}
        index={`0${idx+1}`}
        label={elm}
        isActive={activeTab === idx ? true : false}
        onClick={() => setActiveTab(idx)}
      />
    );
  }


  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className={isMobileMenuOpen ? style.mainVisibility : ""}>
        <section className={style.gridMain}>

          <div className={style.planetImage}>
            <PlanetImage
              key={`${planetName}${activeTab}`}
              planetName={planetName}
              planetImage={
                activeTab === 1 ? data.images.internal : data.images.planet
              }
              geologyImage={activeTab === 2 && data.images.geology}
            />
          </div>
          
          <div className={style.rotationCard}>
            <InfoCard label="rotation time" data={data.rotation}/>
          </div>
          <div className={style.revolutionCard}>
            <InfoCard label="revolution time" data={data.revolution}/> 
          </div>
          <div className={style.radiusCard}>
            <InfoCard label="radius" data={data.radius}/> 
          </div>
          <div className={style.tempCard}>
            <InfoCard label="average temp." data={data.temperature}/>
          </div>

          <div className={style.planetInfo}>
            <PlanetInfo 
              planet={planetName}
              info={data[tabNames[activeTab]].content}
            >
            </PlanetInfo>
          </div>
          
          <div className={`${style.buttons} ${style.btnWide}`}>
            {getButtonMenu(["overview", "internal structure", "surface geology"])}
          </div>

          <div className={`${style.buttons} ${style.btnLow}`}>
            {getButtonMenu(["overview", "structure", "geology"])}
          </div>

          <div className={style.boderSeparationButtons}>
           <BorderLine />
          </div>

        </section>
      </main>
    </>
  )
}
