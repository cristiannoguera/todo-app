import React, { Component } from 'react';

class HolaMundoClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            texto: 'Hola a todos desde el estado',
            edad: 30,
        }
    }
    
    componentDidMount() {
        console.log('Se monta el componente')
    }

    render() {
        const { texto, edad } = this.state;
        this.state.texto = 2
        return (
            <>
                <h1>Componente Hola Mundo</h1>
                {/* <h2> {this.state.text} </h2>
                <h2> {this.state.edad} </h2> */}
                <h2> {texto} </h2>
                <h2> {edad} </h2>
            </>
        );
    }
}

export default HolaMundoClass;