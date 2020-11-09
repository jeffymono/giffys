import React from "react";
import Gif from "../Gif";
import './ListOfGifs.css'

export default function ListOfGifs({gifs}) {

  return (
    <div className="ListOfGifs">
      {gifs.map(({id,title,url, ...moreObject}) => {
        return <Gif key={id} id={id} title={title} url={url} moreObject={moreObject}/>;
      })}
    </div>
  );
}
