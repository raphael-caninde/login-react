import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../style/LoginCss.css';

export default class Login extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      userName: '',
      password: '',
      btnLogin: true,
    }
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, () => {
      this.setState({ btnLogin: this.validateForm() })
    });
  }

  validateForm = () => {
    const { userName, password } = this.state

    if(!userName || userName.length < 3) {
      return true;
    } else if(!password || password.length < 6) {
      return true;
    } else {
      return false;
    };
  }

  render() {
    const { userName, password, btnLogin } = this.state;

    return (
      <main className='container'>
        <h2>Login</h2>
        <form>
          <div className='input-field'>
            <input
              id='userName'
              type="text"
              name='userName'
              placeholder="Enter your username"
              value={ userName }
              onChange={ this.handleChange }
            />
            <div className="underline"></div>
          </div>
          <div className='input-field'>
            <input
              id='password'
              type="password"
              name='password'
              placeholder="Enter your password"
              value={ password }
              onChange={ this.handleChange }
            />
            <div className="underline"></div>
          </div>
          <button
            className="btn-continue"
            type="button"
            disabled={ btnLogin }
          >
            Continue
          </button>
          </form>

          <div className='footer'>
            <span>Or Conect With Social Media</span>
            <div className='social-field'>
              <div className='facebook'>
                <FontAwesomeIcon className='icon-facebook' icon={ faFacebookF } />
                Sign in with Facebook
              </div>
              <div className="instagram">
                <FontAwesomeIcon className='icon-instagram' icon={ faInstagram } />
                Sign in with Instagram
              </div>
            </div>
          </div>
      </main>
    );
  }
}
