import React,  {Component,  Fragment } from 'react';
import { connect } from "react-redux";

import {
  Card,
  CardBody,
  Button,
  Table,
  Pagination, 
  PaginationItem, 
  PaginationLink,
  InputGroup,
  Row,
  Col,
  ButtonDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu
  
} from 'reactstrap'
import {  SiteActions } from '../../__actions/site.js'
import { CONSTANTS } from '../../api/constants';

class TableRowMonthlyDataExpiry extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
      let data = this.props.userData
      let numbers = this.props.numbers
      let number = numbers + 1
      console.log(data.DataPlanMaxis.dataExpiryDate);
      data.DataPlanMaxis.dataExpiryDate = data.DataPlanMaxis.dataExpiryDate.substring(0,10);
      {console.log('test3',data.DataPlanMaxis.dataExpiryDate)} 
    return (
        <tr>
        <th scope="row">{number}</th>
        <td>{data.Site.name}</td>
        <td>{data.mobileNumber}</td>
        <td>{data.DataPlanMaxis.serviceProvider}</td>
        <td className='clr'>{data.DataPlanMaxis.dataExpiryDate}</td>
        </tr>
    )}
  }

class TableRowMonthlyDataBalance extends Component {
  constructor(props) {
    super(props);

    this.state = {
        // list: ""
        
    };
  }
  render() {
      // let data = this.props.userData
      // let numbers = this.props.numbers
      // let number = numbers 
      // console.log(data.DataPlanXox);
    let data = this.props.userData
    console.log('data', data);
    let numbers = this.props.numbers
    let number = numbers 
    let dataXox = data.DataPlanXox
    let dataBal = ''
    let serviceProvider

    dataXox.filter((userData) =>  userData.dataBalance).map((userData, index) => (  
      serviceProvider = userData.serviceProvider,
      dataBal = userData.dataBalance 
    ))
    return (
        // <tr>
        // <th scope="row">{number}</th>
        // <td>{data.Site.name}</td>
        // <td>{data.mobileNumber}</td>
        // <td>{data.DataPlanXox.serviceProvider}</td>
        // <td>{data.DataPlanXox.dataBalance}</td>
        // </tr>
          <tr>
          <th scope="row">{number}</th>
          <td>{data.Site.name}</td>
          <td>{data.mobileNumber}</td>
          <td>{serviceProvider}</td>
          <td  className='clr'>{dataBal}</td>
          </tr>
    )
  }
}

class TableRowSeasonPassBalance extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }
  render() {
      // let data = this.props.userData
      // let numbers = this.props.numbers
      // let number = numbers 
      let data = this.props.userData
      console.log('data', data);
      let numbers = this.props.numbers
      let number = numbers 
      let dataXox = data.DataPlanXox
      let seasonPassBal 
      let serviceProvider

      dataXox.filter((userData) =>  userData.dataBalance).map((userData, index) => (
        serviceProvider = userData.serviceProvider,
        seasonPassBal = userData.seasonPassBal 
      ))
    return (
      <tr>
      <th scope="row">{number}</th>
      <td>{data.Site.name}</td>
      <td>{data.mobileNumber}</td>
      <td>{serviceProvider}</td>
      <td  className='clr'>{seasonPassBal}</td>
      </tr>
    )
  }
}
class TableRowSimcardExpiry extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }
  render() {
      // let data = this.props.userData
      // let numbers = this.props.numbers
      // let number = numbers 
      // console.log( data.DataPlanXox.length);
      // data.DataPlanXox.simCardExpiryDate = data.DataPlanXox.simCardExpiryDate;// .substring(0,10)
      // {console.log('test3',data.DataPlanXox.simCardExpiryDate)} 
      // let serviceProvider 
      // console.log(serviceProvider);
      let data = this.props.userData
      console.log('data', data);
      let numbers = this.props.numbers
      let number = numbers 
      let dataXox = data.DataPlanXox
      let simCardExpiryDate 
      let serviceProvider
      
      dataXox.filter((userData) =>  userData.dataBalance).map((userData, index) => (
        serviceProvider = userData.serviceProvider,
        simCardExpiryDate = userData.simCardExpiryDate 
      ))
      simCardExpiryDate = simCardExpiryDate.substring(0,10)

    return (
      <tr>
      <th scope="row">{number}</th>
      <td>{data.Site.name}</td>
      <td>{data.mobileNumber}</td>
      <td>{serviceProvider}</td>
      <td  className='clr'>{simCardExpiryDate}</td>
      </tr>
    )
  }
}

