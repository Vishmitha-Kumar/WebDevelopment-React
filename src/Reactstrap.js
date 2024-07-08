import React from 'react';
import { Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import { Alert } from 'reactstrap';


import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const Reactstrap = (props) => {
     
    var a={backgroundColor:'red'};
    var b={backgroundColor:'green'};

    return(

     
      <Container>
  <Row>
    <Col><img src="https://media.istockphoto.com/photos/golden-retriever-jumping-over-a-green-meadow-picture-id545800664?k=20&m=545800664&s=612x612&w=0&h=R2W28x8IGnB8oUzfvejFcx6auDyPWLp0x54Qo777NtQ=" width={'100%'} ></img></Col>
  </Row>
 
  <Row>
  <Col sm={4}>      
      <Alert color="primary">
        This is a primary alert — check it out!
      </Alert>
      <Alert color="secondary">
        This is a secondary alert — check it out!
      </Alert>
</Col>
    <Col sm={4} >
    <Alert color="danger">
        This is a danger alert — check it out!
      </Alert>
      <Alert color="warning">
        This is a warning alert — check it out!
      </Alert>

    </Col>
    <Col sm={4}>
    <Alert color="light">
        This is a light alert — check it out!
      </Alert>
      <Alert color="dark">
        This is a dark alert — check it out!
      </Alert>

    </Col>

  </Row>
  <Row>
    <Col xs={6}  >
    <Card>
       
       <CardBody>
         <CardTitle tag="h5">Dogs</CardTitle>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrexYoo6EQy7a0thl3-wJn3t3po2zcCUrtvQ&s" width={200} style={{textAlign:'center'}}/>
         <CardSubtitle tag="h6" className="mb-2 text-muted">🐕</CardSubtitle>
         <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
         <Button>Button</Button>
       </CardBody>
     </Card>

    </Col>
    <Col xs={6}  >
    <Card>
       
       <CardBody>
         <CardTitle tag="h5">Dogs</CardTitle>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrexYoo6EQy7a0thl3-wJn3t3po2zcCUrtvQ&s" width={200} style={{textAlign:'center'}}/>
         <CardSubtitle tag="h6" className="mb-2 text-muted">🐕</CardSubtitle>
         <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
         <Button>Button</Button>
       </CardBody>
     </Card>

    </Col>
  </Row>
  <Row>
<Col md={8}>
<table>
            <thead>
                <tr>
                    <th>S.no</th>
                    <th>Name</th>
                    <th>PhoneNumber</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Dg1</td>
                    <td>Male</td>
                    <td>Dg</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Dg1</td>
                    <td>Male</td>
                    <td>Dg</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Dg1</td>
                    <td>Male</td>
                    <td>Dg</td>
                </tr>
            </tbody>
        </table>
</Col>
<Col md={4}>
<p>The Fédération Cynologique Internationale (FCI), which is the largest registry of dog breeds that are internationally accepted, recognizes 339 breeds of dogs. However, other sources suggest that there are between 195 and 500 dog breeds in the world. The American Kennel Club, for example, recognizes 197 breeds.</p>
</Col>

</Row>

<Row style={{backgroundColor:'lightblue'}}>
  
        <Col md={4}>

        <h6>About</h6>
        <h6>Products</h6>
        <h6>Websites</h6>
        </Col>
        <Col md={4}>

        <h6>About</h6>
        <h6>Products</h6>
        <h6>Websites</h6>
        </Col>
        <Col md={4}>

        <h6>About</h6>
        <h6>Products</h6>
        <h6>Websites</h6>
        </Col>
</Row>

</Container>

  );
};

export default Reactstrap;
