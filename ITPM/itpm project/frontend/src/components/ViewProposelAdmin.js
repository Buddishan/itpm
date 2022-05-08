import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';
import { Link } from "react-router-dom";
import Pdf from "react-to-pdf"; 
const ref = React.createRef();
const Record = (props) => (
  <tr>
    
    
    <td>{props.record.name}</td>
    <td>{props.record.gender}</td>
    <td>{props.record.age}</td>
    <td>{props.record.occupation}</td>
   
    <td>{props.record.district}</td>
    
    <td>
    <Link to={"/viewproposel/" + props.record._id}>view</Link>|
      <Link to={"/updateproposel/" + props.record._id}>Edit</Link> |
      <a
        href="/admin/proposeladmin"
        onClick={() => {
          props.deleteRecord(props.record._id);
          this.props.history.push("/admin/proposeladmin");
        }}
      >
        Delete
      </a>
    </td>
  </tr>
);
 
export default class ProposelAdminRecordList extends Component {
  // This is the constructor that shall store our data retrieved from the database
  constructor(props) {
    super(props);
    this.deleteRecord = this.deleteRecord.bind(this);
    this.state = { records: [] };
  }
 
  // This method will get the data from the database.
  componentDidMount() {
    axios
      .get("http://localhost:8070/proposalAdmin/")
      .then((response) => {
        this.setState({ records: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
 
  // This method will delete a record based on the method
  deleteRecord(id) {
    axios.delete("http://localhost:8070/proposelAdmin/delete/" + id).then((response) => {
      console.log(response.data);
    });
 
    this.setState({
      record: this.state.records.filter((el) => el._id !== id),
    });
  }
 
  // This method will map out the users on the table
  recordList() {
    return this.state.records.map((currentrecord) => {
      return (
        <Record
          record={currentrecord}
          deleteRecord={this.deleteRecord}
          key={currentrecord._id}
        />
      );
    });
  }




 
  // This following section will display the table with the records of individuals.
  filterData(Record, searchkey) {
    const result = Record.filter((record) =>



    record.gender.toLowerCAse().includes(searchkey) 

    )
    this.setState({ Record: result })

}



handleSearchArea = (e) => {
    const searchkey = e.currentTarget.value;
    axios.get("http://localhost:8070/proposelAdmin/").then(res => {
        if (res.data.success) {
            this.filterData(res.data.recordList, searchkey)

        }

    });



}
  render() {
    return (
      <div>
        <div><nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className= "container-fluid">
          <a className="navbar-brand" href="/admin_panel/home"style={{color:"red "}}>Payment details management</a>
         
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    {/* <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/admin_panel/accommodation_admin">All Accommadations <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/admin_panel/accommodation_admin/addnew">Add new Accommodation</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/admin_panel/accommodation_admin/accommodation_servations">All Accommodation reservations</a>
      </li>
    </ul> */}
  </div>
          </div>
  
</nav></div>
{/* <nav class="navbar navbar-light bg-light">
                        <form class="form-inline">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={this.handleSerchArea} />
                            
                        </form>
                        </nav> */}
          
        <br/><br/><br/><br/>
      <div className="container" ref={ref}>
        
       <div><h3> Payment Record List</h3></div> 
       <div className="col-lg-3 mt-2 mb-2">

<input

    className="form-control"

    type="search"
    placeholder="search"
    name="searchQuery"
    aria-label="Search"
   onChange={this.handleSearchArea}>



</input>

</div>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              
              
              <th>name</th>
              <th>gender</th>
              <th>age</th>
              <th>occupation</th>
              
              <th>district</th>
              
              <th>Action</th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            
            </tr>
          </thead>
          <tbody>{this.recordList()}</tbody>
        </table>
        <div>
          <Pdf targetRef={ref} filename="report.pdf">

{({ toPdf }) => <button className="btn btn-success" onClick={toPdf}>Capture report as PDF</button>}

 </Pdf></div>
      </div>
      </div>
    );
  }
}
