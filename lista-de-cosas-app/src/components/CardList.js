import React from "react";

class CardList extends React.Component
{
    render(){
        return(          
        <div className="row text-center">
            { this.props.tasks.map(task =>{
                return(
                    <div key={ task.id } className="col-md-6">   
                        <h2>{ task.title.toString() } </h2>
                        <p> { task.description.toString() }</p>
                        
                        <button type="button" className="btn btn-primary" onClick={() => { this.props.doneTask(task.id) }}>
                            {(task.stateList == true)? "rehacer":"hacer"}</button>

                        <button type="button" className="btn btn-danger margen" onClick={() =>{ this.props.deleteTask(task.id)}}>Eliminar tarea</button>
                        <hr/>
                    </div> 
                );
            })}


         </div> 
        )
    }
}
export default CardList;