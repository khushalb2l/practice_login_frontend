import React from 'react';

const Protected = ({ isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>Protected Page</h1>
          <p>This page can only be accessed when logged in.</p>
        </div>
      ) : (
        <p>You need to log in to access this page.</p>
      )}
    </div>
  );
};

export default Protected;
