import { click } from '@testing-library/user-event/dist/click';
import React from 'react';

class Shouldupdate extends React.Component{
    

    constructor(){
        super();
        this.state={name:'Apple'}
    }
    shouldComponentUpdate(){
        return true;
    }
    fun=()=>{
        this.setState({name:'Mango'})
    }


    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <input type='button' value='click' onClick={this.fun}></input>
            </div>
        );
    }
}
export default Shouldupdate;