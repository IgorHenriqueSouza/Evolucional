import React, {useState, useEffect} from 'react';

import PageHeader from '../../components/PageHeader';

import './styles.css';


import Select from '../../components/Select';

import Serie from '../../degrees.json';
import Classe from '../../classes.json';
import Studants from '../../students.json';
import ReactDOM from 'react-dom';



const listItems = Studants.map(studant => {
    return (
        <li>
        <span>{`${studant.Id}-${studant.ra}-${studant.name}-${studant.degreeId}-${studant.classId}`}</span>  
        </li>
    )
});

ReactDOM.render(
  <ul>{listItems}</ul>,
  document.getElementById('root')
);

    

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

            <legend>Estudantes</legend>
            
            <li>
                {listItems}
            </li>
            


            <main>
                
            </main>
        </div>
    )

}

export default StudantsList;