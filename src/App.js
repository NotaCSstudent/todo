import React, {Component} from 'react';

class TodoList extends Component{

constructor(){
  super();
  this.state={
    todos:[],
    currentToDo: "",
  }
};

handleChange = event => {
  console.log(event.target.value);
};
addTask = event => {
  this.setState({
    currentToDo: event.target.value
  });
  console.log("The add Task method was exeuctued")
};
 onSubmit = (event) => {
   event.preventDefault()
   this.setState({
     currentToDo: '',
     todos: [...this.state.todos,this.state.currentToDo]

   });
 }

  render(){
    return(
      <div className="container">
      <form onSubmit={this.addTask}>
      <label htmlFor="taskName">Task Name:</label>
      <input onChange={this.handleChange} name="taskName"type="text"placeholder="Add todo here!" />
        {/*Add submit to form*/}
      <button type="submit"> Add task </button>
      </form>
      </div>
    );
  };
};

export default TodoList;
