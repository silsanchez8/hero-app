import React from 'react';

export const LoginScreen = ({ history }) => {
  const handleLogin = () => {
    //history.push('/') redirecciona a '/'
    history.replace('/'); // remplaza el valor del history
  };
  return (
    <div>
      <h1>Login Screen</h1>
      <hr />
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
