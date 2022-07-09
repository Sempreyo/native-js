type CityType = {
	title: string
	country: string
}

type AddressType = {
	street: string
	city: CityType
}

type TechType = {
	id: number
	title: string
}

type StudentType = {
	id: number
	name: string
	age: number
	isStudent: boolean
	address: AddressType
	technologies: Array<TechType>
}

const student: StudentType = {
	id: 1,
	name: 'Fedor',
	age: 12,
	isStudent: false,
	address: {
		street: 'Lenina',
		city: {
			title: 'Astana',
			country: 'Kazakhstan'
		}
	},
	technologies: [
		{
			id: 1,
			title: 'HTML'
		},
		{
			id: 2,
			title: 'CSS'
		},
		{
			id: 3,
			title: 'JS'
		},
	]
}

console.log(student.age)
console.log(student.technologies[2].title)