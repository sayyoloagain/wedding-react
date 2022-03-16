import React,  {Component, Fragment } from 'react';
import { connect } from "react-redux";
// import { CopyBlock } from "react-code-blocks";
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import {Collapse} from 'reactstrap';

import {
  Card,
  CardBody,
  Button,
  Table,
  Dropdown,
  ButtonGroup,
  InputGroup,
  Form,
  FormGroup,
  Label,
  Input,
 
} from 'reactstrap'
import {  SiteActions } from '../../__actions/site.js'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './Modal.css'
import { DataPlanActions } from '../../__actions/dataplan.js';


class TableRow extends Component {
  constructor(props) {
    super(props);
      this.state = {
        userIdTemp: ""
      }
      this.toggle = this.toggle.bind(this);
      this.state = { collapse: false };
      this.state = {isCardView: false,}

      this.onDeleteUserClick = this.onDeleteUserClick.bind(this);
  }
  state = {
    copied: false,
    id: ""
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

  onDeleteUserClick(data) {
    console.log(data.id);
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
      if (data.DataPlanMaxis) {
    return (

      <React.Fragment>
      <tr>
        <th scope="row">{number}</th>
        <td>{data.Site.name}</td>
        <td>{data.mobileNumber}</td>
        <td>{data.DataPlanMaxis.serviceProvider}</td>
        <td> <a href="#!" onClick={()=>this.setState({ isCardView: !this.state.isCardView })}>
        { this.state.isCardView
          ? <span onClick={this.toggle} className="icon-arrow-up" />
          : <span onClick={this.toggle} className="icon-arrow-down" />
        }
 </a> </td>
        </tr>
         <th size="sm" colSpan="5"> 
        
        <Collapse isOpen={this.state.collapse}>
                    
                    <Form className='body'>
                    <FormGroup row>
                    <li  for="examplemde">Monthly Payment Due Date:</li>{''}
                    <text> {data.DataPlanMaxis.dataExpiryDate.substring(0,10)} </text>
                    <Form className='div2'>
                    <FormGroup row>
                    <li  for="">Management link :</li>{''}
                    <a rel="noopener noreferrer" target="_blank" href={data.DataPlanMaxis.linkToMaxis}> {data.DataPlanMaxis.linkToMaxis}</a>
                    
                    </FormGroup>
                    <FormGroup row>
                    <li  for="">Username :</li>{''}
                    {data.deviceUsername} 
                    <CopyToClipboard text={data.deviceUsername} 
                    onCopy={() => this.setState({copied: true})}>
                    <a href="#!" className='icon-doc'> </a></CopyToClipboard>
                    {this.state.copied ? <span size='sm'style={{color: 'red'}}>Copied.</span> : null}
                    </FormGroup>
                    <FormGroup row>
                    <li  for="">Password :</li>{''}
                     {data.devicePassword}
                    <CopyToClipboard text={data.devicePassword} 
                    onCopy={() => this.setState({copied1: true})}>
                    <a href="#!" className='icon-doc'> </a></CopyToClipboard>
                    {this.state.copied1 ? <span size='sm'style={{color: 'red'}}>Copied.</span> : null}
                    </FormGroup>
                    
                    </Form>
                    <Form className='div2'>
                    <Button color='primary' onClick={this.onClickButtonEditMax}>Edit</Button>
                    <Button className='space'color='primary' onClick={this.onDeleteUserClick(data)}>Delete</Button>
                    </Form>
                    </FormGroup>
                    </Form>            
        </Collapse>
       
             </th>  
            <Modal center open={this.state.openModalEditMax} onClose={this.onCloseModalEditMax}>
            <div className="modalContainer">
            <div className="titleCloseBtn">
            </div>
            <div className="title">
            <h1>Edit Subscription details</h1>
            </div>
            <div className='pwd-container'>
            <p center className="btn2"> Please choose :</p>
              <ButtonGroup className='gb'>
              <Button outline color='primary' name="xox" checked={status1 === 1} onClick={(e) => this.radioHandler1(1)}>Edit Maxis</Button>
              <Button outline color='primary' name="maxis" checked={status1 === 2} onClick={(e) => this.radioHandler1(2)}>Change to XOX</Button>
              </ButtonGroup>
              {status1 === 1 && <EditmaxContent numberId={numberId}></EditmaxContent>}
              {status1 === 2 && <MaxToXoxContent siteName={siteNamereadonly} mobileNumber={mobileNumberreadonly}></MaxToXoxContent>}
            </div>
            <div className='footer button'>
              <Button outline color='primary'onClick={this.onCloseModalEditMax}>Cancel</Button>   
            </div> 
            </div>
          </Modal> 
        </React.Fragment>
    )}
    else if (data.DataPlanXox) {
      console.log(data.DataPlanXox);
      let dataXox = data.DataPlanXox
      let serviceProvider, seasonPassBal, simCardExpiryDate, linkToXox
      let dataBalance
      dataXox.filter((userData) =>  userData.dataBalance).map((userData, index) => (  
        serviceProvider = userData.serviceProvider, // error if remove comma, but has warning is use comma
        dataBalance = userData.dataBalance,
        seasonPassBal = userData.seasonPassBal,
        simCardExpiryDate = userData.simCardExpiryDate,
        linkToXox = userData.linkToXox
      ))
      return (
        <React.Fragment>
          <tr>
          <th  scope="row">{number}</th>
          <td>{data.Site.name}</td>
          <td>{data.mobileNumber}</td>
          <td>{serviceProvider}</td>
          <td> <a href="#!" onClick={()=>this.setState({ isCardView: !this.state.isCardView })}>
            { this.state.isCardView
              ? <span onClick={this.toggle} className="icon-arrow-up" />
              : <span onClick={this.toggle} className="icon-arrow-down" />
            }</a></td>
          </tr>
          <th size="sm" colSpan="5"> 
          <Collapse isOpen={this.state.collapse}>
                    <Form className='body'>
                    <FormGroup row>
                    <Form className='div2'>
                    <FormGroup row>
                    <li  for="">Monthly Data Balance:</li>{''}
                    <text> {dataBalance} GB </text>
                    </FormGroup>
                    <FormGroup row>
                    <li  for="">Season Pass Balance :</li>{''}
                    <text> {seasonPassBal} GB </text> 
                    </FormGroup>
                    <FormGroup row>
                    <li  for="">Data Expiry Date:</li>{''}
                    <text> {simCardExpiryDate.substring(0,10)} </text>
                    </FormGroup>
                    </Form>
                    <Form className='div2'>
                    <FormGroup row>
                    <li  for="">Management link :</li>{''}
                    <a rel="noopener noreferrer" target="_blank" href={linkToXox}> {linkToXox} </a>
                    </FormGroup>
                    <FormGroup row>
                    <li  for="">Username :</li>{''}
                    {data.deviceUsername} 
                    <CopyToClipboard text={data.deviceUsername} 
                    onCopy={() => this.setState({copied2: true})}>
                    <a href="#!" className='icon-doc'> </a></CopyToClipboard> 
                    {this.state.copied2 ? <span size='sm'style={{color: 'red'}}>Copied.</span> : null}
                    </FormGroup>
                    <FormGroup row>
                    <li  for="">Password :</li>{''}
                    {data.devicePassword} 
                    <CopyToClipboard text={data.devicePassword} 
                    onCopy={() => this.setState({copied3: true})}>
                    <a href="#!" className='icon-doc'> </a></CopyToClipboard>
                    {this.state.copied3 ? <span size='sm'style={{color: 'red'}}>Copied.</span> : null}
                    </FormGroup>
                    </Form>
                    <Form className='div2'>
                    <Button color='primary' onClick={this.onClickButtonEditXOX}>Edit</Button>
                    <Button className='space' color='primary' onClick={this.onDeleteUserClick(data)} >Delete</Button>
                    </Form>
                    </FormGroup>
                    </Form>  
        </Collapse>
       
             </th>  

            <Modal center open={this.state.openModalEditXOX} onClose={this.onCloseModalEditXOX}>
            <div className="modalContainer">
            <div className="titleCloseBtn">
            </div>
            <div className="title">
            <h1>Edit Subscription details</h1>
            </div>
            <div className='pwd-container'>
            <p center className="btn2"> Please choose :</p>
              <ButtonGroup className='gb'>
              <Button outline color='primary' name="xox" checked={status === 1} onClick={(e) => this.radioHandler(1)}>Edit XOX</Button>
              <Button outline color='primary' name="maxis" checked={status === 2} onClick={(e) => this.radioHandler(2)}>Change to Maxis</Button>
              </ButtonGroup>
              {status === 1 && <EditxoxContent numberId={numberId}></EditxoxContent>}
              {status === 2 && <XoxToMaxContent siteName={siteNamereadonly} mobileNumber={mobileNumberreadonly}></XoxToMaxContent>}
            </div>
            <div className='footer button'>
              <Button outline color='primary'onClick={this.onCloseModalEditXOX}>Cancel</Button>   
            </div> 
            </div>
          </Modal> 
         </React.Fragment>
      )
    }
  }
}

class DrawmaxContent extends Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      siteName: "",
      phoneNumber: "",
      linkToMaxis: "",
      monthlyExpiryDate: "",
    }; 
  }
  addMaxisNumber = (e) => {
    e.preventDefault();
    this.setState(prevState => {
      let dataMaxis = {
          siteName: this.state.siteName,// site name
          phoneNumber: this.state.phoneNumber,// device phone number
          linkToMaxis: this.state.linkToMaxis,// link to maxis
          monthlyExpiryDate: this.state.monthlyExpiryDate// expiry date
      }
      console.log(dataMaxis);
    DataPlanActions.registerMaxis(dataMaxis)
    .then((result) => {
    },
    (error) => {
      this.setState({
        showMessage: true,
        Message: +error,
      });
    }
    );
    })
  }
  onInputChange(e) {
    const {name, value} = e.target;
    this.setState({ [name]: value})
  }
  render() {
    return (
          <React.Fragment>
          <Form onSubmit={this.addMaxisNumber}>
            
            <h4>Maxis Form</h4><br/>
           
            <FormGroup>
              <Label for="examplesite2">Site Name</Label>
              <Input   required onChange={this.onInputChange}
              type="text" name="siteName" id="siteName" placeholder="insert site name "  />
            </FormGroup>
            <FormGroup  >
              <Label  for="exampledevicepn2">Device Phone Number</Label>
              <Input className="input-group mb-3"   required onChange={this.onInputChange}
              type="number" name="phoneNumber" id="phoneNumber" placeholder="device phone number" />
            </FormGroup>
              <FormGroup >
              <Label for="examplexlink2">Maxis Number Management Link</Label>
              <Input className="input-group mb-3"  required onChange={this.onInputChange}
              type="string" name="linkToMaxis" id="linkToMaxis" placeholder="link to Maxis" />
            </FormGroup>
            <FormGroup>
            <Label for="examplemde2">Monthly Payment Due Date</Label>
            <Input  required onChange={this.onInputChange}
            type="date" name="monthlyExpiryDate" id="monthlyExpiryDate" placeholder="choose date" />
            </FormGroup>
            <FormGroup className='footer btn' inline>
            <Button outline type = 'submit' color='primary' >Add</Button>
            
            </FormGroup>
          </Form>
        </React.Fragment>
    )
  }
}

