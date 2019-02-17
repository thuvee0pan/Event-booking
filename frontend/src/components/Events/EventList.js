import React from 'react'
import EventItems from './EventItems';
// import Model from '../models/Model';

const EventList = (props) => {
      const events = props.events.map(event => {
           return (
                 <ul key={event._id}>
                     <EventItems event={event} authUserID={props.authUserID} bookEvent={props.bookEvent} ></EventItems>
                     </ul>
            );
      });
    return <div>{events}</div>
    
}

export default EventList
