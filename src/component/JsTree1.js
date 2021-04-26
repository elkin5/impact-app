import React, { Component } from 'react';
import TreeView from 'react-simple-jstree';

export class Tree extends Component {

  constructor(props) {
    super(props);      
  }

  handleChange(e, data) {
    this.props.onSelect(data);
  }

  render() {
    const data = this.props.data;
    return (
      <div>        
        <br /><br />
        <TreeView treeData={data} onChange={(e, data) => this.handleChange(e, data)} />
        <br />
        <p>Selected nodes: {this.props.selected.join(', ')}</p>
      </div>
    );
  }

}