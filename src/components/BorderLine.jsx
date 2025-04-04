import style from "./BorderLine.module.scss"

export default function BorderLine({ className }) {
  return (
    <div className={`${style.border} ${className}`}></div>
  )
}