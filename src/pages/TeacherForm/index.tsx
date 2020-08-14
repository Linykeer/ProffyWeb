import React from 'react';
import PageHeader from '../../components/PageHeader';
import './styles.css'
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg'
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

function TeacherForm(){
    return (
        <div id="page-teacher-form" className="container">
        <PageHeader
         title="Que incrivel que você quer dar aula"
         description="O primeiro passo é preencher esse formulario de inscrição"
         />
       <main>
           <fieldset>
               <legend>Seus Dados</legend>
              <Input name="name" label="Nome Completo" />
              <Input name="avatar" label="Avatar" />
              <Input name="whatsapp" label="WhatsApp" />
            <Textarea name="bio" label="Biografia" />
           </fieldset>
           <fieldset>
               <legend>Sobre a Aula</legend>
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
              <Input name="cost" label="Custo de sua hora por aula" />
        
           </fieldset>

           <fieldset>
               <legend>Horarios Disponiveis <button type="button">
                + Novo Horario
               </button>
               </legend>
             
             <div className="schedule-item">
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
                <Input name="from" label="Das" type="time" />
                <Input name="to" label="Até" type="time" />
             </div>
           </fieldset>
           <footer>
              <p>
                 <img src={warningIcon} alt="Aviso Importante"  />
                 Importante!! <br />
                 Preencha todos os dados
              </p>
              <button type="button">Salvar Cadastro</button>
           </footer>
       </main>

       </div>
    )
}
export default TeacherForm;