/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-duplicate-props */
import React, { Component } from 'react';
import { fetchEvent, createEvent } from '.././Store/actions/eventAction'
import { connect } from 'react-redux'

import Model from '../components/models/Model'
import EventList from '../components/Events/EventList';
class EventsPage extends Component{
    constructor(props) {
        
        super(props);

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
        
    }
    render() {
        
        return (
            <div >
                {this.props.user.token && (<div className="card bg-dark mt-2 text-light">
                    <div className="card-body text-center">
                        <p>Create a New Event</p>
                        <Model
                            title="Add Event"
                            canCancel
                            canConfirm
                            canCancel = {this.modelCancel}
                            canConfirm  = {this.modelConfirm}
                            buttonText="Create"
                            confirmText="Create"
                            id="AddEvent"
                            IDtarget="#AddEvent"
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
                </div>)}
               
                <div className=" mt-4">
                    <EventList events={this.props.events} authUserID={this.props.user.userID} bookEvent={this.bookEvent}/>
                </div>
                
            

            </div>
            );
        
    }
}
const mapStateToProps = state => ({
    events: state.events.events,
    user:state.auth
})
export default connect(mapStateToProps, { fetchEvent, createEvent })(EventsPage);