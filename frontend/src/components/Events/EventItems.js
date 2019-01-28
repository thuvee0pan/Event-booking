import React from 'react'

const EventItems = (props) => {
  return (
   
       <div key={props.event._id}  className="card  m-1 bg-dark text-light">
                <div className="card-body">
                  <h5 className="card-title"> {props.event.title}</h5>
                        <span className="badge badge-secondary">{props.event.date}</span><br/>    
                </div>
              </div>
    
  )
}

export default EventItems
