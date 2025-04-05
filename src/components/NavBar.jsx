import { Link } from "react-router-dom"
import style from "./NavBar.module.scss"
import IconHamburger from "../icons/IconHamburger"
import { useState } from "react"
import BorderLine from "./BorderLine";
import NavLinks from "./NavLinks";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className={style.navContainer}>
        <div className={style.navHeader}>
          <Link to="/" className={style.navTitle}><h1>THE PLANETS</h1></Link>
          <button
            className={style.btn}
            onClick={() => setIsMenuOpen(s => !s)}
          >
            <IconHamburger className={isMenuOpen ? style.menuOpen : style.menuClose}/>
          </button>
        </div>
        <BorderLine className={style.navHeaderSeparator}/>
        <NavLinks isOpen={isMenuOpen}/>
      </nav>
      <BorderLine className={style.navSeparator}/>
    </>
  )
}