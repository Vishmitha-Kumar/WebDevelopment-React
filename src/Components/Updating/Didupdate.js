import React from "react";

class Didupdate extends React.Component{
    constructor(props){
        super(props);
        this.state={flower:"Rose"};
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({flower:'Lily'})
        },2000)
    }
    
   componentDidUpdate(){
    document.getElementById("div1").innerHTML="Updated:"+this.state.flower;
   }


    render(){
        return(
            <>
            <h1>Flower:{this.state.flower}</h1>
            <div id="div1"></div>
            </>
        );
    }

}
export default Didupdate;