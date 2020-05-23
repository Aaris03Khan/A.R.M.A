import React from 'react';
import '../css/nav.css';
import {Nav,Navbar} from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import axios from "axios";

const Navi = () => {
  const history = useHistory();

  const handleLogout = () => {
    let user = JSON.parse(localStorage.getItem("user"));
    if(user!==null){
      let userName = user.userName;
      let accessToken = user.accessToken;
      console.log(user.userName);
      let config = {
      headers: {
        'Authorization': 'Bearer ' + accessToken
      }
    }
      console.log(config);
      axios.post("http://localhost:8080/logout",user,config).then((response) => {
        console.log(response);
        localStorage.clear();
        history.push("/");
      }).catch((err) => {
        console.log(err);
      })
    }
  }
    return (
      <Navbar style={{backgroundColor: '#222222 !important', borderRadius:'5px'}} className="navigation" id= "page-top" collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">ARMA</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/Dashboard">Dashboard</Nav.Link>
      <Nav.Link href="/Dashboard/TemplateList">Templates</Nav.Link>
    </Nav>
    <Nav>
    <Nav>
      <Nav.Link href="/Profile" ><i class="fas fa-user"></i> Profile</Nav.Link>
      </Nav>
      <Nav.Link onClick={handleLogout}>
        <i class="fas fa-sign-out-alt"></i>Log out
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
}
export default Navi;
