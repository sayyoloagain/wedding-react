import {
    Button,
    Col,
    Container,
    Form,
    Row,
  } from 'reactstrap';
  
  import React from 'react'
 
  import { useHistory } from 'react-router-dom';
  
  const PasswordChanged = () => {
  const history1 = useHistory();
  
 
    return (
      <React.Fragment>
       
            <div className="app flex-row align-items-center">
              <Container>
                <Row className="justify-content-center">
                  <Col md="8">
                        <h1 className="text-primary font-weight-bold">Reset Password<br/></h1>
                        <p className='color'>Your Password has been reset successfully.</p>
  
                    <Form>
                        <Row>
                          <Col sm="12" className="mx-auto" >
                           
                          </Col>
                        </Row>

                          <Row className="btn4">
                            <Col xs="12" className="mx-auto" >
                              <Button  onClick={()=> history1.push("/Login")}  style={{color:"white",backgroundColor:"#81163F"}} className="px-4 w-100" >Back to Sign In</Button>
                            </Col>
                          </Row>
                          
                         
  
                        </Form>
                         <Row>
                        <Col xs="12" className="gep">  
                     
                        </Col>
                        </Row> 
                  </Col>
                </Row>
               
              </Container>
          <Container>
                <Row>
               <Col xs="12" className="cms">       
              
              </Col>
                </Row>
          </Container>
         
        </div>
      
      </React.Fragment>
    )
    
  }
  export default PasswordChanged