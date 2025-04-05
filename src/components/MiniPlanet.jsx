import style from "./MiniPlanet.module.scss"

export default function MiniPlanet({ className, planet }) {
    return (
        <div className={`${style.miniPlanet} ${style[planet]} ${className}`}></div>
    )
}