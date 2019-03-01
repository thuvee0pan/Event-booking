import React from 'react'

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
                    props.children
                  }
                 </div>
                </div>
              </div>
    
  )
}

export default EventItems
