import React from "react";
import {Button,InputGroup} from 'reactstrap'
const Users = [
  {
    id: 1,
    selected: false,
    no: "1",
    site: "Sunway Lenang",
   
   
  },
  {
    id: 2,
    selected: false,
    no: "2",
    site: "Sunway Lenang",
   
  
  },
  {
    id: 3,
    selected: false,
    no: "3",
    site: "Sunway Lenang",
   
    
  },
  {
    id: 4,
    selected: true,
    no: "4",
    site: "Sunway Lenang",
   
   
  },
  {
    id: 5,
    selected: false,
    no: "5",
    site: "Sunway Lenang",
   
  },
];

class SelectTableComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      List: Users,
      MasterChecked: false,
      SelectedList: [],
    };
  }

  // Select/ UnSelect Table rows
  onMasterCheck(e) {
    let tempList = this.state.List;
    // Check/ UnCheck All Items
    tempList.map((user) => (user.selected = e.target.checked));

    //Update State
    this.setState({
      MasterChecked: e.target.checked,
      List: tempList,
      SelectedList: this.state.List.filter((e) => e.selected),
    });
  }

  // Update List Item's state and Master Checkbox State
  onItemCheck(e, item) {
    let tempList = this.state.List;
    tempList.map((user) => {
      if (user.id === item.id) {
        user.selected = e.target.checked;
      }
      return user;
    });

    //To Control Master Checkbox State
    const totalItems = this.state.List.length;
    const totalCheckedItems = tempList.filter((e) => e.selected).length;

    // Update State
    this.setState({
      MasterChecked: totalItems === totalCheckedItems,
      List: tempList,
      SelectedList: this.state.List.filter((e) => e.selected),
    });
  }

  // Event to get selected rows(Optional)
  getSelectedRows() {
    this.setState({
      SelectedList: this.state.List.filter((e) => e.selected),
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
          <InputGroup className="mb-2" >
                    
                    <input
                        type="text"
                        className="form-control"
                        placeholder="search a site"
                        //value={searchTitle}
                        //onChange={onChangeSearchTitle}
                    />
                    <div className="input-group-append">
                        <Button outline color='secondary'size='sm'
                        className='icon-magnifier'
                        type="button"
                        //onClick={retrieveTutorials}
                        >   
                        </Button>  
                    </div>
                    <Button className='space'style={{width: '100px', height:'40px',float: 'right',color:'white',background:'#81163F',justifyItems:'center', marginLeft:'15px'}} >Add</Button>{''}
                    <Button className='space'style={{width: '100px', height:'40px',float: 'right',color:'white',background:'#81163F',justifyItems:'center', marginLeft:'15px'}} >Remove</Button>
               </InputGroup>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      checked={this.state.MasterChecked}
                      id="mastercheck"
                      onChange={(e) => this.onMasterCheck(e)}
                    />
                  </th>
                  <th scope="col">No</th>
                  <th scope="col">Site</th>
                  
                </tr>
              </thead>
              <tbody>
                {this.state.List.map((user) => (
                  <tr key={user.id} className={user.selected ? "selected" : ""}>
                    <th scope="row">
                      <input
                        type="checkbox"
                        checked={user.selected}
                        className="form-check-input"
                        id="rowcheck{user.id}"
                        onChange={(e) => this.onItemCheck(e, user)}
                      />
                    </th>
                    <td>{user.no}</td>
                    <td>{user.site}</td>
                   
                  </tr>
                ))}
              </tbody>
            </table>
           
          </div>
        </div>
      </div>
    );
  }
}

export default SelectTableComponent;