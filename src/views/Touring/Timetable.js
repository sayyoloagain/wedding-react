import React, { Component } from 'react';
import { CONSTANTS } from '../../api';
import { connect } from "react-redux";
import {
  Button,
  Card,
  CardBody,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Row,
  Col,
  Table,
  CardFooter,
  Pagination,
  PaginationItem,
  PaginationLink,
} from 'reactstrap'
import Select from 'react-select'
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { IoAddCircle } from 'react-icons/io5';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import tour_s from '../../../src/assets/img/touring_scheduled.png'
import n_tour_s from '../../../src/assets/img/no_touring_scheduled.png'
import { TourActions } from '../../__actions/touring.js'
import "react-datepicker/dist/react-datepicker.css";

class Timetable extends Component {
  constructor(props) {
    super(props);
    this.timecycleChangePrev = this.timecycleChangePrev.bind(this)
    this.timecycleChangeNext = this.timecycleChangeNext.bind(this)
    this.state = {
      openModal: false,
      timecycle: 0,
      disableNext: false,
      disablePrev: true,
      tableHeader: ['12AM','1AM','2AM','3AM','4AM','5AM','6AM','7AM','8AM','9AM','10AM','11AM',
                    '12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM','8PM','9PM','10PM','11PM'],
      a:0, b:1, c:2, d:3, e:4, f:5,
      siteId: 0,
      siteName: ''
    };
  }
  componentDidMount(){
    TourActions.getLatestData(this.props.dispatch)
  }

  routeChange=(data)=> {
    console.log(data);
    this.props.history.push({pathname:'/TouringTimetableEdit', state: data});
  }
  routeChange2=()=> {
    let path = '/TouringTimetableAdd';
    this.props.history.push(path);
  }

  onPageButtonToggle = () => {
    this.setState({ isDropdownOpen: !this.state.isDropdownOpen });
  };
  onPaginationCountChange = (count) => {
    const { dispatch } = this.props;
    dispatch({ type: CONSTANTS.TOURING.LOGS_COUNT_CHANGE, result: count });
  };
  onPaginationNav = (type) => {
    const { dispatch } = this.props;
    const { pagination } = this.props.touring;

    if (type === "first") {
      dispatch({ type: "LOGS_PAGE_CHANGE", result: 1 });
    } else if (type === "prev") {
      dispatch({
        type: "LOGS_PAGE_CHANGE",
        result: pagination.currentPage - 5,
      });
    } else if (type === "next") {
      dispatch({
        type: "LOGS_PAGE_CHANGE",
        result: pagination.currentPage + 5,
      });
    } else if (type === "last") {
      dispatch({ type: "LOGS_PAGE_CHANGE", result: pagination.totalPage });
    } else {
      dispatch({ type: "LOGS_PAGE_CHANGE", result: type });
    }
    console.log(pagination.currentPage);
  };

  timecycleChangePrev = () => {
    let disableNexttemp 
    let disablePrevtemp 
    let timecycletemp = this.state.timecycle
    if (timecycletemp === 0) {
      disablePrevtemp = true
      disableNexttemp = false
      this.setState({
        disablePrev: disablePrevtemp,
        disableNext: disableNexttemp
      })
    }
    else if (timecycletemp > 0) {
      timecycletemp = timecycletemp - 1
      disableNexttemp = false
      this.setState({
        timecycle: timecycletemp,
        disableNext: disablePrevtemp,
        a: this.state.a - 6,
        b: this.state.b - 6,
        c: this.state.c - 6,
        d: this.state.d - 6,
        e: this.state.e - 6,
        f: this.state.f - 6,
      })
    }
  }
  timecycleChangeNext = () => {
    let disableNexttemp, disablePrevtemp 
    let timecycletemp = this.state.timecycle

    if (timecycletemp === 3) {
      disableNexttemp = true
      this.setState({
        disableNext: disableNexttemp
      })
    }
    else if (timecycletemp < 3) {
      disablePrevtemp = false
      timecycletemp = timecycletemp + 1
      this.setState({
        timecycle: timecycletemp,
        disablePrev: disablePrevtemp,
        a: this.state.a + 6,
        b: this.state.b + 6,
        c: this.state.c + 6,
        d: this.state.d + 6,
        e: this.state.e + 6,
        f: this.state.f + 6
      })
    }
  }

