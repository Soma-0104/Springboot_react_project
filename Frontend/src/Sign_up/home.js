import React from 'react';
import Dance from './register';
import {BrowserRouter as Router,Link,Route,Routes} from 'react-router-dom';
import DataBaseView from './view';
import UpdateForm from './edit';
import Deleteform from './delete';
function Output(){
    return(
        <>
        <Router>
    <ul class="nav nav-tabs">
  <li class="nav-item">
    <Link to="/reg" className="nav-link">Register</Link>
  </li>
  <li class="nav-item">
    <Link to="/get" class="nav-link">Get Details</Link>
  </li>
  <li class="nav-item">
    <Link to="/Edit" class="nav-link">Edit Details</Link>
  </li>
  <li class="nav-item">
    <Link to="/Delete" class="nav-link">Delete Details</Link>
  </li>
</ul>
<Routes>
  <Route path="/reg" element={<Dance/>}/>
  <Route path="/get" element={<DataBaseView/>}/>
  <Route path="/edit" element={<UpdateForm/>}/>
  <Route path="/delete" element={<Deleteform/>}/>
</Routes>
    </Router>
        </>
    );
}
export default Output;