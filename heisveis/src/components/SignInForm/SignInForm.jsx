import React, { useRef, useState } from 'react'
import styles from "./SignInForm.module.css"

const SignInForm = ()=> {
	const [userList, setUserList] = useState([]);
	const [user, setUser] = useState({fullname: "", email: ""});

	const nameInput = useRef(null)

	const handleFocus = ()=>{
		nameInput.current.style.width = "90vw"
	}

	const handleBlur = ()=>{
		nameInput.current.style.width = ""
	}
	

	const getGreeting = ()=> {
		const date = new Date();
		const timeOfDay = date.getHours()
		return timeOfDay > 12 ? "Good evening!" : "Good morning!";
	}

	const handleChange = (e) => {
		const {name, value} = e.target;
		setUser((prev)=> ({...prev, [name]: value}));
	}

	const handleSubmit = (e) =>{
		e.preventDefault();
		setUserList((prev) => [...prev, user])
	}

  return (
	<div>
		<h2>{getGreeting()}</h2>
		<form action="" className={styles.form} onSubmit={handleSubmit} noValidate> 
			<label htmlFor="">Full Name:</label>
			<input type="text" name="fullname" onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}value={user.fullname} ref={nameInput}/>

			<label htmlFor="">Email:</label>
			<input type="email" name="email" id="" onChange={handleChange} value={user.email}/>
			<button>Submit</button>

		</form>
	</div>
  )
}

export default SignInForm