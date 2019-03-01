import React from 'react'
import EventItems from './EventItems';
// import Model from '../models/Model';

const EventList = (props) => {
   
      const events = props.events.map(event => {
           return (
                 <ul key={event._id}>
                  <EventItems event={event} authUserID={props.authUserID} bookEvent={props.bookEvent} >
                       <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#viewDetails" onClick={()=>props.viewEvent(event)
                            }>
                                View Details
                            </button>
                  </EventItems>
                     </ul>
            );
      });
    return <div>{events}</div>
    
}

export default EventList
