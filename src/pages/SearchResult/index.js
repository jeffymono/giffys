import React, { useCallback, useEffect, useRef } from "react";
import ListOfGifs from "components/ListOfGifs";
import { useGifs } from "hooks/useGifs";
import { useParams } from "react-router-dom";
import useNearScreen from "hooks/useNearScreen";
import {Helmet} from 'react-helmet'
export default function SearchResult() {
  let { keyword } = useParams();
  const externalRef = useRef()
  const { gifs, loading ,setPage } = useGifs({ keyword });
  const title = gifs ? `Se han encontrado ${gifs.length} resultados de ${keyword}` : ""
  const {isNearScreen} = useNearScreen({externalRef:loading ? null :externalRef, once:true})
  const nextPageGifs=useCallback(()=>setPage(page=>page+1),[setPage])
  useEffect(()=>{

    if(isNearScreen){
      nextPageGifs()
    }
  },[isNearScreen,setPage,nextPageGifs])
  return loading 
  ? <h4>Loading</h4>
  : <>
  <Helmet>
<title>{title}</title>
<meta name="description" content={`Aquí se muestra la ista de resultados de ${keyword}`}/>
  </Helmet>
      <h4>{keyword}</h4>
      <ListOfGifs gifs={gifs} />
      <div ref={externalRef}></div>
    </>
}
