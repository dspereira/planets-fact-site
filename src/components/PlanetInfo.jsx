import style from "./PlanetInfo.module.scss"
import iconSource from '../assets/icon-source.svg';

export default function PlanetInfo({ planet, info }) {

  return (
    <div className={style.container}>
      <h1 className={style.title}>{planet.toUpperCase()}</h1>
      <p className={style.info}>{info}</p>
      <p className={style.source}>
        <span>Source : </span>
        <a
          className={style.sourceLink}
          href={`https://en.wikipedia.org/wiki/${planet.toLowerCase()}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Wikipedia
          <img src={iconSource} width="12" height="12" alt="Source Icon"/>
        </a>
      </p>
    </div>
  )
}