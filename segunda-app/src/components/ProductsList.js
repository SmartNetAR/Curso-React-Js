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
                                  <button onClick={()=> this.props.onDelete(product)}>Eliminar</button>{ product.name.toString() }
                              </li> 
                        );
                    })}

                </ul>
            </div>
        )
    }
}
export default ProductsList;