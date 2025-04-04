import { Link } from "react-router-dom"
import style from "./NavBar.module.scss"
import IconHamburger from "../icons/IconHamburger"
import { useState } from "react"

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={style.navContainer}>
      <Link to="/" className={style.linkTitle}><h1>THE PLANETS</h1></Link>
      <button
        className={style.btn}
        onClick={e => setIsMenuOpen(s => s ? false : true)}
      >
        <IconHamburger className={style.icon}/>
      </button>
      <ul className={style.navList}>
        <li>
          <Link to="/mercury">MERCURY</Link>
        </li>
        <li>
          <Link to="/mercury">VENUS</Link>
        </li>
        <li>
          <Link to="/mercury">EARTH</Link>
        </li>
        <li>
          <Link to="/mercury">MARS</Link>
        </li>
        <li>
          <Link to="/mercury">JUPITER</Link>
        </li>
        <li>
          <Link to="/mercury">SATURN</Link>
        </li>
        <li>
          <Link to="/mercury">URANUS</Link>
        </li>
        <li>
          <Link to="/mercury">NEPTUNE</Link>
        </li>
      </ul>
    </nav>
  )
}