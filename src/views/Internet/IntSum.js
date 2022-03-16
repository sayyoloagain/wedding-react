import React,  {Component, Fragment  } from 'react';
import { connect } from "react-redux";
import Multiselect from 'multiselect-react-dropdown';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import {  Tab,
  Tabs,
  IconButton,
  Tooltip
  } from '@mui/material';
import {
  Dropdown,
  Card,
  CardBody,
  Button,
  Table,
  Pagination, 
  PaginationItem, 
  PaginationLink,
  InputGroup,
} from 'reactstrap'
import {  SiteActions } from '../../__actions/site.js'
import {Line} from 'react-chartjs-2';

class TableRowHighestDataUsage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    }
  }
  render() {
      let data = this.props.userData
      data.DataPlanXox.dataBalance = 1 - data.DataPlanXox.dataBalance
      let number = this.props.numbers 
      let dataXox = data.DataPlanXox 
      let dataBalance

      dataXox.filter((userData) =>  userData.dataBalance < 20).forEach((userData, index) => {  
        dataBalance = userData.dataBalance
      })
    return (
      <>
      <tr>
      <th scope="row">{number}</th>
      <td>{data.Site.name}</td>
      <td>{data.mobileNumber}</td>
      <td>{dataBalance.toFixed(2)} GB</td>
      </tr>
      </>
    )
  }
}

class TableRowLowestDataUsage extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }
  render() {
      let data = this.props.userData
      let numbers = this.props.numbers
      let number = numbers 
      data.DataPlanXox.dataBalance = 1 - data.DataPlanXox.dataBalance
      let dataXox = data.DataPlanXox 
      let dataBalance

      dataXox.filter((userData) =>  userData.dataBalance).map((userData, index) => (  
        dataBalance = userData.dataBalance 
      ))
    return (
      <tr>
      <th scope="row">{number}</th>
      <td>{data.Site.name}</td>
      <td>{data.mobileNumber}</td>
      <td>{dataBalance.toFixed(2)} GB</td>
      </tr>
    )
  }
}