  onDeleteConfirmation(id, name) {
    // console.log("id", id, name);
    this.setState({
      openModal : true,
      siteId: id,
      siteName: name
    })
  }
  onCancelSubmit = e =>{
    this.setState({openModal : false})
  }
  onSubmit = e => {
    e.preventDefault();
    this.setState(prevState => {
      let siteIdToDelete = this.state.siteId
      console.log(siteIdToDelete);
    TourActions.deleteTimetableData(siteIdToDelete)
    .then((result) => {
    },
    (error) => {
      this.setState({
        showMessage: true,
        Message: +error,
      })
    }
    )
    })
  }

  render() {
    const { dataList, pagination } = this.props.touring;
    let placeholder = []
    dataList.map((userData, index) => (  
      placeholder.push(userData[0])
    ))

    return (
      <>
      <Card className='shadow p-3 mb-5 bg-white rounded'>
        <CardBody>
          <h2 className=''>Touring Timetable</h2><br/>   
          <div className="text-right mb-3"> 
            <Button style={{width: '210px', background: 'white', color:'#81163F', borderBlockColor:'#81163F'}} onClick={() => this.routeChange2()}>
            <IoAddCircle size={28}/> New zone timetable</Button>
          </div>
          <div className='left' style={{width: '300px'}}>
            <Select width='0px' placeholder='Search a site or zone'></Select>
          </div>
          <div className='right' style={{width: '300px'}}>
          </div><br></br>
          <div className='pt-4' align="right">
          <img class='mr-2' src={tour_s} alt="tour_scheduled" width="15" height="15"/>
            Touring scheduled  
          <img class='ml-4 mr-2' src={n_tour_s} alt="tour_scheduled" width="15" height="15"/>
            No touring scheduled
          </div>
          <div class="timetableparent">
          <div class="timetable-one child">
            </div>
            <div class="timetable-two child">
          </div>
          </div>
          
          <Modal center open={this.state.openModal} onClose={this.onCancelSubmit}>
          <div className="modalContainer">
        <div className="titleCloseBtn">
          </div>
          <div className="title">
          <h3>Confirm delete?</h3><br></br>
          <div>
            Site selected: {this.state.siteName}
          </div><br/>
          </div>
          <Button className='mr-2' style={{width: '150px', background: 'white', color:'#81163F', borderBlockColor:'#81163F'}} onClick={this.onCancelSubmit}>Cancel</Button>
          <Button className='' style={{width: '150px', background: '#81163F'}} onClick={this.onSubmit}>Submit</Button>
          </div>
          </Modal>

          <Table className='mt-5'>
          <thead>
            <tr>
              <th>No</th>
              <th className="text-center">Site Name</th>
              <th className="text-center">Zone</th>
              <th className="text-center">Actions</th>
              <th className="right">
              <Button className="" disabled={this.state.disablePrev} onClick={() => this.timecycleChangePrev()} style={{ backgroundColor : 'transparent',color: 'black', border:'0', height: '40px'}}>{"<"}</Button>
              </th>
              <th className="text-center">{this.state.tableHeader[this.state.a]}</th>
              <th className="text-center">{this.state.tableHeader[this.state.b]}</th>
              <th className="text-center">{this.state.tableHeader[this.state.c]}</th>
              <th className="text-center">{this.state.tableHeader[this.state.d]}</th>
              <th className="text-center">{this.state.tableHeader[this.state.e]}</th>
              <th className="text-center">{this.state.tableHeader[this.state.f]}</th>
              <th className="left">
              <Button className="right" disabled={this.state.disableNext} onClick={() => this.timecycleChangeNext()} style={{backgroundColor: 'transparent', color: 'black', border:'0', height: '40px',}}>{">"}</Button>
              </th>
            </tr>
          </thead>

          <tbody>
          {placeholder.length === 0 ? (
            <tr>
              <td align="center" colSpan="5">
                No Data
              </td>
            </tr>
          ) : (
            placeholder.map((data, index) => (  
              this.state.timecycle === 0 ? (
              <tr>
                <th scope="row">{index + 1}</th>
                <td className="text-center">{data.name}</td>
                <td className="text-center">{data.name}</td>
                <td className="text-center">
                  <Link to={{pathname:'/TouringTimetableEdit', state: data}}><Icon style={{ height: '25px', width: '25px' }} icon="charm:pencil" color='#81163F'></Icon></Link>&nbsp;&nbsp;
                  <Link to="#" onClick={() => this.onDeleteConfirmation(data.id, data.name)}><Icon style={{ height: '25px', width: '25px' }} icon="akar-icons:trash-can" color='#81163F'></Icon></Link>
                </td>
                <td></td>
                <td className="text-center">{data.TourTimetable.am12}</td>
                <td className="text-center">{data.TourTimetable.am1}</td>
                <td className="text-center">{data.TourTimetable.am2}</td>
                <td className="text-center">{data.TourTimetable.am3}</td>
                <td className="text-center">{data.TourTimetable.am4}</td>
                <td className="text-center">{data.TourTimetable.am5}</td>
                <td></td>
              </tr>
              
              ): this.state.timecycle === 1 ? (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td className="text-center">{data.name}</td>
                  <td className="text-center">{data.name}</td>
                  <td className="text-center">
                    <Link to='/TouringTimetableEdit'><Icon style={{ height: '25px', width: '25px' }} icon="charm:pencil" color='#81163F'></Icon></Link>&nbsp;&nbsp;
                    <Link to='#' onClick={() => this.onDeleteConfirmation(data.id, data.name)}><Icon style={{ height: '25px', width: '25px' }} icon="akar-icons:trash-can" color='#81163F'></Icon></Link>
                  </td>
                <td></td>
                  <td className="text-center">{data.TourTimetable.am6}</td>
                  <td className="text-center">{data.TourTimetable.am7}</td>
                  <td className="text-center">{data.TourTimetable.am8}</td>
                  <td className="text-center">{data.TourTimetable.am9}</td>
                  <td className="text-center">{data.TourTimetable.am10}</td>
                  <td className="text-center">{data.TourTimetable.am11}</td>
                <td></td>
                </tr>
                ): this.state.timecycle === 2 ? (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td className="text-center">{data.name}</td>
                    <td className="text-center">{data.name}</td>
                    <td className="text-center">
                      <Link to='/TouringTimetableEdit' ><Icon style={{ height: '25px', width: '25px' }} icon="charm:pencil" color='#81163F'></Icon></Link>&nbsp;&nbsp;
                      <Link to='#' onClick={() => this.onDeleteConfirmation(data.id, data.name)}><Icon style={{ height: '25px', width: '25px' }} icon="akar-icons:trash-can" color='#81163F'></Icon></Link>
                    </td>
                <td></td>
                    <td className="text-center">{data.TourTimetable.pm12}</td>
                    <td className="text-center">{data.TourTimetable.pm1}</td>
                    <td className="text-center">{data.TourTimetable.pm2}</td>
                    <td className="text-center">{data.TourTimetable.pm3}</td>
                    <td className="text-center">{data.TourTimetable.pm4}</td>
                    <td className="text-center">{data.TourTimetable.pm5}</td>
                <td></td>
                  </tr>
                  ): this.state.timecycle === 3 ? (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td className="text-center">{data.name}</td>
                      <td className="text-center">{data.name}</td>
                      <td className="text-center">
                        <Link to='/TouringTimetableEdit'><Icon style={{ height: '25px', width: '25px' }} icon="charm:pencil" color='#81163F'></Icon></Link>&nbsp;&nbsp;
                        <Link to='#' onClick={() => this.onDeleteConfirmation(data.id, data.name)}><Icon style={{ height: '25px', width: '25px' }} icon="akar-icons:trash-can" color='#81163F'></Icon></Link>
                      </td>
                <td></td>
                      <td className="text-center">{data.TourTimetable.pm6}</td>
                      <td className="text-center">{data.TourTimetable.pm7}</td>
                      <td className="text-center">{data.TourTimetable.pm8}</td>
                      <td className="text-center">{data.TourTimetable.pm9}</td>
                      <td className="text-center">{data.TourTimetable.pm10}</td>
                      <td className="text-center">{data.TourTimetable.pm11}</td>
                <td></td>
                    </tr>
                    ): null
            ))
          )}
          </tbody>
          
        </Table>
        
        <CardFooter>
            <Row>
              <Col
                xs="12"
                sm="2"
                className="text-center text-sm-left mt-2 mt-sm-0 order-2 order-sm-1"
              >
                <ButtonDropdown
                  isOpen={this.state.isDropdownOpen}
                  toggle={(e) => {
                    this.onPageButtonToggle();
                  }}
                >
                  <Button size="sm" color="secondary" className="btn-ghost-*">
                    <span className="lead font-sm font-italic">
                      No. of rows:{" "}
                    </span>
                  </Button>
                  <DropdownToggle caret size="sm" color="dark">
                    {pagination.itemPerPage}
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem
                      onClick={() => {
                        this.onPaginationCountChange(1);
                      }}
                    >
                      1
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        this.onPaginationCountChange(5);
                      }}
                    >
                      5
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        this.onPaginationCountChange(10);
                      }}
                    >
                      10
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        this.onPaginationCountChange(50);
                      }}
                    >
                      50
                    </DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
              </Col>
              <Col
                xs="12"
                sm="10"
                className="text-center text-sm-right order-1 order-sm-2"
              >
                <div style={{ display: "inline-block" }}>
                  <Pagination
                    size="sm"
                    aria-label="Page navigation"
                    className="table-pgn"
                  >
                    <PageFirst
                      pagination={pagination}
                      onClick={this.onPaginationNav}
                    />
                    <PagePrev
                      pagination={pagination}
                      onClick={this.onPaginationNav}
                    />
                    <PageItems
                      pagination={pagination}
                      onClick={this.onPaginationNav}
                    />
                    <PageNext
                      pagination={pagination}
                      onClick={this.onPaginationNav}
                    />
                    <PageLast
                      pagination={pagination}
                      onClick={this.onPaginationNav}
                    />
                  </Pagination>
                </div>
              </Col>
            </Row>
            <div className="text-left mt-2">
              Page <strong>{pagination.currentPage}</strong> of{" "}
              <strong>{pagination.totalPage}</strong> page(s)
            </div>
            <div className="text-right"></div>
          </CardFooter>
        </CardBody>
      </Card>
      </>
    )
  }
}
const PageFirst = ({ pagination, onClick }) => {
  if (pagination.currentPage === 1) {
    return (
      <PaginationItem disabled>
        <PaginationLink first={true} />
      </PaginationItem>
    );
  }
  return (
    <PaginationItem>
      <PaginationLink
        first={true}
        onClick={() => {
          onClick("first");
        }}
      />
    </PaginationItem>
  );
};
const PagePrev = ({ pagination, onClick }) => {
  let pageCurrentSection = Math.ceil(pagination.currentPage / 5);
  // console.log(
  //   "pagination",
  //   pagination.currentPage,
  //   "pageCurSec :",
  //   pageCurrentSection
  // );
  if (pageCurrentSection === 1) {
    return (
      <PaginationItem disabled>
        <PaginationLink previous />
      </PaginationItem>
    );
  }
  return (
    <PaginationItem>
      <PaginationLink
        previous
        onClick={() => {
          onClick("prev");
        }}
      />
    </PaginationItem>
  );
};
const PageItems = ({ pagination, onClick }) => {
  let pageCurrentSection = Math.ceil(pagination.currentPage / 5);
  let pageCurrentMax = 5;
  if (pagination.totalPage < 5) {
    pageCurrentMax = pagination.totalPage;
  } else {
    if (pageCurrentSection * 5 > pagination.totalPage) {
      pageCurrentMax = 5 - (pageCurrentSection * 5 - pagination.totalPage);
    }
  }

  let pageCount = Array.from(
    Array(pageCurrentMax),
    (_, x) => (pageCurrentSection - 1) * 5 + 1 + x
  );
  return pageCount.map((page) => {
    let active = true;
    if (page !== pagination.currentPage) {
      active = false;
    }
    return (
      <PaginationItem key={page} active={active}>
        <PaginationLink
          onClick={() => {
            onClick(page);
          }}
        >
          {page}
        </PaginationLink>
      </PaginationItem>
    );
  });
};
const PageNext = ({ pagination, onClick }) => {
  let pageMaxSection = Math.ceil(pagination.totalPage / 5);
  let pageCurrentSection = Math.ceil(pagination.currentPage / 5);

  if (pageMaxSection === pageCurrentSection) {
    return (
      <PaginationItem disabled>
        <PaginationLink next />
      </PaginationItem>
    );
  }
  return (
    <PaginationItem>
      <PaginationLink
        next
        onClick={() => {
          onClick("next");
        }}
      />
    </PaginationItem>
  );
};
const PageLast = ({ pagination, onClick }) => {
  if (pagination.currentPage === pagination.totalPage) {
    return (
      <PaginationItem disabled>
        <PaginationLink last />
      </PaginationItem>
    );
  }
  return (
    <PaginationItem>
      <PaginationLink
        last
        onClick={() => {
          onClick("last");
        }}
      />
    </PaginationItem>
  );
};
function mapStateToProps(state) {
  return state;
  }
export default connect(mapStateToProps)(Timetable);