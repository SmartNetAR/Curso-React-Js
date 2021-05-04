import React from 'react';
import './App.css';
import ProductsList from './components/ProductsList';
import Form from './components/Form';

class App extends React.Component{
  state = {
    products: [
      { id: 1, name: "monitor", count: 12 },
      { id: 2, name: "impresora", count: 1 },
      { id: 3, name: "mouse", count: 33 },
      { id: 4, name: "alcohol", count: 0 },
      { id: 5, name: "cap", count: 0 },
    ],
    name:"",
    count:0
  }
    eliminarProducto= (producto) =>
    {
      let array = [...this.state.products];    //genera copia
      let i = this.state.products.indexOf(producto); 
      if(i !== -1)
      {
        array.splice(i,1);
        this.setState({products: array});    //actualizo el estado
      }
  
    }
    handleSubmit = (event) =>   //evitamos recarga y agregamos un producto
  {
    event.preventDefault();

    let array = [...this.state.products];  
    let ultimoElemento = array.length - 1;
    let id = array[ultimoElemento].id + 1;

    let product = {
       id: id,
       name: this.state.name,
       count: this.state.count
    }
    array.push(product);
    this.setState({products: array});
  }

    handleCancel = ()=>
    {
      this.setState({
        name:'',
        count:0
      });
    }
    changeAtributes = (name,count) =>
    {

    }

  render(){
    return (

      <div className="">
        <Form listaProductos = { this.state.products } 
              cancel = { this.handleCancel }
              submitProduct = { this.handleSubmit }
              cambioAtributos ={ this.changeAtributes } />

        <ProductsList listaProductos = { this.state.products }
                      onDelete={ this.eliminarProducto }    //borro un producto
                      addProduct = { this.agregarProducto }  //agrego un producto
        />
        
      </div>
    );
  }
}

export default App;
