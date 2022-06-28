type StreetType = {
	title: string
}

type AddressType = {
	number: number
	street: StreetType
}

type HouseType = {
	repaired: boolean
	address: AddressType
}

export type GlobalCityType = {
	title: string
	houses: Array<HouseType>
	citizens: number
}