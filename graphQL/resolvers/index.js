const authResolver = require('./auth');
const bookingResolver = require('./booking');
const eventsResolver = require('./events');
// const Resolver = require('./auth');
const rootResolver = {
    ...authResolver,
    ...bookingResolver,
    ...eventsResolver
}
module.exports = rootResolver;