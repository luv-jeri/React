import { createContext, useState, useContext } from 'react';

export const count = createContext();

const { Provider } = count;

export const useCount = () => {
  const count_ = useContext(count);
  return {
    count: count_.count,
    setCount: count_.setCount,
  };
};

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
