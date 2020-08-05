import React from 'react';
import './styles.css'
import PageHeader from '../../components/PageHeader';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import TeacherItem from '../../components/TeacherItem';

function TeacherList(){
    return (
     <div id="page-teacher-list" className="container">
      <PageHeader title="Estes sao os proffys disponiveis">
         <form id="search-teachers">
             <div className="input-block">
                 <label htmlFor="week_day">Matéria</label>
                 <input type="text" id="week_day"/>
             </div>
             <div className="input-block">
                 <label htmlFor="subject">Dia da Semana</label>
                 <input type="text" id="subject"/>
             </div>
             <div className="input-block">
                 <label htmlFor="time">Hora</label>
                 <input type="text" id="time"/>
             </div>
         </form>
      </PageHeader>

      <main>
      <TeacherItem />
      </main>
     </div>
)
}
export default TeacherList;