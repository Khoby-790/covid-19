import * as React from 'react';

export const Context = React.createContext();

export default ({children}) => {
  const [country, selectCountry] = React.useState({
    name: 'Ghana',
    alpha2Code: 'GH',
  });

  const [countrieSelector, setCountriesSelector] = React.useState(false);

  return (
    <Context.Provider
      value={{
        country,
        selectCountry,
        countrieSelector,
        setCountriesSelector,
      }}>
      {children}
    </Context.Provider>
  );
};
