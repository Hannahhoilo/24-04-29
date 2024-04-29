import React, { useEffect, useState } from 'react'


const RenderJoke = () => {

	const [joke, setJoke] = useState("");
	const fetchJoke = async () => {
		try {
			const response = await fetch("https://api.chucknorris.io/jokes/random");
			const data = await response.json();
			setJoke(data.value)
		} catch (error) {
			console.log(error.message);
		}
	}
	useEffect(()=> {
		fetchJoke()
	}, [])


  return (
	<div>
		{joke && <p>{joke}</p>}
	</div>
  )
}

export default RenderJoke