import { createContext, useContext, useState } from "react";

const MobileMenuContext = createContext();
const MobileMenuUpdateContext = createContext();

export function useMobileMenu() {
  return useContext(MobileMenuContext);
}

export function useMobileMenuUpdate() {
  return useContext(MobileMenuUpdateContext);
}

export function MobileMenuProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuToggle() {
    setIsMenuOpen(value => !value);
  }

  return (
    <MobileMenuContext.Provider value={isMenuOpen}>
      <MobileMenuUpdateContext.Provider value={handleMenuToggle}>
        {children}
      </MobileMenuUpdateContext.Provider>
    </MobileMenuContext.Provider>    
  )
}