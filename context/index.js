import * as React from 'react';

export const Context = React.createContext();

export default ({children}) => {
  const [country, selectCountry] = React.useState({
    name: 'Ghana',
    alpha2Code: 'GH',
  });

  return (
    <Context.Provider
      value={{
        country,
        selectCountry,
      }}>
      {children}
    </Context.Provider>
  );
};
