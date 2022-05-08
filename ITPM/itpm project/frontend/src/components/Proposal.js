import React, { useState } from "react";
import axios from 'axios';
import {BrowserRouter as Router, Link} from "react-router-dom";
import ViewProposal from './viewproposal';
 
export default function AddProposal() {

  const [age, setage] = useState("");
  const [district, setdistrict] = useState("");
  const [gender, setgender] = useState("");

  function sendData(e) {
      e.preventDefault();
      const newProposal = {
          age,
          district,
          gender,
      };
      console.log(newProposal);
      axios.post("http://localhost:8070/proposal/addproposal", newProposal).then(() => {
          alert("Proposal added");
          window.location.reload('/Proposal');
      }).catch((err) => {
          alert(err);
      });
  }
    return (
      <div>
        <div>
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className= "container-fluid">
                 <a className="navbar-brand" href="/admin_panel/home"style={{color: "bule"}}> Home</a>
         
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
                  </div>
              </div>
  
            </nav>
        </div>

        <div>
            <h3 style={{textAlign: "center"}}> Proposal Record List</h3>
        </div>

        <div style={{float: "right", marginRight : "10px"}}>
            <form style={{display : "flex"}}>
              <input
                  className="form-control"
                  type="search"
                  placeholder="search"
                  name="searchQuery"
                  aria-label="Search">
              </input>
              <input type = "submit" value = "Search" 
                 style={{
                   backgroundColor: "blue",
                   color: "white", 
                   borderRadius: "6px",
                   marginLeft : "4px",
                   border : "none"}}>
              </input> 
            </form>  
          </div>

          <div style={{ marginTop: "100px" }}>
         
            <form style={{ width: "400px", display : "table", marginLeft : "100px" }} onSubmit={sendData}>
              <label>Age</label>
              <input type = "number" required placeholder = "Eneter Age" style={{ marginLeft: "120px" }} onChange={(e) => {
                                setage(e.target.value);

                            }}></input>
              <br></br>

              <label>District</label>
              <select required style={{ marginLeft: "100px", width : "190px", marginTop : "10px"}} onChange={(e) => {
                                setdistrict(e.target.value);

                            }}>
                <option>Matara</option>
                <option>Colombo</option>
                <option>Galle</option>
                <option>Kandy</option>
              </select>
              <br></br>

              <label style={{ marginTop: "10px" }}>Gender</label>

              <input type="radio" required style={{ marginLeft: "100px" }} onChange={(e) => {
                                setgender("male");

                            }}></input>
              <label for="html">Male</label>
                 <br></br>
              <input type="radio" required style={{ marginLeft: "150px" }} onChange={(e) => {
                                setgender("female");

                            }}></input>
              <label for="css">Female</label>
              <br></br>
              <center>
                 <input type = "submit"  value="submit" style={{ backgroundColor : "yellow", border : "none", borderRadius : "5px"}}></input>
              </center>
             
            </form>
            
          </div>

           <ceneter>
        <ViewProposal/>
           </ceneter>
      </div>
    );

}



