import React from 'react';
import './App.css';
import Form from'./components/Form';
import CardList from './components/CardList'
class App extends React.Component
{
  state= {
   tasks: [],
   title:"",
   description:"",
  }
  addList = (event) =>
  {
    event.preventDefault();
    let array = [...this.state.tasks];
    let task = {
      id : array[array.length -1].id +1,
      title : this.state.title,
      description : this.state.description,
      stateList:false
    }
    console.log(task)
    array.push(task);
    this.setState({
      tasks: array
    })
    console.log(this.state.tasks);

  }
  componentDidMount(){
      this.getData();
  }

  //Conecto con la api local
   getData = async() =>
  {
    try{
      const url = "http://localhost:3000/Tareas.json";
      let resp = await fetch(url);
      let data = await resp.json();

      this.setState({
        tasks: data
      })
    }catch(error){
       alert(error.message);
    }
  }

  changeAtributes = (event) =>
  {
    const nombre = event.target.name;
    this.setState({
        [nombre] : event.target.value,
    });
  }
  deleteTask = (idTask) =>{
    let array = [...this.state.tasks];
    let pos;
    for(let i=0; i<array.length; i++)
    {
      if(array[i].id == idTask){
        pos = i;
      }
    }
    alert("Eliminaste la tarea" + array[pos].title );
   array.splice(pos,1);
   this.setState({
     tasks : array,
   })

  }
  doneTask = (idTask) =>{
    let array = [...this.state.tasks];
    let pos;
    for(let i=0; i<array.length; i++)
    {
      if(array[i].id == idTask){
        pos = i;
      }
    }
   array[pos].stateList = !array[pos].stateList;
   this.setState({
     tasks : array,
   })

  }

  render(){
    return (
      <div className="App container-fluid">
          <Form 
            addList={ this.addList }
            changeAtributes = { this.changeAtributes }    
            title = { this.state.title }        
            description = { this.state.description }        
            />
      <div className="row text-center">
            <div className="col-md-4">   
                <h2>Tareas a realizar</h2>
                <hr/>
                <CardList 
                  tasks = { this.state.tasks.filter(state => state.stateList === false) }
                  doneTask = { this.doneTask }
                  reHacer = { this.state.reHacer }
                  done = { this.state.done }
                  deleteTask = { this.deleteTask }
                />
           </div> 
           <div className="col-md-4">
                <h2>Tareas realizadas</h2>
                <hr/>
                <CardList 
                  tasks = { this.state.tasks.filter(state => state.stateList === true) }
                  doneTask = { this.doneTask }
                  reHacer = { this.state.reHacer }
                  done = { this.state.done }
                  deleteTask = { this.deleteTask }
                />
              
           </div> 
           <div className="col-md-4">
                <h2>Todas las tareas</h2>
                <hr/>   
                <CardList 
                  tasks = { this.state.tasks }
                  allTasks = { this.state.allTasks }
                  deleteTask = { this.deleteTask }
                  doneTask = { this.doneTask }
                />

           </div> 
     </div> 
      </div>
    );
  }

}

export default App;
