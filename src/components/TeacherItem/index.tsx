import React from 'react';
import './styles.css'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
function TeacherItem(){
    return (
<article className="teacher-item">
<header>
    <img src="https://avatars2.githubusercontent.com/u/49212821?s=460&u=07ccd6ea3c0fadc396e1220762fb5be103cb94b0&v=4" alt="Linykeer Almeida" />
    <div>
        <strong>Linykeer Almeida</strong>
        <span>Quimica</span>
    </div>
</header>
<p>
    Vai corinthians
</p>
<footer>
    <p>
        Preço/Hora
        <strong>R$ 80.00</strong>
    </p>
    <button type="button">
        <img src={whatsappIcon} alt="Whatsapp"/>
        Entrar em
    </button>
</footer>
</article>
    )
}

export default TeacherItem;