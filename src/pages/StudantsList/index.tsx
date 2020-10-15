import React from 'react';

import PageHeader from '../../components/PageHeader';

import './styles.css';

import Select from '../../components/Select';
import Serie from '../../degrees.json';
import Classe from '../../classes.json'

function StudantsList() {
        

    return (
        
        <div id="page-teacher-list" className="container">
            <PageHeader title="Alunos cadastrados">
                <form id="search-teachers">

               
                <Select 
                    name="subject" 
                    label="Degrees"
                    options={Serie}
                />

                  <Select 
                    name="degrees" 
                    label="Classe" 
                    options={Classe}
                />  
                    

                </form>
            </ PageHeader>

            <main>
                
            </main>
        </div>
    )

}

export default StudantsList;