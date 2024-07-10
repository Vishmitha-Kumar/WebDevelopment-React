import React,{useState} from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Collapse,  CardBody, Card } from 'reactstrap';

const Reactstrap = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const [a, b] = useState(false);

  const togglee = () => b(!a);
  const [c, d] = useState(false);

  const togglea = () => d(!c);

  return (
   <>

   <div>
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
   </div>

   </>
  );
}

export default Reactstrap;
