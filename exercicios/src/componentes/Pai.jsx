import React from 'react'
import { childrenWithProps } from '../utility/core'

export default props => 
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            {/* <Filho nome="Arthur" sobrenome={props.sobrenome} />
            <Filho {...props} />
            <Filho {...props} nome="Ana" /> */}
            {/* {props.children} */}
            {childrenWithProps(props)}    
        </ul>
    </div> 