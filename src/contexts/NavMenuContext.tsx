import { createContext, useContext } from 'react';
import useBoolean from '../hooks/useBoolean';

const NavMenuContext = createContext({
  isOpen: false,
  toggle: () => {},
  close: () => {}
});

interface Props {
  drawerDelay?: number;
  children: React.ReactNode;
}

const NavMenuProvider = ({ children }: Props) => {
  const { value: isOpen, toggle, setFalse: close } = useBoolean(false);

  return (
    <NavMenuContext.Provider value={{ isOpen, toggle, close }}>
      {children}
    </NavMenuContext.Provider>
  );
}

// Custom hook to use the context
const useNavMenuContext = () => {
  const context = useContext(NavMenuContext);
  if (!context) {
    throw new Error('useNavMenuContext must be used within a NavMenuProvider');
  }
  return context;
}

export { NavMenuProvider, useNavMenuContext };