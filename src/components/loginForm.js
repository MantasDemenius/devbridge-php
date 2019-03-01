import React, { Component } from 'react';

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

    console.log('The form was submited');
    console.log(this.state);
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
