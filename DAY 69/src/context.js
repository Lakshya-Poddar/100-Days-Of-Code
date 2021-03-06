import React, { Component } from 'react'
import items from './data'

const RoomContext =React.createContext();

class RoomProvider extends Component {
    state={
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading:true
    }

getRoom=(slug)=>{
    let tempRooms = [...this.state.rooms]
    const room =tempRooms.find(room=>room.slug===slug)
    return room
}

componentDidMount(){
    let rooms = this.formatData(items)
    let featuredRooms=rooms.filter(room => room.featured ===true)
    this.setState({
        rooms:rooms,
        featuredRooms:featuredRooms,
        sortedRooms:rooms,
        loading:false
    })
    }

formatData(items){
    let tempitems=items.map(item =>{
        let id=item.sys.id
        let images=item.fields.images.map(image => image.fields.file.url);
        let room={...item.fields,images:images,id}

        return room;
    });
    return tempitems
}





    render() {
        return (
           <RoomContext.Provider value={{...this.state,getRoom:this.getRoom}}>
               {this.props.children}
           </RoomContext.Provider>
        )
    }
}

const RoomConsumer=RoomContext.Consumer;

export function withRoomConsumer(Component){
    return function ConsumerWrapepr(props){
        return <RoomConsumer>
            {value=> <Component {...props} context={value} />}
        </RoomConsumer>
    }
}

export {RoomProvider,RoomConsumer,RoomContext}
