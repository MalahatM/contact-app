import { useState } from 'react';
import ContactsList from './ContactsList';
import inputs from "../constants/inputs";
import {v4}from "uuid";


function Contacts() {
	const[contacts, setContacts]= useState([]);
	const[alert, setAlert]= useState("");
		const[contact,setContact]=useState({
		name:"",lastName:"",email:"",phone:""
	});
	const changeHandler=(event)=>{
		const name= event.target.name;
		const value=event.target.value;
		
		setContact((contact)=>({...contact,[name]:value}));

	};
	const addHandler =()=>{
		if (!contact.name || !contact.lastName || !contact.email || !contact.phone){ setAlert ("Please enter valid data!");
			 return;}
			 setAlert("");
			 const newContact={...contact, id: v4()}
		setContacts((contacts)=>[...contacts,newContact])
		setContact({
			id:"",
			name:"",
			lastName:"",
			email:"",
			phone:""
		});
	};
  return (
	<div>
		<div>
			{
				inputs.map((input, index)=>
					(<input
					key={index}
					type={input.type}
					placeholder={input.placeholder}
					name={input.name}
					value={contact[input.name]}
					onChange={changeHandler}
					/>
				))
			}
		<button onClick={addHandler}>Add Contacts</button>
		</div>
		<div>
			{alert&& <p>{alert}</p>}
		</div>
		<ContactsList contacts={contacts}/>
	</div>
  )
}

export default Contacts;