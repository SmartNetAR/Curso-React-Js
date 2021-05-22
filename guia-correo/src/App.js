import {useEffect, useState} from 'react';
import './App.css';
import Search from './components/Search'
import List from './components/List'

function App() {

  const [envios, setEnvios] = useState([]);
  const [envio, setEnvio] = useState([]);
  //use effect para cuando el componente se reenderiza
  useEffect(() => {
    getData();
  }, []);

  const getData = async () =>
  {
      const url = "http://localhost:3000/data.json";

      const response = await fetch(url);
      const data = await response.json();

      setEnvios(data);
  }
  
  const handleSearch = (idEnvio) =>
  {
    const result = envios.filter(id => id["nro-envio"] == idEnvio);
    console.log(result);
    setEnvio(result);
  }

  return (
    <div className="container mt-5 text-center">
        <Search handleSearch = { handleSearch }/>
        <List envios={envio} />
    </div>
  );
}

export default App;