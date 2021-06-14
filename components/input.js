import { useState } from "react"

export default function Input({ name, id }) {

	const [value, changeValue] = useState('')
	const changeHendler = event => {
		changeValue(event.target.value)
	}

	return (
		<div className="input__block">
			<input
				className="input"
				onChange={changeHendler}
				name={name}
				id={id}
				type="text"
				value={value}
			/>
			<label className="input-label" htmlFor={name} ></label>
		</div>
	)
}