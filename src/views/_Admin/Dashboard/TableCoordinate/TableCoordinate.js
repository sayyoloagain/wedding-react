import React, { Component } from 'react';
import Geocode from "react-geocode";

import {
    Button,
  } from 'reactstrap'

  import { Link } from 'react-router-dom';

  class HistoryRow extends Component {
    constructor(props) {
      super(props)
  
      this.state = {
        removeuser: false,
        edituser: false,
        username: '',
        password: '',
        name: '',
        contact: '',
        userRole: '',
        showMessage: false,
        id: '',
        createdDate: '',
        reading: ''
      }
    }
    render() {
      const history = this.props.history
      const numbers = this.props.numbers
  
      let number =  numbers + 1
      console.log(number)

              

              Geocode.setApiKey('AIzaSyC6oQCEcKbgMQ38_EoiudIgZ413ugM1WmA');
              Geocode.setLanguage("en");
              Geocode.setRegion("my");
              Geocode.setLocationType("ROOFTOP");
              Geocode.enableDebug();

              let fulladdress = ""
              // let countryaddress = ""
              // let stateaddress = ""
              let cityaddress = "ok"

              Geocode.fromLatLng(history.latitude, history.longitude).then(
                (response) => {
                  const address = response.results[0].formatted_address;
                  console.log(address);
                  let city, state, country;
                  for (let i = 0; i < response.results[0].address_components.length; i++) {
                    for (let j = 0; j < response.results[0].address_components[i].types.length; j++) {
                      switch (response.results[0].address_components[i].types[j]) {
                        case "locality":
                          city = response.results[0].address_components[i].long_name;
                          break;
                        case "administrative_area_level_1":
                          state = response.results[0].address_components[i].long_name;
                          break;
                        case "country":
                          country = response.results[0].address_components[i].long_name;
                          break;
                        default:
                      }
                    }
                  }
                  console.log(city, state, country);
                  console.log(city);
                  console.log(state);
                  console.log(country);
                  console.log(address);
                  // setaddress(address)

                  fulladdress = address
                  cityaddress = city
                  // stateaddress = state
                  // countryaddress = country

                  console.log(number + fulladdress);
                  
                },
                (error) => {
                  console.error(error);
                }
              );
  
              console.log(cityaddress)
      return (

        <tr>
                    <td className="text-center">
                      <div >{number}</div>
                    </td>
                    <td>
                      <div>{history.Device.name}</div>
                    </td>
                    <td className="text-center">
                    {history.Device.vehiclePlateNum}
                    </td>
                    <td>
                    <div className="text-center">{history.Device.ownerName}</div>
                      <div className="text-center small text-muted">
                        <span>{history.Device.ownerPhoneNum}</span>
                      </div>
                    </td>
                    <td className="text-center" style={{color: 'rgba(97, 178, 228, 1)'}}>
                    {history.latitude}, {history.longitude}
                    </td>
                    <td className="text-center">
                    <span style={{color: 'blueviolet'}}>* need calculation for specific output</span><br/>
                    20.1 KM
                    </td>
                    <td className="text-center" style={{ color: 'Green' }}>
                    <strong>{cityaddress}</strong>
                    <div className="text-center small text-muted">
                    <span>yes</span>
                    </div>
                    </td>
                    <td className="text-center">
                    <Link to='/carDetails'>
                    <Button outline color="primary">Information</Button>{' '}
                    </Link>
                    </td>
                  </tr>

        // <tr key={number.toString()}>
        //   <th scope="row" className="align-middle text-left">
        //     <div className="text-center">
        //       {number}
        //     </div>
        //   </th>
        //   <td className="align-middle text-center">{reading}</td>
        //   {/* <td className="align-middle text-center">{moment(createdDate).format("DD/MM/YYYY hh:mm:ss")}H
              
        //   </td> */}
        // </tr>
      )
    }
  }

  

  
