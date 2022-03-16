import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import {
  Button,
  Card,
  CardBody,
  Table,
  Row,
  Input,
  Col,
  CardFooter,
  Pagination,
  PaginationItem,
  PaginationLink,
} from 'reactstrap'
import Switch from "react-switch";
import Select from 'react-select';
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { TourActions } from '../../__actions/touring.js'

class TableTimetable extends Component {
  constructor(props) {
    super(props);
    this.handleTimeFlex = this.handleTimeFlex.bind(this)
    this.state = {
      alertTimeState: '00:00:00'
    }
  }

  handleTimeFlex(selectedTime) {
    console.log(selectedTime);
    this.setState({
      alertTimeState: selectedTime.label
    })
  }

  render() {
    let data = this.props.userData
    let alertTime = this.props.alertTime
    let number = this.props.numbers 
    if (alertTime !== this.state.alertTimeState) {
      this.setState({
        alertTimeState: alertTime
      })
    }
    let numArr = []
    for (let a = 0; a < 60; a++) {
      if (a % 5 === 0) {
        if (a < 10){
        numArr.push({
          value: a,
          label:'00:0'+a+':00'
        })}
        else {
          numArr.push({
            value: a,
            label:'00:'+a+':00'
          })
        }
      }
    }

    return (
    <>
    <tr>
    <th scope="row">{number + 1}</th>
    <td><div style={{width:'200px'}}><Select options={numArr} placeholder={data} ></Select></div></td>
    <td><div style={{width:'200px'}}><Select onChange={this.handleTimeFlex} options={numArr} placeholder={this.state.alertTimeState} ></Select></div></td>
    <td><Link to='#'><Icon style={{ height: '25px', width: '25px' }} icon="akar-icons:trash-can" color='#000000'></Icon></Link></td>
    </tr>
    </>
    )
  }
}

class TimetableEdit extends Component {
  constructor(props) {
    super(props);
    this.handleSwitch = this.handleSwitch.bind(this)
    this.PageFirst = this.PageFirst.bind(this)
    this.PagePrev = this.PagePrev.bind(this)
    this.PageItems = this.PageItems.bind(this)
    this.PageNext = this.PageNext.bind(this)
    this.PageLast = this.PageLast.bind(this)
    this.state = {
      timer: null,
      checked: false,
      tourData: [],
      test: ['12AM','1AM','2AM','3AM','4AM','5AM','6AM','7AM','8AM','9AM','10AM','11AM',
      '12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM','8PM','9PM','10PM','11PM'],
      test2: [],
      alertTime: '',
      editIndex: [],
      itemPerPage: 10,
      currentPage: 1,
      totalPage: 1,
      selectedPage: 1
    };
  }
  
  onClickButtondeletesite = e =>{
    e.preventDefault()
    this.setState({openModaldeletesite : true})  
  }
  routeCancel=()=> {
    let path = '/TouringTimetable';
    this.props.history.push(path);
  }
  handleSwitch(checked) {
    this.setState({ checked });
  }

  componentDidMount() {                      // initialize data after page change
    TourActions.getLatestData(this.props.dispatch)

    // warning mutate state directly, 
    // when use setstate, it is async so data don't load properly
    this.state.tourData = this.props.location.state;  // 1st opt w/ warning
    // let tourDataTemp = this.props.location.state;  // 2nd opt w/ error
    // this.setState({
    //   tourData: tourDataTemp
    // })

    let tourTime = this.state.tourData.TourTimetable    
    if (this.state.tourData.TourTimetable.alert === 0) {
      this.setState({ checked: false, alertTime: this.state.tourData.TourTimetable.alertTime });
    } else {
      this.setState({ checked: true, alertTime: this.state.tourData.TourTimetable.alertTime });
    }

    // convert data from object into an array
    const resultObj = Object.keys(tourTime).map((key) => tourTime[key]) 
    resultObj.splice(26, 1); resultObj.splice(25, 1); resultObj.splice(24, 1)
    for (let i = 0; i < 23; i++) {
      if (resultObj[i] === 1) {
        this.state.editIndex.push(i)
      }
    }

    // calc and set total page
    let totalPagetemp = Math.ceil(this.state.editIndex.length / this.state.itemPerPage)
    this.setState({totalPage: totalPagetemp}) 
    // initial start page
    let dataList = []
    let j = 0
    for (let i = 0 * this.state.itemPerPage; i < this.state.editIndex.length; i++) {
      if (j < this.state.itemPerPage) {
        let index = this.state.editIndex[i]
        dataList.push(this.state.test[index])
        j++
      }
    }
    this.setState({
      test2: dataList,
    })
    }
  
