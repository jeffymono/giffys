import {URL,API_KEY} from './settings'

export function getSingleGif({id}){
    return fetch(`${URL}/gifs/${id}?api_key=${API_KEY}`)
    .then(response=>response.json())
    .then(gif=>{
        const {id, title,images} = gif.data
        const {url} = images.downsized_medium
        return {id,title, url}
    })
}