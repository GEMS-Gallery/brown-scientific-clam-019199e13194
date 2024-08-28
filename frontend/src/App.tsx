import React, { useState } from 'react';
import { backend } from 'declarations/backend';

function App() {
  const [greeting, setGreeting] = useState('');

  const handleGreet = async () => {
    const response = await backend.greet('User');
    setGreeting(response);
  };

  return (
    <div className="App">
      <h1>Internet Computer App</h1>
      <button onClick={handleGreet}>Greet</button>
      {greeting && <p>{greeting}</p>}
    </div>
  );
}

export default App;