import style from "./Button.module.scss"

export default function Button({onClick, planet, index, label, isActive }) {

    /*
        style.planetColor apenas para teste. Será uma class com o nome do planeta 
    */

  return (
    <button 
      className={`${style.btn} ${isActive && style.planetColor}`}
      onClick={onClick}
    >
      <span className={style.index}>{index}</span>
      <span className={style.label}>{label.toUpperCase()}</span>
    </button>
  )
}