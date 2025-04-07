import style from "./InfoCard.module.scss"

export default function InfoCard({ label, data }) {
  return (
    <div className={style.card}>
      <h2 className={style.label}>{label.toUpperCase()}</h2>
      <p className={style.data}>{data.toUpperCase()}</p>
    </div>
  )
}