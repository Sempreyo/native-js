import {PersonType} from './Destructuring';

let props: PersonType;

beforeEach(() => {
	props = {
		name: 'John',
		age: 23,
		lessons: [
			{
				title: 'functions'
			},
			{
				title: 'callback'
			}
		]
	}
})

test('', () => {
	/* This */
	/*const age = props.age;
	const lessons = props.lessons;*/

	/* Equal to this */
	const {age, lessons} = props;

	expect(age).toBe(23);
	expect(lessons.length).toBe(2);
})

test('', () => {
	/* This */
	/*const l1 = props.lessons[0];
	const l2 = props.lessons[1];*/

	/* Equal to this */
	const [l1, l2] = props.lessons;

	expect(props.lessons.length).toBe(2);
	expect(l1.title).toBe('functions');
	expect(l2.title).toBe('callback');

	const [ls1, ...restLessons] = props.lessons;

	expect(ls1.title).toBe('functions');
	expect(restLessons.length).toBe(1);
})