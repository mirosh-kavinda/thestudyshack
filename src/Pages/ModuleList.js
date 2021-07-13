import React from 'react';
import { Col,Card,Container,Row,Button, } from 'react-bootstrap';
import '../css/ModuleList.css';
const ModuleList=()=>{
    return(
            <div >
             
                 <Container className='container' style={{border: '6px solid gray',width:'1400px',height:'800px'}}>
                    <h1 className="text bg-gray " >Tutoring Content which you can follow.</h1>
                      <Row>
                        <Col  >
                            <Card  className='card'>
                                {/* <Card.Img variant="top"  /> */}
                                <Card.Body>
                                    <Card.Text><h5>Mobile Application</h5> 
                                    </Card.Text>
                                    <Card.Text><h6>It's freeing to be able to catch up on c</h6></Card.Text>
                                    <Button variant="primary" style={{top:'100px',justifyContent:'right'}}>More Info</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='card'>
                                {/* <Card.Img variant="top"  /> */}
                                <Card.Body>
                                    <Card.Text><h5>Web Application</h5></Card.Text>
                                    <Card.Text><h6>It's freeing to be able to catch up on c</h6></Card.Text>
                                
                    
                                    <Button variant="primary"style={{top:'100px'}}>More Info</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='card'>
                                {/* <Card.Img variant="top"  /> */}
                                <Card.Body>
                                    <Card.Text><h5>UI Designing</h5></Card.Text>
                                    <Card.Text><h6>It's freeing to be able to catch up on c</h6></Card.Text>
                                
                                    
                                    <Button variant="primary"style={{top:'100px'}}>More Info</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row> 
                    <Row>
                    <Col>
                            <Card className='card'>
                                {/* <Card.Img variant="top"  /> */}
                                <Card.Body>
                                    <Card.Text><h5>Strategy and branding</h5></Card.Text>
                                    <Card.Text><h6>It's freeing to be able to catch up on c</h6></Card.Text>
                                
                                    
                                    <Button variant="primary"style={{top:'100px'}}>More Info</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='card'>
                                {/* <Card.Img variant="top"/> */}
                                <Card.Body>
                                    <Card.Text><h5>Performance Marketting</h5> </Card.Text>
                                    <Card.Text><h6>It's freeing to be able to catch up on c</h6></Card.Text>
                                
                                    
                                    <Button variant="primary"style={{top:'100px'}}>More Info</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='card'>
                                {/* <Card.Img variant="top" size='100pxX100px' /> */}
                                <Card.Body>
                                    <Card.Text><h5>Projects and make up </h5></Card.Text>
                                    <Card.Text><h6>It's freeing to be able to catch up on c</h6></Card.Text>
                                    <Button variant="primary"style={{top:'100px'}}>More Info</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>      
                </Container>
                
                <Button style={{justifyContent:'center'}} variant="primary"> Explore more</Button>
            </div>
    );
}

export default ModuleList;