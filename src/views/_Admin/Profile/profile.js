import React, {Component} from 'react';
import { connect } from "react-redux";
import { Modal } from 'react-responsive-modal';
import MaterialTable from 'material-table';
import tableIcons from "../../Internet/MaterialTableIcons";
 import 'react-responsive-modal/styles.css';
import {
  Card,
  CardBody,
  Col,
  Label,
  FormGroup,
  Input,
  Button,
  ListGroupItem,
  Row,
  InputGroup,
  InputGroupAddon,
} from 'reactstrap'
import { UsersActions } from '../../../__actions'
import uploadedImage from '../../../assets/img/brand/profile.png'
import showPwdImg from '../../../assets/img/bg/show-password.svg';
import hidePwdImg from '../../../assets/img/bg/hide-password.svg';
import save from '../../../assets/img/bg/save.png';
import '../../Internet/Modal.css'
//import './pmodal.css'

class Profile extends Component {
  constructor(props) {
    super(props);
    this.PasswordChangeSubmit = this.PasswordChangeSubmit.bind(this)
    this.ProfileChangeSubmit = this.ProfileChangeSubmit.bind(this)
    this.state = {
      currentUserName: '',
      currentUserEmail: '',
      currentUserContact: '',
      currentUserAccessCard: '',
      currentUserCompany: [],
      tempContact: '',
      tempAccessCard: '',
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
      openModalsave : false,
      openModalpass : false,
      openModal : false
      // chistory: useHistory()
    }

  }
  
