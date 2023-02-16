import { useEffect } from 'react';
import { Component } from '@components';

function App (): JSX.Element {
  useEffect(() => {
    fetch('http://localhost:5173/api/data')
      .then(async (response) => await response.json())
      .then((data) => { console.log(data); })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="app">
      <Component />
    </div>
  );
}

export default App;
