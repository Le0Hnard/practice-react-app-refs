import React, { Component } from 'react';
import FormField from './components/FormField';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.fieldRef = React.createRef();
  }

  handleClick = () => {
    this.fieldRef.current.focus();
  }

  render() {
    return (
      <div className="m-2">
        <FormField label="Name" fieldRef={ this.fieldRef } />
        <div className="text-center m-2">
          <button className="btn btn-primary" onClick={ this.handleClick }>
            Focus
          </button>
        </div>
      </div>
    )
  }
}
