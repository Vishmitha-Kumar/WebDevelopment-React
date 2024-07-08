import React from "react";

class Getsnap extends React.Component{
    constructor(props){
        super(props);
        this.state={flower:"Rose"};
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({flower:'Lily'})
        },2000)
    }
    
    getSnapshotBeforeUpdate(prevProps,prevState){
        document.getElementById("div1").innerHTML="Before update:"+prevState.flower;
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
export default Getsnap;