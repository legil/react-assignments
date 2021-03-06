import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    usernames:[
      {name: 'Lil'},
      {name: 'Jill'},
      {name: 'Mick'}
    ]
  }


  switchNameStateHandler = (newName) => {
    this.setState({
      usernames: [
        {name: newName},
        {name: 'New Name!'},
        {name: 'New Name!'}
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      usernames: [
        {name: 'Becky2'},
        {name: 'Jillian'},
        {name: event.target.value}
      ] 
    })
  }
  

  render() {
    const styling = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor:'pointer'
    };

    return (
      <div className="App">
        <h1>This is the first React Assignment</h1>
        <ol className = "tasklist">
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>
        <button 
          style = {styling}
          onClick={() => { this.switchNameStateHandler('Becky')}}
          >Switch Name
        </button>
        
        <UserInput changed = {this.nameChangeHandler}></UserInput>
        
        <UserOutput username = {this.state.usernames[0].name}
                    click = {this.switchNameStateHandler.bind(this, 'Beck')}/>
        <UserOutput username = {this.state.usernames[1].name}
                    />
        <UserOutput username = {this.state.usernames[2].name}
                    />

      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
