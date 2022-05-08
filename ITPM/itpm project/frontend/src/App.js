import logo from './logo.svg';
 import {BrowserRouter as Router, Route} from"react-router-dom"
import AddPayment from './components/AddPayment';
import AdminPayment from'./components/AdminPayments';
import updatePayment from './components/updatePayment';
import './App.css';
import Header from './components/header';
import Proposal from './components/Proposal';
import ViewPayments from './components/viewPayment';
import AddproposelAdmin from './components/Addproposel';
import ProposelAdminRecordList from './components/ViewProposelAdmin';
import ViewproposelAdmin from'./components/viewAddedProposels';

function App() {
  return (
    <Router>

      <div >
        <Route path="/payment" exact component={AddPayment} />
        <Route path="/admin/payments" exact component={AdminPayment} />
        <Route path="/update/:id" exact component={updatePayment} />
        <Route path="/Proposal" exact component={Proposal} />
        <Route path="/view/:id" exact component={ViewPayments} />
        <Route path="/admin/addproposel" exact component={AddproposelAdmin} />
        <Route path="/admin/proposeladmin" exact component={ProposelAdminRecordList} />
        <Route path="/viewproposel/:id" exact component={ViewproposelAdmin}/>
        
      </div>


    </Router>

  );
}

export default App;
