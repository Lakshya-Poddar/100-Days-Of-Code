import React,{useState} from 'react'

function NewSongForm({addSong}) {
    const [title,setTitle] = useState('');


    const handleSubmit =(event)  =>{
        event.preventDefault()
        addSong(title)
        setTitle('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>SONG NAME</label>
            <input type="text" value={title} required onChange={(event)=>{setTitle(event.target.value)}} />
            <input type="submit" value="add song" />
        </form>
    )
}

export default NewSongForm
