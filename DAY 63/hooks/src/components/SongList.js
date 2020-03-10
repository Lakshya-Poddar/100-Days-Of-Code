import React , {useState , useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid';
import NewSongForm from './NewSongForm';
function SongList() {
   const [songs,setSongs] = useState(
        [
            {title: 'almost home ',id : uuidv4()},
            {title: 'memory gospel',id : uuidv4()},
            {title: 'this wild darkness',id : uuidv4()}
        ]
    );
    const [age,setAge] =useState(20)

    const addSong =(title)=>{
        setSongs([...songs,{title:title,id:uuidv4()}])
    }
    useEffect(()=>{
        console.log('useEffect hook ran' , songs)
    },[songs])
    useEffect(()=>{
        console.log('useEffect hook ran' , age)
    },[age])

    return (
        <div className="song-list">
                    <NewSongForm addSong={addSong} />
            <ul>
                {songs.map(song =>{
                    return(<li key={song.id}>{song.title} {song.id}</li>)
                })}
            </ul>
                <button onClick={()=>setAge(age+1)}>add 1 to age :{age}</button>
        </div>
    )
}

export default SongList
