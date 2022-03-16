import {
  Button,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  Row,
  Alert,
} from 'reactstrap';

import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";

import cms from '../../assets/img/bg/banner-cms.png'
import gep from '../../assets/img/bg/gep-logoo.png'
import { Auth } from '../../api'

  const ResetPassword = () => {
  const history = useHistory()
  const chistory = useHistory()
  const dispatch = useDispatch()
  const authUser = Auth.getAuthUser()
  const [email, setEmail] = useState('');
  const [RevealEErr, setRevealEErr] = useState(false); 
  
 
  useEffect(() => {
    if (typeof (authUser) !== 'undefined' && authUser !== null) {
      console.log(authUser)
      if (authUser.token) {
          //
        history.push('')
      }
    }
  }, [authUser, history, dispatch]);

  const ResetPassword = async (e) => {
    e.preventDefault();
    if (email) {
      try {
        if (email) {
          await Auth.ResetPasswordByEmail(email);
          history.push({ pathname: "/FinishRP" })
          }
      } catch (error) {
        setRevealEErr(true)
        console.log(error)
       
      }
    }
  }

  return (
    <React.Fragment>
      <div className="login">
        <div className="login-cms">
          <div className="app flex-row align-items-center">
            <Container>
              <Row className="justify-content-center">
                <Col md="8">
                      <h1 className="text-primary font-weight-bold">Forgot Password ?<br/></h1>
                      <p className='color btn2'>Enter your email address to verify your account.
                         Once verified, we'll send you an email with temporary password.
                      </p>
                      
                      <Form onSubmit={(e) => { ResetPassword(e) }}>

                        <p className='btn1'><br/> Email</p>
                        <InputGroup  className="mb-5">
                          <InputGroupAddon addonType="prepend">
                          </InputGroupAddon>
                          <Input type="text" placeholder="Email Address" name="username" autoComplete="username" onChange={(e) => { setEmail(e.target.value) }} />
                        </InputGroup>

                      
                        <Alert className='Alert' isOpen={RevealEErr}> We could not find your account. Please check that you have typed your email address correctly.</Alert>

                        <Row className='btn2'>
                          <Col xs="12" className="mx-auto" >
                            <Button onClick={() => history.push('/FinishRP')} style={{color:"white",backgroundColor:"#81163F"}} className="px-4 w-100" >Continue</Button>
                          </Col>
                          </Row>


                          <Row className='btn3'>
                          <Col xs="12" className="mx-auto" >
                            <Button  onClick={()=> chistory.push("/Login")}  style={{color:"white",backgroundColor:"#81163F"}} className="px-4 w-100" >Cancel</Button>
                          </Col>
                        </Row>

                      </Form>
                       <Row>
                      <Col xs="12" className="gep">  
                      <img alt='gepimage' src={gep} ></img>
                      </Col>
                      </Row> 
                </Col>
              </Row>
             
            </Container>
        <Container>
              <Row>
             <Col xs="12" className="cms">       
                    <img alt='cmsimage' src={cms}></img>          
             </Col>
             </Row> 
        </Container>
          </div>
        </div>
      </div>
    
    </React.Fragment>
  )
  
}
export default ResetPassword

