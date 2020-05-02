import React from 'react';

function Welcome(props) {
  const handleClick = async () => {
    const apiResponse = await (await fetch('http://localhost:5000/api')).text();
    console.log('Response:', apiResponse);
  };

  return (
    <main>
      <h2>Welcome</h2>
      <button onClick={handleClick}>Check API</button>
    </main>
  );
}

export default Welcome;
