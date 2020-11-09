import {URL,API_KEY} from './settings'
export function getGifs({ keyword="pandas",limit=15,page=0 }={}) {
  
  return fetch(
    `${URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page*limit}&rating=g&lang=en`
  )
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      const gifs = data.map((gif) => {
        const { images, title, id } = gif;
        const { url } = images.downsized_medium;
        return { url, title, id };
      });
      return gifs;
    });
}
