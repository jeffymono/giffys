import {URL, API_KEY} from './settings'

export async function getTrending(){
    return fetch(`${URL}/trending/searches?api_key=${API_KEY}`)
    .then(res=>res.json())
    .then(trends=>{
        const{data} = trends
        return data
    })
}