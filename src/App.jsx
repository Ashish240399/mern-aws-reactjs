import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    getData().catch(err => setError(err));
  }, [])

  async function getData() {
    const response = await fetch("http://16.170.244.148:8901/hello");
  
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  
    const data = await response.json();
  
    console.log('Response data:', data);
    setData(data.message);
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <h1 style={{color:"blue"}}>{data}</h1>
    </>
  )
}

export default App