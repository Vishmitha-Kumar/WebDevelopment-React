import React from 'react';

class TableState extends React.Component{

    constructor(){
        super();
        this.state={name:'Sree',
            class:'X-A',
            grade:'O',
            name1:'Isai',
            class1:'X-B',
            grade1:'O',
            name2:'Hari',
            class2:'X-D',
            grade2:'O',
            item:'coffeepowder',
            no:1,
            price:'Rs 20',
            item1:'Chicken currypowder',
            no1:2,
            price1:'Rs 40',
            item2:'Drink',
            no2:3,
            price2:'Rs 20',
            dress:'Chudi',
            colour:'Blue',
            prce:'Rs 120',
            dress1:'Shirt',
            colour1:'Yellow',
            prce1:'Rs 320',
            dress2:'Pant',
            colour2:'White',
            prce2:'Rs 210',

        }
       
    }
     
    fun=()=>{
        this.setState({
            name:'Harini',
            class:'XI-A',
            grade:'A',
            name1:'Priya',
            class1:'XI-C',
            grade1:'A',
            name2:'Haran',
            class2:'XI-D',
            grade2:'O'

        })
    }
    fun1=()=>{
        this.setState({
            item:'Applejuice',
            no:1,
            price:'Rs 40',
            item1:'Mango juice',
            no1:2,
            price1:'Rs 20',
            item2:'Water',
            no2:3,
            price2:'Rs 10',

        })
    }
    fun2=()=>{
        this.setState({
            dress:'Saree',
            colour:'Green',
            prce:'Rs 190',
            dress1:'Dhoti',
            colour1:'White',
            prce1:'Rs 100',
            dress2:'Jeans',
            colour2:'Blue',
            prce2:'Rs 290',
           
        })
    }
    render(){
        return(
            <>
            <table>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Class</th>
                    <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.state.name}</td>
                        <td>{this.state.class}</td>
                        <td>{this.state.grade}</td>
                    </tr>
                    <tr>
                        <td>{this.state.name1}</td>
                        <td>{this.state.class1}</td>
                        <td>{this.state.grade1}</td>
                        
                    </tr>
                    <tr>
                        <td>{this.state.name2}</td>
                        <td>{this.state.class2}</td>
                        <td>{this.state.grade2}</td>
                        
                    </tr>
                </tbody>
                
            </table>
        <input type='button' value='click' onClick={this.fun}></input>


            <table>
                <thead>
                    <tr>
                    <th>Item</th>
                    <th>Iten no</th>
                    <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.state.item}</td>
                        <td>{this.state.no}</td>
                        <td>{this.state.price}</td>
                    </tr>
                    <tr>
                        <td>{this.state.item1}</td>
                        <td>{this.state.no1}</td>
                        <td>{this.state.price1}</td>
                        
                        
                    </tr>
                    <tr>
                        <td>{this.state.item2}</td>
                        <td>{this.state.no2}</td>
                        <td>{this.state.price2}</td>
                      
                        
                    </tr>
                </tbody>
                
            </table>
        <input type='button' value='click' onClick={this.fun1}></input>

            <table>
                <thead>
                    <tr>
                    <th>Dress</th>
                    <th>Colour</th>
                    <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.state.dress}</td>
                        <td>{this.state.colour}</td>
                        <td>{this.state.prce}</td>
                    </tr>
                    <tr>
                        <td>{this.state.dress1}</td>
                        <td>{this.state.colour1}</td>
                        <td>{this.state.prce1}</td>
                        
                        
                    </tr>
                    <tr>
                        <td>{this.state.dress2}</td>
                        <td>{this.state.colour2}</td>
                        <td>{this.state.prce2}</td>
                        
                        
                    </tr>
                </tbody>
                
            </table>
        <input type='button' value='click' onClick={this.fun2}></input>
            </>
        );
    }
}
export default TableState;