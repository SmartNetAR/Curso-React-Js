import Form from "./Form";
function ModalTask(props)
{ 
    //la info viene del form
    const handleSubmit = (task)=>
    {
        const tasks = [...props.tasks];
        if(task.id != 0 )
        {   
            // si es distinto es proque apreto en editar
        }else
        {
            task.id = tasks[tasks.length-1].id + 1;  //asigno id
            tasks.push(task);
            props.handleSubmit(tasks);
        }
    }
    return(
        <>
            <button type="button" className="btn btn-outline-success mx-2" data-bs-toggle="modal" data-bs-target="#example">{props.agregarString == "Agregar" ? "Agregar" : "Editar"}</button>
            <div className="modal fade" id="example" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Task</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Form taskEdit={props.taskEdit} handleSubmit={handleSubmit} />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ModalTask;