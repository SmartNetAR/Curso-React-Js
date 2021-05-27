import { useEffect, useState } from "react";

function Form(props)
{
    const [title, setTitle] = useState("");
    useEffect(()=>{
        if(typeof props.taskEdit !== "undefined")
        {
            const titulo = props.taskEdit.title;
            setTitle(titulo);
        }
    },[])
   
    
    const handleChange = (event)=>
    {
            const value = event.target.value;
            console.log(value);
            setTitle(value);
    }
    return(
        <>
          <form>
              
                <div className="mb-3">
                    <label className="form-label">Titulo</label>
                    <input type="text" name="task" onChange={handleChange } 
                           value={ title } 
                           className="form-control"/>
                </div>
                <div class="mb-3">
                    <label className="form-label">Descripcion</label>
                    <input type="text" className="form-control" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    );
}

export default Form;