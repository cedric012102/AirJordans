import React, {useState, useEffect} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css'

function App() {
    // constructor() {
    //     super() //super calls the constructor of the component
    //     this.state = {
    //         jordans: [],
    //         searchfield: ''
    //     }
    // }
    const [jordans, setJordans] = useState([]);
    const [searchfield, setSearchfield] = useState('');
    const [count, setCount] = useState(0);

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => response.json())
    //     .then(users => this.setState({ jordans: users }));
        
    // }
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {setJordans(users)});
        console.log(count);
    },[count]); //only run if count changes.

    const onSearchChange = (event) => { //anytime you use this. use arrow functions
        setSearchfield(event.target.value) //onsearchchange is a function to help with the communication.
    }
        
        const filterJordans = jordans.filter(jordan => {
            return jordan.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !jordans.length ?
             <h1>Loading</h1> :
          (
            <div className='tc'>
                <h1 className='f1'>Air Jordans</h1>
                <button onClick={()=>setCount(count+1)}>Click Me!</button>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                    <CardList jordans={filterJordans}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
        )
        }
    

export default App;

//parent file
//being imported in index.js
//if its an object say this.
//state lives in parent component
//now we can access jordans from state
// jordans: jordans and searchfield: '' help searchbox and cardlist communicate with eachother.