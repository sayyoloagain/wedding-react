import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';
import NotifyMe from "react-notification-timeline";

import {
  AppNavbarBrand,
  AppSidebarToggler,
} from '@coreui/react';

import gep_lg from '../../assets/img/brand/gep2.png'
import imgprofile from '../../assets/img/brand/profile.png'





const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

const data = [
  {
    update: "7 new employees are shifted",
    timestamp: 1536119688264
  },
  {
    update: "70 new employees are shifted",
    timestamp: 1596119688264
  },
  {
    update: "Time to take a Break, TADA!!!",
    timestamp: 1596119688264
  },
  {
    update: "Shaik",
    timestamp: 1606733635120
  }
];

class DefaultHeader extends Component {

  constructor() {
    super();
    this.state = {
      curTime : null
    }
  }
  componentDidMount() {
    setInterval( () => {
      this.setState({
        curTime : new Date().toLocaleString()
      })
    },1000)
  }
    

  render() {
 

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: gep_lg, width: 150, height: 35, alt: 'PVEMS Logo' }}
         
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />
        
        <h2 className="ml-50 nav-link hover-shadow">Central Monitoring System</h2>
        <Nav className="ml-auto bg-white radius-30 mr-2" navbar>
         
            <Nav className="ml-auto bg-white radius-30 mr-1" navbar>
            <NavItem >
             <div style={{fontSize:"13px" }} className="date">
             <p>{this.state.curTime}</p>
             </div>
            </NavItem>
            </Nav>
             
            <NavItem className="d-sm-down-none mr-2 ml-4 ml-lg-2">
             <NavItem style={{ minWidth: "40px", width: "45px"  }}>
           
            <NotifyMe
                      data={data}
                      storageKey="notific_key"
                      notific_key="timestamp"
                      notific_value="update"
                      heading="Notification"
                      sortedByKey={false}
                      showDate={true}
                      size={24}
                      color="red"
                      theme    ="white"
            />
           
            </NavItem> 
            
            </NavItem >
            <Link className="d-sm-down-none mx-2"  onClick={e => this.props.onLogout(e)}>
            <NavLink to="#" className="nav-link"><i className="icon-logout mr-2"></i></NavLink>    
            </Link> 
          
             <NavItem style={{ minWidth: "40px", width: "45px" }}>
            <NavLink to="/profile" className="nav-link hover-shadow"><img src={imgprofile} className="img-avatar mx-0" style={{ height: "40px", width: "40px" }} alt="admin@bootstrapmaster.com" /></NavLink>
            </NavItem> 
        </Nav>
        
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;