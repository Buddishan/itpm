import React, { useState } from "react";
import axios from "axios";

 

export default function AddproposelAdmin() {

    const [name, setname] = useState("");
    const [gender, setgender] = useState("");
    const [occupation, setoccupation] = useState("");
    const [age, setage] = useState("");
   
    const [district, setdistrict] = useState("");
    

    function sendData(e) {
        e.preventDefault();
        const newProposel = {
            name,
            gender,
            occupation,
            age,
           
            district,
           
        };
        console.log(newProposel);
        axios.post("http://localhost:8070/proposaladmin/add", newProposel).then(() => {
            alert("Payment added");
        }).catch((err) => {
            alert(err);
        });
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/admin_panel/home" style={{ color: "red " }}>Proposel </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        
                        {/* <li className="nav-item">
              <a className="nav-link" href="/admin_panel/accommodation_admin/addnew">Add new Accommodation</a>
            </li> */}



                    </ul>

                </div>
            </nav>
            <br /><br /><br /><br /><br />

            <div className="container">
                <form className="row g-3 needs-validation" novalidate onSubmit={sendData}>

                    <div className="col-md-4">
                        <label for="name" className="form-label">name</label>
                        <input type="text" className="form-control " id="validationServer02" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required
                            onChange={(e) => {
                                setname(e.target.value);

                            }} />

                        <div className="valid-feedback">
                            Looks good!
                        </div>

                    </div>

                    
                    <div className="col-md-4">
                        <label for="gendername" className="form-label">gender</label>
                        <input type="text" className="form-control " id="validationServer02" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required
                            onChange={(e) => {
                                setgender(e.target.value);
                            }} />
                        
                    </div>

                    <div className="col-md-6">
                        <label for="location" className="form-label">district</label>
                        <input type="text" className="form-control " id="validationServer03" aria-describedby="validationServer03Feedback" required
                            onChange={(e) => {
                                setdistrict(e.target.value);

                            }} />

                        

                    </div>

                    
                    <div className="col-md-3">
                        <label for="cvv" className="form-label">age</label>
                        <input type="number" className="form-control " id="validationServer05" aria-describedby="validationServer05Feedback" required
                            onChange={(e) => {
                                setage(e.target.value);

                            }} />

                        <div id="validationServer05Feedback" className="invalid-feedback">

                        </div>

                    </div>
                    <div className="col-md-4">
                        <label for="occupation" className="form-label">occupation</label>
                        <input type="text" className="form-control " id="validationServer02" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required
                            onChange={(e) => {
                                setoccupation(e.target.value);

                            }} />

                        <div className="valid-feedback">

                        </div>

                    </div>

                    <br />
                    <br />
                    <br />
                    <div className="col-12">
                        <button className="btn btn-primary" type="submit">add now</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
