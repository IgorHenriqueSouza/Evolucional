import React from 'react';
import { Link } from 'react-router-dom';


import './styles.css';



function Landing(){

    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    
                    <h2>Escola preparatoria</h2>

                </div>

                <div className="buttons-container">
                   
                    <Link to="/study" className="study">
                        
                        Estudantes
                    </Link>

                    <Link to="/cadastro" className="give-classes">
                        
                        Cadastrar
                    </Link>
                </div>

            </div>

        </div>
    )
}

export default Landing;