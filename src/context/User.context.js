import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }

  return context;
};

export default function Provider({ children }) {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <UserContext.Provider
      value={{
        isLogged,
        setIsLogged,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
