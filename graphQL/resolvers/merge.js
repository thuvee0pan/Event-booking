const Event = require('../../models/event');
const User = require('../../models/user');
const { dateToString } = require('../../helpers/date')

const events = async eventIds => {
    try {
      const events = await Event.find({ _id: { $in: eventIds } })
      return events.map(event => {
                return transformEvent(event)
        })
    } catch (error) {
        throw error
    }
    
      
}
const user = async userID => {
    try {
        const user = await User.findById(userID)
        return {
            ...user._doc,
            _id: user.id,
            createdEvent: events.bind(this, user._doc.createdEvent)
        }
        
    } catch (error) {
        throw error
    }
}
const singleEvents = async eventId => {
    try {
        const event = await Event.findById(eventId);
        return  transformEvent(event)
      
       
    } catch (error) {
        throw error
    }
    
}

const transformEvent = event => {
    return {
        ...event._doc,
        _id: event.id,
        date: dateToString(event._doc.date),
        creator:user.bind(this,event.creator)
    }
}
const transformBooking = booking => {
    return  {
        ...booking._doc,
        _id: booking.id,
        user: user.bind(this, booking._doc.user),
        event: singleEvents.bind(this,booking._doc.event),
        createdAt:dateToString(booking._doc.createdAt),
        updatedAt: dateToString(booking._doc.updatedAt)

    }
}
exports.transformBooking = transformBooking;
// exports.events = events;
exports.transformEvent = transformEvent;