class EditmaxContent extends Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      id: "",
      siteName: "",
      phoneNumber: "",
      linkToMaxis: "",
      monthlyExpiryDate: "",
    }; 
  }
  editMaxisNumber = (e) => {
    e.preventDefault();
    this.setState(prevState => {
      let dataMaxis = {
          id: this.state.id,
          siteName: this.state.siteName,                  // site name
          phoneNumber: this.state.phoneNumber,            // device phone number
          linkToMaxis: this.state.linkToMaxis,            // link to maxis
          monthlyExpiryDate: this.state.monthlyExpiryDate // expiry date
      }
      console.log(dataMaxis);

    DataPlanActions.updateMaxis(dataMaxis)
    .then((result) => {
    },
    (error) => {
      this.setState({
        showMessage: true,
        Message: +error,
      });
    }
    );
    })
  }
  onInputChange(e) {
    const {name, value} = e.target;
    this.setState({ [name]: value})
  }
  render() {
    let numId = this.props.numberId
    this.setState({
      id: numId
    })
    console.log(this.state.id);
    return (
      <React.Fragment>
      <Form onSubmit={this.editMaxisNumber}>
        <h4>Maxis Form</h4><br/>
        <FormGroup>
          <Label for="examplesite2">Site Name</Label>
          <Input  readonly="readonly" required onChange={this.onInputChange}
          type="text" name="siteName" id="examplesite2" placeholder="insert site name "  />
        </FormGroup>
        <FormGroup  >
          <Label  for="exampledevicepn2">Device Phone Number</Label>
          <Input readonly="readonly"className="input-group mb-3"   required onChange={this.onInputChange}
          type="number" name="phoneNumber" id="phoneNumber" placeholder="device phone number" />
        </FormGroup>
          <FormGroup >
          <Label for="examplexlink2">Maxis Number Management Link</Label>
          <Input className="input-group mb-3"  required onChange={this.onInputChange}
          type="string" name="linkToMaxis" id="linkToMaxis" placeholder="link to Maxis" />
        </FormGroup>
        <FormGroup>
        <Label for="examplemde2">Monthly Payment Due Date</Label>
        <Input  required onChange={this.onInputChange}
        type="date" name="monthlyExpiryDate" id="monthlyExpiryDate" placeholder="choose date" />
        </FormGroup>
        <FormGroup className='footer btn' inline>
        <Button outline type = 'submit' color='primary' >Add</Button> 
        </FormGroup>
      </Form>
    </React.Fragment>
    )
  }
}

