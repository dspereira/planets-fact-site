import { Link } from "react-router-dom";
import style from "./NavBar.module.scss";
import IconHamburger from "../icons/IconHamburger";
import BorderLine from "./BorderLine";
import NavLinks from "./NavLinks";
import { useContext } from "react";
import { MenuContext } from '../pages/MainPaige';

export default function NavBar({ isMenuOpen, setIsMenuOpen }) {
  const {isMobileMenuOpen,  onChangeMobileMenu } = useContext(MenuContext);

  return (
    <>
      <nav className={style.navContainer}>
        <div className={style.navHeader}>
          <Link to="/" className={style.navTitle}><h1>THE PLANETS</h1></Link>
          <button
            className={style.btn}
            onClick={onChangeMobileMenu}
          >
            <IconHamburger className={isMobileMenuOpen ? style.menuOpen : style.menuClose}/>
          </button>
        </div>
        <BorderLine className={style.navHeaderSeparator}/>
        <NavLinks isOpen={isMobileMenuOpen} setIsMenuOpen={onChangeMobileMenu}/>
      </nav>
      <BorderLine className={style.navSeparator}/>
    </>
  )
}