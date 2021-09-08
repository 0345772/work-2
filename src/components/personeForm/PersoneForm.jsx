import React, {useState} from 'react';
import { MyInput, MyButton } from '../UI';


export const PersoneForm = ({create}) => {

  const [persone, setPersone] = useState({name: '', count_pub: "", pageviews: "", lettel:"", medal:false})

  const addNewPersone = (e) => {
    e.preventDefault()
    const newPersone = {
      ...persone, lettel: persone.name[0], id: persone.name.toLowerCase(), medal: false 
    }
    create(newPersone)
    setPersone({name:"", count_pub:"", pageviews:''})
    
  }

  return (
    <form>
        <MyInput
        value={persone.name}
        onChange={(e) => setPersone({...persone, name: e.target.value})} 
        type="text"
        placeholder="Имя и Фамилия автора"
        />
        <MyInput
        value={persone.count_pub}
        onChange={(e) => setPersone({...persone, count_pub: e.target.value})}
        type="text"
        placeholder="Колличество публикаций"
        />
        <MyInput
        value={persone.pageviews}
        onChange={(e) => setPersone({...persone, pageviews: e.target.value})}
        type="text"
        placeholder="Колличество просмотров"
        />
        <MyButton 
        style={{background: "white", color: "gray", border:"2px solid red", borderRadius: "3px"}}
        onClick={addNewPersone}
        >Добавить автора</MyButton>
    </form>
  );
};
