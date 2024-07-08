import React from 'react';

class Lifecycle extends React.Component{
    constructor(props){
        super(props);
        
        this.state={
            fl1:'Rose',
            fr1:'Apple',
            t1:'Neem',
            fl2:'Lilly',
            fr2:'Mango',
            t2:'Coconut',
            fl3:'Lotus',
            fr3:'Grapes',
            t3:'Palm',
        };

    }


    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                fl1:'Jasmine',
            fr1:'Pear',
            t1:'Mango',
            fl2:'Sunflower',
            fr2:'Strawberry',
            t2:'Coco tree',
            fl3:'White lotus',
            fr3:'Blueberry',
            t3:'Apple tree',
            })
        },2000)
    }


  
    
    getSnapshotBeforeUpdate(prevProps,prevState){
        document.getElementById("div1").innerHTML=prevState.fl1
        document.getElementById("div2").innerHTML=prevState.fr1
        document.getElementById("div3").innerHTML=prevState.t1
        document.getElementById("div4").innerHTML=prevState.fl2
        document.getElementById("div5").innerHTML=prevState.fr2
        document.getElementById("div6").innerHTML=prevState.t2
        document.getElementById("div7").innerHTML=prevState.fl3
        document.getElementById("div8").innerHTML=prevState.fr3
        document.getElementById("div9").innerHTML=prevState.t3
        
    }


    render(){
        return(
            <>
            <table>
                <thed>
                    <tr>
                        <th>Flower</th>
                        <th>Fruit</th>
                        <th>Tree</th>
                    </tr>
                </thed>
                <tbody>
                    <tr>
                        <td>{this.state.fl1}</td>
                        <td>{this.state.fr1}</td>
                        <td>{this.state.t1}</td>
                    </tr>
                    <tr>
                        <td>{this.state.fl2}</td>
                        <td>{this.state.fr2}</td>
                        <td>{this.state.t2}</td>
                    </tr>
                    <tr>
                        <td>{this.state.fl3}</td>
                        <td>{this.state.fr3}</td>
                        <td>{this.state.t3}</td>
                    </tr>
                </tbody>
            </table>


            {/* <input type='button' value='click' onClick={this.fun}></input> */}

            <table>
                <thed>
                    <tr>
                        <th>Flower</th>
                        <th>Fruit</th>
                        <th>Tree</th>
                    </tr>
                </thed>
                <tbody>
                    <tr>
                        <td id="div1"></td>
                        <td id="div2"></td>
                        <td id="div3"></td>
                    </tr>
                    <tr>
                        <td id="div4"></td>
                        <td id="div5"></td>
                        <td id="div6"></td>
                     
                    </tr>
                    <tr>
                        <td id="div7"></td>
                        <td id="div8"></td>
                        <td id="div9"></td>
                      
                    </tr>
                </tbody>
            </table>
            </>
        );
    }
}
export default Lifecycle;