import React from "react";
import './App.css';

function Вход() {
  const [login, setLogin] = React.useState()
  const [parol, setParol] = React.useState()
  const vcvcvc=()=>{
      if(login =="Алексей" && parol =="Грищенко"){
        (window.location.href="/Имяпользователя")
     } else{
      alert("Ошибка, Вас нет в списке!") 
    }
  }
    return (
        <div className="Voiti">   
            <input className="Voiti__input" placeholder="Логин" value={login} onChange={e=>setLogin(e.target.value)}/>
            <input className="Voiti__input" placeholder="Пароль" value={parol} onChange={e=>setParol(e.target.value)} />
            <div>
              <button className="Voiti__button" onClick={vcvcvc}>Войти</button>
            </div>  
        </div>
  )
    }

export default Вход;
