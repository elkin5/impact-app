import React, { Component } from 'react';
import TreeView from 'react-simple-jstree';

export class Tree extends Component {

  constructor(props) {
    super(props);    
    const url = "http://localhost:8085/api/impact/impactSearch?lazy&id=#&text=" + this.props.searchWord;
    console.log(url);
    this.state = {
      data: {
        core: {
          data: {
            "url" : url,
            "data" : function (node) {
              return { "id" : node.id, text : node.text };
            }
          }
        }
      },
      selected: [],
    };
  }

  handleChange(e, data) {
    this.setState({
      selected: data.selected,
    })
  }

  render() {
    const data = this.state.data;
    return (
      <div>        
        <br /><br />
        <TreeView treeData={data} onChange={(e, data) => this.handleChange(e, data)} />
        <br />
        <p>Selected nodes: {this.state.selected.join(', ')}</p>
      </div>
    );
  }

}