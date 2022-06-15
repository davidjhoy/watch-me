import React from 'react';
import ShowCard from './ShowCard';

function MyWatchList({watchList, setWatchListClick, onShowDelete}) {
    
    return(
        <div className="watch-list-container">
            {watchList.map((show)=>{
                return(<ShowCard key = {show.id} show={show} onShowClicked = {setWatchListClick} onShowDelete={onShowDelete}/>)
            })}
        </div>
    )
}

export default MyWatchList;