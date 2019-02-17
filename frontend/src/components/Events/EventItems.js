import React from 'react'
import Model from '../models/Model';

const EventItems = (props) => {
  return (
       <div key={props.event._id} className="card  m-1">
          <div className="card-body row">
              <div className="col-6">
              <h5 className="card-title display-5"> {props.event.title}</h5>
                <span className="badge badge-primary">$ {props.event.price}</span><br/>    
              </div>
              <div className="col-6 text-right">
                  {props.event.creator._id === props.authUserID && (<p>You own this Event</p>)}
                  {props.event.creator._id !== props.authUserID &&
                     <Model
                     title="Event Details"                
                     canConfirm={props.bookEvent}
                     buttonText="View Details"
                      confirmText="Book"
                      canCancel
                    id="viewDetails"
                    IDtarget= "#viewDetails"
             >
                <div className="text-center">
                  <h1>{props.event.title}</h1>
                  <p>{props.event.description}</p>
                  <span className="badge badge-primary">$ {props.event.price}</span><br/> 
                  </div>
               </Model>
                  }
                 </div>
                </div>
              </div>
    
  )
}

export default EventItems