class MaxToXoxContent extends Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      siteName: "",
      phoneNumber: "",
      linkToMaxis: "",
      dataBalance: "",                 
      seasonPassBalance: "",   
      simCardExpiryDate: "",
    }; 
  }
  changeToXoxNumber = (e) => {
    e.preventDefault();
    this.setState(prevState => {
      let dataXox = {
        siteName: this.state.siteName,                   // site name
        phoneNumber: this.state.mobileNumber,             // device phone number
        linkToXox: this.state.linkToXox,                 // link to Xox
        dataBalance: this.state.dataBalance,                 
        seasonPassBal: this.state.seasonPassBalance,   
        simCardExpiryDate: this.state.simCardExpiryDate,
      }
      console.log(dataXox);
    DataPlanActions.updateMaxisToXox(dataXox)
    .then((result) => {
    },
    (error) => {
      this.setState({
        showMessage: true,
        Message: +error,
      });
    }
    );
    })
  }
  onInputChange(e) {
    const {name, value} = e.target;
    this.setState({ [name]: value})
  }
  render() {
    let mobileNumber = this.props.mobileNumber
    let siteName = this.props.siteName
    this.setState({
      mobileNumber: mobileNumber,
      siteName: siteName
    })
    console.log(this.state.siteName);
    return (
          <React.Fragment>
          <Form onSubmit={this.changeToXoxNumber}>
            <h4>XOX Form</h4><br/>
            <FormGroup>
              <Label for="examplesite2">Site Name</Label>
              <Input readonly="readonly" required onChange={this.onInputChange}
              type="text" name="siteName" id="siteName" placeholder={this.state.siteName} />
            </FormGroup>
            <FormGroup  >
              <Label  for="exampledevicepn2">Device Phone Number</Label>
              <Input readonly="readonly" className="input-group mb-3" required onChange={this.onInputChange}
              type="text" name="phoneNumber" id="phoneNumber" placeholder={this.state.mobileNumber} />
            </FormGroup>
              <FormGroup >
              <Label for="examplexlink2">XOX Number Management Link</Label>
              <Input className="input-group mb-3"  required onChange={this.onInputChange}
              type="string" name="linkToXox" id="linkToXox" placeholder="Link to Xox" />
            </FormGroup>
            <FormGroup>
            <Label for="examplemd">Monthly Data Balance (Gb)</Label>
            <Input required onChange={this.onInputChange} 
            type="number" name="dataBalance" id="dataBalance" placeholder="insert monthly data" />
            </FormGroup>
            <FormGroup>
            <Label for="examplespd">Season Pass Data Balance (Gb)</Label>
            <Input required onChange={this.onInputChange} 
            type="number" name="seasonPassBalance" id="seasonPassBalance" placeholder="insert season pass data balance" />
            </FormGroup>
            <FormGroup>
            <Label for="examplesed">Sim Card Expiry Date</Label>
            <Input required onChange={this.onInputChange} 
            type="date" name="simCardExpiryDate" id="simCardExpiryDate" placeholder="choose date" />
            </FormGroup>
            <FormGroup className='footer btn' inline>
            <Button outline type = 'submit' color='primary' >Add</Button>
            </FormGroup>
          </Form>
        </React.Fragment>
    )
  }
}

