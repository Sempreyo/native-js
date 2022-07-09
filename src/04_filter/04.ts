import {GlobalCityType} from '../02_objects/02_1';

const ages = [18, 20, 90, 12, 54, 98];

const predicate = (age: number) => {
	return age > 90;
}

const oldAges = [98]; // > 90



type CourseType = {
	title: string
	price: number
}

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

// < 600
const cheapPredicate = (course: CourseType) => {
	return course.price < 600
};

const cheapCourses = [
	{
		title: 'css',
		price: 100
	},
	{
		title: 'js',
		price: 500
	}
];

export function destroyHouseOnTheStreet(city: GlobalCityType, street: string) {
	city.houses = city.houses.filter(item => item.address.street.title !== street);
}