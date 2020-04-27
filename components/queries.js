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

export const Country_DATA = gql`
  query byCountry($country: String!) {
    country(name: $country) {
      country
      countryInfo {
        _id
        lat
        long
        flag
        iso2
        iso3
      }
      continent
      result {
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
  }
`;
