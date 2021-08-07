import React from 'react';
import { Col,Card,Container,Row,Button, } from 'react-bootstrap';


export const Measurements=()=>{
    return(
            <div >
                 <Container className='container' style={{border: '6px solid gray',width:'1400px',height:'800px'}}>
                    <h1 className="text bg-gray " >Some count that matters</h1>
                       
                </Container>
                
                <Button style={{justifyContent:'center'}} variant="primary"> Explore more</Button>
            </div>
    );
}
