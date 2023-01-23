import { useState, useEffect } from 'react';
import Form from './Form';
// import List from './List';
import Table from './Table';

function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/';
  const [reqType, setReqType] = useState('users');
  const [items, setItems] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fectchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        if (!response.ok) throw Error('Did not received expected data');
        const data = await response.json();
        setItems(data);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      }
    };

    fectchItems();
  }, [reqType]);

  return (
    <div className="App">
      <Form reqType={reqType} setReqType={setReqType} />
      {fetchError && (
        <p className="errorMessage" style={{ color: 'red' }}>
          {`Error: ${fetchError}`}
        </p>
      )}
      {/* {!fetchError && <List items={items} />} */}
      {!fetchError && <Table items={items} />}
    </div>
  );
}

export default App;
