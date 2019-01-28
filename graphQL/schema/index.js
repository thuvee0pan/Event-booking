const { buildSchema } = require('graphql');

module.exports =  buildSchema(`
type Event {
    _id:ID!
    title:String!
    description:String!
    price:Float!
    date:String!
    creator: User!
}
type User {
    _id:ID!
    email:String!
    name:String!
    password:String!
    createdEvent: [Event!]
}
type Booking {
    _id:ID!
    event: Event!
    user: User!
    createdAt: String!
    updatedAt: String!
}
type AuthData {
    userID: ID!
    token: String!
    tokenExpiration: Int!
}
input UserCreate {
    
    email:String!
    name:String!
    password:String!
}

input EventInput {
    title:String!
    description:String!
    price:Float!
    date:String!
} 


type RootQuery {
    events: [Event!]!
    bookings : [Booking!]!
    login(email:String!,password:String!): AuthData!
}
type RootMutation {
    createEvent(EventInput: EventInput): Event
    createUser(UserCreate:UserCreate):User
    bookEvent(eventId: ID!) :Booking
    cancelBooking(bookingID: ID!): Event
} 

schema {
    query: RootQuery
    mutation: RootMutation
}
`)