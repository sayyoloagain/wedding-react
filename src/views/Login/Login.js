import {
  Button,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  Dropdown,
  InputGroupAddon,
  Row,
  Alert,
} from 'reactstrap';

import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory,Link } from "react-router-dom";

import cms from '../../assets/img/bg/banner-cms.png'
import gep from '../../assets/img/bg/gep-logoo.png'
import showPwdImg from '../../assets/img/bg/show-password.svg';
import hidePwdImg from '../../assets/img/bg/hide-password.svg';
import { Auth } from '../../api'


const Login = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const authUser = Auth.getAuthUser()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRevealPwd, setIsRevealPwd] = useState(false);
  const [RevealErr, setRevealErr] = useState(false); 
  const [role, setRole] = useState('');
 
  useEffect(() => {
    if (typeof (authUser) !== 'undefined' && authUser !== null) {
      console.log(authUser)
      if (authUser.token) {
        history.push('/')
      }
    }
  }, [authUser, history, dispatch]);

  const login = async (e) => {
    e.preventDefault();
    if (username && password && role) {
      try {
        if (username && password && role) {
          // let user = {}
          if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(username)) {
            await Auth.loginByEmail(username, password, role);
          } else {
            await Auth.loginByUsername(username, password, role);
          }
          history.push({ pathname: "/dashboard" })
        }
      } catch (error) {
        setRevealErr(true)
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
                      <h1 className="text-primary font-weight-bold">Sign In<br/></h1>
                      <p className='color'>Enter your email and password to sign in</p>

                      <Form onSubmit={(e) => { login(e) }}>

                        <div><br/> Email</div>
                        <InputGroup className="mb-3">
                          <InputGroupAddon addonType="prepend">
                          </InputGroupAddon>
                          <Input type="text" placeholder="Email Address" name="username" autoComplete="username" onChange={(e) => { setUsername(e.target.value) }} />
                        </InputGroup>

                        <div className='pwd-container'> Password
                        <InputGroup className="mb-3">
                          <InputGroupAddon addonType="prepend">
                          </InputGroupAddon>
                          <Input  type={isRevealPwd ? "text" : "password"} placeholder="Password" name="password" autoComplete="current-password" onChange={(e) => { setPassword(e.target.value) }} />
                          <img
                          alt='passreveal'
                            title={isRevealPwd ? "Hide password" : "Show password"}
                            src={isRevealPwd ? hidePwdImg : showPwdImg}
                            onClick={() => setIsRevealPwd(prevState => !prevState)}
                          />
                        </InputGroup>
                        </div>

                        <div> Role</div>
                        <InputGroup className="mb-5">
                          <Dropdown isOpen>
                          <select id='role' type="text" className="form-control" onChange={(e) => { setRole(e.target.value)}}>
                          <option value="">Select Role</option>
                          <option value="System Admin" >System Admin</option>
                          <option value="Super Admin" >Super Admin</option>
                          <option value="Admin">Admin</option>
                          <option value="Supervisor">Supervisor</option>
                          <option value="Client">Client</option>
                          </select>
                          </Dropdown>
                        </InputGroup>

                        <Alert className='Alert' isOpen={RevealErr}> Signed in failed. Please check that your sign in details are correct.</Alert>

                        <Row>
                          <Col xs="12" className="mx-auto" >
                            <Button  style={{color:"white",backgroundColor:"#81163F"}} className="px-4 w-100" >SIGN IN</Button>
                            
                          </Col>
                        </Row>
                        
                        <Col xs="12" className="fp">
                        <Link as="span" ms="15px" fontWeight="bold" to="/Login/ResetPassword">Forgot Password ?</Link>  
                        </Col>

                        </Form>
                        <Row>
                        <Col xs="12" className="gep">  
                        <img  src={gep} alt='gep'></img>
                        </Col>
                        </Row>
                  </Col>
               </Row>
            </Container>
            <Container>
             <Row>
             <Col xs="12" className="cms">       
              <img src={cms} alt="img"></img>          
             </Col>
            </Row>
            </Container>
          </div>
        </div>
      </div>
    
    </React.Fragment>
  )
  
}
export default Login