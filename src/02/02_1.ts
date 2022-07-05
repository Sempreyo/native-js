type StreetType = {
	title: string
}

type AddressType = {
	number: number
	street: StreetType
}

type HouseType = {
	id?: number,
	repaired: boolean
	address: AddressType
}

export type govType = {
	type: 'SCHOOL' | 'SHOP',
	budget: number
}

export type GlobalCityType = {
	title: string
	houses: Array<HouseType>,
	govBuildings: Array<govType>
	citizens: number
}