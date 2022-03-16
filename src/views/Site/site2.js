import React,  {Component } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import classnames from 'classnames';


import {
  Card,
  CardBody,
  Button,
  InputGroup,
  Dropdown,
  TabContent, 
  TabPane,
  Nav, 
  NavItem, 
  NavLink,  
  Row, 
  Col, 
  Input,
  Label,
  Form,
  FormGroup,
  Table,
 
} from 'reactstrap'
import '../Internet/Modal.css'
import del from '../../assets/img/bg/trash.png';
 class site extends Component {
    constructor(props) {
      super(props);
      this.state = {
        openModaladdsite : false,
        openModaldeletesite : false,
        activeTab: '1',
        sitename:'',
        address:'',
        sitephonenum:'',
        picname:'',
        picphonenum:'',
        zonename:''
      };
     
      this.toggle = this.toggle.bind(this);
    
    }
    toggle(tab) {
      if (this.state.activeTab !== tab) {
        this.setState({
          activeTab: tab
        });
      }
    }
    onClickButtonaddsite = e =>{
      e.preventDefault()
      this.setState({openModaladdsite : true})  
    }
    onCloseModaldeletesite = ()=>{
      this.setState({openModaldeletesite : false})
    }
    onClickButtondeletesite = e =>{
      e.preventDefault()
      this.setState({openModaldeletesite : true})  
    }
    onCloseModaladdsite = ()=>{
      this.setState({openModaladdsite : false})
    }
    routeChange=()=> {
      let path = '/sitedetails';
      
      this.props.history.push(path);
    }
 
   
  
render() {
  return (
    <>
    <Card className='shadow p-3 mb-5 bg-white rounded'>
    <CardBody>
       <h1>Site Management</h1><br/>
       <div>
       <InputGroup className="mb-5">
      <Dropdown isOpen>
        <select id='company' type="text" className="form-control" >
          <option>Choose the company</option> 
        </select>
      </Dropdown>
      </InputGroup>
      
       <Button  style={{color:"white",backgroundColor:"#81163F",display: 'flex', justifyContent: 'right' }} className="float-right" onClick={this.onClickButtonaddsite}> Add Site</Button>
      
       <Modal center open={this.state.openModaladdsite} onClose={this.onCloseModaladdsite}>
            <div className="modalContainer">
            <div className="titleCloseBtn">
            </div>
            <div className="title">
            <h1>Add Site</h1>
            </div>
            <div className='pwd-container'>
            <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}>
              Site Info
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}>
              PIC
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}>
              Device
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">  
              <Form >
              <h4>Site Info</h4><br/>
              <FormGroup>
                <Label for="examplesite2">Site Name</Label>
                <Input required 
                type="text" name="siteName" id="siteName" placeholder="insert site Name" />
              </FormGroup>
              <FormGroup >
                <Label for="siteadd">Address</Label>
                <Input className="input-group mb-3"  required 
                type="string" name="siteadd" id="siteadd" placeholder="insert address" />
              </FormGroup>
              <FormGroup  >
                <Label  for="phonenum">Phone Number</Label>
                <Input  className="input-group mb-3" required 
                type="text" name="phonenum" id="phonenum" placeholder="insert phone number" />
              </FormGroup>
              <FormGroup className='footer btn' inline>
              <Button style={{color:"white",backgroundColor:"#81163F"}}onClick={this.onCloseModaladdsite}>Cancel</Button>  
              <Button style={{color:"white",backgroundColor:"#81163F"}}type = 'submit'   onClick={() => { this.toggle('2'); }}>Next 1/3</Button>
              </FormGroup>
              </Form>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
              <Form >
              <h4>PIC Info</h4><br/>
              <FormGroup>
                <Label for="picname">PIC Name</Label>
                <Input required 
                type="text" name="picName" id="picName" placeholder="insert  Name" />
              </FormGroup>
              <FormGroup >
                <Label for="picemail">Email</Label>
                <Input className="input-group mb-3"  required 
                type="string" name="picemail" id="picemail" placeholder="insert email" />
              </FormGroup>
              <FormGroup  >
                <Label  for="picnum">Phone Number</Label>
                <Input  className="input-group mb-3" required 
                type="text" name="picnum" id="picnum" placeholder="insert phone number" />
              </FormGroup>
           </Form>  
              </Col>
              <FormGroup className='footer btn' inline>
              <Button style={{color:"white",backgroundColor:"#81163F"}} onClick={() => { this.toggle('1'); }}>Back</Button>  
              <Button  style={{color:"white",backgroundColor:"#81163F"}} type = 'submit'   onClick={() => { this.toggle('3'); }}>Next 2/3</Button>
              </FormGroup>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="12">      
              <Form >
              <h4>Zone Info</h4><br/>
              <FormGroup>
                <Label for="zonename">Zone Name</Label>
                <Input required 
                 type="text" name="zoneName" id="zoneName" placeholder="insert zone Name" />
              </FormGroup>
              <FormGroup className='footer btn' inline>
              <Button style={{color:"white",backgroundColor:"#81163F"}} onClick={() => { this.toggle('2'); }}>Back</Button>  
              <Button style={{color:"white",backgroundColor:"#81163F"}} type = 'submit' >Next 3/3</Button>
              </FormGroup>
          </Form>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
            </div>
            </div>
            </div>
          </Modal> 
      </div>
       <div className='tbl2'>
      <Table className='table' hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Site Name</th>
            <th>Zone</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        
            <th>1</th>
            <th>UTM JB</th>
            <th>Zone Timur</th>
            <th>Skudai,Johor</th>
            <th>01111111111</th>
            <th><a href='#!' style={{ paddingInline:'10px',color:"#81163F", width:"10px"}} onClick={this.routeChange} className='icon-eye'> </a>{' '}
            <a href='#!' style={{color:"#81163F",width:"10px"}}  onClick={this.onClickButtondeletesite} className='icon-trash'> </a></th>
        </tbody>
      
      </Table>
      </div>
         
            <Modal size="sm"center  open={this.state.openModaldeletesite} onClose={this.onCloseModaldeletesite}>
                <div className="modalContainer">
                <div className="titleCloseBtn">
               
                </div>
                
                <div className="title">
                  
                    
                  <div className='pic'>  
                    <img  src= {del} alt="pic"></img>
                  
                  <h1 className='primary'>Confirm to delete ?</h1><br/>
                  </div>
                  <text>Delete the certain site with all te details.</text>
                  </div>
                
                
                
                <div className='footer button'>
              <Button  style={{color:"white",backgroundColor:"#81163F"}} onClick={this.onCloseModaldeletesite}>No, Keep Site</Button> 
              <Button    style={{color:"white",backgroundColor:"#81163F"}}>Yes, Delete Site</Button>  
              
            </div> 
            </div>
            </Modal>
        
       
    </CardBody>
    </Card>  
</>  
   );   
 }
 }
  
export default site;