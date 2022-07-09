import {addMoneyToBudget, addSkill, checkLocation, makePersonAsStudent} from "./03";
import {GlobalCityType} from "../02_objects/02_1";

let studentItem: StudentType;
let city: GlobalCityType;

beforeEach(() => {
	studentItem = {
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

	city = {
		title: 'Madrid',
		houses: [
			{
				repaired: false,
				address: {
					number: 100,
					street: {
						title: 'Brown'
					}
				}
			},
			{
				repaired: false,
				address: {
					number: 100,
					street: {
						title: 'Brown'
					}
				}
			},
			{
				repaired: false,
				address: {
					number: 100,
					street: {
						title: 'Brown'
					}
				}
			}
		],
		govBuildings: [
			{
				type: 'SCHOOL',
				budget: 400000
			},
			{
				type: 'SHOP',
				budget: 1000000
			}
		],
		citizens: 900000
	}
})

test('New tech skill should be added to student', () => {
	expect(studentItem.technologies.length).toBe(3);

	addSkill(studentItem, 'PHP');

	expect(studentItem.technologies.length).toBe(4);
	expect(studentItem.technologies[3].title).toBe('PHP');
	expect(studentItem.technologies[3].id).toBeDefined(); // Существует
})

test('Student should be active', () => {
	expect(studentItem.isStudent).toBe(false);

	makePersonAsStudent(studentItem);

	expect(studentItem.isStudent).toBe(true);
})

test('Student live in city?', () => {
	let res1 = checkLocation(studentItem, 'Spain');
	let res2 = checkLocation(studentItem, 'Kazakhstan');

	expect(res1).toBe(false);
	expect(res2).toBe(true);
})

test('Budget should be changed for SCHOOL', () => {
	addMoneyToBudget(city.govBuildings[0], 400000);

	expect(city.govBuildings[0].budget).toBe(800000);
})