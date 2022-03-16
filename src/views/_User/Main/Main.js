import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import { Button, Col, Container, Row } from 'reactstrap';
// import carimage from '../../../assets/img/bg/myvi.png'
import {useMainContext} from '../../../context/context'
// import Map from '../../../__components/mapPublic'
// import Loader from '../../../__components/Loader'
// import Search from './../../../__components/SearchPublic'
// import myav_sm from '../../../assets/img/brand/myavlogo_sm.png'
// import myav_lg from '../../../assets/img/brand/myavlogo_lg.png'
// import sidemenu from

//icon
// import { Icon } from '@iconify/react';
// import viewDashboard from '@iconify/icons-mdi/view-dashboard';


import {
  CardBody,
  Collapse,
  NavbarToggler,
  Button,
  NavItem,
  NavLink,
  Nav,
  NavbarBrand,
  Navbar,
} from 'reactstrap'

import {
  AppNavbarBrand,
} from '@coreui/react';

// const DefaultHeader = React.lazy(() => import('../../../containers/DefaultLayout/DefaultHeader'));

function Main() {

  const {setEventData, reRenderMarkers} = useMainContext();
  // const [loading, setLoading] = useState(false);
  //Event to Render
  // const [renderEvent, setRenderEvent] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      // setLoading(true);
      const res = await fetch("https://run.mocky.io/v3/c066e936-4a0d-4697-bebf-f947a95a5f40");
      //Extract the Array contained in the 'events' field.
      const {events} = await res.json();
      //Event data is globally accessible. But 'renderEvent' is just to render out the MAP with the markers
      setEventData(events);
      // setRenderEvent(events);
      // setLoading(false);
    }
    fetchEvents();
  }, )

  useEffect(() => {
    if(reRenderMarkers !== null){
      // setRenderEvent(reRenderMarkers);
    }
  }, [reRenderMarkers])

  const [isOpen, setIsOpen] = React.useState(false);
        return (






          <div>
                  <div style={{backgroundColor: '3F3F3F'}}
        //           style={{
        //     display: 'block', width: 'auto', padding: 30
        // }}
        >

            <AppNavbarBrand
          // full={{ src: myav_lg, width: 350, height: 90, alt: 'PVEMS Logo'}}
          // minimized={{ src: myav_sm, width: 40, height: 20, alt: 'PVEMS Logo' }}
        />


            <Navbar  light expand="md" style={{height:'50px' , background: '#0F123F'}} shadow>
                <NavbarBrand href="/main"></NavbarBrand>
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="justify-content-end" style={{ width: "100%" , color: 'white' }} navbar>
                        <NavItem >
                            {/* <Icon icon={viewDashboard} color="#f8f8f8" /> */}
                            <NavLink style={{color:'whitesmoke'}} href="/main">Dashboard</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{color:'whitesmoke'}} href="#">About MyAV</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink style={{color:'whitesmoke'}} href="#">About Us</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div >
{/* <Navbar>
  test here
</Navbar>

<AppNavbarBrand
          className='color-nav'
          variant='light'
          bg="dark"
          Style={{backgroundColor: 'White'}}
          full={{ src: myav_lg, width: 153, height: 45, alt: 'PVEMS Logo' }}
          minimized={{ src: myav_sm, width: 40, height: 20, alt: 'PVEMS Logo' }}
        /> */}
        {/* <AppSidebarToggler className="d-md-down-none fixed-top" Style={{backgroundColor: 'White'}} display="lg" /> */}
{/* <div className='top-menu-user'>

</div> */}


{/* <Nav className='p-2' bg="dark" >
        <NavItem className="ml-auto" bg="dark">
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem >
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Another Link</NavLink>
        </NavItem>
        <NavItem >
          <NavLink  disabled href="#">Disabled Link</NavLink>
        </NavItem>
      </Nav> */}


<div className="app">
{/* <div className='side-menu-user'> */}

<div class="side-menu-user shadow bg-white rounded" >
  <nav class="sidebar-nav p-3"  style={{width:'100%'}}>
    <ul class="nav" >
      <li class="nav-title" style={{color: 'Black', textTransform: "capitalize"}}><h5>MyAv Car Tracker</h5><span style={{color: 'Grey'}}>List of active car</span></li>
      <li class="nav-item" style={{width:'100%'}} >
      {/* {!loading && <Search />} */}



      </li>

      <div class="nav-menu-user-footer mt-auto" style={{color: 'Black', textAlign: 'center'}}>
        <CardBody>
        <li><strong>Login as Admin</strong></li>
        <li>
          <Link to="/login">
          <Button style={{backgroundColor: 'Orange'}}>Log In Admin</Button>{' '}
          </Link>
          </li>
        </CardBody>
      </div>





    </ul>
  </nav>

{/* </div> */}


{/* <h4>Main Page</h4>
<Link to="/login">
    <Button color="primary" className="mt-3" >Login</Button>
</Link> */}
</div>
<div>
<main className="user-container" style={{ width: 'auto', height: '100vh'}}>
{/* {!loading ? <Map eventData={renderEvent}/>: <Loader/>} */}
</main>
</div>

</div>
{/* <div class="sidebar">
  <nav class="sidebar-nav">
    <ul class="nav">
      <li class="nav-title">Nav Title</li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <i class="nav-icon cui-speedometer"></i> Nav item
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <i class="nav-icon cui-speedometer"></i> With badge
          <span class="badge badge-primary">NEW</span>
        </a>
      </li>
      <li class="nav-item nav-dropdown">
        <a class="nav-link nav-dropdown-toggle" href="#">
          <i class="nav-icon cui-puzzle"></i> Nav dropdown
        </a>
        <ul class="nav-dropdown-items">
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="nav-icon cui-puzzle"></i> Nav dropdown item
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="nav-icon cui-puzzle"></i> Nav dropdown item
            </a>
          </li>
        </ul>
      </li>
      <li class="nav-item mt-auto">
        <a class="nav-link nav-link-success" href="https://coreui.io">
          <i class="nav-icon cui-cloud-download"></i> Download CoreUI</a>
      </li>
      <li class="nav-item">
        <a class="nav-link nav-link-danger" href="https://coreui.io/pro/">
          <i class="nav-icon cui-layers"></i> Try CoreUI
          <strong>PRO</strong>
        </a>
      </li>
    </ul>
  </nav>
  <button class="sidebar-minimizer brand-minimizer" type="button"></button>
</div> */}




</div>


        )

}
export default connect(state => { return state })(Main)
