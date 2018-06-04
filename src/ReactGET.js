import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

 class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }


          render() {
  return (
    <ul>
      { this.state.persons.map(person => <li>{person.name}</li>)}
    </ul>
  )
}
}


ReactDOM.render(<PersonList />, document.getElementById('root'))
