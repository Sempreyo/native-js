import {ChangeEvent, MouseEvent} from 'react';

export const User = () => {
	const deleteUser = (e: MouseEvent<HTMLButtonElement>) => {
		console.log(e.currentTarget.name)
		alert('user deleted');
	}

	const addUser = () => {
		alert('user added');
	}

	const onNameChanged = () => {
		console.log('name changed')
	}

	const onAgeChanged = (e: ChangeEvent<HTMLInputElement>) => {
		console.log('age changed: ' + e.currentTarget.value)
	}

	const onFocus = () => {
		console.log('field on focus')
	}

	const onBlur = () => {
		console.log('field not focused')
	}

	return <>
		<h2>Callback, Events</h2>
		<div>
			<textarea onChange={onNameChanged} onFocus={onFocus} onBlur={onBlur}>
				Element
			</textarea>
		</div>
		<div>
			<input type="number" onChange={onAgeChanged}/>
		</div>
		<button name='add' onClick={addUser}>Add</button>
		<button name='delete' onClick={deleteUser}>Delete</button>
	</>
}