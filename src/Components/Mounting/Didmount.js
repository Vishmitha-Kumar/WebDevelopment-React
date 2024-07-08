import React from "react";

class Didmount extends React.Component{
    constructor(props){
        super(props);
        this.state={flower:"Rose"};
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({flower:'Lily'})
        },2000)
    }
    render(){
        return(
            <>
            <h1>Flower:{this.state.flower}</h1>
            </>
        );
    }

}
export default Didmount;