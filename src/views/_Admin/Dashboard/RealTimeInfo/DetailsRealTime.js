import React, { Component,useEffect,useState } from 'react';
import {useMainContext} from '../../../../context/context';
import {
    Card,
    CardBody,
    CardHeader,
    CardFooter,
    Col,
    CardTitle,
    FormGroup,
    ListGroupItem,
    Row,
    Button,
    Collapse,
    ListGroupItemText,
    Input,
  
  
  } from 'reactstrap'

import Gauge from './speedo'
import GaugeChart from 'react-gauge-chart'

import carimage from '../../../../assets/img/bg/myvi.png'

import { Line, Pie } from "react-chartjs-2";

import {
    speedRecord,
    accelerationRecord,
    dashboard24HoursPerformanceChart,
    dashboardEmailStatisticsChart
  } from "../../../../__components/charts";

function DetailsRealTime(props) {
  console.log(props.data)
    const {selectedEvent } = useMainContext();
    console.log(selectedEvent)  

    // let speed = '50'
    const [speed, setspeed] = useState('null');
    const [fuel, setfuel] = useState('null');
    // let id = '50'



    // refresh data by 5 second
        useEffect(() => {
          const intervals = setInterval(() => {
      // console.log('This will run every second!');
        if(selectedEvent !== null){
        setspeed(selectedEvent.speed)
        console.log('        dari target'+selectedEvent.speed)
        console.log('dari target'+selectedEvent.deviceId)
        props.data.map(data => {
          console.log('          dari props'+ data.speed)
          console.log('dari props'+ data.deviceId)

          return(
            (data.deviceId === selectedEvent.deviceId ? (
              setspeed(data.speed),
              setfuel(data.fuel)
            )
              
              
              : console.log('tak ada'))
          )

          
          

        })

        }

        
        

          }, 1000);
          return () => clearInterval(intervals);
        });

    // action when on click
        if(selectedEvent !== null){
        //  speed = selectedEvent.speed
        //  id = selectedEvent.id
        }



    console.log(speed);
        return (
          <div>
              {(selectedEvent === null)? 
              <Card>
                <CardBody className='text-center h3'>Select a <b>VEHICLE</b> to see more details</CardBody>
              </Card>
                

              : <div>
              <Row>
<Col lg="4">
  <Card>
  <CardHeader>
<div className='text-center h3'><strong>Speed Gauge</strong></div>
  </CardHeader>
    <CardBody>

      <useMainContext>
       


      </useMainContext>
      
      {/* {'id : '+ id } */}
      <Gauge
      dataSpeed={speed}
      />

    </CardBody>
    </Card>
    </Col>
<Col lg="2">
<Card >

<CardHeader>
<div className='text-center h3'><strong>Fuel Level</strong></div>
  </CardHeader>
  <CardBody>

<GaugeChart id="gauge-chart5"
  nrOfLevels={3.0}
  arcsLength={[0.2, 0.3, 0.5]}
  colors={['#EA4228', '#F5CD19','#5BE12C']}
  percent={{fuel}/3.0}
  arcPadding={0.02}
  textColor={'Black'}

/>
</CardBody>
<CardFooter style={{background:'white', height: '260px'}}>
<span style={{color: 'blueviolet'}}>* need calculation for specific output</span><br/>
Fuel : {fuel}/100
</CardFooter>
</Card>
</Col>
<Col lg="2">
<Card >
  <CardHeader>
  <div className='text-center h3'><strong>Temperature</strong></div>
  </CardHeader>
  <CardBody>

<GaugeChart id="gauge-chart5"
  nrOfLevels={100}
  arcsLength={[0.55, 0.45]}
  colors={['blue', 'red']}
  percent={0.50}
  arcPadding={0.02}
  textColor={'Black'}
/>
</CardBody>
<CardFooter style={{background:'white', height: '260px'}}>
<span style={{color: 'blueviolet'}}>* need calculation for specific output</span><br/>
Temperature : 195 °C
</CardFooter>
</Card>
</Col>

<Col lg=''>
  <Card>
    <CardHeader >
    <div className=' h3'><strong>{selectedEvent.Device.name}</strong></div>
    {/* <strong>Produa Myvy, 2010</strong> */}
    <span style={{color: 'blueviolet'}}>* need calculation for specific output</span><br/>
      </CardHeader>
    <CardBody >
      <Row>
        <Col lg='5'>
        <img src={selectedEvent.Device.vehiclePicture} className="img-avatar mx-0" style={{ height: "100px", width: "150px" }} alt="admin@bootstrapmaster.com" />
        </Col>
        <Col lg='7'>
        <table cellspacing="10" cellpadding="0" width='100%'>
<tr>
  <th>

  </th>
</tr>
{/* <hr/> */}
<tr>
<td width='200px'><strong>GPS measurement</strong></td>
<td className='right' style={{color: 'Green'}}>Active</td>
</tr>
<tr>
<td><strong>Speed measurement</strong></td>
<td className='right' style={{color: 'Green'}}>Active</td>
</tr>
<tr>
<td><strong>Throttle pedal positions</strong></td>
<td className='right' style={{color: 'Green'}}>Active</td>
</tr>
<tr>
<td><strong>Brake pedal switch</strong></td>
<td className='right' style={{color: 'Green'}}>Active</td>
</tr>
<tr>
<td><strong>Steering position</strong></td>
<td className='right' style={{color: 'Green'}}>Active</td>
</tr>
<tr>
<td><strong>Automation/manual alarm</strong></td>
<td className='right' style={{color: 'Green'}}>Active</td>
</tr>

</table>
        </Col>
      </Row>


    </CardBody>
    <CardHeader >
    <div className=' h3'><strong>Real Time Record</strong></div>
    {/* <strong>Produa Myvy, 2010</strong> */}
    <span style={{color: 'blueviolet'}}>* need calculation for specific output</span><br/>
      </CardHeader>
  <CardBody style={{height:'auto'}}>
  {/* <CardTitle tag="h5">Real Time Record</CardTitle> */}
<table cellspacing="10" cellpadding="4" width='100%'>
<tr>
<td><strong>Trial Time</strong></td>
<td className='right'>5 h 23 m</td>
</tr>
<tr>
<td><strong>Total Distance</strong></td>
<td className='right'>35.7km</td>
</tr>
<tr>
<td><strong>Maximum Speed</strong></td>
<td className='right'>112.2 km/h</td>
</tr>
<tr>
<td><strong>Maximum Acceleration</strong></td>
<td className='right'>41.3 ms</td>
</tr>
<tr>
<td><strong>Maximum Declaration</strong></td>
<td className='right'>N/A</td>
</tr>

</table>
  </CardBody>
  </Card>
</Col>

</Row>

<Row>
  <Col lg='6'>
<Card>
<CardHeader >
    <div className=' h5'><strong>Speed Record</strong></div>
    {/* <strong>Produa Myvy, 2010</strong> */}
      </CardHeader>
  <CardBody style={{height:'200px'}} >
  {/* <CardTitle tag="h5" style={{textAlign:'Center'}}>Speed Record</CardTitle> */}
  <Line
                  data={speedRecord.data}
                  options={speedRecord.options}
                  width={400}
                  height={80}
                />

  </CardBody>
</Card>
  </Col>
  <Col lg='6'>
<Card>
<CardHeader >
    <div className=' h5'><strong>Acceleration Record</strong></div>
    {/* <strong>Produa Myvy, 2010</strong> */}
      </CardHeader>
  <CardBody style={{height:'200px'}} >
  {/* <CardTitle tag="h5" style={{textAlign:'Center'}}>Speed Record</CardTitle> */}
  <Line
                  data={accelerationRecord.data}
                  options={accelerationRecord.options}
                  width={400}
                  height={80}
                />

  </CardBody>
</Card>
  </Col>
</Row>
</div>}
                
                
                </div>
        );
    
}

export default DetailsRealTime;