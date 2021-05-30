import logo from './logo.svg';
import './App.css';
//imports de componentes
import ModalTask from "./components/ModalTask";
import CardList from "./components/CardList";
//import de hooks
import { useEffect, useState } from 'react';

function App() {
   const[tasks,setTasks] = useState([]);
   
     useEffect(() =>{
      getData();
    }, []);
  
   //obtengo data del repositorio de tareas
   const getData = async () =>
   {
     const url = "http://localhost:3000/Tareas.json";
     
     const resp = await fetch(url);
     
     const data = await resp.json();
     
     setTasks(data);
   }
   const handleSubmit = (newArrayTask)=>{
     console.log(newArrayTask);
     setTasks(newArrayTask);
   }

  return (
      <div className="App container-fluid text-center"> 
            <h1 className="display-4 my-3">Task App</h1>
            <ModalTask agregarString="Agregar" tasks={ tasks } handleSubmit={ handleSubmit }/>
            <div class="row mt-4">
              
                <div className="col-md-4">
                  <h2 className="display-6">Tareas a realizar</h2>
                  <CardList tasks = {tasks.filter(task => task.stateList == false)}/>
                  
                </div> 

                <div className="col-md-4"> 
                    <h2 className="display-6">Tareas Hechas</h2>
                    <CardList tasks = {tasks.filter(task => task.stateList == true)}/>
                </div> 

                <div className="col-md-4">  
                    <h2 className="display-6">Todas las tareas</h2>
                    <CardList tasks = { tasks }/>
                </div>  
            </div>
      </div>
  );
}

export default App;
