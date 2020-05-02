import React from 'react';

function Stats(props) {
  const handleClick = () => {
    props.history.push('/');
  };

  return (
    <main>
      <h2>Stats</h2>
      <button onClick={handleClick}>Go home</button>
    </main>
  );
}

export default Stats;
