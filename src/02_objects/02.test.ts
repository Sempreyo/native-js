import {GlobalCityType} from "./02_1";

let city: GlobalCityType;

beforeEach(() => {
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

// 1. Создаём тип GlobalCityType
// 2. Заполняем объект city, чтобы тесты ниже прошли
test('city should contains 3 houses', () => {
	expect(city.houses.length).toBe(3);
	expect(city.houses[0].repaired).toBe(false);
	expect(city.houses[0].address.number).toBe(100);
	expect(city.houses[0].address.street.title).toBe('Brown');
})