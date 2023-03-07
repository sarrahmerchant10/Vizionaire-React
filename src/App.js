import { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/hello`);
      const data = await response.json();
      setMessage(data.message);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>message: {message}</h1>
    </div>
  );
}

export default App;

