import React from 'react';

class Form extends React.Component
{
    render(){
        return(
           
            <div className="text-center container">  
                <h1>Lista de tareas:</h1>

                <form className="form-group" onSubmit={ this.props.addList }>
                    <label className="description-form"  for="title">Titulo:</label>
                    <input 
                        type="text"
                            className="form-control" 
                            name="title" 
                            value= { this.props.title }
                            onChange={ this.props.changeAtributes }
                    />
                    <label className="description-form"for="description">Descripcion:</label>
                    <input 
                            type="text"
                            className="form-control" 
                            value= { this.props.description }
                            name="description"
                            onChange={ this.props.changeAtributes }
                    />
                    <button type="submit" className="btn btn-success btn-lg description-form">Guardar Tarea</button>
                </form>
            </div>
        )
    }
}

export default Form;