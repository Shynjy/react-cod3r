import React from 'react'
import ReactDOM from 'react-dom'

// Primeiro
// import Primeiro from './componentes/Primeiro'
// ReactDOM.render(<Primeiro />, document.getElementById('root'))

// BomDia
// import BomDia from './componentes/BomDia'
// ReactDOM.render(
//     <BomDia nome="David" idade={32} />
// , document.getElementById('root'))

// Multiplos
// import Multi, { BoaNoite } from './componentes/Multiplos'
// ReactDOM.render(
//     <React.Fragment>
//         <Multi.BoaTarde nome="David" />
//         <BoaNoite nome="Sônia" />
//     </React.Fragment>
// , document.getElementById('root'))

// Saudacao
// import Saudacao from './componentes/Saudacao'
// ReactDOM.render(
//     <React.Fragment>
//         <Saudacao tipo="Bom dia " nome="David" />
//     </React.Fragment>
// , document.getElementById('root'))

// Pai & Filho
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
    <Pai nome="David" sobrenome="Pereira">
        {/* Como passo os componentes Filhos aqui? */}
        <Filho nome="Arthur" />
        <Filho nome="Ana" />
        <Filho nome="Sônia" />
    </Pai>
, document.getElementById('root'))