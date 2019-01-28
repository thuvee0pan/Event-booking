const Booking = require('../../models/booking');
const Event = require('../../models/event');
const { transformBooking , transformEvent} = require('./merge')



module.exports = {
    bookings: async (args, req) => {
        if (!req.isAuth) {
            throw new Error ('Unauthenticated! ')
        }
        try {
            const bookings = await Booking.find();
            return bookings.map(booking => {
                return transformBooking(booking)
            })
        } catch (error) {
            throw error
        }
    },
    bookEvent: async (args, req) => {
        if (!req.isAuth) {
            throw new Error ('Unauthenticated! ')
        }
        try {
            const fetchedEvent = await Event.findById({ _id: args.eventId });
            const booking = new Booking({
                user:  req.userID,
                event :fetchedEvent
            })
            const res = await booking.save();
            return transformBooking(res)
        } catch (error) {
            throw error
        }
    },
    cancelBooking: async (args, req) => {
        if (!req.isAuth) {
            throw new Error ('Unauthenticated! ')
        }
        try {
            const booking = await Booking.findById(args.bookingID).populate('event');
            const event =  transformEvent(booking.event)
            await Booking.deleteOne({ _id: args.bookingID })
            return event
        } catch (error) {
            throw error
        }
    }

}