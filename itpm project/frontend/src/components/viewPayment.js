import React, { Component } from "react";
// This will require to npm install axios
import axios from 'axios';
import { withRouter } from "react-router";

class ViewPayments extends Component {
  // This is the constructor that stores the data.
  constructor(props) {
    super(props);

    this.onChangepaymentType = this.onChangepaymentType.bind(this);
    this.onChangecardHolder = this.onChangecardHolder.bind(this);
    this.onChangeexpDate = this.onChangeexpDate.bind(this);

    this.onChangeprice = this.onChangeprice.bind(this);
    this.onChangecvvNo = this.onChangecvvNo.bind(this);
    this.onChangecardNo = this.onChangecardNo.bind(this);
    this.onChangecardHolderAddress = this.onChangecardHolderAddress.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      paymentType: "",
      cardHolder: "",
      expDate: "",

      price: "",
      cvvNo: "",
      cardNo: "",
      cardHolderAddress: "",
      records: [],
    };
  }
  // This will get the record based on the id from the database.
  componentDidMount() {
    axios
      .get("http://localhost:8070/payment/get/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          paymentType: response.data.paymentType,
          cardHolder: response.data.cardHolder,
          expDate: response.data.expDate,

          price: response.data.price,
          cvvNo: response.data.cvvNo,
          cardNo: response.data.cardNo,
          cardHolderAddress: response.data.cardHolderAddress,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // These methods will update the state properties.
  onChangepaymentType(e) {
    this.setState({
      paymentType: e.target.value,
    });
  }

  onChangecardHolder(e) {
    this.setState({
      cardHolder: e.target.value,
    });
  }


  onChangeexpDate(e) {
    this.setState({
      expDate: e.target.value,
    });
  }

  onChangeprice(e) {
    this.setState({
      price: e.target.value,
    });
  }
  onChangecvvNo(e) {
    this.setState({
      cvvNo: e.target.value,
    });
  }
  onChangecardNo(e) {
    this.setState({
      cardNo: e.target.value,
    });
  }
  onChangecardHolderAddress(e) {
    this.setState({
      cardHolderAddress: e.target.value,
    });
  }

  // This function will handle the submission.
  onSubmit(e) {
    e.preventDefault();
    const newEditedpayment = {
      paymentType: this.state.paymentType,
      cardHolder: this.state.cardHolder,
      expDate: this.state.expDate,

      price: this.state.price,
      cvvNo: this.state.cvvNo,
      cardNo: this.state.cardNo,
      cardHolderAddress: this.state.cardHolderAddress,
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
          <a className="navbar-brand" href="/admin_panel/home" style={{ color: "red " }}>Payment Management</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

        </nav>

        <br /><br /><br /><br /><br />
        <div className="container">
          <h3 align="center"> payment details</h3>

          <div class="form-group row">
            <label for="staticEmail" class="col-sm-2 col-form-label">payment type:</label>
            <div class="col-sm-10">
            <input type="text" readonly class="form-control-plaintext" id="staticEmail" value={this.state.paymentType}></input>
            </div>
          </div>
          <div class="form-group row">
            <label for="staticEmail" class="col-sm-2 col-form-label">cardHolder:</label>
            <div class="col-sm-10">
            <input type="text" readonly class="form-control-plaintext" id="staticEmail" value={this.state.cardHolder}></input>
            </div>
          </div>
          <div class="form-group row">
            <label for="staticEmail" class="col-sm-2 col-form-label">expDate:</label>
            <div class="col-sm-10">
            <input type="text" readonly class="form-control-plaintext" id="staticEmail" value={this.state.expDate}></input>
            </div>
          </div>
          <div class="form-group row">
            <label for="staticEmail" class="col-sm-2 col-form-label">Price:</label>
            <div class="col-sm-10">
            <input type="text" readonly class="form-control-plaintext" id="staticEmail" value={this.state.price}></input>
            </div>
          </div>
          <div class="form-group row">
            <label for="staticEmail" class="col-sm-2 col-form-label">cvvNo:</label>
            <div class="col-sm-10">
            <input type="text" readonly class="form-control-plaintext" id="staticEmail" value={this.state.cvvNo}></input>
            </div>
          </div>
          <div class="form-group row">
            <label for="staticEmail" class="col-sm-2 col-form-label">cardNo:</label>
            <div class="col-sm-10">
            <input type="text" readonly class="form-control-plaintext" id="staticEmail" value={this.state.cardNo}></input>
            </div>
          </div>
          <div class="form-group row">
            <label for="staticEmail" class="col-sm-2 col-form-label">cardHolderAddress:</label>
            <div class="col-sm-10">
            <input type="text" readonly class="form-control-plaintext" id="staticEmail" value={this.state.cardHolderAddress}></input>
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
export default withRouter(ViewPayments);