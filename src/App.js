import React,{Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
class App extends Component {
  
  constructor(){
    super();
    this.state = {
      moonsters : [],
      searchField:''
    }
  }

  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({moonsters:users}));
  }

  handleChange = e =>{
    this.setState({searchField:e.target.value})
  }

  render(){
    const {moonsters, searchField} = this.state;
    const filteredMonst = moonsters.filter(moonster=>
          moonster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox placeholder="Search moonster" handleChange={this.handleChange}/>
        <CardList moonsters={filteredMonst}/>
    </div>
    )
  }
      
}

export default App;
