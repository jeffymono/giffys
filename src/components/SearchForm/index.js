import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'

function SearchForm(){
    
    const [keyword, setKeyword] = useState("")
    const history = useHistory()

    const handleOnChange = (e)=>{
        setKeyword(e.target.value)
    }

    const handleOnSubmit = (e)=>{
        e.preventDefault()
        history.push(`/gifs/${keyword}`)
    }

    return <>
            <form onSubmit={handleOnSubmit}>
            <button>Buscar</button>
            <input placeholder="Buscar Gif" onChange={handleOnChange}/>
        </form>
    </>
}
export default React.memo(SearchForm)