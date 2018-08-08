export const GET_COUNTRIES = 'GET_COUNTRIES',
             GET_COUNTRY = 'GET_COUNTRY',
             DELETE_COUNTRY = 'DELETE_COUNTRY',
             SEARCH_COUNTRIES = 'SEARCH_COUNTRIES',
             SET_CONTINENT = 'SET_CONTINENT';

export const countries = {
  getCountries: () => {
    return {
      type: GET_COUNTRIES
    }
  },

  deleteCountry: (id) => {
    return {
      type: DELETE_COUNTRY,
      id
    };
  },

  getCountry: (id) => {
    return {
      type: GET_COUNTRY,
      id
    }
  },

  searchCountries: (searchText) => {
    return {
      type: SEARCH_COUNTRIES,
      searchText
    }
  },

  setContinent: (name) => {
    return {
      type: SET_CONTINENT,
      name
    }
  }
}