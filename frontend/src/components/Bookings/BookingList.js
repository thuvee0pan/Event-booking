import React from 'react'
const BookingList = props => {
        return (
            <ul>
            
                {props.bookings.map(booking => (
                    <div key={booking._id} className="card  m-1">
                    <div className="card-body row">
                        <div className="col-6">
                                <h5 className="card-title display-5"> {booking.event.title}</h5>
                                <p>{new Date(booking.createdAt).toLocaleDateString()}</p>
                        </div>
                                <button className="btn btn-danger" onClick={props.onDelete.bind(this, booking._id)}>Cancel</button>
                        </div>
                        
                        </div>
                ))}
        </ul>
         );
    
}

export default BookingList
