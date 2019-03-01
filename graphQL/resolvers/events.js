const { dateToString } = require('../../helpers/date')
const Event = require('../../models/event');
const User = require('../../models/user');

const { transformEvent } = require('./merge')

module.exports = {
    events: async () => {
        console.log('work');
        
        try {
            const events = await Event.find()
           return events.map(event => {
                return transformEvent(event)
            })
          
        } catch (error) {
            throw error
        }
    
    },
    createEvent: async (args, req) => {
        if (!req.isAuth) {
            throw new Error ('Unauthenticated! ')
        }
        const event = new Event({
                title: args.EventInput.title,
                description: args.EventInput.description,
                price: +args.EventInput.price,
                date: dateToString(args.EventInput.date),
                creator : req.userID
        })
        let createdEvent;
        try {
            const res = await event.save();
            createdEvent =  transformEvent(res)
            const creator = await User.findById( req.userID);

            if (!creator) {
                throw new Error('User do not exists.')
            }
            creator.createdEvent.push(event)
            await creator.save();
            return createdEvent
        } catch (error) {
            throw error
        }
    },
}