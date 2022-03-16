//'@coreui/coreui/scss/coreui.scss'
// import {  } from '@coreui/react';
import React, { Component } from 'react';
// import Accordion from './Accordion';
//main Context

import Dates from '../../../__ifunc/dates'
import { connect } from 'react-redux';
// import '../../../coreuiCSS/coreui-4.0.2-dist/css/coreui.min.css'
// import '../../../coreuiCSS/coreui-4.0.2-dist/js/coreui.js.map'

// import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
// import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'

// import './../../../scss/style.scss'
// import Autocomplete from 'react-google-autocomplete';
import {
  Accordion,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';


import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
} from 'reactstrap'


// import CIcon from '@coreui/icons'

// function target(props) {
//   return (
//     <useMainContext onClick={props.changeTheme}>
//       Change Theme
//     </useMainContext>
//   );
// }

class Dashboard extends Component {

  constructor(props) {
    super(props);

    console.log(props)
    
    this.state = {


      // dropdownOpen: false,
      // radioSelected: Tick.Day,

      // monthName: Dates.getMonthName(new Date()),
      // month: new Date().getMonth() + 1,
      // year: Dates.getYear(new Date()),

      // showPrev: true,
      // showNext: true,

      // dates: Dates.getToday('yyyy-mm-dd'),

    };

  }



  async componentDidMount() {
    this.getData();
    // DashboardActions.getLatestData(this.props.dispatch)
    // this.intervalID = setInterval(() => this.tick(), 1000);
    // this.intervalID = setInterval(() => this.props.dispatch, 5000);
    // setInterval(this.getData, 5000); // runs every 5 seconds.
    // const {selectedEvent} = useMainContext();
    // console.log(selectedEvent)
    
  }

  
  componentWillUnmount() {
    window.location.reload()
  }
  getData = () => {
    // DashboardActions.getLatestData(this.props.dispatch)
    console.log(this.props.dashboard)
    
    
  }
  tick() {
    this.setState({
      timer: Dates.format(new Date(), Dates.FORMAT.TIME2),
      // DashboardActions.getLatestData(this.props.dispatch)
    });
  }

  render() {

    const types = this.props.dashboard.errorSystem.types
    console.log({ types })

    const { data } = this.props.dashboard
    console.log({data})

    
    // console.log(this.props.dateCreate)
    
    // const {setEventData, reRenderMarkers} = useMainContext();
    // const [loading, setLoading] = useState(false);
    // //Event to Render
    // const [renderEvent, setRenderEvent] = useState([]);
    // const { Panel } = Collapse;

    // useEffect(() => {
    //   const fetchEvents = async () => {
    //     setLoading(true);
    //     const res = await fetch("https://run.mocky.io/v3/c066e936-4a0d-4697-bebf-f947a95a5f40");
    //     //Extract the Array contained in the 'events' field.
    //     const {events} = await res.json();
    //     //Event data is globally accessible. But 'renderEvent' is just to render out the MAP with the markers
    //     setEventData(events);
    //     setRenderEvent(events);
    //     setLoading(false);
    //   }
    //   fetchEvents();
    // }, [])

    // useEffect(() => {
    //   if(reRenderMarkers !== null){
    //     setRenderEvent(reRenderMarkers);
    //   }
    // }, [reRenderMarkers])
    
    // const [activeKey, setActiveKey] = useState(0)
  return (
    <>
          <CardHeader className="bg-dark border-bottom-0">
          <h2>Dashboard</h2>
          </CardHeader>
          <Card className='shadow p-3 mb-5 bg-white rounded' >
          <CardBody>

<Row>


  <Col lg="3" >
{/* <div class="list-group" id="list-tab" role="tablist"> */}
{/* {!loading && <Search />} */}

  {/* </div> */}

{/* </div> */}





                <Accordion>
            {/* <AccordionItem> */}
            {/* <CardHeader style={{background:'white'}}>

            <div className=' h3'><strong>Vehicle Model</strong></div>
                        <Input type="Text" name="text"  placeholder="Model Name" />
            </CardHeader> */}
                {/* <AccordionItemHeading>
                    <AccordionItemButton>
                        Cyberjaya
                        
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel> */}
                {/* {
                // !loading && 
                <Search
                data={data}
                
                />} */}
               

                {/* </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                    {data.map(data => (
                        <li>{data.createdDate}{data.speed}</li>
                      ))}
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                </AccordionItemPanel>
            </AccordionItem> */}
        </Accordion>


  </Col>
  {/* <Col lg="9" style={{ width: 'auto', height: '600px'}}>
    {
    // !loading ? 
    <Map style={{width: 'auto', height: '600px'}} 
    data={data} className='shadow p-3 mb-5 bg-white rounded'
    // eventData={renderEvent}
    />
    // : <Loader/>
    }

  </Col> */}
</Row>

</CardBody>

<hr/>

{/* <DetailsRealTime
data={data}
/> */}

{/* <Card>
<CardBody>

<table style={{width:"100%", border: "1px solid black" }}>
  <tr>
    <th>
    <CardBody>


<CardTitle tag="h5">Real Time Record</CardTitle>
<table cellspacing="10" cellpadding="0" width='100%'>
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
<td className='right'>???</td>
</tr>

</table>
</CardBody>
    </th>
    <th>
    <CardBody>
                <Line
                  data={dashboardNASDAQChart.data}
                  options={dashboardNASDAQChart.options}
                  width={400}
                  height={100}
                />
              </CardBody>


    </th>

    <th style={{ border: "1px solid black" }}>

      <table >
        <th style={{ verticalAlign: "middle" }}>
        <CardBody>
        <img src={carimage} className="img-avatar mx-0" style={{ height: "100px", width: "150px" }} alt="admin@bootstrapmaster.com" />
        </CardBody></th>
        <th>


        <CardBody>
        <table cellspacing="10" cellpadding="0" width='100%'>
<tr>
  <th>
    <strong>Produa Myvy, 2010</strong>
  </th>
</tr>
<hr/>
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
<td><strong>Breake pedal switch</strong></td>
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
</CardBody>
        </th>
      </table>

    </th>

  </tr>

</table>

            </CardBody>
            </Card> */}
            </Card >


            {/* <Card className='shadow p-3 mb-5 bg-white rounded'>
              <CardBody>
                <TableCoordinate
                data = {data}
                ></TableCoordinate>
              </CardBody>
            </Card> */}
{/* <CardBody>

</CardBody> */}



            {/* {!loading && <Search />} */}
            </>
    // <div className='profile'>

    //   <h1>Profile oii</h1>
    //   <Map/>
    // </div>
  );
}
}



