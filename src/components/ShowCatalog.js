import React,{ useState, useEffect} from 'react';
import MyWatchList from './MyWatchList'
import ShowList from './ShowList'

function ShowCatalog() {
    const [shows, setShows] = useState([])
    const [watchList, setWatchList] = useState([])
  
  
    useEffect(()=>{
      fetch('http://localhost:8081/shows')
      .then((r)=> r.json())
      .then((data)=> setShows(data))
    },[])
  
    const setShowListClick = (show) =>{
        setWatchList([...watchList, show])
    }

    const setWatchListClick = (show) =>{
        
        let newList = watchList.filter((item)=>{
            return show.id !== item.id
        }) 
        setWatchList(newList)
    }

    const onShowDelete = (show) =>{
        fetch(`http://localhost:8081/shows/${show.id}`,{method: 'DELETE'})
        .then(console.log("Deleted"))
        
        let newList = watchList.filter((item)=>{
            return show.id !== item.id
        }) 
        setWatchList(newList)

        let newShowList = shows.filter((item)=>{
            return show.id !== item.id
        }) 
        setShows(newShowList)

    }
    return(
        <>
            <MyWatchList watchList = {watchList} setWatchListClick = {setWatchListClick} onShowDelete = {onShowDelete}/>
            <hr/>
            <ShowList shows = {shows} watchList = {watchList} setShowListClick = {setShowListClick} onShowDelete = {onShowDelete}/>
        </>
    );
}

export default ShowCatalog;