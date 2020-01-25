import React, { Component } from 'react';
import TreeView from 'react-simple-jstree';

export class Tree extends Component {

  constructor(props) {
    super(props);
    var tree = [
      {
        id: 1111,
        state: { "opened": true },
        text: 'Busqueda', children: [
          { id: 2221, text: 'Resultado1' },
          { id: 2222, text: 'Resultado2' }
        ]
      }
    ];

    this.state = {
      data: {
        core: {
          data: tree
        }
      },
      selected: [],
    };
  }

  /* constructor(props) {
    super(props);
    let data = [
      {
        id: 1111,
        text: 'PalabraBuscada'
      }
    ];

    this.state = {
      selected: [],
      tree: {
        core: {
          data: data
        }
      }
    };
  }
 */
  iterateJson(id, data) {
    let flag = 0;
    /* console.log(data); */
    for (let key in data) {
      if (data[key].id == id) {
        console.log('Si');
        data[key].children = [{ id: '2222', text: 'Nuevo resultado' }];
        flag = 1;
      }
    }

    console.log(data);
    if (flag === 1) {
      /* console.log(data); */
      /* this.setState({
        tree: {
          core: {
            data: [{ id: '2222', text: 'Nuevo resultado' }]
          }
        }
      }) */
      this.setState({
        selected: data.selected
      })
    }
    else {
      this.iterateJson(id, data.children)
    }

  }

  addChildNodes(node) {
    node.state = { "opened": true };
    var newData = [
      { id: 'hola', text: 'PalabraResultado1' },
      { text: 'PalabraResultado2' },
      { text: 'PalabraResultado3' },
      { text: 'PalabraResultado4' }
    ];
    node.children = newData;



    // this.setState({
    //     data: {
    //         core: {
    //             data: [
    //                 rootNode
    //             ]
    //         }
    //     }
    // });
    /*  this.iterateJson(data.node.id, this.state.tree.core.data); */
  }

  handleClick() {
    const newData = this.state.data.core.data[0].children.slice();
    newData.push({ text: 'New child node' });
    this.setState({
      data: {
        core: {
          data: [
            {
              text: 'Root node', children: newData
            }
          ]
        }
      }
    });
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
        <button onClick={() => this.handleClick()}>Add node</button>
        <br /><br />
        <TreeView treeData={data} onChange={(e, data) => this.handleChange(e, data)} />
        <br />
        <p>Selected nodes: {this.state.selected.join(', ')}</p>
      </div>
    );
  }

}