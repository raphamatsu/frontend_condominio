import React from "react"
import '../assets/css/homepage.css'

class HomePage extends React.Component {
    render() {
        return (
            <div className="mainPage">
                <div className='header'>
                    <h1>Condomínio Vila Alegria</h1>
                    <h2>{this.props.titulo}</h2>
                </div>
                {this.props.children}
            </div>
        )
    }
}

export default HomePage