class DrawxoxContent extends Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      siteName: "",
      phoneNumber: "",
      linkToXox: "",
      monthlyData: "",
      seasonPassBal: "",
      simCardExpiryDate: ""
    }; 
  }
  addXoxNumber = (e) => {
    e.preventDefault();
    this.setState(prevState => {
      let dataXox = {
          siteName: this.state.siteName,// site name
          phoneNumber: this.state.phoneNumber,// device phone number
          linkToXox: this.state.linkToXox,// link to maxis
          monthlyData: this.state.monthlyData,
          seasonPassBal: this.state.seasonPassBal,
          simCardExpiryDate: this.state.simCardExpiryDate,
      }
      console.log(dataXox);
    DataPlanActions.registerXox(dataXox)
    .then((result) => {
    },
    (error) => {
      this.setState({
        showMessage: true,
        Message: +error,
      });
    }
    );
    })
  }
  onInputChange(e) {
    const {name, value} = e.target;
    this.setState({ [name]: value})
  }
  render() {
    return (
          <React.Fragment>
          <Form onSubmit={this.addXoxNumber}>
          <h4>XOX Form</h4><br/>
       <FormGroup>
         <Label for="examplesite">Site Name</Label>
         <Input required onChange={this.onInputChange} type="text" name="siteName" id="siteName" placeholder="insert site name " />
       </FormGroup>
       <FormGroup  >
         <Label  for="exampledevicepn">Device Phone Number</Label>
         <Input required onChange={this.onInputChange} className="input-group mb-3" type="number" name="phoneNumber" id="phoneNumber" placeholder="device phone number" />
       </FormGroup>
         <FormGroup >
         <Label for="examplexlink">XOX Number Management Link</Label>
         <Input required onChange={this.onInputChange} className="input-group mb-3" type="text" name="linkToXox" id="linkToXox" placeholder="link to XOX" />
       </FormGroup>
       <FormGroup>
         <Label for="examplemd">Monthly Data Balance (Gb)</Label>
         <Input required onChange={this.onInputChange} type="number" name="monthlyData" id="monthlyData" placeholder="insert monthly data" />
       </FormGroup>
       <FormGroup>
         <Label for="examplespd">Season Pass Data Balance (Gb)</Label>
         <Input required onChange={this.onInputChange} type="number" name="seasonPassBal" id="seasonPassBal" placeholder="insert season pass data balance" />
       </FormGroup>
       <FormGroup>
       <Label for="examplesed">Sim Card Expiry Date</Label>
       <Input required onChange={this.onInputChange} type="date" name="simCardExpiryDate" id="simCardExpiryDate" placeholder="choose date" />
       </FormGroup>
       <FormGroup className='footer button' inline>
       <Button outline color='primary' >Add</Button>
       
       </FormGroup>
          </Form>
        </React.Fragment>
    )
  }
}

