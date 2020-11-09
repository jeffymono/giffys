import {useEffect} from 'react'

export function useSeo({title,description}){

    useEffect(()=>{
        document.title = `${title} ||Giffys`
    },[title])

    useEffect(()=>{
        document.querySelector(`meta[name='description']`).setAttribute('content',description)
    },[description])
}
