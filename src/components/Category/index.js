import React from 'react'
import { Link } from 'react-router-dom'
import './Category.css'

export default function Category({trends}){
    return <div className="Category">
        <h4>Tendencias</h4>
        <ul>
        {
            trends.map(trend=>{
                return <li>
                        <Link to={`/gifs/${encodeURI(trend)}`} key={trend}>{trend}</Link>
                    </li>
               
            })
        }
        </ul>
    </div>
}