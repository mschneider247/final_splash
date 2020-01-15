require('dotenv').config();
const API_KEY = `d2164d70166e799c86e3d7217024f60ab695c411c49bb9c32081cecc5816c3a0`;

export const getImages = async (searchQuery, page, perPage) => {
  const pass = API_KEY;
  const rootURL = `https://api.unsplash.com/search/photos?`;
  const key = `client_id=${pass}`;
  const query = `query=${searchQuery}`;
  const orientation = 'orientation=landscape';
  const url = `${rootURL}${key}&${query}&${orientation}&page=${page}&per_page=${perPage}`;
  const response = await fetch(url)
  if (!response.ok) {
    throw Error(`Error searching`)
  }
  const data = await response.json()
  return data.results
}