class EditxoxContent extends Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      id: "",
      siteName: "",
      phoneNumber: "",
      linkToMaxis: "",
      monthlyExpiryDate: "",
    }; 
  }
  editXoxNumber = (e) => {
    e.preventDefault();
    this.setState(prevState => {
      let dataMaxis = {
          id: this.state.id,
          siteName: this.state.siteName,                   // site name
          phoneNumber: this.state.phoneNumber,             // device phone number
          linkToXox: this.state.linkToXox,                 // link to Xox
          dataBalance: this.state.dataBalance,                 
          seasonPassBalance: this.state.seasonPassBalance,   
          simCardExpiryDate: this.state.simCardExpiryDate, 
      }
      console.log(dataMaxis);
    DataPlanActions.updateXox(dataMaxis)
    .then((result) => {
    },
    (error) => {
      this.setState({
        showMessage: true,
        Message: +error,
      });
    }
    );
    })
  }
  onInputChange(e) {
    const {name, value} = e.target;
    this.setState({ [name]: value})
  }
  render() {
    let id = this.props.numberId
    this.setState({
      id: id
    })
    console.log(this.state.id);
    return (
      <React.Fragment>
      <Form onSubmit={this.editXoxNumber}>
      <h4>XOX Form</h4><br/>
       <FormGroup>
         <Label for="examplesite">Site Name</Label>
         <Input readonly="readonly" required onChange={this.onInputChange} type="text" name="siteName" id="siteName" placeholder="insert site name " />
       </FormGroup>
       <FormGroup  >
         <Label  for="exampledevicepn">Device Phone Number</Label>
         <Input readonly="readonly" required onChange={this.onInputChange} className="input-group mb-3" type="phoneNumber" name="phoneNumber" id="exampledevicepn" placeholder="device phone number" />
       </FormGroup>
         <FormGroup >
         <Label for="examplexlink">XOX Number Management Link</Label>
         <Input required onChange={this.onInputChange} className="input-group mb-3" type="url" name="linkToXox" id="linkToXox" placeholder="link to XOX" />
       </FormGroup>
       <FormGroup>
         <Label for="examplemd">Monthly Data Balance (Gb)</Label>
         <Input required onChange={this.onInputChange} type="number" name="dataBalance" id="dataBalance" placeholder="insert monthly data" />
       </FormGroup>
       <FormGroup>
         <Label for="examplespd">Season Pass Data Balance (Gb)</Label>
         <Input required onChange={this.onInputChange} type="number" name="seasonPassBalance" id="seasonPassBalance" placeholder="insert season pass data balance" />
       </FormGroup>
       <FormGroup>
       <Label for="examplesed">Sim Card Expiry Date</Label>
       <Input required onChange={this.onInputChange} type="date" name="simCardExpiryDate" id="simCardExpiryDate" placeholder="choose date" />
       </FormGroup>
       <FormGroup className='footer button' inline>
       <Button outline color='primary' >Save</Button>
       </FormGroup>
      </Form>
    </React.Fragment>
    )
  }
}

