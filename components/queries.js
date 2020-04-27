import gql from 'graphql-tag';

export const GLOBAL_DATA = gql`
  query {
    globalTotal {
      affectedCountries
      tests
      cases
      todayCases
      deaths
      todayDeaths
      recovered
      active
      critical
      casesPerOneMillion
      deathsPerOneMillion
      testsPerOneMillion
      updated
    }
  }
`;
