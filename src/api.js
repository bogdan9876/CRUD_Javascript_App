import axios from 'axios';

export const getFilteredLamps = async ({ searchTerm, sort, idOption, price }) => {
  try {
    const response = await axios.get('http://localhost:8080/api/lamps/filtered', {
      params: {
        searchTerm,
        sort: sort || null,
        idOption: idOption || null,
        price: price || null,
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export const getLampById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:8080/api/lamps/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching lamp details:', error);
    throw error;
  }
};
