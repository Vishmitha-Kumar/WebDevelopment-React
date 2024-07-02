import React from 'react';

class Props extends React.Component{

    render(){
        return(
             <>
             <h1>{this.props.name}</h1>
             </>
        );
    }
}
export default Props;
Props.defaultProps={name:'Sritha'}