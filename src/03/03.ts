import {govType} from "../02/02_1";

export const sum = (a: number, b: number) => {
	return a + b;
}

export const addSkill = (student: StudentType, skill: string) => {
	student.technologies.push(
		{
			id: new Date().getTime(),
			title: skill
		}
	)
}

export const makePersonAsStudent = (person: StudentType) => {
	person.isStudent = true;
}

export const checkLocation = (person: StudentType, location: string) => {
	return person.address.city.country === location;
}

export const addMoneyToBudget = (city: govType, money: number) => {
	city.budget += money;
}