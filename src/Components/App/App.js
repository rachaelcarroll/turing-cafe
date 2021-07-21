import React, { Component } from 'react';
import './App.css';
import { getReservations } from '../../apiCalls'

class App extends Component {
  constructor () {
    super()
    this.state = {
      reservations: []
    }
  }

  componentDidMount = () => {
    getReservations()
    .then(reservations => this.setState({ reservations: reservations })
    .catch(() => this.setState({ error: 'Oops! Something went wrong, please try again.'}))
  }


  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form />
        </div>
        <div className='resy-container'>
          <Reservations reservations = {this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
