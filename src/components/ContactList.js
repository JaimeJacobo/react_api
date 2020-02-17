import React, {Component} from 'react'


class ContactList extends Component{

  state = {
    people: [],
    loaded: false
  }

  componentDidMount(){
    this.getPeopleFromApi()
  }

  getPeopleFromApi(){
    fetch('https://randomuser.me/api/?results=5')
    .then((fetchResponse)=>{
      return fetchResponse.json();
    })
    .then((dataJSON)=>{
      this.setState({
        people: dataJSON.results,
        loaded: true
      })
    })
    .catch(()=>{
      console.log('There has been an error calling the API');
    })
  }

  renderPeople(){
    return this.state.people.map((person, index)=>{
      return(
        <tr key={index}>
          <th>{person.name.first}</th>
          <th>{person.name.last}</th>
          <th>{person.location.city}</th>
          <th>{person.location.country}</th>
        </tr>
      )
    })
  }



  render(){
    return(
      <div>
          {
            this.state.loaded === false
            ? <p>Loading info...</p>
            :(
              <table style={{width: '100%'}}>
                <tbody>
                  <tr>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>City</th>
                    <th>Country</th>
                  </tr>
                  {this.renderPeople()}             
                </tbody>
              </table>
            )
          }
      </div>
    )    
  }
}


export default ContactList