import React, { Component } from 'react';
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Multiselect from 'multiselect-react-dropdown';
import tour_s from '../../../src/assets/img/touring_scheduled.png'
import n_tour_s from '../../../src/assets/img/no_touring_scheduled.png'
import classnames from 'classnames';
import {
  Button,
  Card,
  CardBody,
  Container,
  Row,
  Col,
  Input,
  Nav, 
  NavItem, 
  NavLink,  
  TabContent, 
  TabPane,
} from 'reactstrap'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { View, Text } from 'react-native'
import Select from 'react-select'
import { TourActions } from '../../__actions/touring';
import { SiteActions } from '../../__actions/site';

const days = [
  { value: 'sunday', label: 'Sunday' },
  { value: 'monday', label: 'Monday' },
  { value: 'tuesday', label: 'Tuesday' },
  { value: 'wednesday', label: 'Wednesday' },
  { value: 'thursday', label: 'Thursday' },
  { value: 'friday', label: 'Friday' },
  { value: 'saturday', label: 'Saturday' }
]
class TimetableAdd extends Component {
  constructor(props) {
    super(props);
    this.handleFormat = this.handleFormat.bind(this)
    this.selectMinute = this.selectMinute.bind(this)
    this.selectedSite = this.selectedSite.bind(this)
    this.onSelect = this.onSelect.bind(this)
    this.onRemove = this.onRemove.bind(this)
    this.state = {
      selectedContact: [],
      activeTab: 1,
      openModal: false,
      timeInMinute: ['00','01','02','03','04','05','06','07','08','09','10',
      '10','11','12','13','14','15','16','17','18','19','20',],
      time: ['12AM','1AM','2AM','3AM','4AM','5AM','6AM','7AM','8AM','9AM','10AM','11AM',
      '12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM','8PM','9PM','10PM','11PM'],
      siteId: 0,
      format: [],
      alertTime: 0,
      selectedSite: '',
    };
  }
  componentDidMount(){
    SiteActions.getSite(this.props.dispatch)
  }