  reset() {
    this.imageUploader.current.value = "";
  };
onClickButtonsave = e =>{
  e.preventDefault()
  console.log(this.state.tempContact);
  console.log(this.state.tempAccessCard);
  this.setState({openModalsave : true})  
}
onCloseModalsave = ()=>{
  this.setState({openModalsave : false})
}

onClickButtonpass = e =>{
  e.preventDefault()
  this.setState({
    openModalpass : true})  
}
onCloseModalpass = ()=>{
  this.setState({openModalpass : false})
}
saveName = e => {
  console.log(e);
  this.setState({currentUserName: e})
}
  ProfileChangeSubmit(e) {
    try {
      // let _param = {
      //   tempContact: this.state.tempContact,
      //   tempAccessCard: this.state.tempAccessCard
      // }
      // let result = profileActions.profileUpdate(_param)
    } catch (error) {
      console.log(error)
    }

  }
  PasswordChangeSubmit(e) {
    console.log(this.state.password1);
    console.log(this.state.password2);
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
      console.log('### 1st pass ###')      
      // let _param = {
      //   oldPassword: this.state.oldpassword,
      //   newPassword: this.state.password1
      // }
      // let result = profileActions.changePassword2(_param)
      //second modal + timer.? for password change success
    
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
  for(let i=0;i<data.length;i++){
    this.setState({
      currentUserName: data[i].name,
      currentUserEmail: data[i].email,
      currentUserContact:data[i].contact,
      currentUserAccessCard: data[i].accessCard
    })
  }
  

  // ### test
  let tempCompData = []
  let tempCompData2 = []
  let tempSiteData = []
  let tempSiteData2 = []

  // ########## for user information ##########
  data.forEach(element => {
    tempCompData.push(element.Company)
  });

  tempCompData.forEach(element => {
    element.forEach((holder, i) => {
      if (tempCompData2.includes(holder.name)) {
      }
      else 
      tempCompData2.push(holder.name)
    })
  });
  for(let i=0;i<tempCompData2.length;i++){
    if (this.state.currentUserCompany.includes(tempCompData2[i])){
    } else
    this.state.currentUserCompany.push(tempCompData2[i])
  }
  // ########## for user information ##########

  // ########## for site list ##########
  data.forEach(element => {
    tempSiteData.push(element.Site)
  });
  console.log(tempSiteData);
  console.log(tempSiteData.length);

  tempSiteData.forEach(element => {
    element.forEach((holder, i) => {
      if (tempSiteData2.includes(holder.name)) {
      }
      else 
      tempSiteData2.push({id: i, siteName: holder.name})
    })
  });
  console.log(tempSiteData2);
  // ########## for site list ##########

  return (
    <>
     <h1>User Profile</h1><br/>
      <Card >
            <CardBody>
            <h3>Personal Information</h3>
              <Row>
              <Col md={3}>
                  <ListGroupItem className='tbl'>
                    <FormGroup row >
                    <div
                    style={{
                      marginTop: "70px",
                      marginLeft:"95px",
                      marginRight:"50px",
                      marginBottom:"270px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      justifyItem:"center",
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
                    alt='image1'
                      className='img-avatar'
                        ref={uploadedImage}
                        style={{
                          width: "100%",
                          height: "100%",
                          position: "acsolute"
                        }}
                      />
                    </div>
                    
                    <text style={{marginTop:'5px'}}>
                    {this.state.currentUserName}
                    </text><br/>
                    <text >Super admin</text>
                    <Button style={{width: '150px', height:'40px',float: 'right',color:'white',background:'#81163F',marginTop:'60px'}}  /*onClick={this.state.imageUploader.current.click()}*/>Upload photo</Button>
                    <Button outline style={{width: '150px', height:'40px', marginTop:'5px'} }onClick={this.reset}>Reset photo</Button>
                   
               
                  </div>
                                
                </FormGroup>
                </ListGroupItem>
                </Col>
                
                <Col md={9}>
                <CardBody>
                <ListGroupItem>
                <FormGroup row>
                <Label for="exampleEmail" style={{color:'black'}} sm={3}>Email</Label>
                <Col >
                {this.state.currentUserEmail}
                </Col>
                </FormGroup>
                <FormGroup row>
                <Label for="phonenumber" style={{color:'black'}} sm={3}>Phone Number</Label>
                <Col >
                <Input  type="string" name="phonenumber" placeholder={this.state.currentUserContact} onChange={e => this.setState({tempContact: e.target.value})}/>
                </Col>
                </FormGroup>
                <FormGroup row>
                <Label for="accesscard" style={{color:'black'}} sm={3}>Access Card</Label>
                <Col >
                <Input  type="text" name="accesscard" placeholder={this.state.currentUserAccessCard} onChange={e => this.setState({tempAccessCard: e.target.value})}/>
                <Input type="text" id="autofill-if-you-dare" style={{opacity: '1', position: 'absolute', right:'10000px', width: '0'}} />  {/* chrome autofill bug remove */}
               
                <FormGroup className='tbl2'>
                <Button style={{width: '150px', height:'40px',float: 'right',color:'white',background:'#81163F'}}  className="openModalBtn" onClick={this.onClickButtonsave}>Save Change</Button>
                </FormGroup>
                </Col>

                </FormGroup>
                </ListGroupItem>
               
                </CardBody>

               
             <CardBody > 
            <ListGroupItem>
                
              <FormGroup row>
                <Label  style={{color:'black'}} sm={3}>Old Password</Label>
                <Col className='pwd-container' >
                <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend">
                </InputGroupAddon>
                <Input type={this.state.isRevealOPwd ? "text" : "password"} placeholder="Old Password" name="password" autoComplete="current-password" onChange={e => this.setState({oldpassword: e.target.value})} />
                  <img
                    alt='image1'
                    title={this.state.isRevealOPwd ? "Hide password" : "Show password"}
                    src={this.state.isRevealOPwd ? hidePwdImg : showPwdImg}
                    // onClick={this.state.isRevealOPwd(true)}
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
                <Input type={this.state.isRevealNPwd ? "text" : "password"} placeholder="New Password" name="password" autoComplete="new-password" onChange={e => this.setState({password1: e.target.value})} />
                  <img
                    alt='image2'
                    title={this.state.isRevealNPwd ? "Hide password" : "Show password"}
                    src={this.state.isRevealNPwd ? hidePwdImg : showPwdImg}
                    // onClick={this.state.isRevealNPwd(prevState => !prevState)}
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
                <Input  type={this.state.isRevealCPwd ? "text" : "password"} placeholder="Confirm Password" name="password" autoComplete="confirm-password" onChange={e => this.setState({password2: e.target.value})} />
                  <img
                    alt='image3'
                    title={this.state.isRevealCPwd ? "Hide password" : "Show password"}
                    src={this.state.isRevealCPwd ? hidePwdImg : showPwdImg}
                    // onClick={this.state.isRevealCPwd(prevState => !prevState)}
                  />
                </InputGroup>
                <InputGroup style={{display: 'flex', justifyContent: 'center',float:'center' }} className="tbl">
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
                  
              <Button style={{width: '150px', height:'40px',float: 'right',color:'white',background:'#81163F'}}  className="openModalBtn" onClick={this.onClickButtonpass}>Change Password</Button>
                </Col>
                </FormGroup>
                </ListGroupItem>
                </CardBody>
                    <Modal size="sm" center open={this.state.openModalsave} onClose={this.onCloseModalsave}>
                    <div className="modalContainer">
                    <div className="titleCloseBtn">
                    </div>
                    <div className="title">
                    <div className='pic'>  
                      <img  src= {save} alt="pic"></img>
                    <h1 className='primary'>Save Changes</h1><br/>
                    </div>
                    <text>Do you want to save the changes?</text>
                    </div>
                    <div className='footer button'>
                  <Button outline color='primary' onClick={this.onCloseModalsave}>Cancel</Button> 
                  <Button outline color='primary'  onClick={this.ProfileChangeSubmit}>Continue</Button>  
                </div> 
                </div>
                </Modal>

                <Modal size="sm"center  open={this.state.openModalpass} onClose={this.onCloseModalpass}>
                <div className="modalContainer">
                <div className="titleCloseBtn">
                </div>
                <div className="title">
                <div className='pic'>  
                  <img  src= {save} alt="pic"></img>
                <h1 className='primary'>Save New Password</h1><br/>
                </div>
                <text>Do you want to save the changes?</text>
                </div>
                
                <div className='footer button'>
              <Button outline color='primary' onClick={this.onCloseModalpass}>Cancel</Button> 
              <Button outline color='primary' onClick={this.PasswordChangeSubmit}>Continue</Button>  
              
            </div> 
            </div>
            </Modal>
            
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
                {this.state.currentUserCompany}
                </Col>
                </FormGroup>
                <FormGroup row>
                <Label for="cperson" style={{color:'black'}} sm={3}>Contact Person</Label>
                <Col >
                {this.state.currentUserName}
                </Col>
                </FormGroup>
                <FormGroup row>            
                <Label for="cperson" style={{color:'black'}} sm={3}>Site</Label>
                <Col md={5}>
                        
                  
                <MaterialTable   
                options={{
                search: false,
                toolbar: false,
                }}
                columns={[
                {title:'No', field:'id'},
                {title:'Site Name',field:'siteName'},
                ]}
                data={tempSiteData2}
                icons={tableIcons} 
                />
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