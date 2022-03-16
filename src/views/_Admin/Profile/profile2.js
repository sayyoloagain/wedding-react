import React, { Fragment, Component} from 'react';
import { connect } from "react-redux";
import { Modal } from "react-bootstrap";
import imgprofile from '../../../assets/img/brand/profile.png'
import { CAlert } from '@coreui/react';
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  PaginationLink,
  PaginationItem,
  Label,
  FormGroup,
  Input,
  Pagination,
  Button,
  ListGroupItem,
  Row,
  Alert,
  Table,
  InputGroup,
  InputGroupAddon,
} from 'reactstrap'

import { UsersActions } from '../../../__actions'
import { profileActions } from '../../../__actions/profile.js'
import uploadedImage from '../../../assets/img/brand/profile.png'
import showPwdImg from '../../../assets/img/bg/show-password.svg';
import hidePwdImg from '../../../assets/img/bg/hide-password.svg';
import save from '../../../assets/img/bg/save.png';
import fsave from '../../../assets/img/bg/fsave.png';

import './pmodal.css'


class TableRow extends Component {
  constructor(props) {
    super(props);
      this.state = { }
      this.toggle = this.toggle.bind(this);
      this.state = { collapse: false };
      this.state = {isCardView: false,}
  }
  state = {
    copied: false,
  }
  radioHandler = (status) => {
    this.setState({ status });
  };
  state={
    openModalEditXOX : false
  }
  onClickButtonEditXOX = e =>{
    e.preventDefault()
    this.setState({openModalEditXOX : true})  
  }
  onCloseModalEditXOX = ()=>{
    this.setState({openModalEditXOX : false})
  }
  radioHandler1 = (status1) => {
    this.setState({ status1 });
  };
  state={
    openModalEditMax : false
  }
onClickButtonEditMax = e =>{
  e.preventDefault()
  this.setState({openModalEditMax : true})  
}
onCloseModalEditMax = ()=>{
  this.setState({openModalEditMax : false})
}
  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
      const { status } = this.state;
      const { status1 } = this.state;
      let data = this.props.userData
      let numberId = data.id
      let mobileNumberreadonly = data.mobileNumber
      let siteNamereadonly = data.Site.name
      let numbers = this.props.numbers
      let number = numbers + 1
    return (
      <React.Fragment>
      <tr>
        <th scope="row">{number}</th>
        <td>{data.Site.name}</td>
      </tr>
      </React.Fragment>
    )
  }
}

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oldpassword: '',
      password1: '',
      password2: '',
      isRevealOPwd: false,
      isRevealCPwd: false,
      isRevealNPwd: false,
      RevealErrPwdShort: false,
      RevealErrPwdMism: false,
      RevealPwdChg: false,
      RevealErrNoPwd: false,
      show: false,
      uploadedImage: null,
      imageUploader: null,
      handleClose: false,
      handleShow: true,
      handleClose1: false,
      handleShow1: true,
     
    }
  }
  state={
    openModal : false
  }
  
  reset() {
    this.imageUploader.current.value = "";
  };

  handleShow = e =>{
    e.preventDefault()
    this.setState({openModal : true})
}
onCloseModal = e =>{
   
    this.setState({openModal : false})
}
  PasswordChangeSubmit(e) {
    e.preventDefault();
    this.setState({setRevealPwdChg: false})
    this.setStateset({RevealErrPwdMism: false})
    this.setState({setRevealErrPwdShort:false})
    this.setState({setRevealErrNoPwd:false})
    if (this.state.password1 !== this.state.password2) {
      console.log('Password Mismatched!')     // ### Pwd mismatched
      this.setState({RevealErrPwdMism: true})
      this.setState({ password1: '' })
      this.setState({ password2: '' })
      return;
    }
    if (this.state.password1.length < 6) {
      console.log('Password is too short!')   // ### Alert pwd too short
      this.setState({RevealErrPwdShort: true})
      this.setState({ password1: '' })
      this.setState({ password2: '' })
      return;
    }
    try {                                     // ### Pwd input no problems
      e.preventDefault()
      console.log('### 1st pass ###')
     
      
      let _param = {
        oldPassword: this.state.oldpassword,
        newPassword: this.state.password1
      }
      let result = profileActions.changePassword2(_param)
     
    } catch (error) {
       
        console.log(error)
    }
  }

  handleImageUpload(e)  {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = e => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };
  
  componentDidMount() {
    UsersActions.getProfile(this.props.dispatch)
  }

 render(){
  const { data } = this.props.users;
  console.log({data});

  return (
    <>
     <h1>User Profile</h1><br/>
      <Card >
            <CardBody>
            <h3>Personal Information</h3>
              <Row>
              <Col md={3}>
                  <ListGroupItem>
                    <FormGroup row >
                    <div
                    style={{
                      marginTop: "25px",
                      marginLeft:"70px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <input 
                      type="file"
                      accept="image/*"
                      onChange={this.handleImageUpload}
                      ref={this.state.imageUploader}
                      style={{
                        display: "none"
                      }}
                    />
                    <div
                      className='img-avatar'
                      style={{
                        height: "100px",
                        width: "100px",
                        border: "2px solid black",
                      }}
                    >
                      <img
                      className='img-avatar'
                        ref={uploadedImage}
                        style={{
                          width: "100%",
                          height: "100%",
                          position: "acsolute"
                        }}
                      />
                    </div>
                    <text style={{marginTop:'5px'}}>Aiman bin Adam</text><br/>
                    <text >Super admin</text>
                    <Button style={{width: '150px', height:'40px',float: 'right',color:'white',background:'#81163F',marginTop:'60px'}}  /*onClick={this.state.imageUploader.current.click()}*/>Upload photo</Button>
                    <Button outline style={{width: '150px', height:'40px', marginTop:'5px'} }onClick={this.reset}>Reset photo</Button>
                   
               
                  </div>
                                
                </FormGroup>
                </ListGroupItem>
                </Col>
                
                <Col md={9}>
                
                <ListGroupItem>
                <FormGroup row>
                <Label for="exampleEmail" style={{color:'black'}} sm={3}>Email</Label>
                <Col >
                <text>aiman@gmail.com</text>
                </Col>
                </FormGroup>
                <FormGroup row>
                <Label for="phonenumber" style={{color:'black'}} sm={3}>Phone Number</Label>
                <Col >
                <Input  type="number" name="phonenumber" placeholder="Phone number" />
                </Col>
                </FormGroup>
                <FormGroup row>
                <Label for="accesscard" style={{color:'black'}} sm={3}>Access Card</Label>
                <Col >
                <Input  type="text" name="accesscard" placeholder="Access Card"/>
                </Col>
                </FormGroup>
                <FormGroup row>
                <Label  style={{color:'black'}} sm={3}>Old Password</Label>
                <Col className='pwd-container' >
                <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend">
                </InputGroupAddon>
                <Input type={this.state.isRevealOPwd ? "text" : "password"} placeholder="Old Password" name="password" autoComplete="current-password" onChange={this.state.oldpassword} />
                  <img
                            title={this.state.isRevealOPwd ? "Hide password" : "Show password"}
                            src={this.state.isRevealOPwd ? hidePwdImg : showPwdImg}
                            
                          />
                </InputGroup>
                </Col>
               
                </FormGroup>
                <FormGroup row>
                <Label for="exampleEmail" style={{color:'black'}} sm={3}>New Password</Label>
                <Col  className='pwd-container' >
                <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend">
                </InputGroupAddon>
                <Input type={this.state.isRevealNPwd ? "text" : "password"} placeholder="New Password" name="password" autoComplete="new-password" onChange={this.state.password1} />
                  <img
                            title={this.state.isRevealNPwd ? "Hide password" : "Show password"}
                            src={this.state.isRevealNPwd ? hidePwdImg : showPwdImg}
                           
                          />
                 </InputGroup>
                </Col>
                </FormGroup>
                <FormGroup row>
                <Label for="exampleEmail" style={{color:'black'}} sm={3}>Confirm Password</Label>
                <Col className='pwd-container'>
                <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend">
                </InputGroupAddon>
                <Input  type={this.state.isRevealCPwd ? "text" : "password"} placeholder="Confirm Password" name="password" autoComplete="confirm-password" onChange={this.state.password2} />
                  <img
                            title={this.state.isRevealCPwd ? "Hide password" : "Show password"}
                            src={this.state.isRevealCPwd ? hidePwdImg : showPwdImg}
                            
                          />
                </InputGroup>
                </Col>
                </FormGroup>
                </ListGroupItem>
                <CardBody>
                  
                  <InputGroup style={{display: 'flex', justifyContent: 'center' }} className="float-right">
                  <div background="grey"class="input_container">
                  <h7>Password Must:</h7>
                  <ul>
                    <li >Be at least 8 Characters</li>
                    <li >Have uppercase and lowersace letter (A-Z)</li>
                    <li >Have numeric characters (0-9)</li>
                    <li >Have special characters, e.g.,!@#? </li>
                  </ul>
                  </div>
                  </InputGroup>
                  
              <Button style={{width: '150px', height:'40px',float: 'right',color:'white',background:'#81163F'}}  className="openModalBtn" onClick={this.handleShow}>Save Change</Button>
              
                <Modal center show={this.state.openModal} onHide={this.onCloseModal}>
                <div className="modalContainer">
                <div className="titleCloseBtn">
                <button onClick={this.state.handleClose}>X</button>
                </div>
               
                <div className="title">
               
                
                <div className='pic'>  
                  <img  src= {save} alt="pic"></img>
                
                <h1 className='primary'>Save Changes</h1><br/>
                </div>
                <text>Do you want to save the changes?</text>
                </div>
                
                <div className='footer button'>
              <Button outline color='primary' onClick={this.state.handleClose}>Cancel</Button> 
              <Button outline color='primary' onClick={(e) => { this.PasswordChangeSubmit(e) }}>Continue</Button>  
              
            </div> 
            </div>
              </Modal>
                
                </CardBody>
                
            
                </Col>
                 
            </Row>
            
            </CardBody>
          </Card>


          <Card >
            <CardBody>
            <h3>Company Information</h3>
              <Row>
              
                <Col md={12}>
                
                <ListGroupItem>
                <FormGroup row>
                <Label for="company" style={{color:'black'}} sm={3}>Company</Label>
                <Col >
                <text>Innates Plt</text> 
                </Col>
                </FormGroup>
                <FormGroup row>
                <Label for="cperson" style={{color:'black'}} sm={3}>Contact Person</Label>
                <Col >
                <text>Aizuddin Bin Ruslee</text> 
                </Col>
                </FormGroup>
                <FormGroup row>
                <Label for="cperson" style={{color:'black'}} sm={3}>Site</Label>
                <Col md={5}>
                <Table
                  responsive
                  size='sm'
                  bordered
                  className='tbl'
                >
                  <thead>
                    <tr>
                      <th className="text-center table-head">No</th>
                      <th className="text-center table-head">Site Name</th>
                    </tr>
                  </thead>

                  <tbody>
                    {data.length === 0 ? (
                      <tr>
                        <td align="center" colSpan="5">
                          No Data
                        </td>
                      </tr>
                    ) : (
                      data.map((userData, index)  => (   // userData[index] 
                        <Fragment key={index}>
                          <TableRow numbers={index} userData={userData} />
                        </Fragment>
                      ))
                    )}
                  
                  </tbody>
                </Table>
                
                </Col>
                </FormGroup>
                
                </ListGroupItem>
                <CardBody>
                
                <Button style={{width: '150px', height:'40px',float: 'right',color:'white',background:'#81163F'}} >Edit</Button>
               
                </CardBody>
               
            
                </Col>
                
            </Row>
            </CardBody>
          </Card>
    </>
    )
  }               
}



function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps)(Profile);