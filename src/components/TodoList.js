// Always need to at least import React
import React from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
// or import React, { Component } from 'react';
// class ToDoList extends Component {

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { items: [] };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.editItem = this.editItem.bind(this);
  }

  addItem(item) {
    this.setState({ items: [item, ...this.state.items] });
  }

  deleteItem(index) {
    if(confirm('Really Delete?')) {
      // delete the item out of the state array
      let items = this.state.items;
      items.splice(index, 1);

      this.setState({ items });
    }
  }

  editItem(index, value) {
    let items =  this.state.items;
    items[index] = value;
    this.setState({ items });
  }

  displayItems() {
    let items = this.state.items;

    if(items.length) {
    return items.map( (item, index) => {
      return( <TodoItem
                key={item}
                item={item}
                index={index}
                deleteItem={this.deleteItem}
                editItem={this.editItem}
                />
              );
      });
    } else {
      return(<h4>No Todo Items, Please Add One!</h4>);
    }
  }

  render() {
    return (
      <div>
        <h2> {this.props.title} </h2>
      <TodoForm addItem={this.addItem}/>
        {this.displayItems()}
      </div>
    );
  }
}

export default TodoList;