class XoxToMaxContent extends Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      siteName: "",
      phoneNumber: "",
      linkToMaxis: "",
      monthlyExpiryDate: "",
    }; 
  }
  changeToMaxisNumber = (e) => {
    e.preventDefault();
    this.setState(prevState => {
      let dataMaxis = {
          siteName: this.state.siteName,                  // site name
          phoneNumber: this.state.mobileNumber,           // device phone number
          linkToMaxis: this.state.linkToMaxis,            // link to maxis
          monthlyExpiryDate: this.state.monthlyExpiryDate // expiry date
      }
      console.log(dataMaxis);
    DataPlanActions.updateXoxToMaxis(dataMaxis)
    .then((result) => {
    },
    (error) => {
      this.setState({
        showMessage: true,
        Message: +error,
      });
    }
    );
    })
  }
  onInputChange(e) {
    const {name, value} = e.target;
    this.setState({ [name]: value})
  }
  render() {
    let mobileNumber = this.props.mobileNumber
    let siteName = this.props.siteName
    this.setState({
      mobileNumber: mobileNumber,
      siteName: siteName
    })
    console.log(this.state.siteName);
    return (
          <React.Fragment>
          <Form onSubmit={this.changeToMaxisNumber}>
            <h4>Maxis Form</h4><br/>
            <FormGroup>
              <Label for="examplesite2">Site Name</Label>
              <Input readonly="readonly" required onChange={this.onInputChange}
              type="text" name="siteName" id="siteName" placeholder={this.state.siteName} />
            </FormGroup>
            <FormGroup  >
              <Label  for="exampledevicepn2">Device Phone Number</Label>
              <Input readonly="readonly" className="input-group mb-3" required onChange={this.onInputChange}
              type="text" name="phoneNumber" id="phoneNumber" placeholder={this.state.mobileNumber} />
            </FormGroup>
              <FormGroup >
              <Label for="examplexlink2">Maxis Management Link</Label>
              <Input className="input-group mb-3"  required onChange={this.onInputChange}
              type="string" name="linkToMaxis" id="linkToMaxis" placeholder="link to Maxis" />
            </FormGroup>
            <FormGroup>
            <Label for="examplemde2">Monthly Payment Due Date</Label>
            <Input  required onChange={this.onInputChange}
            type="date" name="monthlyExpiryDate" id="monthlyExpiryDate" placeholder="choose date" />
            </FormGroup>
            <FormGroup className='footer btn' inline>
            <Button outline type = 'submit' color='primary' >Add</Button>
            </FormGroup>
          </Form>
        </React.Fragment>
    )
  }
}

 class SubDetails extends Component {
    constructor(props) {
      super(props);
      this.state = { 
        status: 0   // 0: no show, 1: show xox, 2: show maxis.
      }; 
    }
    radioHandler = (status) => {
      this.setState({ status });
    };
    state={
      openModal : false
    }
    onClickButton = e =>{
        e.preventDefault()
        this.setState({openModal : true})
    }
    onCloseModal = ()=>{
        this.setState({openModal : false})
    }
  componentDidMount(){
    SiteActions.getLatestData(this.props.dispatch)
  }
render() {
  const { status } = this.state;
  console.log(this.props.site);
  const { data } = this.props.site;
  console.log({data});
  return (
    <>
    <Card className='shadow p-3 mb-5 bg-white rounded'>
    <CardBody>
       <h1>Internet Subscription</h1><br/>
       <div>
       <Button outline style={{color:'#81163F',display: 'flex', justifyContent: 'right' }} className="float-right"  onClick={this.onClickButton}> Add New Number</Button>
       <Modal center open={this.state.openModal} onClose={this.onCloseModal}>
        <div className="modalContainer">
        <div className="titleCloseBtn">
        </div>
        <div className="title">
        <h1>Add New Number</h1>
        </div>
        <div className='pwd-container'>
        <p center className="btn2"> Please choose the provider:</p>
          <ButtonGroup className='gb'>
          <Button outline color='primary' name="xox" checked={status === 1} onClick={(e) => this.radioHandler(1)}>XOX</Button>
          <Button outline color='primary' name="maxis" checked={status === 2} onClick={(e) => this.radioHandler(2)}>Maxis</Button>
          </ButtonGroup>
          {status === 1 && <DrawxoxContent></DrawxoxContent>}
          {status === 2 && <DrawmaxContent></DrawmaxContent>}
        </div>
        <div className='footer button'>
          <Button outline color='primary'onClick={this.onCloseModal}>Cancel</Button>   
        </div> 
        </div>
       </Modal> 
      </div>   
         <div className='table2'>
         <div size='sm'className="input-group mb-3">
          <InputGroup className="mb-5">
          <Dropdown isOpen>
          <select id='categories' type="text" className="form-control">
            <option value="" header >Categories</option> 
            <option value="" >Site Name</option>
            <option value="">Provider</option>
          </select>
          </Dropdown>
          <input
            type="text"
            className="form-control"
            placeholder="Search by title"
            //value={searchTitle}
            //onChange={onChangeSearchTitle}
          />
          <div className="input-group-append">
            <Button outline color='secondary'size='sm'
             className='icon-magnifier'
             type="button"
              //onClick={retrieveTutorials}
>   
            </Button>  
          </div>
          </InputGroup>
          </div>
          </div>
      
      <Table className='table' hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Site Name</th>
            <th>Device Phone Number</th>
            <th>Provider</th>
            <th></th>
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
    </CardBody>
    </Card>  
</>  
   );   
 }
 }
  function mapStateToProps(state) {
    return state;
  }
export default connect(mapStateToProps)(SubDetails);