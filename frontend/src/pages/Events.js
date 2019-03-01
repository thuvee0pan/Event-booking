/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-duplicate-props */
import React, { Component } from 'react';
import { fetchEvent, createEvent,bookEvent } from '.././Store/actions/eventAction'
import { connect } from 'react-redux'

import Model from '../components/models/Model'
import EventList from '../components/Events/EventList';
class EventsPage extends Component{
    constructor(props) {
        
        super(props);
        this.state ={
            selectedEvent : null
        }
        this.titleElRef = React.createRef();
        this.descriptionElRef = React.createRef()
        this.priceElRef = React.createRef()
        this.dateElRef = React.createRef()
    }
    componentWillMount() { 
        this.props.fetchEvent();
    }
    modelCancel = () => {
       console.log('cancel');
    }
    modelConfirm = () => {
        console.log('Confirm');
        const eventData = {
            title: this.titleElRef.current.value,
            description: this.descriptionElRef.current.value,
            price: + this.priceElRef.current.value,
            date: this.dateElRef.current.value,
            creator:this.props.user.userID
        }
        if (eventData.title.trim().length === 0 ||eventData.description.trim().length === 0||eventData.price.length === 0 ||eventData.date.trim().length === 0 ||eventData.creator.trim().length === 0) {
            return ;
        }
        this.props.createEvent(eventData)
        this.props.fetchEvent()
       

    }
    bookEvent = () => {
        console.log('Book Event');
        if (!this.props.user.token) {
            this.setState({
                selectedEvent : null
           })
            return;
        }
        this.props.bookEvent({ id: this.state.selectedEvent._id })
        this.setState({
            selectedEvent : null
       })

    }
    viewEvent = (e) => {
        console.log(this.state.selectedEvent);
        this.setState({
            selectedEvent: e
        })
        console.log(this.state.selectedEvent);

        
    }
    modelView = () => {
        this.setState({
            selectedEvent : null
       })
    }
    render() {
        
        return (
            <div>
                {this.props.user.token && (
                    <div className="card bg-dark mt-2 text-light">
                    <div className="card-body text-center">
                        <p>Create a New Event</p>
                        <div className="text-dark">
                                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#AddEvent">
                                Create Event
                                </button>
                        <Model
                            title="Add Event"
                            canCancel
                            canConfirm
                            CancelB = {this.modelCancel}
                            ConfirmB  = {this.modelConfirm}
                            confirmText="Create"
                            id="AddEvent"
                        >
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="Title">Title</label>
                                            <input ref={this.titleElRef} type="text" className="form-control" id="Title" placeholder="Enter title" required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="description">Description</label>
                                        <textarea ref={this.descriptionElRef} className="form-control" id="description" placeholder="Enter Description" required/>
                                    </div>
                                        <div className="form-group">
                                            <label htmlFor="price">Price</label>
                                                <input ref={this.priceElRef} type="number" className="form-control" id="price" placeholder="Enter Price" required/>
                                                </div>     
                                        <div className="form-group">
                                        <label htmlFor="date">date</label>
                                            <input ref={ this.dateElRef} type="datetime-local" className="form-control" id="date" required/>
                                    </div>         
                            
                                 </form> 
                        </Model>
                            </div>
                            </div>
                        </div>
                )}
                       
                        <div className=" mt-4">
                            <EventList events={this.props.events} authUserID={this.props.user.userID} viewEvent={this.viewEvent}/>
                        </div>
                {this.state.selectedEvent && <Model
                    title="Event Details"
                    CancelB = {this.modelView}
                    ConfirmB={this.bookEvent}
                    confirmText={this.props.user.token ? 'Book':'Confirm'}
                    canConfirm
                    canCancel
                    id="viewDetails"
                >
                    <div className="text-center">
                        <h1>{this.state.selectedEvent.title}</h1>
                        <p>{this.state.selectedEvent.description}</p>
                        <span className="badge badge-primary">$ {this.state.selectedEvent.price}</span><br />
                    </div>
                </Model>}
            

                </div>
                    
            );
        
        }
    
}
            
const mapStateToProps = state => ({
    events: state.events.events,
    user:state.auth
})
export default connect(mapStateToProps, { fetchEvent, createEvent,bookEvent })(EventsPage);