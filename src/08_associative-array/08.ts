type UsersType = {
	[key: string]: {id: number, name: string}
}

export const usersArray = [
	{id: 101, name: 'Fedor'},
	{id: 102, name: 'Andrew'},
	{id: 103, name: 'Kile'},
	{id: 104, name: 'Ann'}
]

export const users: UsersType = {
	'101': {id: 101, name: 'Fedor'},
	'102': {id: 102, name: 'Andrew'},
	'103': {id: 103, name: 'Kile'},
	'104': {id: 104, name: 'Ann'}
}

var user = {id: 100500, name: 'Leo'}
users[user.id] = user
console.log(users)

delete users[user.id]
console.log(users)

users[user.id].name = 'Leonid'
console.log(users)