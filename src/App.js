import logo from './logo.svg';
import React from 'react';
import Table from './Table';
import Inputs from './Inputs';


function App() {
  return (
    <div >
        
        <Table/>
        
    </div>
  );
}
function App1() {
  return (
    <div>
        <h1 style={{color:'yellowgreen',marginLeft:'30%'}}>Hello world</h1>
    </div>
  );
}
function App2() {
  
  const a={fontSize:'100px'}
  return (
    
    <div>
        <h1 style={a}>Hello world</h1>
    </div>
  );
}
function App3() {
  return (
    <div>
        <h1>Hello world</h1>
    </div>
  );
}
class App4 extends React.Component{

  render()
  {
    var a={fontSize:'20px',padding:'10%'}
    return (
      <div>
          <h1 style={a}>Hello world</h1>
      </div>
    );
  }

}
class App5 extends React.Component{

  render()
  {

    return (
      <div>
          <h1 style={{color:'blue'}}>Hello world</h1>
      </div>
    );
  }

}

export default App;