  onClickButtondeletesite = e =>{
    e.preventDefault()
    this.setState({openModaldeletesite : true})  
  }
  routeCancel=()=> {
    let path = '/TouringTimetable';
    this.props.history.push(path);
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  onSubmitConfirmation = e =>{
    e.preventDefault()
    this.setState({openModal : true})
  }
  onCancelSubmit = e =>{
    this.setState({openModal : false})
  }
  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.activeTab === '1') {       // Default schedule
      this.setState(prevState => {
        let timetableData = {
            time: this.state.format,
            siteId: this.state.siteId,
            alert: this.state.alertTime
        }
      console.log("active1",timetableData);
      TourActions.saveAddedTimetableData(timetableData)
      })
    }
    else if (this.state.activeTab === '2') {  // Exceptions
      this.setState(prevState => {
        let timetableData = {
            time: this.state.format,
            siteId: this.state.siteId,
            alert: this.state.alertTime,
            selectedContact: this.state.selectedContact
        }
      console.log("active1",timetableData);
      TourActions.saveAddedTimetableData(timetableData)
      })
    }
  }

  handleFormat = (event, newFormats) => {
    this.setState({format: newFormats})
  };

  selectMinute(minute) {
    this.setState({alertTime: minute.value})
  }

  selectedSite(site) {
    this.setState({
      siteId: site.value,
      selectedSite: site.label
    })
  }

  onSelect(selectedList, selectedItem) {
    let selectedContact = [...this.state.selectedContact]
    this.setState({ selectedContact: [...selectedContact, selectedItem.value] })
  }
  onRemove(selectedList, selectedItem) {
    let selectedContact = [...this.state.selectedContact]
    let index = selectedContact.indexOf(selectedItem.value)
    this.state.selectedContact.splice(index,1)
  }

  render() {
    const { data } = this.props.site;

    let siteName = []
    data.forEach(element => {
      siteName.push(element.name)
    });
    
    let siteArr = []
    for (let i = 0; i < data.length; i++) {
      siteArr.push({
        value: i,
        label: siteName[i]
      })
    }

    let numArr = []
    for (let a = 0; a < 60; a++) {
      if (a % 5 === 0) {
        numArr.push({
          value: a,
          label: a
        })
      }
    }

    return (
      <>
      <Card className='shadow p-3 mb-5 bg-white rounded'>
        <CardBody>
          <h2 className=''>Add Timetable</h2><br/>   
            
          <div class='flex-container mb-5'>
              <span class="d-flex-child 1 p-2">Site :</span>
              <span class="flex-child "><Select onChange={this.selectedSite} options={siteArr} placeholder='Select Site..'/></span>
              <span className='flex-gchild'></span>
              &emsp;&emsp;&emsp;&emsp;
              <span class="d-flex-child 3 p-2">Zone :</span>
              <span class="flex-child 4"><Select placeholder={this.state.selectedSite}/></span>
          </div>

          <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
              >
              Default Schedule
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
              >
              Exceptions
            </NavLink>
          </NavItem>
          </Nav>

          <TabContent  activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <div>Touring start time:</div>
                <div style={{fontStyle:'italic', color:'grey'}}>
                  Click on the time slots to select touring time.
                </div>
              <div className='pt-3' align="">
                <img class='mr-2' src={tour_s} alt="tour_scheduled" width="15" height="15"/>
                  Touring scheduled  
                <img class='ml-4 mr-2' src={n_tour_s} alt="tour_scheduled" width="15" height="15"/>
                  No touring schedule
              </div><br/>
                Alert me if tour has not started after :
              <div style={{fontStyle:'italic', color:'grey'}}>
                To turn off alert, leave the duration empty.
              </div><br/>            
              
            <Container>
              <Row>
                <Col sm={4}>
                  <div class='flex-container' >
                    <span class="d-flex-child"><Select onChange={this.selectMinute}  options={numArr} placeholder={'00'}/></span>
                    <span class="d-flex-child ml-1 pt-2">Minute</span>
                  </div>
                </Col>
                <Col sm={8} >
                  <View style={{ flexDirection:"row"}}>
                    <ToggleButtonGroup
                      color="primary"
                      value={this.state.format}
                      onChange={this.handleFormat}
                    >
                      <ToggleButton value="0">12AM</ToggleButton>
                      <ToggleButton value="1">1AM</ToggleButton>
                      <ToggleButton value="2">2AM</ToggleButton>
                      <ToggleButton value="3">3AM</ToggleButton>
                      <ToggleButton value="4">4AM</ToggleButton>
                      <ToggleButton value="5">5AM</ToggleButton>
                      <ToggleButton value="6">6AM</ToggleButton>
                      <ToggleButton value="7">7AM</ToggleButton>
                      <ToggleButton value="8">8AM</ToggleButton>
                      <ToggleButton value="9">9AM</ToggleButton>
                      <ToggleButton value="10">10AM</ToggleButton>
                      <ToggleButton value="11">11AM</ToggleButton>
                    </ToggleButtonGroup>
                    </View>
                </Col>
              </Row>
              <Row>
                <Col sm={4}></Col>
                <Col sm={8} >
                  <View style={{ flexDirection:"row" }}>
                    <ToggleButtonGroup
                      color="primary"
                      value={this.state.format}
                      onChange={this.handleFormat}
                    >
                      <ToggleButton value="12">12PM</ToggleButton>
                      <ToggleButton value="13">1PM</ToggleButton>
                      <ToggleButton value="14">2PM</ToggleButton>
                      <ToggleButton value="15">3PM</ToggleButton>
                      <ToggleButton value="16">4PM</ToggleButton>
                      <ToggleButton value="17">5PM</ToggleButton>
                      <ToggleButton value="18">6PM</ToggleButton>
                      <ToggleButton value="19">7PM</ToggleButton>
                      <ToggleButton value="20">8PM</ToggleButton>
                      <ToggleButton value="21">9PM</ToggleButton>
                      <ToggleButton value="22">10PM</ToggleButton>
                      <ToggleButton value="23">11PM</ToggleButton>
                    </ToggleButtonGroup>
                    </View>
                </Col>
              </Row>
            </Container>

            </TabPane>
          </TabContent>

          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="2">

            <div class='flex-container'>
              <span class="flex-child 1">When:</span>
              <span class="flex-child 2" >
                <Input type='radio' name="dateinput"/>
                <DatePicker popperPlacement='bottom-start' placeholderText='Select a date'/>
              </span>
              <span class="flex-child 3">
                <Input class="" type='radio' name="dateinput"/>
                <Multiselect className=""
                options={days}            // Options to display in the dropdown
                onSelect={this.onSelect}  // Function will trigger on select event
                onRemove={this.onRemove}  // Function will trigger on remove event
                displayValue="label"      // Property value to display in the dropdown options
                showCheckbox={true}       // Display checkbox on the side of each options
                placeholder='Select by days'
                hidePlaceholder='true'
              />
              </span>
            </div>

            <div>Touring start time:</div>
            <div class="flex-container">
              <div class="flex-child text" style={{fontStyle:'italic', color:'grey'}}>Click on the time slots to select touring time.</div>
              <div class="flex-child text"  align="">
              <img className='mr-2' src={tour_s} alt="tour_scheduled" width="15" height="15"/>
                Touring scheduled  
              <img className='ml-4 mr-2' src={n_tour_s} alt="tour_scheduled" width="15" height="15"/>
                No touring schedule
              </div>
              <div class="flex-child text"></div>
            </div><br/>
            <Container>
              <Row>
                <Col sm={4}></Col>
                <Col sm={8} >
                  <View style={{ flexDirection:"row" }}>
                    <ToggleButtonGroup
                      color="primary"
                      value={this.state.format}
                      onChange={this.handleFormat}
                    >
                      <ToggleButton value="0">12AM</ToggleButton>
                      <ToggleButton value="1">1AM</ToggleButton>
                      <ToggleButton value="2">2AM</ToggleButton>
                      <ToggleButton value="3">3AM</ToggleButton>
                      <ToggleButton value="4">4AM</ToggleButton>
                      <ToggleButton value="5">5AM</ToggleButton>
                      <ToggleButton value="6">6AM</ToggleButton>
                      <ToggleButton value="7">7AM</ToggleButton>
                      <ToggleButton value="8">8AM</ToggleButton>
                      <ToggleButton value="9">9AM</ToggleButton>
                      <ToggleButton value="10">10AM</ToggleButton>
                      <ToggleButton value="11">11AM</ToggleButton>
                    </ToggleButtonGroup>
                  </View>
                </Col>
              </Row>
              <Row>
                <Col sm={4}></Col>
                <Col sm={8} >
                  <View style={{ flexDirection:"row" }}>
                    <ToggleButtonGroup
                      color="primary"
                      value={this.state.format}
                      onChange={this.handleFormat}
                    >
                      <ToggleButton value="12">12PM</ToggleButton>
                      <ToggleButton value="13">1PM</ToggleButton>
                      <ToggleButton value="14">2PM</ToggleButton>
                      <ToggleButton value="15">3PM</ToggleButton>
                      <ToggleButton value="16">4PM</ToggleButton>
                      <ToggleButton value="17">5PM</ToggleButton>
                      <ToggleButton value="18">6PM</ToggleButton>
                      <ToggleButton value="19">7PM</ToggleButton>
                      <ToggleButton value="20">8PM</ToggleButton>
                      <ToggleButton value="21">9PM</ToggleButton>
                      <ToggleButton value="22">10PM</ToggleButton>
                      <ToggleButton value="23">11PM</ToggleButton>
                    </ToggleButtonGroup>
                  </View>
                </Col>
              </Row>
            </Container>
            
            <br/>
            <div class="flex-container">
              <div class="flex-child 1">
                Alert me if tour has not started after:<br/>
                <Text class="pr-5" style={{fontStyle:'italic', color:'grey'}}>To turn off alert, leave the duration empty.</Text>
              </div>
              <div class="flex-child 2">
                <div class='flex-container' >
                  <span class="d-flex-child pl-5"><Select onChange={this.selectMinute}  options={numArr} placeholder={'00'}/></span>
                  <span class="d-flex-child ml-1 pt-2">Minute</span>
                </div>
              </div>
              <div class="flex-child 3"></div>
            </div><br/>

            </TabPane>
          </TabContent>

          <div align='center' className='mt-2 '>
          <Button className='mr-2' style={{width: '150px', background: 'white', color:'#81163F', borderBlockColor:'#81163F'}} onClick={() => this.routeCancel()}>Cancel</Button>
          <Button className='' style={{width: '150px', background: '#81163F'}} onClick={this.onSubmitConfirmation}>Submit</Button>
          
          <Modal center open={this.state.openModal} onClose={this.onCancelSubmit}>
          <div className="modalContainer">
        <div className="titleCloseBtn">
          </div>
          <div className="title">
          <h3>Confirm to submit?</h3><br></br>
          <div>
            Time selected: 
          </div>
          <div>
            Time alert: {this.state.alertTime} minute
          </div><br/>
          </div>
          <Button className='mr-2' style={{width: '150px', background: 'white', color:'#81163F', borderBlockColor:'#81163F'}} onClick={this.onCancelSubmit}>Cancel</Button>
          <Button className='' style={{width: '150px', background: '#81163F'}} onClick={this.onSubmit}>Submit</Button>
          </div>
          </Modal>

          </div>
        </CardBody>
      </Card>
      </>
    )
  }
}
function mapStateToProps(state) {
  return state;
  }
export default connect(mapStateToProps)(TimetableAdd);