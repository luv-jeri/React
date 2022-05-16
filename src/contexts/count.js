import { createContext, useState } from 'react';

export const count = createContext();

const { Provider } = count;

const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Provider
        value={{
          count,
          setCount,
        }}
      >
        {children}
      </Provider>
    </div>
  );
};

export default CountProvider;
