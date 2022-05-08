import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';
import { Link } from "react-router-dom";
const Record = (props) => (
  <tr>
    <td>{props.record.age}</td>
    <td>{props.record.district}</td>
    <td>{props.record.gender}</td>
  </tr>
);
 
export default class viewproposal extends Component {
  // This is the constructor that shall store our data retrieved from the database
  constructor(props) {
    super(props);
    this.state = { records: [] };
  }
 
  // This method will get the data from the database.
  componentDidMount() {
    axios
      .get("http://localhost:8070/proposal/")
      .then((response) => {
        this.setState({ records: response.data });
      })
      .catch(function (error) {
        console.log(error);
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

    record.cardHolder.toLowerCAse().includes(searchkey) 

    )
    this.setState({ Record: result })

}



handleSearchArea = (e) => {
    const searchkey = e.currentTarget.value;
    axios.get("http://localhost:8070/proposal/").then(res => {
        if (res.data.success) {
            this.filterData(res.data.recordList, searchkey)

        }

    });
}
  render() {
    return (
      <div>
       <center>
       <table className="table table-striped" style={{ marginTop: 20, width : "500px" }}>
          <thead>
            <tr>
              
              <th>Age</th>
              <th>District</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>{this.recordList()}</tbody>
        </table>
       </center>
       
      </div>
    );
  }
}
