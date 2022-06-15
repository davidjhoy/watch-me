import React from 'react';
import ShowCard from './ShowCard';

function ShowList({shows, setShowListClick, onShowDelete}) {
    const onShowClicked = ()=>{
        console.log("Hi")
    }
    
    
    return(
        <div className="show-container">
            {shows.map((show)=>{
                return (<ShowCard key ={show.id} show = {show} onShowClicked = {setShowListClick} onShowDelete = {onShowDelete}/>)
            })}
        </div>
    );
}

export default ShowList;