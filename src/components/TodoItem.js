import React, { Component } from 'react';

class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = { edit: false };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  toggleEdit() {
    // if false its true, if true it's false
    this.setState({ edit: !this.state.edit });
  }

  display() {
    return (
      <li>
        {this.props.item} -
        <button onClick={this.toggleEdit}>Edit</button>
        <button onClick={() => this.props.deleteItem(this.props.index)}>Delete</button>
      </li>
    );
  }

  handleEdit() {
    let inputValue = this.refs.editItemInput.value;
    this.props.editItem(this.props.index, inputValue);
    this.toggleEdit();
  }

  edit() {
    return (
      <li>
        <input type='text' ref='editItemInput' defaultValue={this.props.item} placeholder='Todo Item' />
        <button onClick={this.toggleEdit}>Cancel</button>
        <button onClick={this.handleEdit}>Edit</button>
      </li>
    );
  }

  render() {
    if(this.state.edit) {
      return (this.edit());
    } else {
      return (this.display());
    }
  }
}

export default TodoItem;