  pagination_change(result) {           
    console.log(result);
    this.setState({currentPage: result})
    let dataList = []
    let j = 0
    for (let i = (result - 1) * this.state.itemPerPage; i < this.state.editIndex.length; i++) {
      if (j < this.state.itemPerPage) {
        let index = this.state.editIndex[i]
        dataList.push(this.state.test[index])
        j++
      }
    }
    this.setState({
      test2: dataList,
    })
  }
  
  PageFirst({ pagination, onClick }) {
    if (this.state.currentPage === 1) {
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
  }
  PagePrev({ pagination, onClick }) {
    let pageCurrentSection = Math.ceil(this.state.currentPage / 5);
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
  PageItems({ pagination, onClick }) {
    let pageCurrentSection = Math.ceil(this.state.currentPage / 5);
    let pageCurrentMax = 5;
    if (this.state.totalPage < 5) {
      pageCurrentMax = this.state.totalPage;
    } else {
      if (pageCurrentSection * 5 > this.state.totalPage) {
        pageCurrentMax = 5 - (pageCurrentSection * 5 - this.state.totalPage);
      }
    }

    let pageCount = Array.from(
      Array(pageCurrentMax),
      (_, x) => (pageCurrentSection - 1) * 5 + 1 + x
    );
    return pageCount.map((page) => {
      let active = true;
      if (page !== this.state.currentPage) {
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
  PageNext({ pagination, onClick }) {
    let pageMaxSection = Math.ceil(this.state.totalPage / 5);
    let pageCurrentSection = Math.ceil(this.state.currentPage / 5);

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
  PageLast({ pagination, onClick }) {
    if (this.state.currentPage === this.state.totalPage) {
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
  }
  onPaginationNav = (type) => {
    if (type === "first") {
      this.pagination_change(1)
    } else if (type === "prev") {
      this.pagination_change(this.state.currentPage - 10)
    } else if (type === "next") {
      this.pagination_change(this.state.currentPage + 10)
    } else if (type === "last") {
      this.pagination_change(this.state.totalPage)
    } else {
      this.pagination_change(type)
    }
  };

  render() {
    return (
      <>
      <Card className='shadow p-3 mb-5 bg-white rounded'>
        <CardBody>
          <h2 className=''>Edit Timetable</h2><br/>   

          <div class='flex-container mb-5'>
              <span class="d-flex-child 1">Site &nbsp;&nbsp;:</span>
              <span class="d-flex-child 1">&nbsp;{this.state.tourData.name}</span>
          </div>
          <div class='flex-container mb-5'>
              <span class="d-flex-child 3">Zone :&nbsp;</span>
              <span class="flex-child 4"><Input placeholder={this.state.tourData.name} type='text' readonly="readonly"/></span>
              <span class="flex-child 4"></span>
              <span class="flex-child 4"></span>
          </div>
          <div class='flex-container mb-5'>
            <span class="d-flex-child 1">Alert :&nbsp;</span>
            <Switch onChange={this.handleSwitch} checked={this.state.checked} />
          </div>
          
          <Table className='mt-100' hover>
          <thead>
            <tr>
              <th>#</th>
              <th >Time</th>
              <th className="text-left">Touring start time flexibility</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {this.state.length === 0 ? (
            <tr>
              <td align="center" colSpan="5">
                No Data
              </td>
            </tr>
          ) : (
            this.state.test2.map((userData, index) => (  
              <Fragment key={index}>
                <TableTimetable numbers={index} userData={userData} alertTime={this.state.alertTime}/>
              </Fragment>
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
              <div className="text-left mt-2">
                Page <strong>{this.state.currentPage}</strong> of{" "}
                <strong>{this.state.totalPage}</strong> page(s)
              </div>
              <div className="text-right"></div>
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
                    <this.PageFirst
                      onClick={this.onPaginationNav}
                    />
                    <this.PagePrev
                      onClick={this.onPaginationNav}
                    />
                    <this.PageItems
                      onClick={this.onPaginationNav}
                    />
                    <this.PageNext
                      onClick={this.onPaginationNav}
                    />
                    <this.PageLast
                      onClick={this.onPaginationNav}
                    />
                  </Pagination>
                </div>
              </Col>
            </Row>
          </CardFooter>
          
          <div align='center' className='mt-2 '>
          <Button className='mr-2' style={{width: '150px', background: 'white', color:'black'}} onClick={() => this.routeCancel()}>Cancel</Button>
          <Button className='' style={{width: '150px', background: 'black'}} >Save</Button>
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
export default connect(mapStateToProps)(TimetableEdit);