import React from 'react';
import ReactDOM from 'react-dom';

class Constructor extends React.Component{
      constructor(){
        super();
        this.state={
            mon:'Monday',
            tue:'Tuesday',
            wed:'Wednesday',
            thr:'Thursday',
            fri:'Friday'
        }
      }
      render(){
        return(
            <>
            <h1>Week Days</h1>
            <ol>
                <li>{this.state.mon}</li>
                <li>{this.state.tue}</li>
                <li>{this.state.wed}</li>
                <li>{this.state.thr}</li>
                <li>{this.state.fri}</li>
            </ol>
            </>
        );
      }

}
export default Constructor;