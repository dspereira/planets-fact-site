import style from "./PlanetImage.module.scss"

export default function PlanetImage({ planetName, planetImage, geologyImage}) {
  return (
    <div className={style.container}>
        {/* <img src={planetImage} alt="Planet Image" width="100" height="100"/> */}
        <img className={style.planet} src={planetImage} alt="Planet Image"/>
        {
            geologyImage &&
            <img 
              className={planetName != "saturn" ? style.geology : style.saturnGeology} 
              src={geologyImage} 
              alt="Planet Geology Image"
            />
        }
    </div>
  )
}