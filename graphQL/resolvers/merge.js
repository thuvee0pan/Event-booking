const Event = require('../../models/event');
const User = require('../../models/user');
const { dateToString } = require('../../helpers/date')
const DataLoader = require('dataloader');

const eventLoader = new DataLoader((eventIds) => {
    return events(eventIds);
});
const userLoader = new DataLoader((userIds) => {
    return User.find({ _id: { $in: userIds } });
})


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
        const user = await userLoader.load(userID.toString())
        return {
            ...user._doc,
            _id: user.id,
            createdEvent:()=> eventLoader.loadMany( user._doc.createdEvent)
        }
        
    } catch (error) {
        throw error
    }
}
const singleEvents = async eventId => {
    try {
        // const event = await Event.findById(eventId);
        const event = await eventLoader.load(eventId.toString());
        return  event
      
       
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