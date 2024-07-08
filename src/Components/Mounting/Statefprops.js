import React from 'react';

class Statefprops extends React.Component{
    constructor(props){
        super(props);
        this.state={
            car:'Audi'
        };
    }
    static getDerivedStateFromProps(props,state){
        return{car:props.c};
    }
    render(){
        return(
            <>
            <h1>One of the most expensive car in India is {this.state.car}</h1>
            </>
        );
    }
}
export default Statefprops;

Statefprops.defaultProps={c:'BMW'}