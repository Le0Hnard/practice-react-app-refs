import React, { Component } from 'react';

export default class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      category: "",
      price: ""
    };
    this.nameRef = React.createRef();
  }

  handleChange = (event) => {
    event.persist();
    this.setState(state => state[event.target.name] = event.target.value);
  }

  handleAdd = () => {
    this.props.callback(this.state);
    this.setState({ name: "", category: "", price: "" }, () => this.nameRef.current.focus());
  }

  render() {
    return (
      <>
        <div className="form-group p-2">
          <label>Name</label>
          <input className="form-control" name="name" 
            value={ this.state.name } onChange={ this.handleChange } autoFocus = { true } ref={ this.nameRef } />
        </div>
        <div className="form-group p-2">
          <label>Category</label>
          <input className="form-control" name="category" 
            value={ this.state.category } onChange={ this.handleChange } />
        </div>
        <div className="form-group p-2">
          <label>Price</label>
          <input className="form-control" name="price" 
            value={ this.state.price } onChange={ this.handleChange } />
        </div>
        <div className="text-center">
          <button className="btn btn-primary" onClick={ this.handleAdd }>
            Add
          </button>
        </div>
      </>
    )
  }
}
