import { useState } from "react";
import Button from "../components/Button";
import InfoCard from "../components/InfoCard";
import NavBar from "../components/NavBar";
import PlanetInfo from "../components/PlanetInfo";

import style from "./MainPaige.module.scss";
import PlanetImage from "../components/PlanetImage";

const tabNames = {
  1: "overview",
  2: "structure",
  3: "geology"
}

export default function MainPage({ data }) {
  const [activeTab, setActiveTab] = useState(tabNames[1]);
  const [planetName, setPlanetName] = useState("");

  if (data.name.toLowerCase() !== planetName) {
    setPlanetName(data.name.toLowerCase());
    setActiveTab(tabNames[1]);
  }

  console.log("Main Page: ", data);

  const image = data.images.planet;

  console.log(image);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <section className={style.gridMain}>

          <div className={style.planetImage}>
            <PlanetImage 
              planetImage={
                activeTab === tabNames[2] ? data.images.internal : data.images.planet
              }
              geologyImage={activeTab === tabNames[3] && data.images.geology}
            />
          </div>
          
          <div className={style.infoCardsContainer}>
            <InfoCard label="rotation time" data={data.rotation}/>
            <InfoCard label="revolution time" data={data.revolution}/> 
            <InfoCard label="radius" data={data.radius}/> 
            <InfoCard label="average temp." data={data.temperature}/>
          </div>

          <div className={style.planetInfo}>
            <PlanetInfo 
              planet={planetName}
              info={data[activeTab].content}
            >
            </PlanetInfo>
          </div>
          
          <div className={style.buttons}>
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

        </section>
      </main>
    </>
  )
}
