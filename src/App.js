import React from "react";
import Cardlist from "./Cardlist";
import SearchBox from './SearchBox';
import {robots} from './robots';




class App extends React.Component{
    constructor() {
        super()
        this.state={
            robots:robots,
            searchfield:''
        }
    }

    onsearchChange=(event)=> {
        this.setState({searchfield:event.target.value})
        
       
        }

    
    render() {
        const filterrobot=this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())

        })
        return(
            <div className="tc">
                <h1>RobotFriend</h1>
                <SearchBox searchchange={this.onsearchChange}/>
                <Cardlist robots={filterrobot}/>
    
            </div>
            
        );

    }
        
    
}

export default App