class TableCoordinate extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          removeuser: false,
          edituser: false,
          username: '',
          password: '',
          name: '',
          contact: '',
          userRole: '',
          showMessage: false,
          id: '',
          createdDate: '',
          reading: ''
        }
      }
    render() {
        const { data } = this.props
        console.log({data})
        console.log(this.props.data.length)
        console.log(this.props.length)
        return (
            <div>
                <h1>Coordinate</h1>

                <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th className="text-center">No</th>
                    <th className="text-center">Vehicle Model</th>
                    <th className="text-center">Licence Plate</th>
                    <th className="text-center">Owner Name</th>
                    <th className="text-center">Current Coordinate</th>
                    <th className="text-center">Today Distance</th>
                    <th className="text-center">Currently In Area ?</th>
                    <th className="text-center">Information</th>
                  </tr>
                </thead>
                <tbody>
                    {
                      (this.props.data.length === 0)? 
                      <tr>
                        <td align="center"  colspan='3'>
                          No Data
                        </td>
                      </tr>:
                      this.props.data.map((history, index) =>

                      
                      <HistoryRow
                        // key={index}
                        numbers={index}
                        history={history}
                        // dispatch={this.props.dispatch}
                        // authorization={this.props.authorization} 
                        />
                      )
                    }
                </tbody>
                </table>




              {/* <table className="table table-hover table-outline mb-0 d-none d-sm-table">
                <thead className="thead-light">
                  <tr>
                    <th className="text-center">No</th>
                    <th className="text-center">Vehicle Model</th>
                    <th className="text-center">Licence Plate</th>
                    <th className="text-center">Owner Name</th>
                    <th className="text-center">Current Coordinate</th>
                    <th className="text-center">Today Distance</th>
                    <th className="text-center">Currently In Area ?</th>
                    <th className="text-center">Information</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">
                      <div >1</div>
                    </td>
                    <td>
                      <div>Produa Myvi, 2010</div>
                    </td>
                    <td className="text-center">
                    WBC 0127
                    </td>
                    <td>
                    <div className="text-center">Ahmad Jalal bin Izzudin</div>
                      <div className="text-center small text-muted">
                        <span>011-2348372</span>
                      </div>
                    </td>
                    <td className="text-center" style={{color: 'rgba(97, 178, 228, 1)'}}>
                    3.173058079246801, 101.72091560904428
                    </td>
                    <td className="text-center">
                    20.1 KM
                    </td>
                    <td className="text-center" style={{ color: 'Green' }}>
                    <strong>Cyberjaya</strong>
                    <div className="text-center small text-muted">
                    <span>yes</span>
                    </div>
                    </td>
                    <td className="text-center">
                    <Link to='/carDetails'>
                    <Button outline color="primary">Information</Button>{' '}
                    </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div >2</div>
                    </td>
                    <td>
                      <div>Proton X70, 2010</div>
                    </td>
                    <td className="text-center">
                    WJK 034
                    </td>
                    <td>
                    <div className="text-center">Muhd Muizzuddin Bin Tarmizi</div>
                      <div className="text-center small text-muted">
                        <span>011-2348372</span>
                      </div>
                    </td>
                    <td className="text-center" style={{color: 'rgba(97, 178, 228, 1)'}}>
                    3.173058079246801, 101.72091560904428
                    </td>
                    <td className="text-center">
                    17.9 KM
                    </td>
                    <td className="text-center" style={{ color: 'Green' }}>
                    <strong>Cyberjaya</strong>
                    <div className="text-center small text-muted">
                    <span>yes</span>
                    </div>
                    </td>
                    <td className="text-center">
                    <Link to='/carDetails'>
                    <Button outline color="primary">Information</Button>{' '}
                    </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div >3</div>
                    </td>
                    <td>
                      <div>Perodua Exora, 2010</div>
                    </td>
                    <td className="text-center">
                    WWJ 0887
                    </td>
                    <td>
                    <div className="text-center">Ahmad Fariz Bin Zuhair</div>
                      <div className="text-center small text-muted">
                        <span>011-2348372</span>
                      </div>
                    </td>
                    <td className="text-center" style={{color: 'rgba(97, 178, 228, 1)'}}>
                    3.173058079246801, 101.72091560904428
                    </td>
                    <td className="text-center">
                    26.2 KM
                    </td>
                    <td className="text-center" style={{ color: 'Green' }}>
                    <strong>Cyberjaya</strong>
                    <div className="text-center small text-muted">
                    <span>yes</span>
                    </div>
                    </td>
                    <td className="text-center">
                    <Link to='/carDetails'>
                    <Button outline color="primary">Information</Button>{' '}
                    </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div >4</div>
                    </td>
                    <td>
                      <div>Proton X50, 2010</div>
                    </td>
                    <td className="text-center">
                    WCC 8721
                    </td>
                    <td>
                    <div className="text-center">Zuhayr Faizul Bin Jalal</div>
                      <div className="text-center small text-muted">
                        <span>011-2348372</span>
                      </div>
                    </td>
                    <td className="text-center" style={{color: 'rgba(97, 178, 228, 1)'}}>
                    3.173058079246801, 101.72091560904428
                    </td>
                    <td className="text-center">
                    14.9 KM
                    </td>
                    <td className="text-center" style={{ color: 'Red' }}>
                    <strong>Lembah Klang</strong>
                    <div className="text-center small text-muted">
                    <span>no</span>
                    </div>
                    </td>
                    <td className="text-center">
                    <Link to='/carDetails'>
                    <Button outline color="primary">Information</Button>{' '}
                    </Link>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div >5</div>
                    </td>
                    <td>
                      <div>BMW X3, 2010</div>
                    </td>
                    <td className="text-center">
                    WJE 9922
                    </td>
                    <td>
                    <div className="text-center">Kumaran A/L Rajagobal</div>
                      <div className="text-center small text-muted">
                        <span>011-2348372</span>
                      </div>
                    </td>
                    <td className="text-center" style={{color: 'rgba(97, 178, 228, 1)'}}>
                    3.173058079246801, 101.72091560904428
                    </td>
                    <td className="text-center">
                    34.2 KM
                    </td>
                    <td className="text-center" style={{ color: 'Green' }}>
                    <strong>Cyberjaya</strong>
                    <div className="text-center small text-muted">
                    <span>yes</span>
                    </div>
                    </td>
                    <td className="text-center">
                      <Link to='/carDetails'>
                    <Button outline color="primary">Information</Button>{' '}
                    </Link>
                    </td>
                  </tr>

                </tbody>
              </table> */}
            </div>
        );
    }
}

export default TableCoordinate;