class IntStatus extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
      searchValue: "",

      };
    }
  
    componentDidMount(){
      SiteActions.getLatestData(this.props.dispatch)
    }
    onPageButtonToggle1 = () => {
      this.setState({ isDropdownOpen1: !this.state.isDropdownOpen1 });
    };
  
    onPaginationCountChange1 = (count) => {
      const { dispatch } = this.props;
      dispatch({ type: CONSTANTS.SITE.LOGS_COUNT_CHANGE, result: count });
    };
  
    onPaginationNav1 = (type) => {
      const { dispatch } = this.props;
      const { pagination1 } = this.props.site;
  
      if (type === "first") {
        dispatch({ type: "LOGS_PAGE_CHANGE", result: 1 });
      } else if (type === "prev") {
        dispatch({
          type: "LOGS_PAGE_CHANGE",
          result: pagination1.currentPage - 5,
        });
      } else if (type === "next") {
        dispatch({
          type: "LOGS_PAGE_CHANGE",
          result: pagination1.currentPage + 5,
        });
      } else if (type === "last") {
        dispatch({ type: "LOGS_PAGE_CHANGE", result: pagination1.totalPage });
      } else {
        dispatch({ type: "LOGS_PAGE_CHANGE", result: type });
      }
  
      console.log(pagination1.currentPage);
    };
    
  onPageButtonToggle2 = () => {
    this.setState({ isDropdownOpen2: !this.state.isDropdownOpen2 });
  };

  onPaginationCountChange2 = (count) => {
    const { dispatch } = this.props;
    dispatch({ type: CONSTANTS.SITE.LOGS_COUNT_CHANGE, result: count });
  };

  onPaginationNav2 = (type) => {
    const { dispatch } = this.props;
    const { pagination2 } = this.props.site;

    if (type === "first") {
      dispatch({ type: "LOGS_PAGE_CHANGE", result: 1 });
    } else if (type === "prev") {
      dispatch({
        type: "LOGS_PAGE_CHANGE",
        result: pagination2.currentPage - 5,
      });
    } else if (type === "next") {
      dispatch({
        type: "LOGS_PAGE_CHANGE",
        result: pagination2.currentPage + 5,
      });
    } else if (type === "last") {
      dispatch({ type: "LOGS_PAGE_CHANGE", result: pagination2.totalPage });
    } else {
      dispatch({ type: "LOGS_PAGE_CHANGE", result: type });
    }

    console.log(pagination2.currentPage);
  };
    
    render() {
     
       

      console.log(this.props.site);
      const { data,dataList1, pagination1,dataList2, pagination2 } = this.props.site;
      console.log({data});
     
      return (
        <>
        <Card className='shadow p-3 mb-5 bg-white rounded'>
        <CardBody>
          <h1>Internet Status</h1><br/>
          <InputGroup >
         
         
          </InputGroup>
          <h4 className='tbl'>
           Monthly Data Expiry
          </h4>
          <Table
                  responsive
                  hover
                  striped
                  className='tbl'
                >
                  <thead>
                    <tr
                     
                    >
                      <th className="text-center table-head">No</th>
                      <th className="w-25 text-left table-head">Site Name</th>
                      <th className="text-left table-head">Device Phone No.</th>
                      <th className="text-left table-head">Provider</th>
                      <th className="text-left table-head">Expiry Date</th>
                    </tr>
                  </thead>

                  <tbody>
                    {dataList1.length === 0 ? (
                      <tr>
                        <td align="center" colSpan="5">
                          No Data
                        </td>
                      </tr>
                    ) : (
                      dataList1.map((userData, index) => userData.DataPlanMaxis && (   // userData[index] 
                        <Fragment key={index}>
                          <TableRowMonthlyDataExpiry numbers={index} userData={userData} />
                        </Fragment>
                      ))
                    )}
                  </tbody>
                </Table>
                <Row>
              <Col
                xs="12"
                sm="2"
                className="text-center text-sm-left mt-2 mt-sm-0 order-2 order-sm-1"
              >
                <ButtonDropdown
                  isOpen={this.state.isDropdownOpen1}
                  toggle={(e) => {
                    this.onPageButtonToggle1();
                  }}
                >
                  <Button size="sm" color="secondary" className="btn-ghost-*">
                    <span className="lead font-sm font-italic">
                      No. of rows:{" "}
                    </span>
                  </Button>
                  <DropdownToggle caret size="sm" color="dark">
                    {pagination1.itemPerPage}
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem
                      onClick={() => {
                        this.onPaginationCountChange1(1);
                      }}
                    >
                      1
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        this.onPaginationCountChange1(3);
                      }}
                    >
                      3
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        this.onPaginationCountChange1(5);
                      }}
                    >
                      5
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        this.onPaginationCountChange1(10);
                      }}
                    >
                      10
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        this.onPaginationCountChange1(50);
                      }}
                    >
                      50
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        this.onPaginationCountChange1(100);
                      }}
                    >
                      100
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
                      pagination={pagination1}
                      onClick={this.onPaginationNav1}
                    />
                    <PagePrev
                      pagination={pagination1}
                      onClick={this.onPaginationNav1}
                    />
                    <PageItems
                      pagination={pagination1}
                      onClick={this.onPaginationNav1}
                    />
                    <PageNext
                      pagination={pagination1}
                      onClick={this.onPaginationNav1}
                    />
                    <PageLast
                      pagination={pagination1}
                      onClick={this.onPaginationNav1}
                    />
                  </Pagination>
                </div>
              </Col>
            </Row>
            <div className="text-left mt-2">
              page <strong>{pagination1.currentPage}</strong> of{" "}
              <strong>{pagination1.totalPage}</strong> page(s)
            </div>
            <div className="text-right"></div>
             
           
                <h4 className='tbl'>
           Monthly Data Balance
          </h4>
                <Table
                  responsive
                  hover
                  striped
                  className='tbl'
                >
                  <thead>
                    <tr
                     
                    >
                    <th className="text-center table-head">No</th>
                    <th className="w-25 text-left table-head">Site Name</th>
                    <th className="text-left table-head">Device Phone No.</th>
                    <th className="text-left table-head">Provider</th>
                      <th className="text-left table-head">Data Balance</th>
                    </tr>
                  </thead>

                  <tbody>
                    {dataList2.length === 0 ? (
                      <tr>
                        <td align="center" colSpan="5">
                          No Data
                        </td>
                      </tr>
                    ) : (
                      // data.map((userData, index) => (   // userData[index] 
                      dataList2.map((userData, index) => userData.DataPlanXox.length >= 1 && (   // userData[index] 
                        <Fragment key={index}>
                          <TableRowMonthlyDataBalance numbers={index} userData={userData} />
                        </Fragment>
                      ))
                    )}
                  </tbody>
                </Table>
                <Row>
              <Col
                xs="12"
                sm="2"
                className="text-center text-sm-left mt-2 mt-sm-0 order-2 order-sm-1"
              >
                <ButtonDropdown
                  isOpen={this.state.isDropdownOpen2}
                  toggle={(e) => {
                    this.onPageButtonToggle2();
                  }}
                >
                  <Button size="sm" color="secondary" className="btn-ghost-*">
                    <span className="lead font-sm font-italic">
                      No. of rows:{" "}
                    </span>
                  </Button>
                  <DropdownToggle caret size="sm" color="dark">
                    {pagination2.itemPerPage}
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem
                      onClick={() => {
                        this.onPaginationCountChange2(1);
                      }}
                    >
                      1
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        this.onPaginationCountChange2(3);
                      }}
                    >
                      3
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        this.onPaginationCountChange2(5);
                      }}
                    >
                      5
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        this.onPaginationCountChange2(10);
                      }}
                    >
                      10
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        this.onPaginationCountChange2(50);
                      }}
                    >
                      50
                    </DropdownItem>
                    <DropdownItem
                      onClick={() => {
                        this.onPaginationCountChange2(100);
                      }}
                    >
                      100
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
                      pagination={pagination2}
                      onClick={this.onPaginationNav2}
                    />
                    <PagePrev
                      pagination={pagination2}
                      onClick={this.onPaginationNav2}
                    />
                    <PageItems
                      pagination={pagination2}
                      onClick={this.onPaginationNav2}
                    />
                    <PageNext
                      pagination={pagination2}
                      onClick={this.onPaginationNav2}
                    />
                    <PageLast
                      pagination={pagination2}
                      onClick={this.onPaginationNav2}
                    />
                  </Pagination>
                </div>
              </Col>
            </Row>
            <div className="text-left mt-2">
              page <strong>{pagination2.currentPage}</strong> of{" "}
              <strong>{pagination2.totalPage}</strong> page(s)
            </div>
          <h4 className='tbl'>
           Season Pass Data Balance
          </h4>
         
                <Table
                  responsive
                  hover
                  striped
                  className='tbl'
                >
                  <thead>
                    <tr
                     
                    >
                    <th className="text-left table-head">No</th>
                    <th className="w-25 text-left table-head">Site Name</th>
                    <th className="text-left table-head">Device Phone No.</th>
                    <th className="text-left table-head">Provider</th>
                    <th className="text-left table-head">Data Balance</th>
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
                          <TableRowSeasonPassBalance numbers={index} userData={userData} />
                        </Fragment>
                      ))
                    )}
                  </tbody>
                </Table>
             
            <div className="text-right"></div>
          <h4 className='tbl'>
           Simcard Expiry
          </h4>
                <Table
                  responsive
                  hover
                  striped
                  className='tbl'
                >
                  <thead>
                    <tr
                     
                    >
                    <th className="text-left table-head">No</th>
                    <th className="w-25 text-left table-head">Site Name</th>
                    <th className="text-left table-head">Device Phone No.</th>
                    <th className="text-left table-head">Provider</th>
                    <th className="text-left table-head">Expiry Date</th>
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
                          <TableRowSimcardExpiry numbers={index} userData={userData} />
                        </Fragment>
                      ))
                    )}
                  </tbody>
                </Table>
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
    console.log(
      "pagination",
      pagination.currentPage,
      "pageCurSec :",
      pageCurrentSection
    );
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
    console.log(pagination.currentPage, pagination.totalPage);
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
export default connect(mapStateToProps)(IntStatus);