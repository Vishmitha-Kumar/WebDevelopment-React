import logo from './logo.svg';
import React from 'react';
import Table from './Table';
import Inputs from './Inputs';
import States from './Components/States';
import Props from './Components/Props';
import TableState from './Components/TableState';
import Tableprop from './Components/Tablepros';



import Constructor from './Components/Mounting/Construct';
import Statefprops from './Components/Mounting/Statefprops';
import Didmount from './Components/Mounting/Didmount';
import Statefrprops from './Components/Updating/Statefrprops';
import Shouldupdate from './Components/Updating/Shouldupdate';
import Getsnap from './Components/Updating/Getsnap';
import Didupdate from './Components/Updating/Didupdate';

import Lifecycle from './Components/Lifecycle';
import Reactstrap from './Reactstrap';
import {Routes, Route} from 'react-router-dom';
import Task from './Task';
import Toastex from './Toastex';


function App() {
  return (
    <div >
        
        <Toastex/>
        
        {/* <Routes>
          <Route path='/' element={<Reactstrap/>}/>
          <Route path='/table' element={<Table/>}/>
        </Routes> */}
    </div>
  );
}



export default App;

// function App1() {
//   return (
//     <div>
//         <h1 style={{color:'yellowgreen',marginLeft:'30%'}}>Hello world</h1>
//     </div>
//   );
// }
// function App2() {
  
//   const a={fontSize:'100px'}
//   return (
    
//     <div>
//         <h1 style={a}>Hello world</h1>
//     </div>
//   );
// }
// function App3() {
//   return (
//     <div>
//         <h1>Hello world</h1>
//     </div>
//   );
// }
// class App4 extends React.Component{

//   render()
//   {
//     var a={fontSize:'20px',padding:'10%'}
//     return (
//       <div>
//           <h1 style={a}>Hello world</h1>
//       </div>
//     );
//   }

// }
// class App5 extends React.Component{

//   render()
//   {

//     return (
//       <div>
//           <h1 style={{color:'blue'}}>Hello world</h1>
//       </div>
//     );
//   }
// }