import React, { Component } from 'react';
import { Jumbotron, Container, Form, Button, Row, Col, Card, Nav } from 'react-bootstrap'
import { Tree } from './JsTree1';

class SearchImpact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                core: {
                    data: {
                        "url": "http://localhost:8085/api/impact/impactSearch?lazy&id=#",
                        "data": function (node) {
                            return { "id": node.id, text: node.text };
                        }
                    }
                }
            },
            selected: []
        };

        this.inputSearch = React.createRef();
        this.inputDefinition = React.createRef();
        this.inputPath = React.createRef();
        this.inputHistory = React.createRef();
        this.inputType = React.createRef();
        this.inputOnlyMethods = "no";
        this.handleSearchClick = this.handleSearchClick.bind(this);
        this.handleSelectNode = this.handleSelectNode.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.urlServer = "http://opli11.open.com.co:8090/";
    }

    handleSearchClick(event) {
        console.log("Search");
        console.log(this.inputOnlyMethods);
        let inputSearch = this.inputSearch.current.value.replace(/\//g, "%2F").replace("[", "%5B").replace("]", "%5D");

        console.log(inputSearch)
        const url = "http://localhost:8085/api/impact/impactSearch?lazy&id=0000&text=" + inputSearch +
            "&defs=" + this.inputDefinition.current.value + "&path=" + this.inputPath.current.value + "&hist=" + this.inputHistory.current.value
            + "&type=" + this.inputType.current.value + "&only=" + this.inputOnlyMethods;
        console.log(url);
        this.setState({
            data: {
                core: {
                    data: {
                        "url": url,
                        "data": function (node) {
                            return { "id": node.id, text: node.text };
                        }
                    }
                }
            }
        });
    }

    handleSelectNode(data) {
        this.setState({
            selected: data.selected
        })

        if (data.node != undefined) {
            let parts = data.node.text.split("=");
            if (parts.length > 1) {
                if (parts[1].indexOf("/") > 0) {
                    let url = this.urlServer + parts[1].replace(">", "/xref");
                    window.open(url, "_blank", "titlebar=no,scrollbars=yes,resizable=yes,top=100,left=500,width=1100,height=800");
                } else {
                    let url = this.urlServer + "/xref" + parts[0];
                    window.open(url, "_blank", "titlebar=no,scrollbars=yes,resizable=yes,top=100,left=500,width=1100,height=800");
                }
            }           

        }
        // var win = window.open(url, '_blank');
        // win.focus();
    }

    handleCheckboxChange(event) {
        const target = event.target
        const checked = target.checked
        const name = target.name
        this.inputOnlyMethods = checked ? 'yes' : 'no'
        console.log(this.inputOnlyMethods);
      }

    render() {
        const data = this.state.data;
        const selected = this.state.selected;

        return (
            <div>
                <Jumbotron fluid>
                    <Container>
                        <h1>Impact App</h1>
                        <p>
                        </p>
                    </Container>
                </Jumbotron>
                <Card>
                    <Card.Header>
                        <Nav variant="tabs" defaultActiveKey="#first">
                            <Nav.Item>
                                <Nav.Link href="#first" id="first-tab" data-toggle="tab" role="tab" aria-controls="first">Buscar</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#second" id="second-tab" data-toggle="tab" role="tab" aria-controls="second">Diagrama</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Card.Header>

                    <Card.Body>
                        <div className="tab-pane active" id="first" role="tabpanel">

                            <Form.Group controlId="formBasicSearch">
                                <Form.Label>Busqueda</Form.Label>
                                <Form.Control type="text" placeholder="Ingrese valor para busqueda" ref={this.inputSearch} />
                            </Form.Group>
                            <Form.Group controlId="formBasicDefinitions">
                                <Form.Check type="checkbox" label="Solo Metodos" onChange={this.handleCheckboxChange} />
                            </Form.Group>

                            <Form.Group controlId="formBasicDefinitions">
                                <Form.Label>Definicion</Form.Label>
                                <Form.Control type="text" placeholder="Busqueda definiciones unicamente" ref={this.inputDefinition} />
                            </Form.Group>

                            <Form.Group controlId="formBasicPath">
                                <Form.Label>Ruta</Form.Label>
                                <Form.Control type="text" placeholder="Busqueda por ruta" ref={this.inputPath} />
                            </Form.Group>

                            <Form.Group controlId="formBasicHistory">
                                <Form.Label>Historial</Form.Label>
                                <Form.Control type="text" placeholder="Busqueda con historial" ref={this.inputHistory} />
                            </Form.Group>

                            <Form.Group controlId="formBasicType">
                                <Form.Label>Tipo</Form.Label>
                                <Form.Control type="text" placeholder="Busqueda por tipo de archivo (java)" ref={this.inputType} />
                            </Form.Group>

                            <Button variant="primary" type="submit" onClick={this.handleSearchClick}>
                                Buscar
                            </Button>

                        </div>
                    </Card.Body>
                </Card>

                <Tree data={data} selected={selected} onSelect={this.handleSelectNode}></Tree>
            </div>
        );
    }
}

//<Tree searchWord={this.state.value}></Tree>
export default SearchImpact;