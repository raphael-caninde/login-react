import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../style/LoginCss.css';

export default class Login extends Component {
  render() {
    return (
      <main className='container'>
        <h2>Login</h2>
        <form>
          <div className='input-field'>
            <input type="text" name='username' id='username' placeholder="Enter your username" />
            <div className="underline"></div>
          </div>
          <div className='input-field'>
            <input type="text" name='password' id='password' placeholder="Enter your password" />
            <div className="underline"></div>
          </div>
          <input type="submit" value="Continue" />
          </form>

          <div className='footer'>
            <span>Or Conect With Social Media</span>
            <div className='social-field'>
              <div className='facebook'>
                <FontAwesomeIcon icon={faFacebookF} />
                Sign in with Facebook
              </div>
              <div className="instagram">
                <FontAwesomeIcon icon={faInstagram} />
                Sign in with Instagram
              </div>
            </div>
          </div>
      </main>
    );
  }
}
