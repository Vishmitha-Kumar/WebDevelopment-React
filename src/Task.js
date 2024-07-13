import React from "react";
import first from './Components/Images/first.jpg';
import second from './Components/Images/second.jpg';
import abc from './Components/videos/abc.mp4';
import './Task.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import { Container,Col,Row } from "react-bootstrap";



function Task(){
    return(
        <div className="wrap">
        <div className="first">
            <img src={first} width='100%'></img>
        </div>
        <div>

            <img src={second} width='100%'></img>
        </div>
        <div>

            <img src="https://infoemsolutions.com/jana/12.jpg" width='100%'></img>
        </div>
        <div>

            <video src={abc} controls width='100%'></video>
        </div>
        
        <h1 style={{fontSize:'20px',fontWeight:500,margin:'30px'}}>Shop from Top Categories</h1>
        <div>
            <Container>
                <Row>
                    <Col sm={2}>
                    <img src="https://infoemsolutions.com/jana/01.jpg" style={{width:'99%',boxShadow:'0px 4px 4px 0px'}}></img>
                   </Col>
                    <Col sm={2}>
                    <img src="https://infoemsolutions.com/jana/02.jpg" style={{width:'99%',boxShadow:'0px 4px 4px 0px'}}></img>
                   </Col>
                    <Col sm={2}>
                    <img src="https://infoemsolutions.com/jana/03.jpg" style={{width:'99%',boxShadow:'0px 4px 4px 0px'}}></img>
                   </Col>
                    <Col sm={2}>
                    <img src="https://infoemsolutions.com/jana/04.jpg" style={{width:'99%',boxShadow:'0px 4px 4px 0px'}}></img>
                   </Col>
                    <Col sm={2}>
                    <img src="https://infoemsolutions.com/jana/05.jpg" style={{width:'99%',boxShadow:'0px 4px 4px 0px'}}></img>
                   </Col>
                    <Col sm={2}>
                    <img src="https://infoemsolutions.com/jana/06.jpg" style={{width:'99%',boxShadow:'0px 4px 4px 0px'}}></img>
                   </Col>
                    
                   
                </Row>
                <Row style={{marginTop:'30px'}}>
                    <Col sm={2}>
                    <img src="https://infoemsolutions.com/jana/07.jpg" style={{width:'99%',boxShadow:'0px 4px 4px 0px'}}></img>
                   </Col>
                    <Col sm={2}>
                    <img src="https://infoemsolutions.com/jana/08.jpg" style={{width:'99%',boxShadow:'0px 4px 4px 0px'}}></img>
                   </Col>
                    <Col sm={2}>
                    <img src="https://infoemsolutions.com/jana/09.jpg" style={{width:'99%',boxShadow:'0px 4px 4px 0px'}}></img>
                   </Col>
                    <Col sm={2}>
                    <img src="https://infoemsolutions.com/jana/010.jpg" style={{width:'99%',boxShadow:'0px 4px 4px 0px'}}></img>
                   </Col>
                    <Col sm={2}>
                    <img src="https://infoemsolutions.com/jana/011.jpg" style={{width:'99%',boxShadow:'0px 4px 4px 0px'}}></img>
                   </Col>
                    <Col sm={2}>
                    <img src="https://infoemsolutions.com/jana/012.jpg" style={{width:'99%',boxShadow:'0px 4px 4px 0px'}}></img>
                   </Col>
                 
                   
                </Row>
            </Container>
        </div>
        <div style={{marginTop:'10px'}}>

            <img src="https://infoemsolutions.com/jana/aa.jpg" width='100%'></img>
        </div>
        <h1 style={{fontSize:'20px',fontWeight:500,margin:'30px'}}>Great deals on Great Brands</h1>

    <Row>
    <Col xs={2}  >
    <Card className="card1">
       
       <CardBody >
         <img src="https://infoemsolutions.com/jana/a2.jpeg" width={100} style={{textAlign:'center'}}/>
         <CardSubtitle tag="h6" className="mb-2 text-muted"><p>Apple iPhone 13 128 GB, 5G Enabled Phone Midnight</p>

         <p>Rs.59000</p>
         </CardSubtitle>
         <CardText className="card2">You Save: ₹ 10000.00 Inclusive of all taxes In Stock</CardText>
       
       </CardBody>
     </Card>
    </Col>
    <Col xs={2}  >
    <Card className="card1">
       
       <CardBody>
         <img src="https://infoemsolutions.com/jana/a1.jpeg" width={100} style={{textAlign:'center'}}/>
         <CardSubtitle tag="h6" className="mb-2 text-muted"><p>Apple iPhone 13 128 GB, 5G Enabled Phone Midnight</p>

         <p>Rs.59000</p>
         </CardSubtitle>
         <CardText className="card2">You Save: ₹ 10000.00 Inclusive of all taxes In Stock</CardText>
       
       </CardBody>
     </Card>
    </Col>
    <Col xs={2}  >
    <Card className="card1">
       
       <CardBody>
         <img src="https://infoemsolutions.com/jana/a3.jpeg" width={100} style={{textAlign:'center'}}/>
         <CardSubtitle tag="h6" className="mb-2 text-muted"><p>Apple iPhone 13 128 GB, 5G Enabled Phone Midnight</p>

         <p>Rs.59000</p>
         </CardSubtitle>
         <CardText className="card2">You Save: ₹ 10000.00 Inclusive of all taxes In Stock</CardText>
       
       </CardBody>
     </Card>
    </Col>
    <Col xs={2}  >
    <Card className="card1">
       
       <CardBody>
         <img src="https://infoemsolutions.com/jana/a4.jpeg" width={100} style={{textAlign:'center'}}/>
         <CardSubtitle tag="h6" className="mb-2 text-muted"><p>Apple iPhone 13 128 GB, 5G Enabled Phone Midnight</p>

         <p>Rs.59000</p>
         </CardSubtitle>
         <CardText className="card2">You Save: ₹ 10000.00 Inclusive of all taxes In Stock</CardText>
       
       </CardBody>
     </Card>
    </Col>
    <Col xs={2}  >
    <Card className="card1">
       
       <CardBody>
         <img src="https://infoemsolutions.com/jana/a5.jpeg" width={100} style={{textAlign:'center'}}/>
         <CardSubtitle tag="h6" className="mb-2 text-muted"><p>Apple iPhone 13 128 GB, 5G Enabled Phone Midnight</p>

         <p>Rs.59000</p>
         </CardSubtitle>
         <CardText className="card2">You Save: ₹ 10000.00 Inclusive of all taxes In Stock</CardText>
       
       </CardBody>
     </Card>
    </Col>
    <Col xs={2}  >
    <Card className="card1">
       
       <CardBody>
         <img src="https://infoemsolutions.com/jana/a6.jpg" width={100} style={{textAlign:'center'}}/>
         <CardSubtitle tag="h6" className="mb-2 text-muted"><p>Apple iPhone 13 128 GB, 5G Enabled Phone Midnight</p>

         <p>Rs.59000</p>
         </CardSubtitle>
         <CardText className="card2">You Save: ₹ 10000.00 Inclusive of all taxes In Stock</CardText>
       
       </CardBody>
     </Card>
    </Col>
   
  </Row>
    <Row style={{marginTop:'20px'}}>
    <Col xs={2}  >
    <Card className="card1">
       
       <CardBody>
         <img src="https://infoemsolutions.com/jana/a7.jpg" width={100} style={{textAlign:'center'}}/>
         <CardSubtitle tag="h6" className="mb-2 text-muted"><p>Apple iPhone 13 128 GB, 5G Enabled Phone Midnight</p>

         <p>Rs.59000</p>
         </CardSubtitle>
         <CardText className="card2">You Save: ₹ 10000.00 Inclusive of all taxes In Stock</CardText>
       
       </CardBody>
     </Card>
    </Col>
    <Col xs={2}  >
    <Card className="card1">
       
       <CardBody>
         <img src="https://infoemsolutions.com/jana/a9.jpeg" width={100} style={{textAlign:'center'}}/>
         <CardSubtitle tag="h6" className="mb-2 text-muted"><p>Apple iPhone 13 128 GB, 5G Enabled Phone Midnight</p>

         <p>Rs.59000</p>
         </CardSubtitle>
         <CardText className="card2">You Save: ₹ 10000.00 Inclusive of all taxes In Stock</CardText>
       
       </CardBody>
     </Card>
    </Col>
    <Col xs={2}  >
    <Card className="card1">
       
       <CardBody>
         <img src="https://infoemsolutions.com/jana/a11.jpg" width={100} style={{textAlign:'center'}}/>
         <CardSubtitle tag="h6" className="mb-2 text-muted"><p>Apple iPhone 13 128 GB, 5G Enabled Phone Midnight</p>

         <p>Rs.59000</p>
         </CardSubtitle>
         <CardText className="card2">You Save: ₹ 10000.00 Inclusive of all taxes In Stock</CardText>
       
       </CardBody>
     </Card>
    </Col>
    <Col xs={2}  >
    <Card className="card1">
       
       <CardBody>
         <img src="https://infoemsolutions.com/jana/a4.jpeg" width={100} style={{textAlign:'center'}}/>
         <CardSubtitle tag="h6" className="mb-2 text-muted"><p>Apple iPhone 13 128 GB, 5G Enabled Phone Midnight</p>

         <p>Rs.59000</p>
         </CardSubtitle>
         <CardText className="card2">You Save: ₹ 10000.00 Inclusive of all taxes In Stock</CardText>
       
       </CardBody>
     </Card>
    </Col>
    <Col xs={2}  >
    <Card className="card1">
       
       <CardBody>
         <img src="https://infoemsolutions.com/jana/a6.jpg" width={100} style={{textAlign:'center'}}/>
         <CardSubtitle tag="h6" className="mb-2 text-muted"><p>Apple iPhone 13 128 GB, 5G Enabled Phone Midnight</p>

         <p>Rs.59000</p>
         </CardSubtitle>
         <CardText className="card2">You Save: ₹ 10000.00 Inclusive of all taxes In Stock</CardText>
       
       </CardBody>
     </Card>
    </Col>
    <Col xs={2}  >
    <Card className="card1">
       
       <CardBody>
         <img src="https://infoemsolutions.com/jana/a2.jpeg" width={100} style={{textAlign:'center'}}/>
         <CardSubtitle tag="h6" className="mb-2 text-muted"><p>Apple iPhone 13 128 GB, 5G Enabled Phone Midnight</p>

         <p>Rs.59000</p>
         </CardSubtitle>
         <CardText className="card2">You Save: ₹ 10000.00 Inclusive of all taxes In Stock</CardText>
       
       </CardBody>
     </Card>
    </Col>
   
  </Row>
  <div style={{marginTop:'10px'}}>

<img src="https://infoemsolutions.com/jana/00.jpg" width='100%' ></img>
</div>
<div style={{marginTop:'10px'}}>

<Row style={{backgroundColor:'lightblue'}}>
  
        <Col md={4}>

        <h4>MOST POPULAR CATEGORIES</h4>
        <h6>Stables</h6>
        <h6>Beverages</h6>
        <h6>Personal Care</h6>
        <h6>Home Care</h6>
        <h6>Fruits and Vegetables</h6>
        <h6>Baby Care</h6>
        <h6>Snacks & Foods</h6>
        <h6>Dairy & Bakery</h6>
        
        
        </Col>
        <Col md={4}>

        <h4>CUSTOMER SERVICES</h4>
        <h6>About Us</h6>
        <h6>FAQ</h6>
        <h6>Terms and conditions</h6>
        <h6>Privacy policy</h6>
        <h6>Cancellation and return policy</h6>
        <h6>E-waste Policy</h6>

       
      
        </Col>
        <Col md={4}>

        <h4>CONTACT US</h4>
        <h6>WhatsApp us :</h6>
        <h6>70003 70003</h6>
        <h6>Call Us :</h6>
        <h6>1800 890 1222</h6>
        <h6>8:00 AM to 8:00 PM, 365 days
        Please note that you are accessing the BETA Version of</h6>
        <h6>www.jaganonlinemart.com</h6>
        <h6>Should you encounter any bugs, glitches, lack of functionality, delayed deliveries, billing errors or other problems on the beta website, please email us on</h6>
        <h6>jaganmech107@gmail.com</h6>
        </Col>
</Row>
<h5 style={{paddingLeft:'33%'}}>© 2022 All rights reserved. jagan Retail Ltd.</h5>
</div>

        </div>
    );
}
export default Task;