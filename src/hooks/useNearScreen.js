import { useEffect, useRef, useState } from 'react'

export default function useNearScreen({externalRef, once=false}={externalRef:null}){

    const elementRef = useRef()
    const[isNearScreen, setIsNearScreen] = useState(false)

    useEffect(()=>{
        const elementToUse = externalRef ? externalRef.current : elementRef.current
       let observer
        const onChange = (entries, observer)=>{
            entries.map(entry=>{
                
                if(entry.isIntersecting){
                    setIsNearScreen(true)
                    !once&&observer.disconnect()
                }else{
                    once && setIsNearScreen(false)
                }
                return ""
            })
            
        }
        Promise.resolve(typeof IntersectionObserver === undefined 
            ? import("intersection-observer")
            : IntersectionObserver
            ).then(()=>{
                observer = new IntersectionObserver(onChange,{
                    rootMargin:"2px"
                })
                if(elementToUse){
                    console.log(elementToUse)
                    observer.observe(elementToUse)
                }
                
            })
          return()=>observer && observer.disconnect()
    },[externalRef,once])
    return {isNearScreen, elementRef}
} 