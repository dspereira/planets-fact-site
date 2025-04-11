import { createContext, useState } from "react";
import Button from "../components/Button";
import InfoCard from "../components/InfoCard";
import NavBar from "../components/NavBar";
import PlanetInfo from "../components/PlanetInfo";

import style from "./MainPaige.module.scss";
import PlanetImage from "../components/PlanetImage";
import BorderLine from "../components/BorderLine";
import { useMobileMenu } from "../contexts/MobileMenuContext";

const tabNames = {
  1: "overview",
  2: "structure",
  3: "geology"
}

export  function MainPage({ data }) {
  const [activeTab, setActiveTab] = useState(tabNames[1]);
  const [planetName, setPlanetName] = useState("");
  const isMobileMenuOpen = useMobileMenu(); 
  
  if (data.name.toLowerCase() !== planetName) {
    setPlanetName(data.name.toLowerCase());
    setActiveTab(tabNames[1]);
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
                activeTab === tabNames[2] ? data.images.internal : data.images.planet
              }
              geologyImage={activeTab === tabNames[3] && data.images.geology}
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
              info={data[activeTab].content}
            >
            </PlanetInfo>
          </div>
          
          <div className={`${style.buttons} ${style.btnWide}`}>
            <Button
              planetName={planetName}
              index="01"
              label="overview"
              isActive={activeTab === tabNames[1] ? true : false}
              onClick={() => setActiveTab(tabNames[1])}
            />
            <Button
              planetName={planetName}
              index="02"
              label="internal structure"
              isActive={activeTab === tabNames[2] ? true : false}
              onClick={() => setActiveTab(tabNames[2])}
            />
            <Button
              planetName={planetName}
              index="03"
              label="surface geology"
              isActive={activeTab === tabNames[3] ? true : false}
              onClick={() => setActiveTab(tabNames[3])}
            />
          </div>

          <div className={`${style.buttons} ${style.btnLow}`}>
            <Button
              planetName={planetName}
              label="overview"
              isActive={activeTab === tabNames[1] ? true : false}
              onClick={() => setActiveTab(tabNames[1])}
            />
            <Button
              planetName={planetName}
              label="structure"
              isActive={activeTab === tabNames[2] ? true : false}
              onClick={() => setActiveTab(tabNames[2])}
            />
            <Button
              planetName={planetName}
              label="geology"
              isActive={activeTab === tabNames[3] ? true : false}
              onClick={() => setActiveTab(tabNames[3])}
            />
          </div>

          <div className={style.boderSeparationButtons}>
           <BorderLine />
          </div>

        </section>
      </main>
    </>
  )
}
