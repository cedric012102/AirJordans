import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css'

class App extends Component {
    constructor() {
        super() //super calls the constructor of the component
        this.state = {
            jordans: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ jordans: users }));
        
    }

    onSearchChange = (event) => { //anytime you use this. use arrow functions
        this.setState({ searchfield: event.target.value }) //onsearchchange is a function to help with the communication.
    }
    render() {
        const { jordans, searchfield } = this.state;
        const filterJordans = jordans.filter(jordan => {
            return jordan.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !jordans.length ?
             <h1>Loading</h1> :
          (
            <div className='tc'>
                <h1 className='f1'>Air Jordans</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                    <CardList jordans={filterJordans}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
        )
        }
    }

export default App;

//parent file
//being imported in index.js
//if its an object say this.
//state lives in parent component
//now we can access jordans from state
// jordans: jordans and searchfield: '' help searchbox and cardlist communicate with eachother.