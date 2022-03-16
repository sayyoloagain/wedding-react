import React, {useState} from 'react';
import {
  Col,
  Form,
  Input,
  Button,
  Row,
  Container,
  InputGroup,
  InputGroupAddon,
} from 'reactstrap'
import cms from '../../assets/img/bg/banner-cms.png'
import gep from '../../assets/img/bg/gep-logoo.png'
import showPwdImg from '../../assets/img/bg/show-password.svg';
import hidePwdImg from '../../assets/img/bg/hide-password.svg';

import { useHistory } from 'react-router-dom';

function InputRP() {
  const chistory = useHistory();
 
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [isRevealPwd1, setIsRevealPwd1] = useState(false);
  const [isRevealPwd2, setIsRevealPwd2] = useState(false);
  // const [RevealErrPwdShort, setRevealErrPwdShort] = useState(false);
  // const [RevealErrPwdMism, setRevealErrPwdMism] = useState(false);
  // const [RevealPwdChg, setRevealPwdChg] = useState(false);
  // const [RevealErrNoPwd, setRevealErrNoPwd] = useState(false);
  

  return (

        <React.Fragment>
          <div className="login">
            <div className="login-cms">
              <div className="app flex-row align-items-center">
                <Container>
                  <Row className="justify-content-center">
                    <Col md="8">
                          <h1 className="text-primary font-weight-bold">Reset Password<br/></h1>
                          <p className='color'>Enter your new and strong password for your account.</p>
    
                          <Form className='btn2' >
                            <div className='pwd-container'>Password
                            <InputGroup className="mb-3">
                              <InputGroupAddon addonType="prepend">
                              </InputGroupAddon>
                              <Input type={isRevealPwd1 ? "text" : "password"} placeholder="Password" name="password" autoComplete="current-password" onChange={(e) => { setPassword1(e.target.value) }} />
                              <img alt=""
                            title={isRevealPwd1 ? "Hide password" : "Show password"}
                            src={isRevealPwd1 ? hidePwdImg : showPwdImg}
                            onClick={() => setIsRevealPwd1(prevState => !prevState)}
                             />
                            </InputGroup>
                            </div>

                            <div className='pwd-container'>Confirm Password
                            <InputGroup className="mb-3">
                              <InputGroupAddon addonType="prepend">
                              </InputGroupAddon>
                              <Input type={isRevealPwd2 ? "text" : "password"} placeholder="Confirm Password" name="password" autoComplete="current-password" onChange={(e) => { setPassword2(e.target.value) }} />
                              <img alt=""
                            title={isRevealPwd2 ? "Hide password" : "Show password"}
                            src={isRevealPwd2 ? hidePwdImg : showPwdImg}
                            onClick={() => setIsRevealPwd2(prevState => !prevState)}
                             />
                            </InputGroup>
                            </div>
    
                            {/* <Alert isOpen={RevealPwdChg}>Password Changed!</Alert>
                            <Alert isOpen={RevealErrPwdMism}>Error. Your new password is mismatched.</Alert>
                            <Alert isOpen={RevealErrPwdShort}>Error. Your password is too short.  </Alert>
                            <Alert isOpen={RevealErrNoPwd}>Please enter your password.  </Alert> */}
    
                            <Row className="btn2">
                              <Col xs="12" className="mx-auto" >
                                <Button  style={{color:"white",backgroundColor:"#81163F"}}  onClick={()=> chistory.push("/Login/PasswordChanged")} className="px-4 w-100">Reset Password</Button>                                
                              </Col>
                            </Row>

                            <Row className="btn2">
                            <Col xs="12" className="mx-auto" >
                              <Button  onClick={()=> chistory.push("/Login/ResetPassword")}  style={{color:"white",backgroundColor:"#81163F"}} className="px-4 w-100"  >Cancel</Button>
                            </Col>
                          </Row>
                            </Form>
                            <Row>

                           

                            <Col xs="12" className="gep">  
                            <img  src={gep} alt=""></img>
                            </Col>
                            </Row>
                      </Col>
                   </Row>
                </Container>
                <Container>
                 <Row>
                 <Col xs="12" className="cms">       
                  <img src={cms} alt=""></img>          
                 </Col>
                </Row>
                </Container>
              </div>
            </div>
          </div>
        
        </React.Fragment>
  )
}



export default InputRP;
