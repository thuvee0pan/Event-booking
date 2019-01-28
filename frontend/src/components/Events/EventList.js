import React from 'react'
import EventItems from './EventItems';

const EventList = (props) => {
      const events = props.events.map(event => {
            return (
                 <EventItems event={event} authUserID = {props.authUserID}></EventItems>
            );
      });
    return <div>{events}</div>
    
}

export default EventList
