import React from 'react'

//props é um objeto passado como parametro
export default props =>
    // para passar mais de um elemento é necessário colocar dentro de uma <div>
    // uma forma de contornar isso sem gerar a div é usando o <React.Fragment>
   
    // É possível também usar arrays, porém é necessário para em cada tag um atributo achado key
    // [
    //     <h1 key='tag1'>Bom dia {props.nome}!</h1>
    //     <h2 key='tag2'>Hoje vc faz {props.idade} anos!</h2>
    // ]

    <React.Fragment>
        <h1>Bom dia {props.nome}!</h1>
        <h2>Hoje vc faz {props.idade} anos!</h2>
    </React.Fragment>
