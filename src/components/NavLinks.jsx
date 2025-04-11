import { Link } from "react-router-dom";
import data from "../data/data.json"
import style from "./NavLinks.module.scss"
import BorderLine from "./BorderLine";
import IconChevron from "../icons/IconChevron";
import MiniPlanet from "./MiniPlanet";
import { useMobileMenu, useMobileMenuUpdate } from "../contexts/MobileMenuContext";

export default function NavLinks({ className }) {
  const isMobileMenuOpen = useMobileMenu()
  const mobileMenuUpdate = useMobileMenuUpdate();

  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }

  const items = data.map(e => (
      <li 
        key={e.name} 
        style={{'--planet-color': `var(--${e.name.toLowerCase()}-color)`}}
      >
        <Link
          to={`/${e.name.toLowerCase()}`}
          className={style.listLink}
        >
          <span>{e.name.toUpperCase()}</span>
        </Link>
      </li>
    )
  );

  const itemsMobile = data.map(e => (
      <li 
        key={e.name} 
        className={style.listItem}
        onClick={mobileMenuUpdate}
      >
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
      {
        isMobileMenuOpen &&
        <ul className={`${style.listMobile} ${className}`}>
          {itemsMobile}
        </ul>
      }

    </>
  )
}