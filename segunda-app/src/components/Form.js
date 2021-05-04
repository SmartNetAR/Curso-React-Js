import React from "react";

class Form extends React.Component{
    render(){
        return(
        <form className="" onSubmit={ this.props.submitProduct }>           
            <input type="text"name="name" value={ this.props.name } onChange={(event) => this.props.cambioAtributos({name: event.target.value })}/>
            <input type="number" name="count" value = { this.props.count } onChange={(event) => this.cambioAtributos({count: event.target.value })} />
            <button type="submit" className="btn btn-success ml-3">Agregar</button>
            <button type="submit" onClick={ this.props.cancel } className="btn btn-warning ml-3">Cancelar</button>
       </form>
        )
    }
}
export default Form;
