import React from 'react'
import ReactDOM from 'react-dom'

// import Primeiro from './componentes/Primeiro'
// ReactDOM.render(<Primeiro />, document.getElementById('root'))

// import BomDia from './componentes/BomDia'
// ReactDOM.render(
//     <BomDia nome="David" idade="32" />
// , document.getElementById('root'))

// import Multi, { BoaNoite } from './componentes/Multiplos'
// ReactDOM.render(
//     <React.Fragment>
//         <Multi.BoaTarde nome="David" />
//         <BoaNoite nome="Sônia" />
//     </React.Fragment>
// , document.getElementById('root'))

import Saudacao from './componentes/Saudacao'
ReactDOM.render(
    <React.Fragment>
        <Saudacao tipo="Bom dia " nome="David" />
    </React.Fragment>
, document.getElementById('root'))