export default connect(state => { return state })(Dashboard) ;

// function App() {
//   const { setEventData, reRenderMarkers} = useMainContext();
//   const [loading, setLoading] = useState(false);
//   //Event to render
//   const [renderEvent, setRenderEvent] = useState([]);

//   useEffect(() => {
//     const fetchEvents = async () => {
//       setLoading(true);
//       const res = await fetch("https://eonet.sci.gsfc.nasa.gov/api/v2.1/events");
//       //Extract the Array contained in the 'events' field.
//       const {events} = await res.json();
//       //Event data is globally accessible. But 'renderEvent' is just to render out the MAP with the markers
//       setEventData(events);
//       setRenderEvent(events);
//       setLoading(false);
//     }
//     fetchEvents();
//   }, [])

//   useEffect(() => {
//     if(reRenderMarkers !== null){
//       setRenderEvent(reRenderMarkers);
//     }
//   }, [reRenderMarkers])


//   return (
//     <>
//               <Card>
//               <CardBody>
//               </CardBody>
//               </Card>
//     <div>
//     {/* <Header /> */}
//       {!loading ? <Map eventData={renderEvent} /> : <Loader />}
//     {!loading && <Search />}
//     </div>
//     </>
//   );
// }

// export default App;

// function Profile() {
//     // const {setEventData, reRenderMarkers} = useMainContext();
//   const [loading, setLoading] = useState(false);
//   //Event to Render
//   const [renderEvent, setRenderEvent] = useState([]);
//   return (
//     <div className='profile'>
//       <h1>Profile oii</h1>
//       {/* <div><Map eventData={renderEvent} /></div> */}
//       <table class="table">
//   <thead>
//     <tr>
//       <th scope="col">#</th>
//       <th scope="col">First</th>
//       <th scope="col">Last</th>
//       <th scope="col">Handle</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <th scope="row">1</th>
//       <td>Mark</td>
//       <td>Otto</td>
//       <td>@mdo</td>
//     </tr>
//     <tr>
//       <th scope="row">2</th>
//       <td>Jacob</td>
//       <td>Thornton</td>
//       <td>@fat</td>
//     </tr>
//     <tr>
//       <th scope="row">3</th>
//       <td colspan="2">Larry the Bird</td>
//       <td>@twitter</td>
//     </tr>
//   </tbody>
// </table>
//     </div>
//   );
// }

// export default Profile;
