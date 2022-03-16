import React,  {Component} from 'react';
import { connect } from "react-redux";
import MaterialTable from 'material-table';
import tableIcons from "./MaterialTableIcons";
import {
  Card,
  CardBody,
} from 'reactstrap'
import {  SiteActions } from '../../__actions/site.js'

class IntStatus extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount(){
    SiteActions.getLatestData(this.props.dispatch)
  }
  render() {
    const { data } = this.props.site;
    console.log({data});
    let current = new Date()
    const dateToday = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`
    let siteMaxisData = []
    let siteXoxData = []
    let xoxMonthlyBal = []
    let xoxSeasonPass = []
    let xoxSimcardExpiry = []
    let difference, seasonPassData
    ///////////
    function dateDiffInDays(a, b) {
      // Discard the time and time-zone information.
      a = new Date(a)
      b = new Date(b)
      const utc1 = (a.getFullYear(), a.getMonth(), a.getDate());
      const utc2 = (b.getFullYear(), b.getMonth(), b.getDate());
      return (utc2 - utc1);
    }
    function dateDiffInMonths(a, b) {
      let monthDiff
      // Discard the time and time-zone information.
      a = new Date(a)
      b = new Date(b)
      const utc1Y = (a.getFullYear());
      const utc2Y = (b.getFullYear());
      const utc1M = (a.getFullYear(), a.getMonth());
      const utc2M = (b.getFullYear(), b.getMonth());
      const utc1D = (a.getFullYear(), a.getMonth(), a.getDate());
      const utc2D = (b.getFullYear(), b.getMonth(), b.getDate());
      if ((utc2Y - utc1Y) === 0){      // equal year
        if (utc2M > utc1M){           // month greater than
          if (utc2D > utc1D){         // day greater than
            monthDiff = 0
          }
          else {            
            monthDiff = 1 
          }
        }
        else {                        // month equal
          monthDiff = 0
        }
      }   
      return monthDiff;
    }
    /////////////// ### maxis payment due
    data.forEach((dataTemp, i) => {
      if (!dataTemp.DataPlanMaxis){}
      else if (dataTemp.DataPlanMaxis){     // update to pop()
        difference = dateDiffInDays(dateToday, dataTemp.DataPlanMaxis.dataExpiryDate)
        if (difference <= 3){
          siteMaxisData.push({
            id: i,
            siteName: dataTemp.Site.name, 
            mobileNumber: dataTemp.mobileNumber, 
            dueDate: dataTemp.DataPlanMaxis.dataExpiryDate,
            serviceProvider: "Maxis"
          })
        }
      }
    })
    console.log(siteMaxisData);
    /////////// ### Monthly balance
    data.forEach((dataTemp, i) => {
      if (!dataTemp.DataPlanXox || dataTemp.DataPlanXox.length === 0){}
      else if (dataTemp.DataPlanXox.length > 0){
        siteXoxData = dataTemp.DataPlanXox[dataTemp.DataPlanXox.length -1]
        console.log(siteXoxData);
        if (siteXoxData.dataBalance <= 0.1){
          xoxMonthlyBal.push({
            id: i,
            siteName: dataTemp.Site.name, 
            mobileNumber: dataTemp.mobileNumber, 
            dataBalance: siteXoxData.dataBalance,
            seasonPassBal: siteXoxData.seasonPassBal,
            simCardExpiryDate: siteXoxData.simCardExpiryDate,
            serviceProvider: "XOX"
          })
        }
      }
    })
    console.log(xoxMonthlyBal);
    /////////// ### SeasonPass
    data.forEach((dataTemp,i) => {
      if (!dataTemp.DataPlanXox || dataTemp.DataPlanXox.length === 0){}
      else if (dataTemp.DataPlanXox.length > 0){
        seasonPassData = dataTemp.DataPlanXox[dataTemp.DataPlanXox.length -1]
        if (seasonPassData.seasonPassBal < 1.2){
          xoxSeasonPass.push({
            id: i,
            siteName: dataTemp.Site.name, 
            mobileNumber: dataTemp.mobileNumber, 
            dataBalance: seasonPassData.dataBalance,
            seasonPassBal: seasonPassData.seasonPassBal,
            simCardExpiryDate: seasonPassData.simCardExpiryDate,
            serviceProvider: "XOX"
          })
        }
      }
    });
    console.log(xoxSeasonPass);
    ////////// ### Simcard Expiry
    data.forEach((dataTemp,i) => {
      if (!dataTemp.DataPlanXox || dataTemp.DataPlanXox.length === 0){}
      else if (dataTemp.DataPlanXox.length > 0){
        seasonPassData = dataTemp.DataPlanXox[dataTemp.DataPlanXox.length -1]
        difference = dateDiffInMonths(dateToday, seasonPassData.simCardExpiryDate)
        if (difference < 1){
          xoxSimcardExpiry.push({
            id: i,
            siteName: dataTemp.Site.name, 
            mobileNumber: dataTemp.mobileNumber, 
            dataBalance: seasonPassData.dataBalance,
            seasonPassBal: seasonPassData.seasonPassBal,
            simCardExpiryDate: seasonPassData.simCardExpiryDate,
            serviceProvider: "XOX"
          })
        }
      }
    });
    console.log(xoxSimcardExpiry);
    return (
      <>
      <Card className='shadow p-3 mb-5 bg-white rounded'>
      <CardBody>
        <h1>Internet Status</h1><br/>
        <MaterialTable title="Monthly Payment Due" 
          icons = {tableIcons} 
          options={{
            search: false
          }}
          columns={[
            {title:'#', field:'id'},
            {title:'Site Name',field:'siteName'},
            {title:'Device Phone Number',field:'mobileNumber'},
            {title:'Service Provider',field:'serviceProvider'},
            {title:'Due Date',field:'dueDate'},
          ]}
          data = {siteMaxisData}
        /> 
        <MaterialTable title="Monthly Data Balance" 
          icons = {tableIcons} 
          options={{
            search: false
          }}
          columns={[
            {title:'#', field:'id'},
            {title:'Site Name',field:'siteName'},
            {title:'Device Phone Number',field:'mobileNumber'},
            {title:'Service Provider',field:'serviceProvider'},
            {title:'Data Balance',field:'dataBalance'},
          ]}
          data = {xoxMonthlyBal}
        /> 
        <MaterialTable title="Season Pass Data Balance" 
          icons = {tableIcons} 
          options={{
            search: false
          }}
          columns={[
            {title:'#', field:'id'},
            {title:'Site Name',field:'siteName'},
            {title:'Device Phone Number',field:'mobileNumber'},
            {title:'Service Provider',field:'serviceProvider'},
            {title:'Data Balance',field:'seasonPassBal'},
          ]}
          data = {xoxSeasonPass}
        />      
        <MaterialTable title="Simcard Expiry" 
          icons = {tableIcons} 
          options={{
            search: false
          }}
          columns={[
            {title:'#', field:'id'},
            {title:'Site Name',field:'siteName'},
            {title:'Device Phone Number',field:'mobileNumber'},
            {title:'Service Provider',field:'serviceProvider'},
            {title:'Expiry Date',field:'simCardExpiryDate'},
          ]}
          data = {xoxSimcardExpiry}
        />    
        </CardBody>
        </Card>
  </> 
    )
  }
}
function mapStateToProps(state) {
  return state;
}
export default connect(mapStateToProps)(IntStatus);