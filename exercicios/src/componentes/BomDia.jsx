import React from 'react'

//props é um objeto passado como parametro
export default props =>
    // para passar mais de um elemento é necessário colocar dentro de uma <div>
    // uma forma de contornar isso sem gerar a div é usando o <React.Fragment>
    <React.Fragment>
        <h1>Bom dia {props.nome}!</h1>
        <h2>Hoje vc faz {props.idade} anos!</h2>
    </React.Fragment>