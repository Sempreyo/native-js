type UsersType = {
	[key: string]: {id: number, name: string}
}

let users: UsersType

beforeEach(() => {
	users = {
		'101': {id: 101, name: 'Fedor'},
		'102': {id: 102, name: 'Andrew'},
		'103': {id: 103, name: 'Kile'},
		'104': {id: 104, name: 'Ann'}
	}
})

test('users was update?', () => {
	users[103].name = 'Leo';

	expect(users[103].name).toBe('Leo');
	expect(users[103]).toEqual({id: 103, name: 'Leo'});
})

test('users was delete?', () => {
	delete users[101]

	expect(users[101]).toBeUndefined();
})