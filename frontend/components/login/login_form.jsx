import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');  //where do i want this to be going?
    }
  }

  update(property) {
    return e => this.setState({
      [property]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.login({ user });
  }

  errors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="container">
        <section className="blue"/>
        <div className="login-form-container">
          <br/>
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <Link className="link-button" to="/signup">Sign up for free</Link>
            <h1>Been here before? Welcome Back!</h1>
            {this.errors()}
            <div className="login-form">
              <label>
                <input type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="login-input"
                  placeholder="Username"
                  />
              </label>
              <br/>
              <label>
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="login-input"
                  placeholder="Password"
                  />
              </label>
              <br/>
              <input className="login-button" type="submit" value="Log in" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginForm);
