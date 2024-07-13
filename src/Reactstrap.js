import React,{useState} from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Collapse,  CardBody, Card } from 'reactstrap';
import { ListGroup, ListGroupItem,Badge } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {
  Navbar,

  NavbarToggler,

  NavbarBrand,

  Nav,

  NavItem,

  NavLink, Pagination, PaginationItem, PaginationLink,

  UncontrolledDropdown,
  Dropdown,
  DropdownToggle,

  DropdownMenu,

  DropdownItem,

  NavbarText

} from 'reactstrap';




const Reactstrap = (props) => {

  const [isOpen, setIsOpen] = useState(false);

 

  const toggle = () => setIsOpen(!isOpen);
  


  const buttonLabel='Login';

  const [modal, setModal] = useState(false);

 

  const togglemodel = () => setModal(!modal);

  const [a, b] = useState(false);

 

  const togglepic1 = () => b(!a);
  const [c, d] = useState(false);

 

  const togglepic2 = () => d(!c);
  const [e, f] = useState(false);

 

  const togglepic3 = () => f(!e);



  return (
   <>
<div>
<Navbar  light expand="lg">

        <NavbarBrand href="/">REACT</NavbarBrand>

        <NavbarToggler onClick={toggle} />

        <Collapse isOpen={isOpen} navbar>

          <Nav className="mr-auto" navbar>

            <NavItem>

              <NavLink href="/components/">Home</NavLink>

            </NavItem>

            <NavItem>

              <NavLink href="">About</NavLink>

            </NavItem>
            <NavItem>

              <NavLink href="">Gallery</NavLink>

            </NavItem>
            <NavItem>

              <NavLink href="">Courses</NavLink>

            </NavItem>

            

          </Nav>


          </Collapse>

        <Button color="primary" onClick={togglemodel}>{buttonLabel}</Button>

      <Modal isOpen={modal} toggle={togglemodel}>

        <ModalHeader style={{paddingLeft:'40%'}}>Login</ModalHeader>

        

        <Form >
      <FormGroup style={{width:"80%"}}>
        <Label for="exampleEmail">Email :</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="Enter Username"/>
      </FormGroup>

      <FormGroup style={{width:"80%"}}>
        <Label for="examplePassword">Password :</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="Enter Password" />
      </FormGroup>



        </Form>

        <ModalFooter>

          <Button color="primary" onClick={toggle} style={{width:'100%'}}>Login</Button>{' '}

        </ModalFooter>

      </Modal>
     
      </Navbar>

      </div>
      <div>
        <img src="https://img.freepik.com/free-photo/sky-clouds-cinematic-clouds-wallpaper-4_1562-741.jpg" width="100%"></img>
      </div>
      <div style={{margin:'10px'}}>
        <Row>
          <Col md='4'>
          <Button color="success" onClick={togglepic1}>Green</Button>
          <Modal isOpen={a} toggle={togglepic1}>
            <ModalBody>

        <img src="https://png.pngtree.com/thumb_back/fh260/background/20230611/pngtree-green-forest-with-trees-is-shown-image_2915435.jpg" width="100%"></img>
            </ModalBody>
            </Modal>
          </Col>
          <Col md='4'>
          <Button color="warning" onClick={togglepic2}>Yellow</Button>
          <Modal isOpen={c} toggle={togglepic2}>
            <ModalBody>

        <img src="https://i.pinimg.com/originals/51/2c/86/512c860b14bb5da150e04ca6ed17e3d9.jpg" width="100%"></img>
            </ModalBody>
            </Modal>
          </Col>
          <Col md='4'>
          <Button color="danger" onClick={togglepic3}>Red</Button>
          <Modal isOpen={e} toggle={togglepic3}>
            <ModalBody>

        <img src="https://images2.alphacoders.com/120/1208678.jpg" width="100%"></img>
            </ModalBody>
            </Modal>
          </Col>
        </Row>
      </div>
      <div>
      <Row>
        <Col md='6'>
        <ListGroup>

<ListGroupItem>Apple</ListGroupItem>

<ListGroupItem>Samsung</ListGroupItem>

<ListGroupItem>Vivo</ListGroupItem>

<ListGroupItem>Oppo</ListGroupItem>

<ListGroupItem>Realme</ListGroupItem>

</ListGroup>
        </Col>
        <Col md='6'>
        <p>
        A mobile phone is a personal communication device used to make and receive calls, send and receive messages, access the internet and perform other tasks via a wireless connection. Mobile phones have become an integral part of our lives.World’s first ever mobile phone was demonstrated way back in 1973, by the Motorola’s then President and COO, John Francis Mitchell and an American Engineer, Martin Cooper. That mobile phone weighed around 2 kilograms.

Since then mobile phones have evolved in technology and shapes. They have become smaller, slimmer and more useful. Today mobile phones are available in various shapes and sizes, having different technical specifications and are used for a number of purposes like – voice communication, video chatting, text messaging, multimedia messaging, internet browsing, e mail, video games and photography. They also have short range wireless communication like Bluetooth and infrared. Phones having wide range of advance functions and large computing abilities are called smart phones. They have an edge over other conventional mobile phones, which are used only for voice communication.
        </p>
        </Col>
      </Row>
      </div>
      <div>
        <Row>
          <Col md='4'>
          <ListGroup>

<ListGroupItem >Message 1<Badge pill>1</Badge></ListGroupItem>

<ListGroupItem >Message 2<Badge pill>2</Badge></ListGroupItem>

<ListGroupItem >Message 3<Badge pill>3</Badge></ListGroupItem>

</ListGroup>
          </Col>
          <Col md='4'>
          <ListGroup>

<ListGroupItem >Message 4<Badge pill>4</Badge></ListGroupItem>

<ListGroupItem >Message 5<Badge pill>5</Badge></ListGroupItem>

<ListGroupItem >Message 6<Badge pill>6</Badge></ListGroupItem>

</ListGroup>
          </Col>
          <Col md='4'>
          <ListGroup>

<ListGroupItem >Message 7<Badge pill>7</Badge></ListGroupItem>

<ListGroupItem >Message 8<Badge pill>8</Badge></ListGroupItem>

<ListGroupItem >Message 9<Badge pill>9</Badge></ListGroupItem>

</ListGroup>
          </Col>
        </Row>
     
      </div>
      <div style={{margin:'10px'}}>
      <ListGroup >

<ListGroupItem tag="a" href="#"> Keeps us connected</ListGroupItem>

<ListGroupItem tag="a" href="#"> Keeps us connected</ListGroupItem>

<ListGroupItem tag="a" href="#">Entertainment for All</ListGroupItem>

<ListGroupItem tag="a" href="#">Managing Office Work</ListGroupItem>

<ListGroupItem tag="a" href="#">Mobile Banking</ListGroupItem>

</ListGroup>
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
     

</>
  );
}

