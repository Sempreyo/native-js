import {GlobalCityType} from "../02_objects/02_1";
import {destroyHouseOnTheStreet} from './04';

let city: GlobalCityType;

beforeEach(() => {
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

test('Persons older then 90', () => {
	const ages = [18, 20, 90, 12, 54, 98];

	const oldAges = ages.filter(item => item > 90);

	expect(oldAges.length).toBe(1);
	expect(oldAges[0]).toBe(98);
})

test('Take cheap courses', () => {
	const courses = [
		{
			title: 'css',
			price: 100
		},
		{
			title: 'js',
			price: 500
		},
		{
			title: 'react',
			price: 1000
		}
	]

	const cheapCourses = courses.filter(item => item.price < 600);

	expect(cheapCourses.length).toBe(2);
	expect(cheapCourses[0].price).toBe(100);
})

test('Houses should be destroyed', () => {
	destroyHouseOnTheStreet(city, 'Red');

	expect(city.houses.length).toBe(1);
	expect(city.houses[0].id).toBe(1);
})