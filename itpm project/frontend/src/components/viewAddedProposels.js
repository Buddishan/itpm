import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';
import { withRouter } from "react-router";

class ViewproposelAdmin extends Component {
  // This is the constructor that stores the data.
  constructor(props) {
    super(props);

    this.onChangename = this.onChangename.bind(this);
    this.onChangeoccupation = this.onChangeoccupation.bind(this);
    this.onChangeage = this.onChangeage.bind(this);

    this.onChangegender = this.onChangegender.bind(this);
    
    this.onChangedistrict = this.onChangedistrict.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      occupation: "",
      age: "",

      gender: "",
      
      district: "",
      records: [],
    };
  }
  // This will get the record based on the id from the database.
  componentDidMount() {
    axios
      .get("http://localhost:8070/proposelAdmin/get/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          name: response.data.name,
          occupation: response.data.occupation,
          age: response.data.age,
          gender: response.data.gender,
          district: response.data.district,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // These methods will update the state properties.
  onChangename(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeoccupation(e) {
    this.setState({
      occupation: e.target.value,
    });
  }


  onChangeage(e) {
    this.setState({
      age: e.target.value,
    });
  }

  onChangegender(e) {
    this.setState({
      gender: e.target.value,
    });
  }
 
  onChangedistrict(e) {
    this.setState({
      district: e.target.value,
    });
  }

  // This function will handle the submission.
  onSubmit(e) {
    e.preventDefault();
    const newEditedpayment = {
      name: this.state.name,
      occupation: this.state.occupation,
      age: this.state.age,

      gender: this.state.gender,
     
      district: this.state.district,
    };
    console.log(newEditedpayment);

    // This will send a post request to update the data in the database.
    axios
      .put(
        "http://localhost:8070/payment/update/" + this.props.match.params.id,
        newEditedpayment
      )
      .then((res) => console.log(res.data));


    this.props.history.push("/admin/payments");
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/admin_panel/home" style={{ color: "red " }}>proposel</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

        </nav>

        <br /><br /><br /><br /><br />
        <div className="container">
          <h3 align="center"> proposel</h3>

          <div class="form-group row">
            <label for="staticEmail" class="col-sm-2 col-form-label">name:</label>
            <div class="col-sm-10">
            <input type="text" readonly class="form-control-plaintext" id="staticEmail" value={this.state.name}></input>
            </div>
          </div>
          <div class="form-group row">
            <label for="staticEmail" class="col-sm-2 col-form-label">occupation:</label>
            <div class="col-sm-10">
            <input type="text" readonly class="form-control-plaintext" id="staticEmail" value={this.state.occupation}></input>
            </div>
          </div>
          <div class="form-group row">
            <label for="staticEmail" class="col-sm-2 col-form-label">age:</label>
            <div class="col-sm-10">
            <input type="text" readonly class="form-control-plaintext" id="staticEmail" value={this.state.age}></input>
            </div>
          </div>
          <div class="form-group row">
            <label for="staticEmail" class="col-sm-2 col-form-label">gender:</label>
            <div class="col-sm-10">
            <input type="text" readonly class="form-control-plaintext" id="staticEmail" value={this.state.gender}></input>
            </div>
          </div>
         
          <div class="form-group row">
            <label for="staticEmail" class="col-sm-2 col-form-label">district:</label>
            <div class="col-sm-10">
            <input type="text" readonly class="form-control-plaintext" id="staticEmail" value={this.state.district}></input>
            </div>
          </div>


          <br />

          {/* <div className="form-group">
            <input
              type="submit"
              value="Update Record"
              className="btn btn-primary"
            />
          </div> */}

        </div>
      </div>
    );
  }









}
export default withRouter(ViewproposelAdmin);