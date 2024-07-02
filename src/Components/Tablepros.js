import React from 'react'

class Tableprop extends React.Component{
    render(){
        return(
            <>
            <table>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.props.name}</td>
                        <td>{this.props.age}</td>
                        <td>{this.props.address}</td>
                    </tr>
                    <tr>
                        <td>{this.props.name1}</td>
                        <td>{this.props.age1}</td>
                        <td>{this.props.address1}</td>
                    </tr>
                    <tr>
                        <td>{this.props.name2}</td>
                        <td>{this.props.age2}</td>
                        <td>{this.props.address2}</td>
                    </tr>
                </tbody>
            </table>
        
            </>
        );
    }
}
export default Tableprop;

Tableprop.defaultProps={
    name:'Vishmitha',
    age:20,
    address:'Nkl',
    name1:'Vishmitha',
    age1:20,
    address1:'Nkl',
    name2:'Vishmitha',
    age2:20,
    address2:'Nkl',
}