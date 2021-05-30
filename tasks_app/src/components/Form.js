import { useEffect, useState } from "react";

function Form(props)
{
    const [task, setTask] = useState({
        id:0,
        title:"",
        description:"",
        stateList:false,
    });
    
    const handleChange = (event)=>
    {
        setTask({
            ...task,
            [event.target.name] : event.target.value
        })

    }

    const handleSubmit = (event)=>
    {
        event.preventDefault();
        if(task.title == "" && task.description == "")
        {
            alert("Tienes que rellenar los campos para poder enviarlos");

        }else{
            props.handleSubmit(task);
            setTask({
                title:"",
                description:"",
                stateList:false,
                id:0
            })
        }

    }

    return(
        <>
          <form onSubmit = { handleSubmit }>
              
                <div className="mb-3">
                    <label className="form-label">Titulo</label>
                    <input type="text"
                           name="title" 
                           onChange={handleChange } 
                           value={task.title} 
                           className="form-control"/>
                </div>
                <div class="mb-3">
                    <label className="form-label">Descripcion</label>
                    <input type="text" 
                           className="form-control"  
                           name="description"                           
                           onChange={handleChange } 
                           value={task.description}
                           className="form-control"
                    />
                           
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    );
}

export default Form;