class IntSum2 extends Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.onRemove = this.onRemove.bind(this);
    this.handleHigh = this.handleHigh.bind(this)
    this.handleLow = this.handleLow.bind(this)
    this.dailyDataFunc = this.dailyDataFunc.bind(this)
    this.state = {
      selectedTab: 0,
      phoneNoDropdown: 1,
      phoneNoDropdown2: 1,
      selectedContact: [],
      currentHigh: '0',
      currentLow: '0',
      selectedPhone: 0,
    };
  }
  componentDidMount(){
    SiteActions.getLatestData(this.props.dispatch)
  }

  handleChange = e => {
    this.setState({selectedTab: e})
    console.log(this.state.selectedTab);
  }
  setPhone = e => {
    this.setState({selectedPhone: e})
  }
  handleHigh = e => {
    this.setState({currentHigh: e.target.value})
    this.setState(prevState => {
      this.state.data.sort((a, b) => (b.DataPlanXox.dataBalance - a.DataPlanXox.dataBalance))
    })
  }
  handleLow = e => {
    this.setState({currentLow: e.target.value})
  }

  onInputChange(e) {
    console.log(e.target)
    const { name, value } = e.target;
    this.setState({[name]: value})
  }
  onSelect(selectedList, selectedItem) {
    let selectedContact = [...this.state.selectedContact]
    this.setState({ selectedContact: [...selectedContact, selectedItem.value] })
  }
  onRemove(selectedList, selectedItem) {
    let selectedContact = [...this.state.selectedContact]
    let index = selectedContact.indexOf(selectedItem.value)
    this.state.selectedContact.splice(index,1)
    if (index === 1) {
      this.state.dataInMonth2.splice()
    }
    console.log(this.state.dataInMonth2);
  }

  dailyDataFunc(data, selectedNum) {
    let test, year = [], maxYear, dataDaily = [], Jan = [], dailyLastNum = [], deduct
    data.filter((userData) => userData.mobileNumber === selectedNum).map((userData, index) => (
      test = userData.DataPlanXox
    ))
    test.forEach(mobileData => {   // get highest year
      const date = new Date(mobileData.createdAt)
      if (year.length === 0) {
        year.push(date.getFullYear())
      }
      else if (year.length > 0) {
        for (let i = 0; i < year.length; i++){
          if (year.includes(date.getFullYear()) === false) {
            year.push(date.getFullYear())
          }       
        }
      }
      maxYear = Math.max(...year)
    });
    test.forEach(mobileData => {      // check highest year january data < or = 31
      const date = new Date(mobileData.createdAt)
      if (date.getFullYear() === maxYear) {
        test.map((mobileData, index) => (
          dataDaily.push(mobileData.dataBalance)
        ))
      }
    });
    let dailyYearTemp
    if (Jan.length < 31) {
      dailyYearTemp = maxYear - 1
      test.forEach(mobileData => {    // check highest year january data < or = 31
        const date = new Date(mobileData.createdAt)
        if (date.getFullYear() === dailyYearTemp) {
          test.map((mobileData, index) => (
            dataDaily.push(mobileData.dataBalance)
          ))
        }
      });
    }
    if (dataDaily.length > 31) {
      deduct = dataDaily.length - 31
      dataDaily.splice(0, deduct)
      if (dataDaily[0] !== 1) {
        dataDaily.shift()
      }
    }   
    // console.log(dataDaily.length);
    if (dataDaily.length === 31) {dailyLastNum = 30}
    else if (dataDaily.length === 30) {dailyLastNum = 29}
    else if (dataDaily.length === 29) {dailyLastNum = 28}

    return [test, maxYear, dataDaily, dailyLastNum]
  }

  monthlyDataFunc(allData, currentYear) {
    let Jan = [], Feb = [], Mar = [], Apr = [], May = [], Jun = [], July = [], Aug = [], Sept = [], Oct = [], Nov = [], Dec = []

    allData.forEach(mobileData => {   // check highest year january data < or = 31
      const date = new Date(mobileData.createdAt)
      if (date.getFullYear() === currentYear) {
        if (date.getMonth() === 0)       {  Jan.push(mobileData.dataBalance)  }
        else if (date.getMonth() === 1)  {  Feb.push(mobileData.dataBalance)  }
        else if (date.getMonth() === 2)  {  Mar.push(mobileData.dataBalance)  }
        else if (date.getMonth() === 3)  {  Apr.push(mobileData.dataBalance)  }
        else if (date.getMonth() === 4)  {  May.push(mobileData.dataBalance)  }
        else if (date.getMonth() === 5)  {  Jun.push(mobileData.dataBalance)  }
        else if (date.getMonth() === 6)  {  July.push(mobileData.dataBalance) }
        else if (date.getMonth() === 7)  {  Aug.push(mobileData.dataBalance)  }
        else if (date.getMonth() === 8)  {  Sept.push(mobileData.dataBalance) }
        else if (date.getMonth() === 9)  {  Oct.push(mobileData.dataBalance)  }
        else if (date.getMonth() === 10) {  Nov.push(mobileData.dataBalance)  }
        else if (date.getMonth() === 11) {  Dec.push(mobileData.dataBalance)  }
      }
    });
    return [Jan, Feb, Mar, Apr, May, Jun, July, Aug, Sept, Oct, Nov, Dec]
  }

  render() {
    const { data } = this.props.site;
    let a
    let numArr = []
    let numArr2 = []
    for (a = 0; a < data.length; a++) {
      if (data[a].DataPlanXox.length !== 0){
        numArr.push(data[a].mobileNumber)
        numArr2.push({
          key: "mobileNumber",
          value: data[a].mobileNumber
        })
      }
    }

    // ########## Daily graph ########## //
    let year, year2, year3
    let dataDaily = [], dataDaily2 = [], dataDaily3 = []
    let dailyLastNum, dailyLastNum2, dailyLastNum3
    let allData1 = [], allData2 = [], allData3 = [] 
    // year, year2, year3, allData2 & allData3 is used only when 
    // selected number more than 1 but not initially, thus the warning

    if (this.state.selectedContact[0] !== undefined) {
      [allData1, year, dataDaily, dailyLastNum] = (this.dailyDataFunc(data, this.state.selectedContact[0]));}
    if (this.state.selectedContact[1] !== undefined) {
      [allData2, year2, dataDaily2, dailyLastNum2] = (this.dailyDataFunc(data, this.state.selectedContact[1]));}
    if (this.state.selectedContact[2] !== undefined) {
      [allData3, year3, dataDaily3, dailyLastNum3] = (this.dailyDataFunc(data, this.state.selectedContact[2]));}

    const dailydata = {
      labels: [" 1", " 5", " 10", " 15", " 20", " 25", "31"],
      datasets: [
        {
          label: this.state.selectedContact[0],
          fill: false, 
          tension: 0.2,
          borderWidth: 2,
          backgroundColor: "rgba(220, 220, 220, 0.2)",
          pointBackgroundColor: "#FFFFFF",
          pointBorderColor: "#81163F",
          borderColor: "#FF0000",
          data: [dataDaily[0], dataDaily[4], dataDaily[9], dataDaily[14], dataDaily[19], dataDaily[24], dataDaily[dailyLastNum], 0] 
        },      
        {
          label: this.state.selectedContact[1],
          fill: false,
          tension: 0.2,
          borderWidth: 2,
          backgroundColor: "rgba(220, 220, 220, 0.2)",
          pointBackgroundColor: "#FFFFFF",
          pointBorderColor: "#81163F",
          borderColor: "#5e00ff",
          data: [dataDaily2[0], dataDaily2[4], dataDaily2[9], dataDaily2[14], dataDaily2[19], dataDaily2[24], dataDaily2[dailyLastNum2], 0] 
        },      
        {
          label: this.state.selectedContact[2],
          fill: false,
          tension: 0.2,
          borderWidth: 2,
          backgroundColor: "rgba(220, 220, 220, 0.2)",
          pointBackgroundColor: "#FFFFFF",
          pointBorderColor: "#81163F",
          borderColor: "#00CC00",
          data: [dataDaily3[0], dataDaily3[4], dataDaily3[9], dataDaily3[14], dataDaily3[19], dataDaily3[24], dataDaily3[dailyLastNum2], 0] 
        }
      ]
    }
    // ########## Daily graph ########## //
    
    // ########## Monthly graph ########## //
    let Jan = [], Feb = [], Mar = [], Apr = [], May = [], Jun = [], July = [], Aug = [], Sept = [], Oct = [], Nov = [], Dec = []
    let Jan2 = [], Feb2 = [], Mar2 = [], Apr2 = [], May2 = [], Jun2 = [], July2 = [], Aug2 = [], Sept2 = [], Oct2 = [], Nov2 = [], Dec2 = []
    let Jan3 = [], Feb3 = [], Mar3 = [], Apr3 = [], May3 = [], Jun3 = [], July3 = [], Aug3 = [], Sept3 = [], Oct3 = [], Nov3 = [], Dec3 = []
    // let currentDate = new Date(), 
    let currentYear = new Date()
    // currentDate = currentDate.getDate()  + '-' + (currentDate.getMonth() + 1) + '-' + currentDate.getFullYear() ;   
    currentYear = currentYear.getFullYear()

    if (this.state.selectedContact[0] !== undefined) {
      [Jan, Feb, Mar, Apr, May, Jun, July, Aug, Sept, Oct, Nov, Dec] = (this.monthlyDataFunc(allData1, currentYear, this.state.selectedContact[0]))
    }
    if (this.state.selectedContact[1] !== undefined) {
      [Jan2, Feb2, Mar2, Apr2, May2, Jun2, July2, Aug2, Sept2, Oct2, Nov2, Dec2] = (this.monthlyDataFunc(allData1, currentYear, this.state.selectedContact[0]))
    }
    if (this.state.selectedContact[2] !== undefined) {
      [Jan3, Feb3, Mar3, Apr3, May3, Jun3, July3, Aug3, Sept3, Oct3, Nov3, Dec3] = (this.monthlyDataFunc(allData1, currentYear, this.state.selectedContact[0]))
    }

    const monthly = {
      labels: ["Jan", "Feb", "Mac", "Apr", "May", "Jun", "July","Aug","Sept","Oct","Nov","Dec"],
      datasets: [
        {
          label: this.state.selectedContact[0],
          fill: false,
          tension: 0,
          borderWidth: 2,
          backgroundColor: "rgba(220, 220, 220, 0.2)",
          borderColor: "#FF0000",
          pointBackgroundColor: "#FFFFFF",
          pointBorderColor: "#81163F",
          data: [Jan[30], Feb[27], Mar[30], Apr[29], May[30], Jun[29], July[30], Aug[30], Sept[29], Oct[30], Nov[29], Dec[30], 0.3, 0] 
        },
        {
          label: this.state.selectedContact[1],
          fill: false,
          tension: 0,
          borderWidth: 2,
          backgroundColor: "rgba(220, 220, 220, 0.2)",
          borderColor: "#5e00ff",
          pointBackgroundColor: "#FFFFFF",
          pointBorderColor: "#81163F",
          data: [Jan2[30], Feb2[27], Mar2[30], Apr2[29], May2[30], Jun2[29], July2[30], Aug2[30], Sept2[29], Oct2[30], Nov2[29], Dec2[30], 0.3, 0] 
        },
        {
          label: this.state.selectedContact[2],
          fill: false,
          tension: 0,
          borderWidth: 2,
          backgroundColor: "rgba(220, 220, 220, 0.2)",
          borderColor: "#00CC00",
          pointBackgroundColor: "#FFFFFF",
          pointBorderColor: "#81163F",
          data: [Jan3[30], Feb3[27], Mar3[30], Apr3[29], May3[30], Jun3[29], July3[30], Aug3[30], Sept3[29], Oct3[30], Nov3[29], Dec3[30], 0.3, 0] 
        }
      ]
    }
    // ########## Monthly graph ########## //

    const quarterly = {
      labels: ["Q1", "Q2", "Q3", "Q4"],
      datasets: [
        {
          label: "Quarterly",
          fill: false,
          tension: 0,
          borderWidth: 2,
          backgroundColor: "rgba(220, 220, 220, 0.2)",
          borderColor: "#81163F",
          pointBackgroundColor: "#FFFFFF",
          pointBorderColor: "#81163F",
          // data: [90, 10, 12, 67]
        }
      ]
    }
    const halfyearly = {
      labels: ["Jan", "Feb", "Mac", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Half Yearly",
          fill: false,
          tension: 0,
          borderWidth: 2,
          backgroundColor: "rgba(220, 220, 220, 0.2)",
          borderColor: "#81163F",
          pointBackgroundColor: "#FFFFFF",
          pointBorderColor: "#81163F",
          // data: [40, 20, 12, 39, 10, 40, 39, 80, 40]
        }
      ]
    }
    const yearly = {
      labels: ["2018", "2019", "2020", "2021", "2022"],
      datasets: [
        {
          label: "Yearly",
          fill: false,
          tension: 0,
          borderWidth: 2,
          backgroundColor: "rgba(220, 220, 220, 0.2)",
          borderColor: "#81163F",
          pointBackgroundColor: "#FFFFFF",
          pointBorderColor: "#81163F",
          // data: [40, 20, 12, 39, 10, 40, 39]
        }
      ]
    }
    return (
      <>
      <Card>
      <CardBody>
      <h1>Summary</h1><br/>
      <InputGroup >
      <h4>Data Usage</h4>
      </InputGroup>
      
      <div><br/>Site </div>
      <InputGroup className="mb-2">
        <input
          type="text"
          className="form-control"
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
        
          <div>Phone No </div>
          <InputGroup className="mb-5">
            <Dropdown isOpen>
              <Multiselect
                options={numArr2}         // Options to display in the dropdown
                onSelect={this.onSelect}  // Function will trigger on select event
                onRemove={this.onRemove}  // Function will trigger on remove event
                displayValue="value"      // Property value to display in the dropdown options
                showCheckbox={true}       // Display checkbox on the side of each options
                selectionLimit="3"
                placeholder='Select the number(s)'
                hidePlaceholder='true'
              />
            </Dropdown>
          </InputGroup>

          <Tabs 
          aria-label="disabled tabs example" textColor="secondary" indicatorColor="secondary">
            <Tab label="Daily" onClick={() => this.handleChange(0)} > </Tab>
            <Tab label="Monthly" onClick={() => this.handleChange(1)}> </Tab>
            <Tab label="Quarterly" onClick={() => this.handleChange(2)}> </Tab>
            <Tab label="Half-Yearly" onClick={() => this.handleChange(3)}> </Tab>
            <Tab label="Yearly" onClick={() => this.handleChange(4)}> </Tab>
          </Tabs>

        { this.state.selectedTab === 0 && <Line  
          data={dailydata}
          options={{
            title:{
              display:true,
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
          height = '100px'
          width = '300px'
        />
        }
        
        { this.state.selectedTab === 1 && <Line
          data={monthly}
          options={{
            title:{
              display:true,
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
          height = '100px'
          width = '300px'
        />}
          
          { this.state.selectedTab === 2 && <Line
          data={quarterly}
          options={{
            title:{
              display:true,
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
          height = '100px'
          width = '300px'
        />}

        { this.state.selectedTab === 3 && <Line
          data={halfyearly}
          options={{
            title:{
              display:true,
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
          height = '100px'
          width = '300px'
        />}
          
        { this.state.selectedTab === 4 && <Line
          data={yearly}
          options={{
            title:{
              display:true,
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
          height = '100px'
          width = '300px'
        />}

      </CardBody>
      </Card>
                            

    <div class="column">
      <Card className='shadow p-3 mb-5 bg-white rounded'>
        <CardBody>
          <div class="">
          <div class="">
          <h4>
          Highest Data Usage
          </h4>
      </div>
      

      <div class=""> 
    <InputGroup className="mb-5">
          <Dropdown isOpen >
          <select value={this.state.currentHigh} onChange={this.handleHigh} id='categories' type="text" className="form-control">
            <option label="Daily" value="0"  ></option> 
            <option label="Weekly" value="1" ></option>
            <option label="Monthly" value="2" ></option>
          </select>
          </Dropdown> 
          <Tooltip title="Top 20% devices that used the highest amount of data within the selected time period.">
      <IconButton>
        <InfoOutlinedIcon />
      </IconButton>
    </Tooltip>
          
        {this.state.currentHigh === '0'?(
          <Table className='table 1' hover>
          <thead>
            <tr>
              <th>No</th>
              <th>Site Name</th>
              <th>Device Phone Number</th>
              <th>Data Usage</th>
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
            data.map((userData, index) => userData.DataPlanXox.length >= 1 && (   // userData[index] 
              <Fragment key={index}>
                <TableRowHighestDataUsage numbers={index} userData={userData} />
              </Fragment>
            ))
          //  ,this.pageSize = 5,
          //   this.pagesCount = Math.ceil(userData.DataPlanXox.length / this.pageSize)
          )}
          </tbody>
        </Table>
        ):this.state.currentHigh === '1'?(
          <Table className='table 1' hover>
          <thead>
            <tr>
              <th>No</th>
              <th>Site Name</th>
              <th>Device Phone Number</th>
              <th>Data Usage</th>
          
            </tr>
          </thead>
          <tbody>
              <tr>
              <th scope="row">1</th>
              <td>Pidm</td>
              <td>019 45377372</td>
              <td>Digi</td>
              
              </tr>
          </tbody>
        </Table>
        ):this.state.currentHigh === '2'&& (<Table className='table 1' hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Site Name</th>
            <th>Device Phone Number</th>
            <th>Data Usage</th>
        
          </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">1</th>
            <td>Pidm</td>
            <td>014 1111111</td>
            <td>Celcom</td>
            
            </tr>
        </tbody>
      </Table>)
      }

          </InputGroup>
          <Pagination size='sm'style={{display: 'flex', justifyContent: 'right' }} className="float-right" aria-label="Page navigation example">
            <PaginationItem>
              <PaginationLink previous href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink next href="#" />
            </PaginationItem>
          </Pagination>
          </div>
          </div>
          </CardBody>
        </Card>
          </div>                  {/* Highest Data Usage ends */}

          
          <div class="column">    {/* Lowest Data Usage starts */}
  <Card className='shadow p-3 mb-5 bg-white rounded'>
    <CardBody>
    <h4>
       Lowest Data Usage
      </h4>
      
    <InputGroup className="mb-5">

          <Dropdown isOpen>
          <select value={this.state.currentLow} onChange={this.handleLow} id='categories' type="text" className="form-control">
            <option label="Daily" value="0"  ></option> 
            <option label="Weekly" value="1" ></option>
            <option label="Monthly" value="2" ></option>
          </select>
          </Dropdown>
          <Tooltip title="Top 20% devices that used the highest amount of data within the selected time period.">
            <IconButton>
             <InfoOutlinedIcon />
            </IconButton>
          </Tooltip>
          
          {this.state.currentLow === '0'?(
          <Table className='table 1' hover>
          <thead>
            <tr>
              <th>No</th>
              <th>Site Name</th>
              <th>Device Phone Number</th>
              <th>Data Usage</th>
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
            data.map((userData, index) => userData.DataPlanXox.length >= 1 && (   // userData[index] 
              <Fragment key={index}>
                <TableRowLowestDataUsage numbers={index} userData={userData} />
              </Fragment>
            ))
          )}
          </tbody>
        </Table>
        ):this.state.currentLow === '1'?(
          <Table className='table 1' hover>
          <thead>
            <tr>
              <th>No</th>
              <th>Site Name</th>
              <th>Device Phone Number</th>
              <th>Data Usage</th>
          
            </tr>
          </thead>
          <tbody>
              <tr>
              <th scope="row">1</th>
              <td>Pidm</td>
              <td>019 45377372</td>
              <td>Digi</td>
              
              </tr>
          </tbody>
        </Table>
        ):this.state.currentLow === '2'&& (<Table className='table 1' hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Site Name</th>
            <th>Device Phone Number</th>
            <th>Data Usage</th>
        
          </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">1</th>
            <td>Pidm</td>
            <td>014 1111111</td>
            <td>Celcom</td>
            
            </tr>
        </tbody>
      </Table>)
      }
          </InputGroup>
          <Pagination size='sm'style={{display: 'flex', justifyContent: 'right' }} className="float-right" aria-label="Page navigation example">
            <PaginationItem>
              <PaginationLink previous href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink next href="#" />
            </PaginationItem>
          </Pagination>
      </CardBody>
      </Card>
  </div>
      </>
    )
  }
}


  function mapStateToProps(state) {
    return state;
  }
export default connect(mapStateToProps)(IntSum2);