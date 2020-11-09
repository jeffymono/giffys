import React, { Suspense } from 'react'
import useNearScreen from 'hooks/useNearScreen'
const TrendingSearches = React.lazy(()=>import('./TrendingSearches'))

export default function LazyTrending(){
    const {isNearScreen, elementRef} = useNearScreen()
    
    return <div ref={elementRef}>
        <Suspense fallback={"Loading..."}>
        {
            isNearScreen ? <TrendingSearches/> : null
        }
        </Suspense>
        
    </div>
}
