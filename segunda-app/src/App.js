import React from 'react';
import './App.css';
import ProductsList from './components/ProductsList';

class App extends React.Component{
  state = {
    products: [
      { id: 1, name: "monitor", count: 12 },
      { id: 2, name: "impresora", count: 1 },
      { id: 3, name: "mouse", count: 33 },
      { id: 4, name: "alcohol", count: 0 },
      { id: 5, name: "cap", count: 0 },
    ]
  }
    eliminarProducto= (producto) =>
    {
      let i = this.state.products.indexOf(producto);

      if(i !== -1){
        this.state.products.splice(i,1);
        alert("se elimino");
        this.setState(this.products);
    }
  
  }

  render(){
    return (
      <div className="App App-header">

        <ProductsList listaProductos = { this.state.products } onDelete={ this.eliminarProducto }/>
        
      </div>
    );
  }
}

export default App;
