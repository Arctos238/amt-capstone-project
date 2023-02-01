import React from 'react';

function HomePage(props) {
    return (
      <main>
        <h1>Hello There</h1>
        <div>
        <button onClick={props.handleLogout}>logout</button>
      </div>
      </main>
    );
  }
  
  export default HomePage;
