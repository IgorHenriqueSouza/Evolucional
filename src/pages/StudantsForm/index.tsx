import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';


import './styles.css';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg';
import Select from '../../components/Select';
import Serie from '../../degrees.json';
import Classe from '../../classes.json';

function TeacherForm() {
    const [nome, setNome] = useState('');
    const [degrees, setDegress] = useState ('');
    const [classe, setClasse] = useState ('');

    
    return (
        <div id="page-teacher-form" className="container">
        <PageHeader 
            title="Cadastro de alunos"
            
        />
        <main>
            <form>
            <fieldset>
                <legend>Seus Dados</legend>

                <Input 
                    name="name" 
                    label="Nome completo" 
                    value={nome} 
                    onChange={(e) => { setNome(e.target.value) }} 
                />
                     
            </fieldset>

            <fieldset>
                <legend>Sobre a aula</legend>

                <Select 
                    name="subject" 
                    label="Degrees" 
                    value={degrees}
                    onChange={(e) => { setDegress(e.target.value)}}
                    options={Serie}
                />

                <Select 
                    name="degrees" 
                    label="Classe" 
                    value={classe}
                    onChange={(e) => { setClasse(e.target.value)}}
                    options={Classe}
                />

                
                                 
            </fieldset>

           

            <footer>
                <p>
                <img src={warningIcon} alt="Aviso importante"/>
                    Importante! <br />
                    Preencha todos os dados
                </p>
                <button type="submit">
                    Salvar cadastro
                </button>
            </footer>
            </form>
        </main>
    </div>
    )

}

export default TeacherForm;