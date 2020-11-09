import {useEffect, useState} from 'react'
import {getTrending} from '../services/getTrending'
export function useTrends(){
    const[trends, setTrends] = useState([])
    
    useEffect(()=>{
        getTrending().then(trend=>{
            setTrends(trend)
        })
    },[])

    return {trends}
}