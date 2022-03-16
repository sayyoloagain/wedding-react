import {
    Button,
    Col,
    Container,
    Form,
    Row,
  } from 'reactstrap';
  
  import React from 'react'
  import { useHistory } from 'react-router-dom';
  
  const FinishRP = () => {
  const history1 = useHistory();
  const history2 = useHistory();
  
 
    return (
      <React.Fragment>
       
            <div className="app flex-row align-items-center">
              <Container>
                <Row className="justify-content-center">
                  <Col md="8">
                        <h1 className="text-primary font-weight-bold">Forgot Password?<br/></h1>
                        <p className='color'>We've sent to your email address a link to reset your password.</p>
  
                    <Form>
                        <Row>
                          <Col sm="12" className="mx-auto" >
                             {/* <img className="emailimg" src={emailimg}></img> */}
                          </Col>
                        </Row>

                          <Row className="btn4">
                            <Col xs="12" className="mx-auto" >
                              <Button  onClick={()=> history2.push("/Login")} style={{color:"white",backgroundColor:"#81163F"}} className="px-4 w-100" >Back to Sign In</Button>
                            </Col>
                          </Row>
                          
                          <Row className="btn2">
                            <Col xs="12" className="mx-auto" >
                              <Button onClick={()=> history1.push("/Login/ResetPassword")}  style={{color:"white",backgroundColor:"#81163F"}} className="px-4 w-100" >Request Email Again</Button>
                            </Col>
                          </Row>
  
                        </Form>
                         <Row>
                        <Col xs="12" className="gep">  
                        {/* <img  src={gep} ></img> */}
                        </Col>
                        </Row> 
                  </Col>
                </Row>
               
              </Container>
          <Container>
                <Row>
               <Col xs="12" className="cms">       
                {/* <img src={cms}></img>           */}
              </Col>
                </Row>
          </Container>
         
        </div>
      
      </React.Fragment>
    )
    
  }
  export default FinishRP