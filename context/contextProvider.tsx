import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';

// const initialStates = {
//   chat: false,
//   cart: false,
//   userProfile: false,
//   notification: false,
// }

export interface GlobalStateInterface {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
}

const GlobalStateContext = createContext({
  activeMenu: false,
  setActiveMenu: {} as Dispatch<SetStateAction<boolean>>
});

export const ContextProvider= ({ children }: { children: React.ReactNode; }) => {
  const [ activeMenu, setActiveMenu ] = useState(true);

  return (
    <GlobalStateContext.Provider value={{ activeMenu, setActiveMenu }}>
      { children }
    </GlobalStateContext.Provider> 
  )
};

export const useStateContext = () => useContext(GlobalStateContext);
