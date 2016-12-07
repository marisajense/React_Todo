import React, { Component } from 'react';

class ToDoForm extends Component {
  constructor(props) {
    super(props);

// add the custom function to the react componenet - keyword 'this' is now component
// if you have a custom function, you need to bind it
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let todoInput = this.refs.todoInput;

    // get the value from the input
    let todoItemValue = todoInput.value;

    // figure out how to add that value to the state of teh todo List
    this.props.addItem(todoItemValue);

    // reset the form
    this.refs.itemForm.reset();
    
    // auto focus input
    todoInput.focus();
  }

  render() {
    return (
      <div>
        <form ref='itemForm' onSubmit={ this.handleSubmit }>
          <input ref='todoInput' type='text' required placeholder='Get Milk' />
          <input type='submit' />
        </form>
      </div>
    );
  }
}

export default ToDoForm;
