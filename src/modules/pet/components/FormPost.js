import React, { Component } from 'react';
import { Row, Col, Form, Input, Label, FormGroup, Button, FormFeedback } from 'reactstrap';

class FormPost extends Component {
    constructor(props) {
        super(props);

        this.state = {  //variables
            nombre: '',
            apellido: '',
            domicilio: '',
            ciudad: '',
            provincia: '',
            telefono: '',
            descripcion: '',
            mensajeNombre: '',
            mensajeApellido: '',
            mensajeDomicilio: '',
            mensajeCiudad: '',
            mensajeProvincia: '',
            mensajeTelefono: '',
            invalidNombre: false,
            invalidApellido: false,
            invalidDomicilio: false,
            invalidCiudad: false,
            invalidProvincia: false,
            invalidTelefono: false,
        }
        this.onChange = this.onChange.bind(this);
        this.enviarAlaBD = this.enviarAlaBD.bind(this);
    }

    onChange(e) { //actualiza los valores de las variables
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]: value,
        });
    }

    enviarAlaBD(e) {
        e.preventDefault();
        let valido = true;
        if (this.state.nombre === '') { //se verifica que no esten vacios los campos
            this.setState({
                invalidNombre: true,
                mensajeNombre: 'El campo nombre es obligatorio, indica tu nombre',
            });
            valido = false;
        }
        if (this.state.apellido === '') { //se verifica que no esten vacios los campos
            this.setState({
                invalidApellido: true,
                mensajeApellido: 'El campo apellido es obligatorio, indica tu apellido',
            });
            valido = false;
        }
        if (this.state.domicilio === '') { //se verifica que no esten vacios los campos
            this.setState({
                invalidDomicilio: true,
                mensajeDomicilio: 'Indique su domicilio',
            });
            valido = false;
        }
        if (this.state.ciudad === '') { //se verifica que no esten vacios los campos
            this.setState({
                invalidCiudad: true,
                mensajeCiudad: 'Indique su ciudad',
            });
            valido = false;
        }

        if (this.state.provincia === '') { //se verifica que no esten vacios los campos
            this.setState({
                invalidProvincia: true,
                mensajeProvincia: 'Indique su provincia',
            });
            valido = false;
        }

        if (this.state.telefono === '') {//se verifica que no esten vacios los campos
            this.setState({
                invalidTelefono: true,
                mensajeTelefono: 'Indique su telefono',
            });
            valido = false;
        }

        if (valido) { //verifica que los campos hayan sido completados
            //Enviar a la Base de Datos o a otro componente
            console.log("Se envian los datos" + JSON.stringify(this.state));
        }
    }



    render() {
        return (
            <div style={{ marginTop: "40px" }}>

                <Row>
                    <Col xs="1"></Col>
                    <Col xs="12">
                        <h1>Crear Publicacion</h1>
                        <Form onSubmit={this.enviarAlaBD}>
                            <FormGroup>
                                <Label>Nombres</Label>
                                <Input
                                    type="text"
                                    name="nombre"
                                    value={this.state.nombre}
                                    onChange={this.onChange}
                                    invalid={this.state.invalidNombre} />
                                <FormFeedback>
                                    {this.state.mensajeNombre}
                                </FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label>Apellidos</Label>
                                <Input
                                    type="text"
                                    name="apellido"
                                    value={this.state.apellido}
                                    onChange={this.onChange}
                                    invalid={this.state.invalidApellido} />
                                <FormFeedback>
                                    {this.state.mensajeApellido}
                                </FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label>Domicilio</Label>
                                <Input
                                    type="text"
                                    name="domicilio"
                                    value={this.state.domicilio}
                                    onChange={this.onChange}
                                    invalid={this.state.invalidDomicilio} />
                                <FormFeedback>
                                    {this.state.mensajeDomicilio}
                                </FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label>Ciudad</Label>
                                <Input
                                    type="text"
                                    name="ciudad"
                                    value={this.state.ciudad}
                                    onChange={this.onChange}
                                    invalid={this.state.invalidCiudad} />
                                <FormFeedback>
                                    {this.state.mensajeCiudad}
                                </FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label>Provincia</Label>
                                <Input
                                    type="text"
                                    name="provincia"
                                    value={this.state.provincia}
                                    onChange={this.onChange}
                                    invalid={this.state.invalidProvincia} />
                                <FormFeedback>
                                    {this.state.mensajeProvincia}
                                </FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label>Telefono</Label>
                                <Input
                                    type="number"
                                    name="telefono"
                                    value={this.state.telefono}
                                    onChange={this.onChange}
                                    invalid={this.state.invalidTelefono} />
                                <FormFeedback>
                                    {this.state.mensajeTelefono}
                                </FormFeedback>
                            </FormGroup>
                            <FormGroup>
                                <Label>Descripcion</Label>
                                <textarea
                                    rows="5" cols="60"
                                    name="descripcion"
                                    value={this.state.descripcion}
                                    onChange={this.onChange} />
                            </FormGroup>

                            <FormGroup>
                                <Button color="success">Publicar</Button>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </div>
        );
    }
}


export default FormPost;