import { Link } from "react-router-dom";
import data from "../data/data.json"
import style from "./NavLinks.module.scss"
import BorderLine from "./BorderLine";
import IconChevron from "../icons/IconChevron";
import MiniPlanet from "./MiniPlanet";

export default function NavLinks({ className }) {

  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }

  const items = data.map(e=> (
      <li key={e.name}>
        <Link
          to={`/${e.name.toLowerCase()}`}
          className={style.listLink}
        >
          <span>{e.name.toUpperCase()}</span>
        </Link>
      </li>
    )
  );

  const itemsMobile = data.map(e=> (
      <li key={e.name} className={style.listItem}>
        <Link
          to={`/${e.name.toLowerCase()}`}
          className={style.listLink}
        >
          <MiniPlanet planet={e.name.toLowerCase()}/>
          <span>{e.name.toUpperCase()}</span>
          <IconChevron className={style.icon} />
        </Link>
        <BorderLine />
      </li>
    )
  );

  return (
    <>
      <ul className={`${style.list} ${className}`}>
        {items}
      </ul>

      <ul className={`${style.listMobile} ${className}`}>
        {itemsMobile}
      </ul>
    </>
  )
}