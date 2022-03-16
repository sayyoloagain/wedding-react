// code table using material table
import React,  {Component } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import MaterialTable from 'material-table';
import tableIcons from "../Internet/MaterialTableIcons";
import classnames from 'classnames';
import ContentEditable from 'react-contenteditable'

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
  ListGroupItem,

 
} from 'reactstrap'
import '../Internet/Modal.css'
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import del from '../../assets/img/bg/trash.png';
import RemoveRedEye from '@material-ui/icons/RemoveRedEye';

 class sitedetails extends Component {
    constructor(props) {
      super(props);
      this.state = {
        openModaladdpic : false,
        openModaleditpic : false,
        openModaladdzone: false,
        openModaladdcp: false,
        openModaleditcp: false,
        openModaldeletecp: false,
        openModaldeletepic: false,
        openModalview: false,
        openModaldeletezn: false,
        openModaladddv: false,
        openModaleditdv: false,
        openModaldeletedv: false,
        activeTab: '1',
        activeTab1: '4',
        sitename:'',
        address:'',
        sitephonenum:'',
        picname:'',
        picphonenum:'',
        zonename:'',
        html: "<text>Lot 123,Taman Pertanian,Skudai Johor </text>",
        html1: "<text>01111111111</text>",
        html2: "<h2>Pulai Perdana</h2>",
        value: '0'
      };
     
      this.handleChangedrp = this.handleChange.bind(this);
      
      this.toggle = this.toggle.bind(this);
      this.toggle1 = this.toggle1.bind(this);
     
      this.contentEditable = React.createRef();
      this.contentEditable1 = React.createRef();
      this.contentEditable2 = React.createRef();
      
    }

      handleChangedrp = Event => {   
         this.setState({value: Event.target.value});  }

      handleChange = evt => {
        this.setState({html: evt.target.value});
      };

      handleChange1 = evt => {
        this.setState({html1: evt.target.value});
      };

      handleChange2 = evt => {
        this.setState({html2: evt.target.value});
      };

     toggle(tab) {
      if (this.state.activeTab !== tab) {
        this.setState({
          activeTab: tab
        });
      }
    }
    
    toggle1(tab) {
        if (this.state.activeTab1 !== tab) {
          this.setState({
            activeTab1: tab
          });
        }
      }
    
    onClickButtonaddpic = e =>{
      e.preventDefault()
      this.setState({openModaladdpic : true})  
    }
    onCloseModaladdpic = ()=>{
      this.setState({openModaladdpic : false})
    }
    onClickButtoneditpic = e =>{
        e.preventDefault()
        this.setState({openModaleditpic : true})  
    }
    onCloseModaleditpic = ()=>{
        this.setState({openModaleditpic : false})
    }

    onClickButtonaddzone = e =>{
        e.preventDefault()
        this.setState({openModaladdzone : true})  
      }
      onCloseModaladdzone = ()=>{
        this.setState({openModaladdzone : false})
      }
   
      onClickButtonaddcp = e =>{
        e.preventDefault()
        this.setState({openModaladdcp : true})  
      }
      onCloseModaladdcp = ()=>{
        this.setState({openModaladdcp : false})
      }
      onClickButtoneditcp = e =>{
          e.preventDefault()
          this.setState({openModaleditcp : true})  
      }
      onCloseModaleditcp = ()=>{
          this.setState({openModaleditcp : false})
      }

      onClickButtondeletecp = e =>{
        e.preventDefault()
        this.setState({openModaldeletecp : true})  
    }
    onCloseModaldeletecp = ()=>{
        this.setState({openModaldeletecp : false})
    }

    onClickButtondeletezn = e =>{
        e.preventDefault()
        this.setState({openModaldeletezn : true})  
    }
    onCloseModaldeletezn = ()=>{
        this.setState({openModaldeletezn : false})
    }
 

    onClickButtonadddv = e =>{
        e.preventDefault()
        this.setState({openModaladddv : true})  
      }
      onCloseModaladddv = ()=>{
        this.setState({openModaladddv : false})
      }
      onClickButtoneditdv = e =>{
          e.preventDefault()
          this.setState({openModaleditdv : true})  
      }
      onCloseModaleditdv = ()=>{
          this.setState({openModaleditdv : false})
      }

      onClickButtondeletedv = e =>{
        e.preventDefault()
        this.setState({openModaldeletedv : true})  
    }
    onCloseModaldeletedv = ()=>{
        this.setState({openModaldeletedv : false})
    }

    onClickButtondeletepic = e =>{
      e.preventDefault()
      this.setState({openModaldeletepic : true})  
  }
  onCloseModaldeletepic = ()=>{
      this.setState({openModaldeletepic : false})
  }
    onClickButtonview = e =>{
      e.preventDefault()
      this.setState({openModalview : true})  
    }
    onCloseModalview= ()=>{
      this.setState({openModalview : false})
    }

    routeChange=()=> {
      let path = '/site';
      
      this.props.history.push(path);
    }

   
 
render() {
  return (
    <>
    <h1>UTM JB</h1>
    <Card className='shadow p-3 mb-5 bg-white rounded'>
    <CardBody>
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
              Zones
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
        <TabContent  activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            
             
              <h2>Site Details</h2><br/>
              <Col md="9">
                <Form md={6}>
                <ListGroupItem >
                <FormGroup row>
                <Label for="address" sm={2} style={{color:'black'}} >Address :</Label>
                
                <ContentEditable sm={2}
                    style={{width: '400px', height:'40px'}}
                    innerRef={this.contentEditable}
                    html={this.state.html} // innerHTML of the editable div
                    disabled={false}       // use true to disable editing
                    onChange={this.handleChange} // handle innerHTML change
                    tagName='article' // Use a custom HTML tag (uses a div by default)
                    
                />{''}
                 <Button style={{width: '150px', height:'40px',color:'white',background:'#81163F'}}  >Save Change</Button>
                </FormGroup>
                <FormGroup row>
                <Label for="phonenumber" sm={2} style={{color:'black'}} >Phone Number :</Label>
                <ContentEditable sm={2}
                    style={{width: '400px', height:'40px'}}
                    innerRef={this.contentEditable1}
                    html={this.state.html1} // innerHTML of the editable div
                    disabled={false}       // use true to disable editing
                    onChange={this.handleChange1} // handle innerHTML change
                    tagName='article' // Use a custom HTML tag (uses a div by default)
                />
                <Button style={{width: '150px', height:'40px',color:'white',background:'#81163F'}} >Save Change</Button>
                </FormGroup>
                <FormGroup row>
                <Label for="email" sm={2} style={{color:'black'}} >Email :</Label>
                <text>InnatesPLT@gmail.com</text>
                </FormGroup>
                <FormGroup row >
                <Label for="domain" sm={2} style={{color:'black'}} >Domain :</Label>
                <text>gep@gmail.com</text>
                </FormGroup>
                </ListGroupItem>
                
      </Form>
      </Col>
     
      <Button style={{display: 'flex', justifyContent: 'right',color:"white",backgroundColor:"#81163F" }} className="float-right" onClick={this.onClickButtonaddpic}> Add PIC</Button>
     
                <div className='tbl2'></div>
                <Modal center open={this.state.openModaladdpic} onClose={this.onCloseModaladdpic}>
                    <div className="modalContainer">
                    <div className="titleCloseBtn">
                    </div>
                    <div className="title">
                    <h1>Add Person In Charge</h1>
                    </div>
                    <div className='pwd-container'>
                    <div>
                    <Form >
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
                    <FormGroup className='footer btn' inline>
                    <Button style={{color:"white",backgroundColor:"#81163F"}} onClick={this.onCloseModaladdpic}>Back</Button>  
                    <Button  type = 'submit' style={{color:"white",backgroundColor:"#81163F"}}  >Save</Button>
                    </FormGroup>
                    </div>
                    </div>
                    </div>
                </Modal> 
                <Modal size="sm"center  open={this.state.openModaldeletepic} onClose={this.onCloseModaldeletepic}>
                <div className="modalContainer">
                <div className="titleCloseBtn">
               
                </div>
               
                <div className="title">
                <h1 className='primary'>Confirm to Delete ?</h1><br/>
                
                <div className='pic'>  
                <img  src= {del} alt="pic"></img>
                  
            
               
                </div>
                <text>Delete the certain person in charge with all the details.</text>
                </div>
                
                <div className='footer button'>
              <Button style={{color:"white",backgroundColor:"#81163F"}} onClick={this.onCloseModaldeletepic}>No, Keep PIC</Button> 
              <Button style={{color:"white",backgroundColor:"#81163F"}} >Yes, Delete PIC</Button>  
              
            </div> 
            </div>
            </Modal>
            
        <MaterialTable title='Person In Charge'icons={tableIcons} 
        
        columns={[
          { title: 'No', field: 'no' },
          { title: 'Name', field: 'name' },
          { title: 'Email', field: 'email' },
          { title: 'Phone Number', field: 'phonenum', type: 'numeric'},
          { title: 'Label',field:'label'}
         
        ]}
        data={[
          { no: '1',name: 'Fakruddin Bin Ezzad', email: 'fakhruddin@gmail.com', phonenum:'01111111111', label:'Main PIC' },
        
        ]}
          actions={[
            
            {
              icon: () => <Edit />,
              tooltip: 'Edit PIC',
              onClick:this.onClickButtoneditpic 
            },
            {
              icon: () => <DeleteOutline />,
              tooltip: 'Delete PIC',
              onClick:this.onClickButtondeletepic
            }
          ]}
          options={{
            actionsColumnIndex: -1
             
            
          }}
          />
          <Modal center open={this.state.openModaleditpic} onClose={this.onCloseModaleditpic}>
                    <div className="modalContainer">
                    <div className="titleCloseBtn">
                    </div>
                    <div className="title">
                    <h1>Edit Person In Charge</h1>
                    </div>
                    <div className='pwd-container'>
                    <div>
                    <Form >
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
                    <FormGroup  >
                        <Label  for="picnum">Set as:</Label>
                        <InputGroup className="mb-5">
                        <Dropdown isOpen >
                        <select id='setas' type="text" className="form-control"> 
                            <option label="Main PIC" value="0"  ></option> 
                            <option label="PIC" value="1"  ></option> 
                        </select>
                        </Dropdown>
                        </InputGroup>
                    </FormGroup>
                    </Form>  
                    <FormGroup className='footer btn' inline>
                    <Button  style={{color:"white",backgroundColor:"#81163F"}} onClick={this.onCloseModaleditpic}>Back</Button>  
                    <Button type = 'submit' style={{color:"white",backgroundColor:"#81163F"}}  >Save</Button>
                    </FormGroup>
                    </div>
                    </div>
                    </div>
                </Modal> 
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12" className='tbl2'>
              <Button  style={{display: 'flex', justifyContent: 'right',color:"white",backgroundColor:"#81163F" }} className="float-right" onClick={this.onClickButtonaddzone}> Add Zone</Button>
                <FormGroup row sm={2}>
                <h2 for="zonename"    style={{color:'black'}} >Zone :</h2>
                
                <ContentEditable sm={2}
                    style={{width: '200px', height:'40px'}}
                    innerRef={this.contentEditable2}
                    html={this.state.html2} // innerHTML of the editable div
                    disabled={false}       // use true to disable editing
                    onChange={this.handleChange2} // handle innerHTML change
                    tagName='article' // Use a custom HTML tag (uses a div by default)
                    
                />{''}
                 <Button style={{width: '80px', height:'40px',color:'white',background:'#81163F'}}>save </Button>
                 <Button style={{width: '80px', height:'40px',color:'white',background:'#81163F'}} onClick={this.onClickButtondeletezn}>delete </Button>
                </FormGroup>
                <MaterialTable title='Checkpoint'icons={tableIcons} 
        
                columns={[
                { title:'No',field:'no' },
                { title:'Checkpoint',field:'cp' },
                { title:'Serial No',field:'sn' },
                { title:'Latitude',field:'lat' },
                { title:'Logitude',field:'log'}
                ]}
                data={[
                { no:'1',cp:'CP1',sn:'41BF3456HY',lat:'1.542635',log:'5.236545'},
                ]}
                actions={[
                    {
                    icon: () => <Edit />,
                    tooltip: 'Edit Checkpoint',
                    onClick:this.onClickButtoneditcp
                    },
                    {
                    icon: () => <DeleteOutline />,
                    tooltip: 'Delete Checkpoint',
                    onClick:this.onClickButtondeletecp
                    }
                ]}
                options={{
                    actionsColumnIndex: -1
                }}
                />
                   <Modal center open={this.state.openModaladdzone} onClose={this.onCloseModaladdzone}>
            <div className="modalContainer">
            <div className="titleCloseBtn">
            </div>
            <div className="title">
            <h1>Add Zone</h1>
            </div>
            <div className='pwd-container'>
            <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab1 === '4' })}
              onClick={() => { this.toggle1('4'); }}>
              Zone Info
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab1 === '5' })}
              onClick={() => { this.toggle1('5'); }}>
              Checkpoint Info
            </NavLink>
          </NavItem>
          
        </Nav>
        <TabContent activeTab={this.state.activeTab1}>
          <TabPane tabId="4">
            <Row>
              <Col sm="12">  
              <Form >
              <h4>Zone Info</h4><br/>
              <FormGroup>
                <Label for="zonename">Zone Name</Label>
                <Input 
                 type="text" name="zoneName" id="zoneName" placeholder="insert zone Name" />
              </FormGroup>
              <FormGroup className='footer btn' inline>
              <Button style={{color:"white",backgroundColor:"#81163F"}} onClick={this.onCloseModaladdzone}>Back</Button>  
              <Button style={{color:"white",backgroundColor:"#81163F"}} onClick={() => { this.toggle1('5'); }}>Next 1/2</Button>
              </FormGroup>
          </Form>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="5">
            <Row>
              <Col sm="12">
              <Form >
              <h4>Checkpoint Info</h4><br/>
              <FormGroup>
                <Label for="cpname">Name of Checkpoint</Label>
                <Input required 
                type="text" name="cpName" id="cpName" placeholder="insert checkpoint name" />
              </FormGroup>
              <FormGroup >
                <Label for="snum">Serial Number</Label>
                <Input className="input-group mb-3"  required 
                type="string" name="snum" id="snum" placeholder="insert serial number" />
              </FormGroup>
              <FormGroup  >
                <Label  for="latitude">Latitude</Label>
                <Input  className="input-group mb-3" required 
                type="decimal" name="latitude" id="latitude" placeholder="insert latitude" />
              </FormGroup>
              <FormGroup  >
                <Label  for="logitude">Logitude</Label>
                <Input  required className="input-group mb-3"  
                type="decimal" name="logitude" id="logitude" placeholder="insert logitude" />
              </FormGroup>
           </Form>  
              </Col>
              <FormGroup className='footer btn' inline>
              <Button style={{color:"white",backgroundColor:"#81163F"}}  onClick={() => { this.toggle1('4'); }}>Back</Button>  
              <Button  type = 'submit' style={{color:"white",backgroundColor:"#81163F"}}  >Submit</Button>
              </FormGroup>
            </Row>
          </TabPane>
         
        </TabContent>
            </div>
            </div>
            </div>
          </Modal> 
                <div className='tbl2'></div>
                <Button  style={{display: 'flex', justifyContent: 'right',color:"white",backgroundColor:"#81163F" }} className="float-right" onClick={this.onClickButtonaddcp}> Add Checkpoint</Button>
                <Modal center open={this.state.openModaladdcp} onClose={this.onCloseModaladdcp}>
                    <div className="modalContainer">
                    <div className="titleCloseBtn">
                    </div>
                    <div className="title">
                    <h1>Add Checkpoint</h1>
                    </div>
                    <div className='pwd-container'>
                    <div>
                    <Form >
                    <FormGroup>
                        <Label for="cpname">Name of Checkpoint</Label>
                        <Input required 
                        type="text" name="cpName" id="cpName" placeholder="insert checkpoint name" />
                    </FormGroup>
                    <FormGroup >
                        <Label for="snum">Serial Number</Label>
                        <Input className="input-group mb-3"  required 
                        type="string" name="snum" id="snum" placeholder="insert serial number" />
                    </FormGroup>
                    <FormGroup  >
                        <Label  for="latitude">Latitude</Label>
                        <Input  className="input-group mb-3" required 
                        type="decimal" name="latitude" id="latitude" placeholder="insert latitude" />
                    </FormGroup>
                    <FormGroup  >
                        <Label  for="logitude">Logitude</Label>
                        <Input  required className="input-group mb-3"  
                        type="decimal" name="logitude" id="logitude" placeholder="insert logitude" />
                    </FormGroup>
                </Form>   
                    <FormGroup className='footer btn' inline>
                    <Button style={{color:"white",backgroundColor:"#81163F"}} onClick={this.onCloseModaladdcp}>Back</Button>  
                    <Button style={{color:"white",backgroundColor:"#81163F"}} type = 'submit'   >Save</Button>
                    </FormGroup>
                    </div>
                    </div>
                    </div>
                </Modal> 
              </Col>
              <Modal center open={this.state.openModaleditcp} onClose={this.onCloseModaleditcp}>
                    <div className="modalContainer">
                    <div className="titleCloseBtn">
                    </div>
                    <div className="title">
                    <h1>Edit Checkpoint</h1>
                    </div>
                    <div className='pwd-container'>
                    <div>
                    <Form >
                    <FormGroup>
                        <Label for="cpname">Name of Checkpoint</Label>
                        <Input required 
                        type="text" name="cpName" id="cpName" placeholder="insert checkpoint name" />
                    </FormGroup>
                    <FormGroup >
                        <Label for="snum">Serial Number</Label>
                        <Input className="input-group mb-3"  required 
                        type="string" name="snum" id="snum" placeholder="insert serial number" />
                    </FormGroup>
                    <FormGroup  >
                        <Label  for="latitude">Latitude</Label>
                        <Input  className="input-group mb-3" required 
                        type="decimal" name="latitude" id="latitude" placeholder="insert latitude" />
                    </FormGroup>
                    <FormGroup  >
                        <Label  for="logitude">Logitude</Label>
                        <Input  required className="input-group mb-3"  
                        type="decimal" name="logitude" id="logitude" placeholder="insert logitude" />
                    </FormGroup>
                </Form>   
                    <FormGroup className='footer btn' inline>
                    <Button style={{color:"white",backgroundColor:"#81163F"}} onClick={this.onCloseModaleditcp}>Back</Button>  
                    <Button  type = 'submit' style={{color:"white",backgroundColor:"#81163F"}}  >Save</Button>
                    </FormGroup>
                    </div>
                    </div>
                    </div>
                </Modal> 

                <Modal size="sm"center  open={this.state.openModaldeletecp} onClose={this.onCloseModaldeletecp}>
                <div className="modalContainer">
                <div className="titleCloseBtn">
               
                </div>
               
                <div className="title">
                  
                    
                  <div className='pic'>  
                    <img  src= {del} alt="pic"></img>
                  
                  <h1 className='primary'>Confirm to delete ?</h1><br/>
                  </div>
                  <text>Delete the certain checkpoint with all the details.</text>
                  </div>
                
                <div className='footer button'>
              <Button style={{color:"white",backgroundColor:"#81163F"}} onClick={this.onCloseModaldeletecp}>No, Keep Checkpoint</Button> 
              <Button  style={{color:"white",backgroundColor:"#81163F"}} >Yes, Delete Checkpoint</Button>  
              
            </div> 
            </div>
            </Modal>

            <Modal size="sm"center  open={this.state.openModaldeletezn} onClose={this.onCloseModaldeletezn}>
                <div className="modalContainer">
                <div className="titleCloseBtn">
               
                </div>
                
                <div className="title">
                  
                    
                  <div className='pic'>  
                    <img  src= {del} alt="pic"></img>
                  
                  <h1 className='primary'>Confirm to delete ?</h1><br/>
                  </div>
                  <text>Delete a zone will permenently delete the zone and all the corresponding checkpoints.</text>
                  </div>
                
                
                
                <div className='footer button'>
              <Button style={{color:"white",backgroundColor:"#81163F"}} onClick={this.onCloseModaldeletezn}>No, Keep Zone</Button> 
              <Button  style={{color:"white",backgroundColor:"#81163F"}} >Yes, Delete Zone</Button>  
              
            </div> 
            </div>
            </Modal>
            </Row>
          </TabPane>
          <TabPane tabId="3">
                  
              <h2>Devices Information</h2><br/>
              
              <Button  style={{display: 'flex', justifyContent: 'right',color:"white",backgroundColor:"#81163F" }} className="float-right" onClick={this.onClickButtonadddv}> Add Device</Button>
                <Modal center open={this.state.openModaladddv} onClose={this.onCloseModaladddv}>
                    <div className="modalContainer">
                    <div className="titleCloseBtn">
                    </div>
                    <div className="title">
                    <h1>Add Device</h1>
                    </div>
                    <div className='pwd-container'>
                    <div>
                    <Form >
                    <FormGroup>
                        <Label for="appsn">Application Serial Number</Label>
                        <Input required 
                        type="string" name="appsn" id="appsn" placeholder="insert serial number" />
                    </FormGroup>
                    <FormGroup >
                        <Label for="api">Api server url</Label>
                        <Input className="input-group mb-3"  required 
                        type="url" name="api" id="api" placeholder="insert server url" />
                    </FormGroup>
                    <FormGroup  >
                    <Label  for="feature">Feature</Label>
                        <InputGroup className="mb-5">
                        <Dropdown isOpen >
                        <select id='feature' type="text" className="form-control"> 
                            <option label="summons" value="0"  ></option> 
                            <option label="geofencing" value="1"  ></option> 
                            <option label="summon and geofencing" value="2"  ></option> 
                        </select>
                        </Dropdown>
                        </InputGroup>
                    </FormGroup>
                    <FormGroup  >
                        <Label  for="datasub">Data Subscription</Label>
                        <Input  required className="input-group mb-3"  
                        type="text" name="datasub" id="datasub" placeholder="insert data subscription" />
                    </FormGroup>
                </Form>   
                    <FormGroup className='footer btn' inline>
                    <Button style={{color:"white",backgroundColor:"#81163F"}} onClick={this.onCloseModaladddv}>Back</Button>  
                    <Button style={{color:"white",backgroundColor:"#81163F"}} type = 'submit'  >Save</Button>
                    </FormGroup>
                    </div>
                    </div>
                    </div>
                </Modal> 
                <div className='tbl2'></div>
                <MaterialTable title='Devices' icons={tableIcons} 
        
                columns={[
                { title:'No',field:'no' },
                { title:'Application Serial Number',field:'appsn' },
                { title:'Api server url',field:'api' },
                { title:'Features',field:'feature' },
                { title:'Device Phone Number',field:'dpn'},
                {cellStyle:{width: 10, borderRadius: '10%'}},
                ]}
                data={[
                { no:'1',appsn:'BHSE1233422FDS',api:'https//www.EE.com.my',feature:'summon,geofencing',dpn:'011111111'},
                ]}
                actions={[
                  {
                    icon: () => <RemoveRedEye />,
                    tooltip: 'View dataplan details',
                    onClick:this.onClickButtonview
      
                  },
                    {

                    cellStyle:{width: 10, borderRadius: '10%'},
                    icon: () => <Edit />,
                    tooltip: 'Edit device',
                    onClick:this.onClickButtoneditdv
                    },
                    {
                    icon: () => <DeleteOutline />,
                    tooltip: 'Delete Checkpoint',
                    onClick:this.onClickButtondeletedv
                    }
                ]}
                options={{
                    actionsColumnIndex: -1
                }}
                />

               <Modal center open={this.state.openModaleditdv} onClose={this.onCloseModaleditdv}>
                    <div className="modalContainer">
                    <div className="titleCloseBtn">
                    </div>
                    <div className="title">
                    <h1>Edit Device</h1>
                    </div>
                    <div className='pwd-container'>
                    <div>
                    <Form >
                    <FormGroup>
                        <Label for="appsn">Application Serial Number</Label>
                        <Input required 
                        type="string" name="appsn" id="appsn" placeholder="insert serial number" />
                    </FormGroup>
                    <FormGroup >
                        <Label for="api">Api server url</Label>
                        <Input className="input-group mb-3"  required 
                        type="url" name="api" id="api" placeholder="insert server url" />
                    </FormGroup>
                    <FormGroup  >
                    <Label  for="feature">Feature</Label>
                        <InputGroup className="mb-5">
                        <Dropdown isOpen >
                        <select id='feature' type="text" className="form-control"> 
                            <option label="summons" value="0"  ></option> 
                            <option label="geofencing" value="1"  ></option> 
                            <option label="summon and geofencing" value="2"  ></option> 
                        </select>
                        </Dropdown>
                        </InputGroup>
                    </FormGroup>
                    <FormGroup  >
                        <Label  for="datasub">Data Subscription</Label>
                        <Input  required className="input-group mb-3"  
                        type="text" name="datasub" id="datasub" placeholder="insert data subscription" />
                    </FormGroup>
                </Form>   
                    <FormGroup className='footer btn' inline>
                    <Button style={{color:"white",backgroundColor:"#81163F"}} onClick={this.onCloseModaleditdv}>Back</Button>  
                    <Button style={{color:"white",backgroundColor:"#81163F"}} type = 'submit' >Save</Button>
                    </FormGroup>
                    </div>
                    </div>
                    </div>
                </Modal> 

                <Modal size="sm"center  open={this.state.openModaldeletedv} onClose={this.onCloseModaldeletedv}>
                <div className="modalContainer">
                <div className="titleCloseBtn">
               
                </div>
               
                <div className="title">
                <h1 className='primary'>Confirm to Delete ?</h1><br/>
                
                <div className='pic'>  
                <img  src= {del} alt="pic"></img>
                  
            
               
                </div>
                <text>Delete the certain device with all the details.</text>
                </div>
                
                <div className='footer button'>
              <Button style={{color:"white",backgroundColor:"#81163F"}} onClick={this.onCloseModaldeletedv}>No, Keep Device</Button> 
              <Button style={{color:"white",backgroundColor:"#81163F"}} >Yes, Delete Device</Button>  
              
            </div> 
            </div>
            </Modal>
            <Modal  center  open={this.state.openModalview} onClose={this.onCloseModalview}>
                <div className="modalContainer">
                <div className="titleCloseBtn">
               
                </div>
               
                <div className="title">
                <h1 className='primary'> </h1><br/>
                
                </div>
               
                <div className='tbl2'>
                    <Form style={{marginLeft:"150px"}} >
                      <h3>The number details</h3>
                    <FormGroup>
                        <Label className='space' for="provider">Provider :</Label>{""}
                        <text>XOX</text>
                    </FormGroup>
                    <FormGroup>
                        <Label for="seasonpassbalance">Season Pass Data Balance :</Label>{""}
                        <text>0.7 MB</text>
                    </FormGroup>
                    <FormGroup>
                        <Label for="simcardexp">Sim Card Expiry :</Label>{""}
                        <text>22/02/2022</text>
                    </FormGroup>
                    </Form>
                </div>
                
                <div className='footer button'>
              <Button  style={{alignItems:"center", color:"white",backgroundColor:"#81163F"}} onClick={this.onCloseModalview}>Close</Button> 
         
              </div>
            </div> 
          
            </Modal>
             
          </TabPane>
        </TabContent> 



      
       
    </CardBody>
    <FormGroup className='tbl2'>
        <Button  style={{display: 'flex', justifyContent: 'right',color:"white",backgroundColor:"#81163F" }} className="float-left"  onClick={this.routeChange}> Back</Button>
    </FormGroup>
    </Card>  
</>  
   );   
 }
 }
  
export default sitedetails;