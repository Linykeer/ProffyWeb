import React from 'react';
import './styles.css'
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import TeacherItem from '../../components/TeacherItem';
import Select from '../../components/Select';

function TeacherList(){
    return (
     <div id="page-teacher-list" className="container">
      <PageHeader title="Estes sao os proffys disponiveis">
         <form id="search-teachers">
         <Select
               name="subject"
                label="Matéria" 
                options={[
                    {value: 'Artes', label:'Artes'},
                    {value: 'Biologia', label:'Biologia'},
                    {value: 'Ciencias', label:'Ciencias'},
                    {value: 'Matematica', label:'Matematica'},
                    {value: 'Ingles', label:'Ingles'},
                    {value: 'Portugues', label:'Portugues'},
                    {value: 'Quimica', label:'Quimica'},
                ]}
                />  
               <Select
               name="week_day"
                label="Dia da Semana" 
                options={[
                    {value: '0', label:'Domingo'},
                    {value: '1', label:'Segunda-feira'},
                    {value: '2', label:'Terça-feira'},
                    {value: '3', label:'Quarta-feira'},
                    {value: '4', label:'Quinta-feira'},
                    {value: '5', label:'Sexta-feira'},
                    {value: '6', label:'Sabado'},
                ]}
                />   
              <Input name="time" label="Hora"/>    
        
         </form>
      </PageHeader>

      <main>
      <TeacherItem />
      </main>
     </div>
)
}
export default TeacherList;