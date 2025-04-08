import style from "./Button.module.scss"

export default function Button({onClick, planetName, index, label, isActive }) {
  return (
    <button 
      style={{'--planet-color': `var(--${planetName}-color)`}}
      className={`${style.btn} ${isActive && style.planetColor}`}
      onClick={onClick}
    >
      <span className={style.index}>{index}</span>
      <span className={style.label}>{label.toUpperCase()}</span>
    </button>
  )
}