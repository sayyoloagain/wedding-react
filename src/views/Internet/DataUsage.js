import React,  {Component } from 'react';
import moment from 'moment';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';


import {
  Card,
  CardBody,
  InputGroup,
  Table,
  Button,
  
} from 'reactstrap'

function getWeekDays(weekStart) {
  const days = [weekStart];
  for (let i = 1; i < 7; i += 1) {
    days.push(
      moment(weekStart)
        .add(i, 'days')
        .toDate()
    );
  }
  return days;
}

function getWeekRange(date) {
  return {
    from: moment(date)
      .startOf('week')
      .toDate(),
    to: moment(date)
      .endOf('week')
      .toDate(),
  };
}
class DataUsage extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
      isOpen: false,
      hoverRange: undefined,
      selectedDays: [],
     
    };
  
  }
 

  onToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  handleDayChange = date => {
    this.setState({
      selectedDays: getWeekDays(getWeekRange(date).from),
    });
  };

  handleDayEnter = date => {
    this.setState({
      hoverRange: getWeekRange(date),
    });
  };

  handleDayLeave = () => {
    this.setState({
      hoverRange: undefined,
    });
  };

  handleWeekClick = (weekNumber, days, e) => {
    this.setState({
      selectedDays: days,
    });
  };

 
  render() {
    const { hoverRange, selectedDays } = this.state;

    const daysAreSelected = selectedDays.length > 0;

    const modifiers = {
      hoverRange,
      selectedRange: daysAreSelected && {
        from: selectedDays[0],
        to: selectedDays[6],
      },
      hoverRangeStart: hoverRange && hoverRange.from,
      hoverRangeEnd: hoverRange && hoverRange.to,
      selectedRangeStart: daysAreSelected && selectedDays[0],
      selectedRangeEnd: daysAreSelected && selectedDays[6],
    };

    return (
        <Card className='shadow p-3 mb-5 bg-white rounded'>
        <CardBody>
          
          <h1>Data Usage</h1><br/>
          <InputGroup className="mb-5">
          <input
            type="text"
            color='secondary'
            placeholder="Search a Site"
          />
          <div className="input-group-append">
            <Button outline color='secondary'size='sm'
              className='icon-magnifier'
              type="button"
            >   
            </Button>  
          </div>
         
          </InputGroup>
          <div>
       <InputGroup style={{display: 'flex', justifyContent: 'right',size:'lg' }} className="float-right">
       <div className="SelectedWeekExample">
       {this.state.isOpen && (
        <DayPicker
          selectedDays={selectedDays}
          showWeekNumbers
          showOutsideDays
          onDayClick={this.handleDayChange}
          onDayMouseEnter={this.handleDayEnter}
          onDayMouseLeave={this.handleDayLeave}
          onWeekClick={this.handleWeekClick}
          todayButton="Go to Today"
          modifiers={
            {modifiers, foo: new Date(),
      }}
      onTodayButtonClick={(day, modifiers) => console.log(day, modifiers)}
        />
        )}
        {selectedDays.length === 7 && (
          <div className='clctr'>
            {moment(selectedDays[0]).format('LL')} –{' '}
            {moment(selectedDays[6]).format('LL')}
          </div>
        )}
         </div>
       <div  className='space1'>
       <button color="#81163F"value="Toggle date picker"onClick={this.onToggle} class="btn"><i className='icon-calendar'></i> Calendar</button>
        
       </div>{''}
    </InputGroup>
     </div>
     
     <InputGroup style={{display: 'flex', justifyContent: 'right'}} className="float-right">
     <h6  className='tbl2'>Insert data usage:  </h6>
     </InputGroup>
     <InputGroup className='tbl2 float-right'style={{display: 'flex', justifyContent: 'right',fontStyle:"italic",color:"GrayText"}} >
     <h6>Please click on the empty box to insert the data usage balance and save. </h6>
     </InputGroup>
     
      <div  className='tbl2'></div>
          <Table  bordered>
            <tr>
                <th>No</th>
                <th>Site Name</th>
                <th>Device Phone No</th>
                <th>Data Type</th>
                <th>{moment(selectedDays[0]).format('ll')}</th>
                <th>{moment(selectedDays[1]).format('ll')}</th>
                <th>{moment(selectedDays[2]).format('ll')}</th>
                <th>{moment(selectedDays[3]).format('ll')}</th>
                <th>{moment(selectedDays[4]).format('ll')}</th>
                <th>{moment(selectedDays[5]).format('ll')}</th>
                <th>{moment(selectedDays[6]).format('ll')} </th>
                <th>Total</th>
                <th>Action</th>
                
            </tr>
            <tr>
                <td rowspan="2">1</td>
                <td rowspan="2">Pidm</td>
                <td rowspan="2">0111111111</td>
                <td>Data Balance (MB)</td>
                <td><div style={{width: '80px', height:'40px'}} contentEditable="true"></div></td>
                <td><div style={{width: '80px', height:'40px'}} contentEditable="true"></div></td>
                <td><div style={{width: '80px', height:'40px'}} contentEditable="true"></div></td>
                <td><div style={{width: '80px', height:'40px'}} contentEditable="true"></div></td>
                <td><div style={{width: '80px', height:'40px'}} contentEditable="true"></div></td>
                <td><div style={{width: '80px', height:'40px'}} contentEditable="true"></div></td>
                <td><div style={{width: '80px', height:'40px'}} contentEditable="true"></div></td>
                <td></td>
                <td ><Button style={{color:"white",backgroundColor:"#81163F"}} >Save</Button> {''}</td>
            
            </tr>
            <tr>
                <td>Data Usage (MB)</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                
                

            </tr>
            <tr>
                <td rowspan="2">2</td>
                <td rowspan="2">Tigris</td>
                <td rowspan="2">0111111111</td>
                <td>Data Balance (MB)</td>
                <td><div style={{width: '80px', height:'40px'}} contentEditable="true"></div></td>
                <td><div style={{width: '80px', height:'40px'}} contentEditable="true"></div></td>
                <td><div style={{width: '80px', height:'40px'}} contentEditable="true"></div></td>
                <td><div style={{width: '80px', height:'40px'}} contentEditable="true"></div></td>
                <td><div style={{width: '80px', height:'40px'}} contentEditable="true"></div></td>
                <td><div style={{width: '80px', height:'40px'}} contentEditable="true"></div></td>
                <td><div style={{width: '80px', height:'40px'}} contentEditable="true"></div></td>
                <td></td>
                <td ><Button style={{color:"white",backgroundColor:"#81163F"}} >Save</Button> {''}</td>
                
            </tr>
            <tr>
                <td>Data Usage (MB)</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                

            </tr>
           
            
         </Table>
       

          </CardBody>
          </Card>
    )
  }
}



export default DataUsage;

  
