import { Link } from "react-router-dom";
import style from "./NavBar.module.scss";
import IconHamburger from "../icons/IconHamburger";
import BorderLine from "./BorderLine";
import NavLinks from "./NavLinks";
import { useMobileMenu, useMobileMenuUpdate } from "../contexts/MobileMenuContext";

export default function NavBar() {
  const isMobileMenuOpen = useMobileMenu()
  const mobileMenuUpdate = useMobileMenuUpdate();

  return (
    <>
      <nav className={style.navContainer}>
        <div className={style.navHeader}>
          <Link to="/" className={style.navTitle}><h1>THE PLANETS</h1></Link>
          <button
            className={style.btn}
            onClick={mobileMenuUpdate}
          >
            <IconHamburger className={isMobileMenuOpen ? style.menuOpen : style.menuClose}/>
          </button>
        </div>
        <BorderLine className={style.navHeaderSeparator}/>
        <NavLinks />
      </nav>
      <BorderLine className={style.navSeparator}/>
    </>
  )
}