export default Reactstrap;





























































































// const [isOpen, setIsOpen] = useState(false);

// const toggle = () => setIsOpen(!isOpen);
// const [a, b] = useState(false);

// const togglee = () => b(!a);
// const [c, d] = useState(false);

// const togglea = () => d(!c);






{/* <div>
<img src="https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2020/06/bac36569c0b975e2575bbcc3ca73b35d.jpg" width='100%'></img>
</div>
<div>
<Row>
  <Col md='4'>
  <Button color="primary" onClick={toggle} style={{ margin: '1rem' }}>Name</Button>
  <Collapse isOpen={isOpen}>
    <Card>
      <CardBody>
      Priya
      </CardBody>
    </Card>
  </Collapse>

  </Col>
  <Col md='4'>
  <Button color="primary" onClick={togglee} style={{ margin: '1rem' }}>Email</Button>
  <Collapse isOpen={a}>
    <Card>
      <CardBody>
      priya@gmail.com
      </CardBody>
    </Card>
  </Collapse>

  </Col>
  <Col md='4'>
  <Button color="primary" onClick={togglea} style={{ margin: '1rem' }}>Address</Button>
  <Collapse isOpen={c}>
    <Card>
      <CardBody>
      Namakkal
      </CardBody>
    </Card>
  </Collapse>

  </Col>
</Row>
</div>
<div>
<Row>
  <Col md='4'>
  <Form>
  <FormGroup>
    <Label for="exampleEmail">Email</Label>
    <Input type="email" name="email" id="exampleEmail" placeholder="Enter Name" />
  </FormGroup>

  <FormGroup>
    <Label for="examplePassword">Password</Label>
    <Input type="password" name="password" id="examplePassword" placeholder="Enter password" />
  </FormGroup>
  <FormGroup>
    <Label for="exampleText">Address</Label>
    <Input type="textarea" name="text" id="exampleText" />
  </FormGroup>
  <FormGroup>
    <Label>Gender</Label>
  
  <Label>
    <Input type='radio' name='x'/>Male
    </Label>
  <Label>
    <Input type='radio' name='x'/>Female
    </Label>
  </FormGroup>
  <Button>Submit</Button>
</Form>
  </Col>
  <Col md='8'>
  <img src="https://img.freepik.com/premium-photo/original-world-environment-earth-day-concept-with-glass-globe-eco-friendly-enviroment_779468-6120.jpg"></img>
  <p>Nature is an important and integral part of mankind. It is one of the greatest blessings for human life; however, nowadays humans fail to recognize it as one. Nature has been an inspiration for numerous poets, writers, artists and more of yesteryears. This remarkable creation inspired them to write poems and stories in the glory of it. They truly valued nature which reflects in their works even today. Essentially, nature is everything we are surrounded by like the water we drink, the air we breathe, the sun we soak in, the birds we hear chirping, the moon we gaze at and more. Above all, it is rich and vibrant and consists of both living and non-living things. Therefore, people of the modern age should also learn something from people of yesteryear and start valuing nature before it gets too late.</p>
  </Col>
</Row>
</div> */}