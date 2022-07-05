import {createMessage, getGovBuildingsList, PeopleType} from './05';
import {GlobalCityType} from '../02/02_1';

let city: GlobalCityType;
let peoples2: Array<PeopleType> = []

beforeEach(() => {
	peoples2 = [
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

	city = {
		title: 'Madrid',
		houses: [
			{
				id: 1,
				repaired: false,
				address: {
					number: 100,
					street: {
						title: 'Brown'
					}
				}
			},
			{
				id: 2,
				repaired: false,
				address: {
					number: 100,
					street: {
						title: 'Red'
					}
				}
			},
			{
				id: 3,
				repaired: false,
				address: {
					number: 100,
					street: {
						title: 'Red'
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

test('Get greetings messages', () => {
	const messages = createMessage(peoples2);

	expect(messages.length).toBe(4);
	expect(messages[0]).toBe('Hello John! Welcome!');
})

test('List of government buildings', () => {
	let streets = getGovBuildingsList(city.govBuildings)

	expect(streets.length).toBe(2);
	expect(streets[0]).toBe('SCHOOL');
	expect(streets[1]).toBe('SHOP');
})