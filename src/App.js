import React from 'react';
import Header from './components/layout/Header'
import { Component } from 'react';
import './App.css';
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import uuid from 'uuid'
//import NewEventForm from './components/NewEventForm';

//YOUTUBE VIDEO TIME: 1:15:45
class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Finish BizTech ticket',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Learn React JS',
        completed: false
      }
    ]
  }

  // Toggle complete
  markComplete = (id) => {
    console.log(id);
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }

  //Delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  addTodo = (title) => {
    const newTodo = {
      //id: this.state.todos[this.state.todos.length - 1].id + 1,
      id: uuid.v4(),
      title: title,
      completed: false
    }
    console.log(newTodo.id)
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  render() {
    return (
      <div className="App">
        <div className='container'>
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos todos={this.state.todos} markComplete={this.markComplete}
            delTodo={this.delTodo} />
        </div>
      </div>
    );
  }

}

export default App;
