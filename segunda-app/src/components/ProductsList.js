import React from 'react';

class ProductsList extends React.Component{

    render()
    {
        
        return(
            <div>
                <ul>
                        
                    {this.props.listaProductos.filter(cantidad => cantidad.count > 0).map(product =>{
                        return (
                              <li key={ product.id }>
                                  <button className="btn btn-danger" onClick={()=> this.props.onDelete(product)}>Eliminar</button>{ product.name.toString() }
                              </li> 
                        );
                    })}

                </ul>
                    <form className="form-group">
                        <input type="text"  name="id" placeholder="Id"/>            
                        <input type="text" name="name" placeholder="name"/>
                        <input type="number" name="count" placeholder="quantity"/>
                        <button className="btn btn-success ml-3">Agregar</button>
                    </form>
            </div>
        )
    }
}
export default ProductsList;