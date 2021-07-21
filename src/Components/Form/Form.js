import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            date: '',
            time: '',
            number: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitReservation = (event, props) => {
        event.preventDefault()
        let newReso = {
            id: Date.now(),
            ...this.state
        }
        this.props.addReso(newReso)
        this.clearInputFields()
    } 

    clearInputFields = () => {
        this.setState({name: '', date: '', time: '', number: ''})
    }

    render() {
        return (
            <form className='resoForm'>
                <input 
                    type='text'
                    name='name'
                    placeholder='Full Name'
                    value={this.state.name}
                    onChange={(event) => this.handleChange(event)}
                />
                <input 
                    type='text'
                    name='date'
                    placeholder='Date'
                    value={this.state.date}
                    onChange={(event) => this.handleChange(event)}
                />
                <input 
                    type='text'
                    name='time'
                    placeholder='Time'
                    value={this.state.time}
                    onChange={(event) => this.handleChange(event)}
                />
                <input 
                    type='number'
                    name='number'
                    placeholder='# of Guests'
                    value={this.state.number}
                    onChange={(event) => this.handleChange(event)}
                />
                <button className='submitReso' 
                    onClick={(event) => this.submitReservation(event)}>
                    Make Reservation
                </button>
            </form>
        )
    }
}

export default Form;