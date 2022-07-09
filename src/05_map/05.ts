import {govType} from '../02_objects/02_1';

export type PeopleType = {
	name: string
	age: number
}

const peoples: Array<PeopleType> = [
	{
		name: 'John',
		age: 24
	},
	{
		name: 'Kate',
		age: 21
	},
	{
		name: 'Ann',
		age: 31
	},
	{
		name: 'Fedor',
		age: 35
	}
]

const devs = peoples.map(item => ({
	stack: ['html', 'css', 'js', 'react'],
	firstName: item.name.split(' ')[0],
	lastName: item.name.split(' ')[1]
}));

const messages = peoples.map(item => `Hello ${item.name}! Welcome!`);

export const createMessage = (peoples: Array<PeopleType>) => {
	return peoples.map(item => `Hello ${item.name}! Welcome!`);
}

export const getGovBuildingsList = (govBuildings: Array<govType>) => {
	return govBuildings.map(item => item.type);
}
