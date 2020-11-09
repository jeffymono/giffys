import {useEffect, useState, useContext} from 'react'
import { getSingleGif } from 'services/getSingleGif'
import Context from 'context/GifContext'

export function useSingleGif({id}){
    const {gifs} = useContext(Context)
    const gifContext = gifs.find(gif=>gif.id===id)

    const[gif,setGif] = useState(gifContext)
    useEffect(()=>{
        if(!gifContext){
            getSingleGif({id}).then(gif=>{
                setGif(gif)
            })
        }
    },[id, gifContext])
    return gif
}