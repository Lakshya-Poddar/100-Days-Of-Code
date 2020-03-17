import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import {withRoomConsumer} from '../context'
import Loading from './Loading'

function RoomsContainer({context}){
    const {loading,sortedRooms,rooms}=context;
    if(loading){
                                return <Loading></Loading>
                            }
                            return <>
                                     <RoomsFilter rooms={rooms}></RoomsFilter>
                                    <RoomsList rooms={sortedRooms}></RoomsList>
                                    
                                    </>
}

export default withRoomConsumer(RoomsContainer)


// import React from 'react'
// import RoomsFilter from './RoomsFilter'
// import RoomsList from './RoomsList'
// import {RoomConsumer} from '../context'
// import Loading from './Loading'

// function RoomsContainer() {
//     return (
//         <RoomConsumer>
//             {
//                 (value)=>{
//                     const {loading,sortedRooms,rooms}=value
//                     if(loading){
//                         return <Loading></Loading>
//                     }
//                     return <div>
//                              hello from rooms conatiner
//                             <RoomsList rooms={sortedRooms}></RoomsList>
//                             <RoomsFilter rooms={rooms}></RoomsFilter>
//                             </div>
//                 }
//             }
//         </RoomConsumer>
        
//     )
// }

// export default RoomsContainer
