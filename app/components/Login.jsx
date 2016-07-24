import React from 'react';

export var Login = React.createClass({
  render() {
    return (
      <div>
        <h1 className="layout__title">Todo App</h1>
        <div className="row">
          <div className="columns small-centered small-10 medium-6 large-4">
            <div className="todo__ui auth__form">
              <h3>Login</h3>
              <p>Login with Github account below</p>
              <button className="button">Log in with Github</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

export default Login;
