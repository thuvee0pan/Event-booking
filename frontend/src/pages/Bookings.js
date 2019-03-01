import React, { Component } from 'react';
import { fetchBookings, cancelBooking } from '.././Store/actions/eventAction'
import { connect } from 'react-redux'
import BookingList from '../components/Bookings/BookingList';

class BookingsPage extends Component{
    componentWillMount() {
        this.props.fetchBookings()
    }
    cancelBooking = (bookingId) => {

        this.props.cancelBooking({ id: bookingId })
        this.props.fetchBookings()
    }
    render() {
        return (
            <div>
                <BookingList bookings={this.props.bookings} onDelete={this.cancelBooking} ></BookingList>
            </div>
            );
        
    }
}

const mapStateToProps = state => ({
    bookings: state.events.bookings,
    user:state.auth
})
export default connect(mapStateToProps, { fetchBookings, cancelBooking})(BookingsPage);
