import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectTableComponent from "./profiletablecomponent";
import {
  Card,
  CardBody,
  Col,
  FormGroup,
  Button,
  ListGroupItem,
  Row,
  InputGroup
} from 'reactstrap'

import './pmodal.css'


function EditProfile() {



  return (
    <>
     
     <h1>User Profile</h1><br/>     

          <Card >
            <CardBody >
            <h3>Company Information</h3>
              <Row>
              
                <Col  >
                
                <ListGroupItem className='tbll'>
                <FormGroup >
                <Col md={5}>
                <div><br/>Company </div>
                <InputGroup className="mb-2" >
                    
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Innates PLT"
                       
                    />
                    <div className="input-group-append">
                        <Button outline color='secondary'size='sm'
                        className='icon-magnifier'
                        type="button"
                       
>   
                        </Button>  
                    </div>
               </InputGroup>
               </Col>
               </FormGroup>
               <FormGroup>
              <Col md={5}>
               <div><br/>Contact Person </div>
                <InputGroup className="mb-2" >
                    
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Aizuddin Ruslee"
                        
                    />
                    <div className="input-group-append">
                        <Button outline color='secondary'size='sm'
                        className='icon-magnifier'
                        type="button"
                       
>   
                        </Button>  
                    </div>
               </InputGroup>
               </Col>
               </FormGroup>
                <FormGroup>
                <Col md={5}>
                <div><br/>Site accessable to user: </div>
                <div><br/>The list of sites below has been populated automatically according to user’s company. Add or remove sites as necessary. </div>
                <InputGroup className='tbl' >
                
                
                
               
                <SelectTableComponent />
                
              
               
                </InputGroup>
                </Col>
                
                </FormGroup>
                
                </ListGroupItem>
                <CardBody >
                
                <Button style={{width: '150px', height:'40px',float: 'right',color:'white',background:'#81163F',justifyItems:'center'}} >Cancel</Button>
                <Button style={{width: '150px', height:'40px',float: 'right',color:'white',background:'#81163F',justifyItems:'center'}} >Save</Button>
               
                </CardBody>
               
            
                </Col>
                
            </Row>
            </CardBody>
          </Card>
    </>
  )
}



export default EditProfile;