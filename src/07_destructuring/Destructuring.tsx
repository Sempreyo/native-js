export type PersonType = {
	name: string
	age: number
	lessons: Array<{title: string}>
}

type PropsType = {
	title: string
	person: PersonType
	food: Array<string>
	car: {model: string}
}

export const Destructuring: React.FC<PropsType> = (props) => {
	const {title, person} = props;

	return <>
		<h2>Destructuring</h2>
		<h3>{title}</h3>
		<hr/>
		<div>
			{props.car.model}
		</div>
		<div>
			{person.name}
		</div>
	</>
}

/* Деструктуризация аргумента компоненты */
/*
export const Destructuring: React.FC<PropsType> = ( {title, person, ...props} ) => { // rest параметры
	return <>
		<h2>Destructuring</h2>
		<h3>{title}</h3>
		<hr/>
		<div>
			{props.car.model}
		</div>
		<div>
			{person.name}
		</div>
	</>
}*/
