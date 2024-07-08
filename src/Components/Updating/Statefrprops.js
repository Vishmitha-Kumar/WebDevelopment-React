import React from 'react';

class Statefrprops extends React.Component{
    constructor(props){
        super(props);
        this.state={
            car:'Audi'
        };
    }
    static getDerivedStateFromProps(props,state){
        return{car:props.c};
    }
    fun=()=>{
        this.setState({
            car:'Tata'
        })
    }
    render(){
        return(
            <>
            <h1>One of the most expensive car in India is {this.state.car}</h1>
            <input type="button" value='click'onClick={this.fun}></input>
            </>
        );
    }
}
export default Statefrprops;

Statefrprops.defaultProps={c:'BMW'}