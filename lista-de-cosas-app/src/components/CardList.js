import React from "react";
import Form from "../components/Form";

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
                        
                        <button type="button" className="btn btn-warning margenSuperior" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Editar Tarea
                        </button>

                        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content Formulario">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Editar Tarea</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <Form  updateTask = { this.props.updateTask } />
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            </div>
                            </div>
                        </div>
                        </div>    
                        <hr/>                  
                    </div> 
                 
                );
            })}


         </div> 
        )
    }
}
export default CardList;