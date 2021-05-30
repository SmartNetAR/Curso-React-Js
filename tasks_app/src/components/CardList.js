import React from "react"
import ModalTask from "./ModalTask";
function CardList(props){
    return(
        <>
        {
            props.tasks.map(task =>{
            console.log(task);
            return(
            <div key={ task.id } className="card mb-3">
                <div className="card-body">
                    <h5 className="card-title">{task.title}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <button type="button" className="btn btn-outline-primary">Hacer</button>
                    <ModalTask taskEdit = { task }/>
                    <button type="button" className="btn btn-danger ml-2">Eliminar</button>
                </div>
           </div>
            )})
  
        }

        </>
    );
}

export default CardList;