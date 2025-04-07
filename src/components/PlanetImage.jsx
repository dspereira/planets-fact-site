import style from "./PlanetImage.module.scss"

export default function PlanetImage({ planetImage, geologyImage}) {
  return (
    <div className={style.container}>
        <img src={planetImage} alt="Planet Image" />
        {
            geologyImage &&
            <img className={style.geology} src={geologyImage} alt="Planet Geology Image" />
        }
    </div>
  )
}