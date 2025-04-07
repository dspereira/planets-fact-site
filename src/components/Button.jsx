import style from "./Button.module.scss"

export default function Button({onClick, planetName, index, label, isActive }) {

    /*
        style.planetColor apenas para teste. Será uma class com o nome do planeta 
    */

  console.log("asdsadsadsadsads: ", planetName)


  return (
    <button 
      style={{ '--planet-color': `var(--${planetName}-color)`}}
      className={`${style.btn} ${isActive && style.planetColor}`}
      onClick={onClick}
    >
      <span className={style.index}>{index}</span>
      <span className={style.label}>{label.toUpperCase()}</span>
    </button>
  )
}