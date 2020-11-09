import React from 'react'
import ListOfGifs from 'components/ListOfGifs'
import { useGifs } from 'hooks/useGifs'
import LazyTrending from 'components/trendingSearches'
import SearchForm from 'components/SearchForm'
import { useSeo } from 'hooks/useSeo'
import {Helmet} from 'react-helmet'

export default function Home(){

    const {gifs} = useGifs()
    return <>
    <Helmet>
        <title>Home | Giffys</title>
        <meta name="description" content="Buscador de gif, cualquier tipo de gif."/>
    </Helmet>
        <SearchForm/>
    <h4>Última Búsqueda</h4>
        <ListOfGifs gifs={gifs}/>
        <LazyTrending/>
    </>
}