import { useSeo } from 'hooks/useSeo'
import { useSingleGif } from 'hooks/useSingleGif'
import React from 'react'
import { useParams } from 'react-router-dom'
import Gif from '../../components/Gif'
import {Helmet} from 'react-helmet'

export default function Detail(){
    const { id } = useParams()
    const gif = useSingleGif({id})
    const title = gif ? gif.title : ""
   
    return <>
    <Helmet>
<title>{title}</title>
<meta name="description" content={`Aquí se muestra los detalles de ${title}`}/>
    </Helmet>
    <Gif {...gif}/>
    </>
}