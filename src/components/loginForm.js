import React, { Component } from 'react';
import axios from 'axios';
const API_PATH = 'http://localhost:8080/react-app/api/backend/LoginHandlerReact.php';
class loginForm extends Component {

  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    let target = event.target;
    let value = target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event){
    event.preventDefault();
    /*const formData = new FormData();
    formData.append('username', this.state.username);
    formData.append('password', this.state.password);
    axios.post('', formData)
      .then(response => {
    console.log(response);
    }).catch(error => {
    console.log("this is error", error);
  });*/
  axios({
    method: 'post',
    url: `${API_PATH}`,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json' },
    data: this.state
  }).then(response => {
    console.log(response);
    }).catch(error => {
    console.log("this is error", error);});


  }



  render(){
    return (
      <form id="loginForm" onSubmit={this.handleSubmit}>
        <div className="login-box">
          <h1>Login</h1>
            <div className="textbox">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" name="username" value={this.state.username} onChange={this.handleChange}/>
            </div>
            <div className="textbox">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange}/>
            </div>
            <button className="btn" value="Sign in">Sign in</button>
          </div>
        </form>
    );
  }
}

export default loginForm;
