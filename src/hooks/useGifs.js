import { useContext, useEffect, useState } from "react";
import Context from "../context/GifContext";
import { getGifs } from "../services/getGifs";

const PAGE_INITIAL = 0
export function useGifs({keyword}={keyword:null}) {
  const {gifs, setGifs} = useContext(Context)
  const [loading, setLoading] = useState(false)
  const [page, setPage] =useState(PAGE_INITIAL)

  const keywordToUse = keyword || localStorage.getItem("lastKeyword")||"random"

  useEffect(() => {
    setLoading(true)
    getGifs({ keyword:keywordToUse }).then((gifs) => {
        setGifs(gifs)
        setLoading(false)
        localStorage.setItem("lastKeyword",keywordToUse)
    });
  }, [keyword,keywordToUse,setGifs]);

  useEffect(()=>{
    if(page===PAGE_INITIAL)return

    getGifs({keyword:keywordToUse,page}).then(gifs=>{
      setGifs(prevGifs=>prevGifs.concat(gifs))
    })
  },[keywordToUse, page, setGifs])

  return {gifs, loading ,setPage}
}
