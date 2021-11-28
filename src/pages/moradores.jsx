import React from "react"
import HomePage from "../components/main"
import Section from "../components/section"
import { listaMoradores } from "../util/listaMoradores"
import Listagem from "../components/listagem"
import '../assets/css/tabela.css'

class Moradores extends React.Component {
    constructor(props) {
        super(props)
        this.state = {moradores: []}

        this.excluirMorador = this.excluirMorador.bind(this)
    }

    componentDidMount() {
        this.setState({moradores: listaMoradores})
        console.log('Estado no DidMount: ', this.state.moradores)
    }

    conponentDidUpdate(prevProps, prevState) {
        console.log('Estado no DidUpdate: ', this.state.moradores)
        if (prevState.moradores !== this.state.moradores) {
            this.setState({moradorEmEdicao: {id: 1}})
            console.log('Morador em edição no DidUpdate: ', this.state.moradorEmEdicao)
        }
    }

    editarMorador = morador => {
        this.setState({moradorEmEdicao: morador})
    }
    
    excluirMorador(moradorId) {
        console.log('MoradorId: ', moradorId)
        this.setState({moradores: this.state.moradores.filter(morador => morador.id !== moradorId)})
    }

    render() {
        console.log('Estado: ', this.state)
        return (
            <HomePage titulo='Consulta e Cadastro de Moradores'>
                <Section titulo='Cadastro de Moradores'>
                    <span>{this.state.moradorEmEdicao?.name}</span>
                </Section>
                <Section titulo='Listagem de Moradores'>
                    <Listagem
                        lista={this.state.moradores}
                        excluir={this.excluirMorador}
                        editar={this.editarMorador}
                    ></Listagem>
                </Section>
            </HomePage>
        )
    }
}

export default Moradores