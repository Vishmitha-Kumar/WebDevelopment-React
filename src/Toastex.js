import React,{useState} from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Collapse,  CardBody, Card } from 'reactstrap';
import { ListGroup, ListGroupItem,Badge } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter,Tooltip } from 'reactstrap';
import pic1 from './Components/Images/pic11.jpeg'
import pic2 from './Components/Images/pic22.jpg'
import pic3 from './Components/Images/pic33.jpg'
import {  Toast, ToastBody, ToastHeader } from 'reactstrap';



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



import { UncontrolledCarousel } from 'reactstrap';

const items = [

  {

    src: pic1,

    altText: 'Arch',

    caption: '1',

    header: 'Arch',

    key: '1'

  },

  {

    src: pic2,

    altText: 'Slide 2',

    caption: '2',

    header: 'Tulip',

    key: '2'

  },

  {

    src: pic3,

    altText: 'Slide 3',

    caption: '3',

    header: 'Lion',

    key: '3'

  }

];

const Example = (props) =>{
  
  const[isOpen,setIsOpen]=useState(false);
  const toggle=()=>setIsOpen(!isOpen);


  const [tooltipOpen, setTooltipOpen] = useState(false);

  const togglearch = () => setTooltipOpen(!tooltipOpen);
  const [a, b] = useState(false);

  const toggleflower = () => b(!a);

  const [tooltipopen, setTooltipopen] = useState(false);

  const toggleanimal = () => setTooltipopen(!tooltipopen);



  const  buttonLabel  = 'click';


  const [shhow, setShhow] = useState(false);

  const togglebb = () => setShhow(!shhow);
  const [show, setShow] = useState(false);

  const togglebut = () => setShow(!show);
  const [e, f] = useState(false);

  const togglebutt = () => f(!e);
  const [g, h] = useState(false);

  const togglebuttt = () => h(!g);
  const [i, j] = useState(false);

  const togglebbb = () => j(!i);
  const [k, l] = useState(false);

  const togglebbbb = () => l(!k);





  return(
    
    <>
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

              <NavLink href="">Contact</NavLink>

            </NavItem>

            

          </Nav>


          </Collapse>
          </Navbar>
          <UncontrolledCarousel items={items} />
          <div style={{margin:'10px'}}>
            <Row>
              <Col md='4'>
              <p>The first pic is an <span style={{textDecoration: "underline", color:"blue"}} href="#" id="TooltipExample1">Arch</span>.</p>
      <Tooltip placement="right" isOpen={tooltipOpen} target="TooltipExample1" toggle={togglearch}>
      a typically curved structural member spanning an opening and serving as a support
      </Tooltip>
              </Col>
              <Col md='4'>
              <p>The second pic is an <span style={{textDecoration: "underline", color:"blue"}} href="#" id="TooltipExample2">Tulip</span>.</p>
      <Tooltip placement="right" isOpen={a} target="TooltipExample2" toggle={toggleflower}>
      A beautiful flower
      </Tooltip>
              </Col>
              <Col md='4'>
              <p>The Third pic is a <span style={{textDecoration: "underline", color:"blue"}} href="#" id="TooltipExample3">Lion</span>.</p>
      <Tooltip placement="right" isOpen={tooltipopen} target="TooltipExample3" toggle={toggleanimal}>
      Majestic Animal
      </Tooltip>
              </Col>
            </Row>
          </div>

          <div style={{margin:'10px'}}>
            <Row>
              <Col md='4'>
              <Button color="primary" onClick={togglebut}>{buttonLabel}</Button>
      <br />
      <br />
      <Toast isOpen={show}>
        <ToastHeader toggle={togglebut}>Arch</ToastHeader>
        <ToastBody>
        a typically curved structural member spanning an opening and serving as a support (as for the wall or other weight above the opening) 2. a. : something resembling an arch in form or function. especially : either of two vaulted portions of the bony structure of the foot that impart elasticity to it.
        </ToastBody>
      </Toast>

              <Button color="primary" onClick={togglebb}>{buttonLabel}</Button>
      <br />
      <br />
      <Toast isOpen={shhow}>
        <ToastHeader toggle={togglebb}>Arch</ToastHeader>
        <ToastBody>
        a typically curved structural member spanning an opening and serving as a support (as for the wall or other weight above the opening) 2. a. : something resembling an arch in form or function. especially : either of two vaulted portions of the bony structure of the foot that impart elasticity to it.
        </ToastBody>
      </Toast>
              </Col>


              <Col md='4'>
              <Button color="primary" onClick={togglebutt}>{buttonLabel}</Button>
      <br />
      <br />
      <Toast isOpen={e}>
        <ToastHeader toggle={togglebutt}>Tulip</ToastHeader>
        <ToastBody>
        The most known meaning of tulips is perfect and deep love. As tulips are a classic flower that has been loved by many for centuries they have been attached with the meaning of love. They're ideal to give to someone who you have a deep, unconditional love for, whether it's your partner, children, parents or siblings.
        </ToastBody>
      </Toast>
             
              <Button color="primary" onClick={togglebbb}>{buttonLabel}</Button>
      <br />
      <br />
      <Toast isOpen={i}>
        <ToastHeader toggle={togglebbb}>Tulip</ToastHeader>
        <ToastBody>
        The most known meaning of tulips is perfect and deep love. As tulips are a classic flower that has been loved by many for centuries they have been attached with the meaning of love. They're ideal to give to someone who you have a deep, unconditional love for, whether it's your partner, children, parents or siblings.
        </ToastBody>
      </Toast>
              </Col>



              <Col md='4'>
              <Button color="primary" onClick={togglebuttt}>{buttonLabel}</Button>
      <br />
      <br />
      <Toast isOpen={g}>
        <ToastHeader toggle={togglebuttt}>Lion</ToastHeader>
        <ToastBody>
        Lions are the only known cat species where individuals roar together - with even young cubs joining in with their mews. The calling sequence usually lasts about 40 seconds. A group of lions, also called 'a pride', often roar together to mark their territory - a roar can be heard from 5 miles away
        </ToastBody>
      </Toast>
              <Button color="primary" onClick={togglebbbb}>{buttonLabel}</Button>
      <br />
      <br />
      <Toast isOpen={k}>
        <ToastHeader toggle={togglebbbb}>Lion</ToastHeader>
        <ToastBody>
        Lions are the only known cat species where individuals roar together - with even young cubs joining in with their mews. The calling sequence usually lasts about 40 seconds. A group of lions, also called 'a pride', often roar together to mark their territory - a roar can be heard from 5 miles away
        </ToastBody>
      </Toast>
              </Col>
            </Row>

          </div>
          <div style={{margin:'10px'}}>
            <Row>
              <Col md='6'>
              <Toast>
        <ToastHeader icon="primary">
          Reactstrap
        </ToastHeader>
        <ToastBody>
          This is a toast with a primary icon
        </ToastBody>
      </Toast>
      <br/>
      <Toast>
        <ToastHeader icon="secondary">
          Reactstrap
        </ToastHeader>
        <ToastBody>
          This is a toast with a secondary icon
        </ToastBody>
      </Toast>
              </Col>
              <Col md='6'>
              <h3>Nature</h3>
<p>Everything we see around us constitutes nature, including the sun, the moon, trees, flowers, fruits, human beings, birds, animals, etc. In nature, everyone depends on one another to keep the ecosystem healthy. For survival, every creature is interrelated and reliant on one another.</p>

              </Col>
            </Row>
          </div>
          <div style={{marginTop:'10px'}}>

<Row style={{backgroundColor:'lightblue'}}>
  
        <Col md={4}>

        <h4>MOST POPULAR CATEGORIES</h4>
        <h6>Stables</h6>
        <h6>Beverages</h6>
        <h6>Personal Care</h6>
        <h6>Home Care</h6>
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
        <h6>8:00 AM to 8:00 PM, 365 days</h6>
        </Col>
</Row>
<h5 style={{paddingLeft:'33%'}}>© 2022 All rights reserved. jagan Retail Ltd.</h5>
</div>
     
          </>

  );
} 


export default Example;